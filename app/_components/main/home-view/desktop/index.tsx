import ConditionList from '../../condition/list'
import DiaryList from '../../diary/list'

export default function DesktopHomeView() {
  return (
    <div className="hidden lg:flex gap-3 h-full">
      <DiaryList />
      <ConditionList />
    </div>
  )
}
