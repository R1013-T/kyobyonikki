import { PencilIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import DiaryAllList from '@/app/_components/main/diary/all-list'
import DiaryDetail from '@/app/_components/main/diary/detail'
import ListCard from '@/app/_components/main/home-view/list-card'

export default function DiaryPage() {
  return (
    <div className="h-dvh overflow-y-hidden">
      <p className="text-lg lg:text-xl text-black-1 hidden lg:block">日記</p>
      <Link
        href={`/main/private/diary/new`}
        className="fixed z-40 right-3 bottom-20 lg:bottom-auto lg:top-3 py-2.5 px-4 font-normal rounded-full bg-brand-1 text-white-1 flex gap-1.5 items-center justify-center hover:bg-brand-1/80"
      >
        <PencilIcon className="w-5 h-5" />
        <p>日記を書く</p>
      </Link>
      <div className="w-full lg:flex gap-3 h-full pb-10 lg:pb-0">
        <ListCard
          title="日記一覧"
          name="diary"
          linkHidden={true}
          buttonHidden={true}
        >
          <DiaryAllList />
        </ListCard>
        <div className="hidden lg:block w-full h-full">
          <DiaryDetail />
        </div>
      </div>
    </div>
  )
}
