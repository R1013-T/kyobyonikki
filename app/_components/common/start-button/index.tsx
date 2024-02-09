'use client'

import { useRouter } from 'next/navigation'

import { Button } from '../../ui/button'

export default function StartButton() {
  const router = useRouter()

  return (
    <Button
      className="bg-brand-1 text-lg font-bold hover:bg-brand-1 hover:opacity-80"
      onClick={() => {
        router.push('/main/private')
      }}
    >
      はじめる
    </Button>
  )
}
