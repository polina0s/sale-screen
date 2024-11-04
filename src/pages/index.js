import { Header } from '@/components/header';
import { Rubik } from 'next/font/google';

const rubik = Rubik({
  weight: '700',
  subsets: ['latin']
})



export default function Home() {
  return (
    <div>
      <Header />
      <p className={rubik.className}>aaaaaaaaaa</p>
    </div>
  );
}
