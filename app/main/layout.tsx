import HamburgerMenu from '../_components/common/hamburger'
import MainHeader from '../_components/common/header/main-header'
import Nav from '../_components/common/nav'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-dvh overflow-y-auto lg:flex">
      <Nav />
      <HamburgerMenu />
      <div className="px-3 h-full w-full">
        <div className="lg:hidden">
          <MainHeader />
        </div>
        <article className="h-full w-full pt-3 max-w-xl mx-auto lg:max-w-none">
          {children}
        </article>
      </div>
    </main>
  )
}
