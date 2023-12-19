import MainHeader from '../_components/common/header/main-header'
import Nav from '../_components/common/nav'
import MobileNav from '../_components/common/nav/mobile'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-dvh overflow-y-auto lg:flex">
      <Nav />
      <div className="p-2 pt-0 lg:pt-2 h-full w-full">
        <div className="lg:hidden">
          <MainHeader />
        </div>
        {children}
      </div>
    </main>
  )
}
