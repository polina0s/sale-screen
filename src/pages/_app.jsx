import "@/styles/globals.css";
import localFont from 'next/font/local'
import { Rubik, Bebas_Neue } from 'next/font/google';

export const rubik = Rubik({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-rubik',

})

export const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebasNeue',
})

const ptRootUi = localFont({
  src: [
    {
      path: '../fonts/PT-Root-UI/pt-root-ui_regular.ttf',
      weight: '400',
    },
    {
      path: '../fonts/PT-Root-UI/pt-root-ui_medium.ttf',
      weight: '500',
    },
    {
      path: '../fonts/PT-Root-UI/pt-root-ui_bold.ttf',
      weight: '700',
    }
  ],
  variable: '--font-ptRootUi',
})

export default function App({ Component, pageProps }) {
  return (
    <>
        <main className={`${rubik.variable} ${bebasNeue.variable} ${ptRootUi.variable}`} >
        <Component {...pageProps} />
        </main>
    </>
      );
}
