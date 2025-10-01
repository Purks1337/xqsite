import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

// Define Stolzl font as a CSS variable
const stolzlFont = {
  variable: "--font-stolzl",
  style: {
    fontFamily: "'Stolzl', sans-serif",
  },
};

export const metadata: Metadata = {
  title: "Хвалите - Видео продакшн полного цикла",
  description: "От съемки на промышленном объекте до прямой трансляции международного форума. Более 10 лет решаем видео-задачи для бизнеса, ивентов и медиа.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Stolzl:wght@400;500;700&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body
        className={`${inter.variable} antialiased`}
        style={stolzlFont.style}
      >
        {children}
      </body>
    </html>
  );
}
