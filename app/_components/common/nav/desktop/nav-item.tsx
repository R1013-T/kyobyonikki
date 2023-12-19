'use client'

import { CloudIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    href: '/main/private',
    name: 'ホーム',
    Icon: HomeIcon,
  },
  {
    href: '/main/public/diary',
    name: 'みんなの日記',
    Icon: UserGroupIcon,
  },
  {
    href: '/main/public/worry',
    name: '悩み箱',
    Icon: CloudIcon,
  },
]

const NavItem = ({
  href,
  name,
  Icon,
}: {
  href: string
  name: string
  Icon: any
}) => {
  const pathname = usePathname()

  let isCurrent
  if (href === '/main/private' && pathname.split('/')[2] === 'private') {
    isCurrent = true
  } else {
    isCurrent = href.split('/')[3] === pathname.split('/')[3]
  }

  return (
    <Link
      href={href}
      className={`flex gap-1.5 items-center py-1.5 pl-2 pr-4 rounded-md whitespace-nowrap ${
        isCurrent && 'bg-brand-1 text-white-1'
      }`}
    >
      <Icon className="w-7 h-7" />
      <p className="mt-0.5">{name}</p>
    </Link>
  )
}

export default function NavItems() {
  return (
    <>
      {links.map(({ href, name, Icon }) => (
        <NavItem key={href} href={href} name={name} Icon={Icon} />
      ))}
    </>
  )
}
