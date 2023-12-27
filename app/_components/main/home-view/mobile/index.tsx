import { PencilIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/_components/ui/tabs'

import ConditionAllList from '../../condition/all-list'
import DiaryAllList from '../../diary/all-list'
import DiaryDetail from '../../diary/detail'
import ListCard from '../list-card'

export default function MobileHomeView() {
  return (
    <div className="lg:hidden">
      <Tabs defaultValue="summary" className="w-full mt-2">
        <TabsList>
          <TabsTrigger value="summary">一覧</TabsTrigger>
          <TabsTrigger value="diary">日記</TabsTrigger>
          <TabsTrigger value="condition">体調</TabsTrigger>
        </TabsList>
        <TabsContent value="summary" className="h-homeMobile overflow-y-auto">
          <DiaryAllList />
          <ConditionAllList />
        </TabsContent>
        <TabsContent value="diary" className="h-homeMobile overflow-y-auto">
          <Link
            href={`/main/private/diary/new`}
            className="fixed z-40 right-3 bottom-20 lg:bottom-auto lg:top-3 py-2.5 px-4 font-normal rounded-full bg-brand-1 text-white-1 flex gap-1.5 items-center justify-center hover:bg-brand-1/80"
          >
            <PencilIcon className="w-5 h-5" />
            <p>日記を書く</p>
          </Link>
          <ListCard title="" name="diary" linkHidden={true} buttonHidden={true}>
            <DiaryAllList />
          </ListCard>
        </TabsContent>
        <TabsContent value="condition" className="h-homeMobile overflow-y-auto">
          <Link
            href={`/main/private/condition/new`}
            className="fixed z-40 right-3 bottom-20 lg:bottom-auto lg:top-3 py-2.5 px-4 font-normal rounded-full bg-brand-1 text-white-1 flex gap-1.5 items-center justify-center hover:bg-brand-1/80"
          >
            <PencilIcon className="w-5 h-5" />
            <p>記録を書く</p>
          </Link>
          <ListCard
            title=""
            name="condition"
            linkHidden={true}
            buttonHidden={true}
          >
            <ConditionAllList />
          </ListCard>
        </TabsContent>
      </Tabs>
    </div>
  )
}
