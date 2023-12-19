import Link from 'next/link'

import { Avatar, AvatarImage } from '../ui/avatar'

export default function UserInfo() {
  return (
    <Link
      href="/main/private/settings?tab=user"
      className="border p-2 mb-1.5 rounded-md cursor-pointer"
    >
      <div className="flex justify-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
      <p className="text-center text-sm">Yamada Tarouaaaaa</p>
    </Link>
  )
}
