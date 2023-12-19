import Image from 'next/image'

import { Button } from '../../ui/button'

export default function TopHeader() {
  return (
    <header className="p-2 flex justify-center">
      <Image src="/images/logo.png" width={200} height={56} alt="共病日記" />
      <Button>aaaaaa</Button>
    </header>
  )
}
