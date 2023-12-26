import { ChevronRightIcon, PlusIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { Button } from '../../ui/button'
import Title from '../section-title'
import ConditionItem from './item'

export default function ConditionList() {
  return (
    <section className="w-full h-full pt-2 lg:pb-32 relative">
      <Title name="記録" />
      <div className="border h-full mt-1 p-2 flex flex-col gap-1 rounded-md bg-white-2 overflow-y-auto">
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />
        <ConditionItem />˝
      </div>
      <Link
        href="/main/private/condition/new"
        className="absolute right-3 bottom-28 py-2.5 px-4 pr-5 font-normal rounded-full bg-brand-1 text-white-1 flex gap-0.5 items-center justify-center hover:bg-brand-1/80"
      >
        <PlusIcon className="w-6 h-6 pb-0.5" />
        <p>記録を書く</p>
      </Link>
      <div className="text-center mt-1">
        <Button variant="link">
          <Link
            href="/main/private/condition"
            className="flex justify-center items-center"
          >
            すべての記録を見る <ChevronRightIcon className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}
