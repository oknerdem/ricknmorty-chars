import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  page: React.ReactNode;
  title: string;
}

export default function Layout({ page, title }: Props) {
  return (
    <>
      <Header title={title} />
      <main className={`${inter.className} flex w-full py-5 px-4`}>{page}</main>
    </>
  );
}
