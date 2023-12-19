import Image from 'next/image'

export default function MainHeader() {
  return (
    <header className="w-full h-12 flex justify-center items-center">
      <Image src="/images/logo.png" alt="logo" width={140} height={40} />
    </header>
  )
}
