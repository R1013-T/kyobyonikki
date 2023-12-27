import HamburgerMenu from '../_components/common/hamburger'
import MainHeader from '../_components/common/header/main-header'
import Nav from '../_components/common/nav'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-dvh overflow-y-auto lg:flex lg:overflow-hidden relative">
      <Nav />
      <HamburgerMenu />
      <MainHeader />
      <article className="h-full w-full mt-10 px-3 lg:mt-0 pt-3 max-w-xl mx-auto lg:max-w-none">
        {children}
      </article>
    </main>
  )
}
