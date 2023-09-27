import './globals.css';

export const metadata = {
  title: "Benjamin's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
