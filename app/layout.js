// layout.js
import localFont from "next/font/local";
import "./globals.css";
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/Theme'; 
import { LanguageProvider } from '@/context/Language';
import { cookies } from 'next/headers';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Theerapat - Portfolio",
  description: "ขนลุกคักปู่เอ้ย",
  
  // Open Graph meta tags for better social media sharing
  openGraph: {
    title: "Theerapat - Portfolio",
    description: "ขนลุกคักปู่เอ้ย",
    url: "https://www.theeraport.com/",  
    images: [
      {
        url: "https://res.cloudinary.com/dr0ao4k6a/image/upload/v1733686707/LINE_ALBUM_%E0%B9%81%E0%B8%A1%E0%B8%A7__241209_1_ws6egw.jpg", 
        width: 1200,
        height: 630,
        alt: "Preview Image",
      },
    ],
    site_name: "Theerapat - Portfolio",
  },

  // Twitter card meta tags for Twitter sharing
  twitter: {
    card: "summary_large_image",  // Use the large summary card for image previews
    title: "Theerapat - Portfolio",
    description: "ขนลุกคักปู่เอ้ย",
    image: "https://res.cloudinary.com/dr0ao4k6a/image/upload/v1733686707/LINE_ALBUM_%E0%B9%81%E0%B8%A1%E0%B8%A7__241209_1_ws6egw.jpg", 
  },
};

export default function RootLayout({ children }) {
  const themeCookie = cookies().get('theme')?.value || 'light';
  return (
    <html lang="en">
      <body className={themeCookie === 'dark' ? 'dark' : 'light' `${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider> 
          <ThemeProvider>
            <NavBar className="z-50" />
            {children}
            <Footer />
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
