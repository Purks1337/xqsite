'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, LayoutGroup } from 'motion/react'
import Image from 'next/image'
import RotatingText from '@/app/components/RotatingText'

const navigation = [
  { name: 'О нас', href: '#' },
  { name: 'Наши работы', href: '#' },
  { name: 'Услуги', href: '#' },
  { name: 'Контакты', href: '#' },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-[#181818] w-screen h-[100vh] relative overflow-hidden">
      {/* Video Background Container */}
      <div className="fixed inset-0 w-screen h-[100vh] z-0">
        <iframe 
          src="https://kinescope.io/embed/qR2muYoMmovDtEFRDfMHfc" 
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;" 
          frameBorder="0" 
          allowFullScreen 
          className="w-full h-full"
          style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto'
          }}
        />
      </div>

      {/* Black Overlay Mask */}
      <div 
        className="fixed inset-0 w-screen h-[100vh] z-10"
        style={{ backgroundColor: 'rgba(8, 5, 2, 0.5)' }}
      ></div>

      {/* Main Container - точно как в Figma */}
      <div className="relative z-20 flex flex-col justify-between items-center gap-[209px] py-[30px] h-[100vh] w-full xl:gap-[209px] lg:gap-[209px] md:gap-[209px] sm:gap-8 xs:gap-6 xl:px-0 lg:px-[72px] md:px-[24px] sm:px-[8px] xs:px-[8px]">
        {/* Frame 32 - адаптивный контейнер */}
        <div className="flex flex-col items-center justify-between gap-[230px] w-full xl:w-[1136px] lg:w-full md:w-full sm:w-full xs:w-full xl:mx-auto lg:mx-0 md:mx-0 sm:mx-0 xs:mx-0 xl:gap-[230px] lg:gap-[230px] md:gap-[230px] sm:gap-4 xs:gap-4 xl:h-auto lg:h-auto md:h-auto sm:h-full xs:h-full">
        {/* Header */}
        <header className="w-full">
          <nav aria-label="Global" className="flex items-center justify-between gap-[82px] px-3 py-3 w-full xl:px-3 lg:px-3 md:px-3 sm:px-2 xs:px-2">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <span className="sr-only">Хвалите</span>
              <Image 
                src="/assets/LogoXQ.svg" 
                alt="Хвалите" 
                width={132}
                height={38}
                className="w-[132px] h-[38px]"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-[#C3C3C3]"
            >
              <span className="sr-only">Открыть меню</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-[82px]">
            {navigation.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-sm font-normal text-[#C3C3C3] hover:text-white transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <a
              href="#"
              className="hover:opacity-90 text-white px-[18px] py-2 rounded-full text-sm font-normal transition-colors"
              style={{ backgroundColor: '#D5600C' }}
            >
              Оставить заявку
            </a>
          </div>
        </nav>

        {/* Mobile menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-[100]" />
          <DialogPanel className="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-[#181818] p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center">
                <span className="sr-only">Хвалите</span>
                <Image 
                  src="/assets/LogoXQ.svg" 
                  alt="Хвалите" 
                  width={132}
                  height={38}
                  className="w-[132px] h-[38px]"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-[#C3C3C3]"
              >
                <span className="sr-only">Закрыть меню</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-normal text-[#C3C3C3] hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-normal text-[#C3C3C3] hover:bg-white/5"
                  >
                    Оставить заявку
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
          </Dialog>
        </header>

        {/* Rotating Text Section - точно как в Figma */}
        <LayoutGroup>
          <motion.div 
            className="flex items-center justify-center gap-[14px] xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col"
            layout
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
          >
            <motion.span 
              className="text-[#F5F5F5] font-stolzl font-bold text-[64px] leading-[1.2] text-center xl:text-[64px] lg:text-[64px] md:text-[64px] sm:text-[48px] xs:text-[40px]"
              layout
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            >
              Снимаем
            </motion.span>
            <motion.div 
              className="px-3 py-1 rounded-lg"
              style={{
                background: 'linear-gradient(180deg, #D5600C 0%, #994000 100%)'
              }}
              layout
              transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            >
              <RotatingText
                texts={[
                  'Видео',
                  'Трансляции',
                  'Подкасты',
                  'Рекламу',
                  'REELS',
                  'Клипы',
                  'Шоу',
                  'Уроки',
                  'Курсы',
                ]}
                mainClassName="text-white font-stolzl font-bold text-[64px] leading-[1.2] xl:text-[64px] lg:text-[64px] md:text-[64px] sm:text-[48px] xs:text-[40px]"
                staggerFrom="last"
                initial={{ y: '100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: '-120%', opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5"
                transition={{ 
                  type: 'spring', 
                  damping: 30, 
                  stiffness: 400,
                  duration: 0.6
                }}
                rotationInterval={2500}
                animatePresenceMode="wait"
                animatePresenceInitial={false}
              />
            </motion.div>
          </motion.div>
        </LayoutGroup>

        {/* Bottom Info Section - точно как в Figma */}
        <div className="flex flex-col items-center justify-center gap-[34px] w-[620px] min-w-[620px] max-w-[620px] h-[165px] xl:w-[620px] xl:min-w-[620px] xl:max-w-[620px] xl:h-[165px] lg:w-[620px] lg:min-w-[470px] lg:max-w-[620px] lg:h-[165px] md:w-[470px] md:min-w-[408px] md:max-w-[470px] md:h-[185px] sm:w-[408px] sm:min-w-[304px] sm:max-w-[408px] sm:h-[185px] xs:w-[304px] xs:min-w-[304px] xs:max-w-[304px] xs:h-[306px]">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-[14px] w-full">
            <h1 className="font-stolzl font-medium text-[20px] leading-[1.2] text-center" style={{ color: '#FDEBDD' }}>
              Видео — продакшн полного цикла
            </h1>
            <p className="font-inter font-normal text-[14px] leading-[1.4] text-center max-w-none" style={{ color: '#D1AD94' }}>
              От съемки на промышленном объекте до прямой трансляции международного форума. Более 10 лет решаем видео-задачи для бизнеса, ивентов и медиа.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center gap-6 w-full xl:flex-row lg:flex-row md:flex-row sm:flex-col xs:flex-col xl:gap-6 lg:gap-6 md:gap-6 sm:gap-2 xs:gap-2">
            <a
              href="#"
              className="hover:opacity-90 text-white px-3 py-[18px] rounded text-sm font-normal transition-colors text-center flex items-center justify-center xl:px-3 lg:px-3 md:px-3 sm:w-full xs:w-full"
              style={{ 
                fontSize: '14px', 
                lineHeight: '1.21', 
                fontWeight: 400,
                backgroundColor: '#D5600C'
              }}
            >
              Рассчитать стоимость
            </a>
            <a
              href="#"
              className="hover:opacity-90 px-3 py-[18px] rounded text-sm font-normal transition-colors text-center flex items-center justify-center xl:px-3 lg:px-3 md:px-3 sm:w-full xs:w-full"
              style={{ 
                fontSize: '14px', 
                lineHeight: '1.21', 
                fontWeight: 400,
                color: '#D1AD94',
                border: '1px solid #D1AD94'
              }}
            >
              Смотреть работы
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
