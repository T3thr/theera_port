'use client';

import { useLanguage } from '@/context/Language';
import { useTheme } from '@/context/Theme';
import ImageSlider from './ImageSlider';

export default function UxcoffeePage() {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen py-8 ${
        isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'
      }`}
    >
      <div className="container mx-auto px-4">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-wide mb-4">
            {language === 'en' ? 'Enhancing UX design for Coffee mug Presentation' : 'งานนำเสนอ การปรับปรุง UX ของแก้วกาแฟ'}
          </h1>
          <p className="text-lg text-gray-500">
            {language === 'en'
              ? 'Design a Temperature-Controlled Coffee Mug for Enhanced User Experience'
              : 'ออกแบบแก้วกาแฟเก็บอุณหภูมิที่มีการปรับปรุงประสบการณ์ผู้ใช้จากแก้วแบบดั้งเดิม'}
          </p>
        </header>

        <section className="rounded-lg shadow-xl overflow-hidden border border-gray-200">
          <ImageSlider />
        </section>

      </div>
    </div>
  );
}
