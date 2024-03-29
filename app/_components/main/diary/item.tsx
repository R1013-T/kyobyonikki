'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function DiaryItem({
  id,
  date,
  emoji,
  title,
  condition,
  mental,
}: {
  id: string
  date: string
  emoji: string
  title: string
  condition: number
  mental: number
}) {
  const searchParams = useSearchParams()
  const paramsId = searchParams.get('id')

  return (
    <div>
      <p className="text-xs  ml-1 font-normal">{date}</p>
      <Link
        href={`/main/private/diary?id=${id}`}
        className={`border-2 bg-white-1 p-1 px-2 rounded-md flex flex-nowrap justify-between items-center transition-all ${
          id === paramsId
            ? 'border-brand-1/70 bg-brand-1/20'
            : 'hover:bg-white-3'
        }`}
      >
        <div className="flex items-center mx-2 pt-2 pb-1">
          <p className="text-4xl">{emoji}</p>
        </div>
        <div className="overflow-x-auto py-1 lg:max-w-[290px] xl:max-w-sm 2xl:max-w-lg">
          <p className=" line-clamp-1">{title}</p>
        </div>
        <div className="w-6 h-12 flex flex-col justify-between gap-1 mb-1 -mr-1">
          <Image
            src={`/images/faces/${condition}.svg`}
            width={25}
            height={25}
            alt="😀"
          />
          <Image
            src={`/images/faces/${mental}.svg`}
            width={25}
            height={25}
            alt="😀"
          />
        </div>
      </Link>
    </div>
  )
}
