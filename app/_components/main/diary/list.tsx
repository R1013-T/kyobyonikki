import { ChevronRightIcon, PencilIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { Button } from '../../ui/button'
import Title from '../section-title'
import DiaryItem from './item'

export default function DiaryList() {
  return (
    <section className="w-full h-full pt-2 lg:pb-32 relative">
      <Title name="日記" />
      <div className="border h-full mt-1 p-2 flex flex-col gap-3 rounded-md bg-white-2 overflow-y-auto">
        <DiaryItem
          id="1"
          date="2021/08/01"
          emoji="😀"
          title="今日は楽しかった"
          condition={4}
          mental={3}
        />
        <DiaryItem
          id="2"
          date="2021/08/02"
          emoji="🎉"
          title="誕生日会をした"
          condition={4}
          mental={5}
        />
        <DiaryItem
          id="3"
          date="2021/08/03"
          emoji="🏃"
          title="ランニングで疲れた"
          condition={3}
          mental={4}
        />
      </div>
      <Link
        href="/main/private/diary/new"
        className="absolute right-3 bottom-28 py-2.5 px-4 font-normal rounded-full bg-brand-1 text-white-1 flex gap-1.5 items-center justify-center hover:bg-brand-1/80"
      >
        <PencilIcon className="w-5 h-5" />
        <p>日記を書く</p>
      </Link>
      <div className="text-center mt-1">
        <Button variant="link">
          <Link
            href="/main/private/diary"
            className="flex justify-center items-center"
          >
            すべての日記を見る <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
