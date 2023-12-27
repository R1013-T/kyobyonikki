import DiaryItem from './item'

export default function DiaryAllList() {
  return (
    <>
      <DiaryItem
        id="1"
        date="2021/08/01"
        emoji="😀"
        title="今日は楽しかった"
        condition={4}
        mental={3}
      />
      <DiaryItem
        id="2"
        date="2021/08/02"
        emoji="🎉"
        title="誕生日会をした"
        condition={4}
        mental={5}
      />
      <DiaryItem
        id="3"
        date="2021/08/03"
        emoji="🏃"
        title="ランニングで疲れた"
        condition={3}
        mental={4}
      />
    </>
  )
}
