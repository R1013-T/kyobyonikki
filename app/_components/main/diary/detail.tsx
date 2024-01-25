'use client'

import { ArrowsPointingOutIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

import { Button } from '../../ui/button'
import ListCard from '../home-view/list-card'

export default function DiaryDetail({
  hiddenEdit,
  paramsId,
}: {
  hiddenEdit?: boolean
  paramsId?: string
}) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const id = searchParams.get('id')

  useEffect(() => {
    if (id && window.innerWidth < 1024 && pathname === '/main/private/diary') {
      router.push(`/main/private/diary/${id}`)
    }
  }, [id])

  if (!id && !paramsId) {
    return
  }

  return (
    <div className="w-full h-full relative">
      <ListCard
        title="2021/08/01"
        name="diary"
        linkHidden={true}
        buttonHidden={true}
      >
        {!hiddenEdit && (
          <div className="absolute right-5 top-14 flex gap-1">
            <Button variant="outline">
              <Link href={`/main/private/diary/${id}/edit`}>日記を編集</Link>
            </Button>
            <Button variant="outline" className="p-2">
              <Link href={`/main/private/diary/${id}`}>
                <ArrowsPointingOutIcon className="w-5 h-5" />
              </Link>
            </Button>
          </div>
        )}
        <div className="absolute top-11 left-6 flex gap-3 justify-center mt-4 text-xs">
          <div className="flex flex-col items-center">
            <p>体調</p>
            <Image src="/images/faces/4.svg" width={30} height={30} alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p>メンタル</p>
            <Image src="/images/faces/3.svg" width={30} height={30} alt="" />
          </div>
        </div>
        <div className="bg-white-1 rounded-md border-2 py-3 px-4 text-center">
          <p className="text-8xl mt-5">😀</p>
          <p className="mt-4 text-xl">今日は楽しかった</p>
          <p className="mt-4 text-left leading-7">
            日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内容日記の内
          </p>
          <p>{id}</p>
        </div>
      </ListCard>
    </div>
  )
}
