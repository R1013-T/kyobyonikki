import Image from 'next/image'
import Link from 'next/link'

export default function MainHeader() {
  return (
    <header className="fixed right-1/2 translate-x-1/2 top-0 lg:hidden h-12 flex justify-center items-center">
      <Link href="/main/private">
        <Image src="/images/logo.png" alt="logo" width={140} height={40} />
      </Link>
    </header>
  )
}
