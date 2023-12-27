import { ChevronRightIcon, PencilIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { Button } from '@/app/_components/ui/button'

import Title from '../section-title'

export default function ListCard({
  children,
  title,
  name,
  linkHidden,
  buttonHidden,
}: {
  children: React.ReactNode
  title: string
  name: string
  linkHidden?: boolean
  buttonHidden?: boolean
}) {
  return (
    <section
      className={`w-full h-full pt-2 relative pb-32 ${
        linkHidden ? 'lg:pb-24' : 'lg:pb-32'
      }`}
    >
      <Title name={title} />
      <div className="border h-full mt-1 p-2 pb-16 lg:pb-2 flex flex-col gap-3 rounded-md bg-white-2 overflow-y-auto">
        {children}
      </div>
      {!buttonHidden && (
        <Link
          href={`/main/private/${name}/new`}
          className="absolute right-3 bottom-28 py-2.5 px-4 font-normal rounded-full bg-brand-1 text-white-1 flex gap-1.5 items-center justify-center hover:bg-brand-1/80"
        >
          <PencilIcon className="w-5 h-5" />
          <p>{title}を書く</p>
        </Link>
      )}
      {!linkHidden && (
        <div className="text-center mt-1">
          <Button variant="link">
            <Link
              href={`/main/private/${name}`}
              className="flex justify-center items-center"
            >
              すべての{title}を見る <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      )}
    </section>
  )
}
