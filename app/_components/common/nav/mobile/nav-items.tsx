'use client'

import { CloudIcon, HomeIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  {
    href: '/main/public/diary',
    name: 'みんなの日記',
    Icon: UserGroupIcon,
  },
  {
    href: '/main/private',
    Icon: HomeIcon,
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
  name?: string
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
      className={`${
        name ? 'h-8 flex w-[54px] flex-col justify-center items-center' : ''
      } ${isCurrent && 'text-brand-1'}
          }`}
    >
      <Icon className={`${name ? 'w-6 h-7' : 'w-8 h-8'}`} />
      {name && <p className="text-[8px] font-normal">{name}</p>}
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
