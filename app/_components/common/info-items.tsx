'use client'

import {
  ArrowLeftEndOnRectangleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import UserInfo from './user-info'

export default function InfoItems() {
  const pathname = usePathname()

  return (
    <>
      <UserInfo />
      <Link
        href="/main/private/settings"
        className={`flex gap-1.5 items-center py-1.5 pl-2 pr-4 rounded-md whitespace-nowrap ${
          pathname === '/main/private/settings'
            ? 'bg-brand-1 text-white-1'
            : 'hover:bg-brand-1/40'
        }`}
      >
        <Cog6ToothIcon className="w-7 h-7" />
        <p className="mt-0.5">設定</p>
      </Link>
      <button
        onClick={() => {
          alert('ログアウト')
        }}
        className="flex gap-1.5 w-full items-center py-1.5 pl-2 pr-4 rounded-md whitespace-nowrap hover:bg-brand-1/40"
      >
        <ArrowLeftEndOnRectangleIcon className="w-7 h-7" />
        <p className="mt-0.5">ログアウト</p>
      </button>
    </>
  )
}
