import Link from 'next/link'

import { Avatar, AvatarImage } from '../ui/avatar'

export default function UserInfo() {
  return (
    <Link
      href="/main/private/settings?tab=user"
      className="p-2 mb-1.5 rounded-md cursor-pointer"
    >
      <div className="flex justify-center">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
        </Avatar>
      </div>
      <p className="text-center mt-1.5 text-sm">山田 太郎</p>
    </Link>
  )
}
