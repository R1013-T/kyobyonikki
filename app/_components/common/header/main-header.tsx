import Image from 'next/image'
import Link from 'next/link'

export default function MainHeader() {
  return (
    <header className="w-full h-12 flex justify-center items-center">
      <Link href="/main/private">
        <Image src="/images/logo.png" alt="logo" width={140} height={40} />
      </Link>
    </header>
  )
}
