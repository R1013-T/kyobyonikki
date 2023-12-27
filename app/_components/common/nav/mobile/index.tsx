import NavItems from './nav-items'

export default function MobileNav() {
  return (
    <nav className="fixed z-50 bottom-4 right-1/2 translate-x-1/2 bg-white-2 py-2.5 px-3 border rounded-full flex gap-2 lg:hidden">
      <NavItems />
    </nav>
  )
}
