import MainHeader from '../../header/main-header'
import NavItem from './nav-item'

export default function DesktopNav() {
  return (
    <aside className="h-full border-r pt-1 hidden lg:block">
      <div className="pr-1.5">
        <MainHeader />
      </div>
      <nav className="mt-2 px-2 flex flex-col gap-2">
        <NavItem />
      </nav>
    </aside>
  )
}
