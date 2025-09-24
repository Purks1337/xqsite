

[![Logo](https://reactbits.dev/assets/react-bits-logo-BEVRCkxh.svg)](https://reactbits.dev/)

[![React Bits logo](https://reactbits.dev/assets/react-bits-logo-BEVRCkxh.svg)](https://reactbits.dev/)

Rotating Text
-------------

Install

`npm install motion`

usage
-----

    1import RotatingText from './RotatingText'
    2  
    3<RotatingText
    4  texts={['React', 'Bits', 'Is', 'Cool!']}
    5  mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
    6  staggerFrom={"last"}
    7  initial={{ y: "100%" }}
    8  animate={{ y: 0 }}
    9  exit={{ y: "-120%" }}
    10  staggerDuration={0.025}
    11  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
    12  transition={{ type: "spring", damping: 30, stiffness: 400 }}
    13  rotationInterval={2000}
    14/>

code
----

    1'use client';
    2
    3import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useState } from 'react';
    4import { motion, AnimatePresence } from 'motion/react';
    5
    6function cn(...classes) {
    7  return classes.filter(Boolean).join(' ');
    8}
    9
    10const RotatingText = forwardRef((props, ref) => {
    11  const {
    12    texts,
    13    transition = { type: 'spring', damping: 25, stiffness: 300 },
    14    initial = { y: '100%', opacity: 0 },
    15    animate = { y: 0, opacity: 1 },
    16    exit = { y: '-120%', opacity: 0 },
    17    animatePresenceMode = 'wait',
    18    animatePresenceInitial = false,
    19    rotationInterval = 2000,
    20    staggerDuration = 0,
    21    staggerFrom = 'first',
    22    loop = true,
    23    auto = true,
    24    splitBy = 'characters',
    25    onNext,
    26    mainClassName,
    27    splitLevelClassName,
    28    elementLevelClassName,
    29    ...rest
    30  } = props;
    31
    32  const [currentTextIndex, setCurrentTextIndex] = useState(0);
    33
    34  const splitIntoCharacters = text => {
    35    if (typeof Intl !== 'undefined' && Intl.Segmenter) {
    36      const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' });
    37      return Array.from(segmenter.segment(text), segment => segment.segment);
    38    }
    39    return Array.from(text);
    40  };
    41
    42  const elements = useMemo(() => {
    43    const currentText = texts[currentTextIndex];
    44    if (splitBy === 'characters') {
    45      const words = currentText.split(' ');
    46      return words.map((word, i) => ({
    47        characters: splitIntoCharacters(word),
    48        needsSpace: i !== words.length - 1
    49      }));
    50    }
    51    if (splitBy === 'words') {
    52      return currentText.split(' ').map((word, i, arr) => ({
    53        characters: [word],
    54        needsSpace: i !== arr.length - 1
    55      }));
    56    }
    57    if (splitBy === 'lines') {
    58      return currentText.split('\n').map((line, i, arr) => ({
    59        characters: [line],
    60        needsSpace: i !== arr.length - 1
    61      }));
    62    }
    63
    64    return currentText.split(splitBy).map((part, i, arr) => ({
    65      characters: [part],
    66      needsSpace: i !== arr.length - 1
    67    }));
    68  }, [texts, currentTextIndex, splitBy]);
    69
    70  const getStaggerDelay = useCallback(
    71    (index, totalChars) => {
    72      const total = totalChars;
    73      if (staggerFrom === 'first') return index * staggerDuration;
    74      if (staggerFrom === 'last') return (total - 1 - index) * staggerDuration;
    75      if (staggerFrom === 'center') {
    76        const center = Math.floor(total / 2);
    77        return Math.abs(center - index) * staggerDuration;
    78      }
    79      if (staggerFrom === 'random') {
    80        const randomIndex = Math.floor(Math.random() * total);
    81        return Math.abs(randomIndex - index) * staggerDuration;
    82      }
    83      return Math.abs(staggerFrom - index) * staggerDuration;
    84    },
    85    [staggerFrom, staggerDuration]
    86  );
    87
    88  const handleIndexChange = useCallback(
    89    newIndex => {
    90      setCurrentTextIndex(newIndex);
    91      if (onNext) onNext(newIndex);
    92    },
    93    [onNext]
    94  );
    95
    96  const next = useCallback(() => {
    97    const nextIndex = currentTextIndex === texts.length - 1 ? (loop ? 0 : currentTextIndex) : currentTextIndex + 1;
    98    if (nextIndex !== currentTextIndex) {
    99      handleIndexChange(nextIndex);
    100    }
    101  }, [currentTextIndex, texts.length, loop, handleIndexChange]);
    102
    103  const previous = useCallback(() => {
    104    const prevIndex = currentTextIndex === 0 ? (loop ? texts.length - 1 : currentTextIndex) : currentTextIndex - 1;
    105    if (prevIndex !== currentTextIndex) {
    106      handleIndexChange(prevIndex);
    107    }
    108  }, [currentTextIndex, texts.length, loop, handleIndexChange]);
    109
    110  const jumpTo = useCallback(
    111    index => {
    112      const validIndex = Math.max(0, Math.min(index, texts.length - 1));
    113      if (validIndex !== currentTextIndex) {
    114        handleIndexChange(validIndex);
    115      }
    116    },
    117    [texts.length, currentTextIndex, handleIndexChange]
    118  );
    119
    120  const reset = useCallback(() => {
    121    if (currentTextIndex !== 0) {
    122      handleIndexChange(0);
    123    }
    124  }, [currentTextIndex, handleIndexChange]);
    125
    126  useImperativeHandle(
    127    ref,
    128    () => ({
    129      next,
    130      previous,
    131      jumpTo,
    132      reset
    133    }),
    134    [next, previous, jumpTo, reset]
    135  );
    136
    137  useEffect(() => {
    138    if (!auto) return;
    139    const intervalId = setInterval(next, rotationInterval);
    140    return () => clearInterval(intervalId);
    141  }, [next, rotationInterval, auto]);
    142
    143  return (
    144    <motion.span
    145      className={cn('flex flex-wrap whitespace-pre-wrap relative', mainClassName)}
    146      {...rest}
    147      layout
    148      transition={transition}
    149    >
    150      <span className="sr-only">{texts[currentTextIndex]}</span>
    151      <AnimatePresence mode={animatePresenceMode} initial={animatePresenceInitial}>
    152        <motion.span
    153          key={currentTextIndex}
    154          className={cn(splitBy === 'lines' ? 'flex flex-col w-full' : 'flex flex-wrap whitespace-pre-wrap relative')}
    155          layout
    156          aria-hidden="true"
    157        >
    158          {elements.map((wordObj, wordIndex, array) => {
    159            const previousCharsCount = array.slice(0, wordIndex).reduce((sum, word) => sum + word.characters.length, 0);
    160            return (
    161              <span key={wordIndex} className={cn('inline-flex', splitLevelClassName)}>
    162                {wordObj.characters.map((char, charIndex) => (
    163                  <motion.span
    164                    key={charIndex}
    165                    initial={initial}
    166                    animate={animate}
    167                    exit={exit}
    168                    transition={{
    169                      ...transition,
    170                      delay: getStaggerDelay(
    171                        previousCharsCount + charIndex,
    172                        array.reduce((sum, word) => sum + word.characters.length, 0)
    173                      )
    174                    }}
    175                    className={cn('inline-block', elementLevelClassName)}
    176                  >
    177                    {char}
    178                  </motion.span>
    179                ))}
    180                {wordObj.needsSpace && <span className="whitespace-pre"> </span>}
    181              </span>
    182            );
    183          })}
    184        </motion.span>
    185      </AnimatePresence>
    186    </motion.span>
    187  );
    188});
    189
    190RotatingText.displayName = 'RotatingText';
    191export default RotatingText;
    192