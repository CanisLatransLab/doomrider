import { Roboto } from 'next/font/google';
import './globals.scss';
import Sidebar from '@/components/navbar/Sidebar';

const roboto = Roboto({ weight: ['100', '400', '700'], subsets: ['latin'] });

export const metadata = {
  title: 'DoomriderMedia',
  description: 'Doomrider&apos;s personal website',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={roboto.className}>
        <div className='flex'>
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
