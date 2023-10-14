import './globals.css';
import { Roboto } from 'next/font/google';
import Navigation from './components/navigation';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
});

export const metadata = {
  title: "Benjamin's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
