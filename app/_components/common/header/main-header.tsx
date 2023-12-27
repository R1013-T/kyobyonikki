import Image from 'next/image'
import Link from 'next/link'

export default function MainHeader() {
  return (
    <header className="fixed lg:static right-1/2 translate-x-1/2 lg:translate-x-0 top-0 h-12 flex justify-center items-center">
      <Link href="/main/private">
        <Image src="/images/logo.png" alt="logo" width={140} height={40} />
      </Link>
    </header>
  )
}
