'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/Language';
import { useTheme } from '@/context/Theme';

const certificates = [
  { id: 1, title: 'Google Coursera UX Design', image: 'https://res.cloudinary.com/dr0ao4k6a/image/upload/v1733692332/Coursera_3YWTTBGCESO9-1_acxgvq.png', description: { en: 'Issued by Google Coursera', th: 'ออกโดย Google Coursera' } },
  { id: 2, title: 'Thailand Cyber Top Talent 2023', image: 'https://res.cloudinary.com/dr0ao4k6a/image/upload/v1733692214/Thailand_Cyber_Top_Talent_2023_bf0av7.png', description: { en: 'Issued NCSA', th: 'ออกโดย NCSA' } },
];

export default function CertificatePage() {
  const { language } = useLanguage();
  const { isDarkMode } = useTheme();

  const [selectedCertificate, setSelectedCertificate] = useState(null);

  // Close Modal Function
  const closeModal = () => {
    setSelectedCertificate(null);
    document.body.style.overflow = 'auto'; // Enable scrolling
  };

  // Open Modal Function
  const openModal = (certificate) => {
    setSelectedCertificate(certificate);
    document.body.style.overflow = 'hidden'; // Disable scrolling
  };

  return (
    <div className={`min-h-screen bg-var-background text-var-foreground transition-all duration-300`}>
      <div className="container mx-auto px-6 py-10">
        {/* Page Title */}
        <h1 className="text-4xl font-extrabold text-center mb-24 mt-12">
          {language === 'en' ? 'Certificates & Achievements' : 'เกียริติบัตรและผลงาน'}
        </h1>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="rounded-lg shadow-lg bg-var-container overflow-hidden hover:scale-105 transform transition-transform duration-300 cursor-pointer"
              onClick={() => openModal(certificate)}
            >
              {/* Certificate Image */}
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-48 object-cover"
              />

              {/* Certificate Content */}
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{certificate.title}</h2>
                <p className="text-var-muted">{certificate.description[language]}</p>
              </div>
            </div>
          ))}
        </div>


      </div>

      {/* Modal */}
      {selectedCertificate && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative bg-var-container rounded-lg p-4 max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on content click
          >
            <button
              className="absolute top-4 right-4 text-var-muted hover:text-var-foreground text-2xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedCertificate.image}
              alt={selectedCertificate.title}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold">{selectedCertificate.title}</h2>
              <p className="text-var-muted">{selectedCertificate.description[language]}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
