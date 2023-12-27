'use client'

import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { PencilIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import DiaryDetail from '@/app/_components/main/diary/detail'
import { Button } from '@/app/_components/ui/button'

export default function DiaryDetailPage({
  params,
}: {
  params: { id: string }
}) {
  return (
    <div className="h-full relative">
      {/* <p>{params.id}</p> */}
      <Button variant="link" className="p-0 -m-1">
        <Link
          href={`/main/private/diary`}
          className="flex justify-center items-center lg:hidden"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          すべての日記を見る
        </Link>
        <Link
          href={`/main/private/diary?id=${params.id}`}
          className="justify-center items-center hidden lg:flex"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          すべての日記を見る
        </Link>
      </Button>
      <DiaryDetail hiddenEdit={true} paramsId={params.id} />
      <Link
        href={`/main/private/diary/${params.id}/edit`}
        className="fixed z-40 right-3 bottom-20 lg:bottom-auto lg:top-3 py-2.5 px-4 font-normal rounded-full bg-brand-1 text-white-1 flex gap-1.5 items-center justify-center hover:bg-brand-1/80"
      >
        <PencilIcon className="w-5 h-5" />
        <p>日記を編集</p>
      </Link>
    </div>
  )
}
