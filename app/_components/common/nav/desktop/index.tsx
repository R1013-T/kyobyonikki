import MainHeader from '../../header/main-header'
import InfoItems from '../../info-items'
import NavItem from './nav-item'

export default function DesktopNav() {
  return (
    <aside className="h-full border-r pt-1 hidden lg:flex flex-col justify-between">
      <div>
        <div className="pr-1.5">
          <MainHeader />
        </div>
        <nav className="mt-2 px-2 flex flex-col gap-2">
          <NavItem />
        </nav>
      </div>
      <div className="p-2 mt-2 px-2 flex flex-col gap-2 mb-3">
        <InfoItems />
      </div>
    </aside>
  )
}
