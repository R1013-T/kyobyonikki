import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/app/_components/ui/tabs'

export default function MobileHomeView() {
  return (
    <div className="lg:hidden">
      <Tabs defaultValue="summary" className="w-full mt-2">
        <TabsList>
          <TabsTrigger value="summary">一覧</TabsTrigger>
          <TabsTrigger value="diary">日記</TabsTrigger>
          <TabsTrigger value="condition">体調</TabsTrigger>
        </TabsList>
        <TabsContent value="summary">
          <p>一覧</p>
          <p>一覧</p>
          <p>一覧</p>
          <p>一覧</p>
        </TabsContent>
        <TabsContent value="diary">
          <p>日記</p>
          <p>日記</p>
          <p>日記</p>
          <p>日記</p>
        </TabsContent>
        <TabsContent value="condition">
          <p>体調</p>
          <p>体調</p>
          <p>体調</p>
          <p>体調</p>
        </TabsContent>
      </Tabs>
    </div>
  )
}
