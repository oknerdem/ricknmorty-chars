import Head from 'next/head';

interface Props {
  title: string;
}

export default function Header({ title }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Tarot Card Reading App" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
