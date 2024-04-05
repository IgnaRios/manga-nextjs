import Header from '@/Components/Header';
import './globals.css';

export const metadata = {
  title: 'Next App Mongo',
  description: 'Web de Mangas',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
