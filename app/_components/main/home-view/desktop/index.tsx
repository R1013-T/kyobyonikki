import ConditionAllList from '../../condition/all-list'
import ConditionList from '../../condition/list'
import DiaryAllList from '../../diary/all-list'
import ListCard from './list-card'

export default function DesktopHomeView() {
  return (
    <div className="hidden lg:flex gap-3 h-full">
      <ListCard title="日記" name="diary">
        <DiaryAllList />
      </ListCard>
      <ListCard title="記録" name="condition">
        <ConditionAllList />
      </ListCard>
    </div>
  )
}
