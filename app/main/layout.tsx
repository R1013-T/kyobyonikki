import MobileNav from '../_components/common/nav/mobile'

export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="h-full overflow-y-auto">
      {children}
      <div className="">
        <MobileNav />
      </div>
    </main>
  )
}
