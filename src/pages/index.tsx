import { Noto_Sans_JP } from 'next/font/google'

const inter = Noto_Sans_JP({ subsets: ['latin'] , display:"swap"})

export default function Home() {
  return (
   <p className={`${inter.className}`}>Test</p>
  )
}
