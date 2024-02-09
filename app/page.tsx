import TopHeader from './_components/common/header/top-header'
import StartButton from './_components/common/start-button'
import { BackgroundBeams } from './_components/ui/background-beams'

export default function Top() {
  return (
    <div className="h-full overflow-y-auto text-center bg-brand-2/60 p-4 relative antialiased  pt-32">
      <TopHeader />
      <div className="relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-background to-brand-1 text-center font-bold">
          Happy Healthy Life
        </h1>
        <h2 className="mt-10 lg:mt-16 text-lg lg:text-3xl tracking-widest leading-loose">
          毎日の健康を、共に。
          <br />
          共病日記で支え合いの輪を広げよう
        </h2>
        <div className="my-20">
          <StartButton />
        </div>
      </div>
      <BackgroundBeams />
    </div>
  )
}
