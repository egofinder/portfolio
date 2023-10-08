import './globals.css';
import { Titillium_Web } from 'next/font/google';
import Navigation from './components/navigation';

const titillium_web = Titillium_Web({
  subsets: ['latin'],
  weight: ['200', '300', '400', '600', '700', '900'],
});

export const metadata = {
  title: "Benjamin's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={titillium_web.className}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
