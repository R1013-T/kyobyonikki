import { Bars3Icon } from '@heroicons/react/24/outline'
import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../../ui/sheet'
import InfoItems from '../info-items'

export default function HamburgerMenu() {
  return (
    <aside className="fixed right-2 top-2 lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Bars3Icon className="w-8 h-8" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col gap-2 mt-4">
                <InfoItems />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </aside>
  )
}
