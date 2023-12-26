export default function Greeting({ name }: { name: string }) {
  return (
    <p className="text-lg lg:text-xl">
      こんにちは、<span className="text-black-1 mr-0.5">{name}</span>さん 👋
    </p>
  )
}
