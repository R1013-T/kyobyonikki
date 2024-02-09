import TopHeader from './_components/common/header/top-header'
import StartButton from './_components/common/start-button'
import { BackgroundBeams } from './_components/ui/background-beams'

export default function Top() {
  return (
    <div className="h-full overflow-y-auto text-center bg-brand-2/60 p-4 relative">
      <TopHeader />
      <h2 className="mt-20 lg:mt-28 text-lg lg:text-3xl tracking-widest leading-relaxed">
        毎日の健康を、共に。
        <br />
        共病日記で支え合いの輪を広げよう
      </h2>
      <div className="my-20">
        <StartButton />
      </div>
      <h3 className="leading-7">
        共病日記は、持病のある方々のためのオンラインコミュニティです。
        <br />
        日々の健康状態を記録し、日記や悩みを共有することで、支援と理解のある環境を提供します。
      </h3>
      <BackgroundBeams />
    </div>
  )
}
