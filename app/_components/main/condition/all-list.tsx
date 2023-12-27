import ConditionItem from './item'

const chartData = [
  {
    date: '08/01',
    condition: 4,
  },
  {
    date: '08/02',
    condition: 3,
  },
  {
    date: '08/03',
    condition: 5,
  },
  {
    date: '08/04',
    condition: 3,
  },
  {
    date: '08/05',
    condition: 3,
  },
  {
    date: '08/06',
    condition: 4,
  },
  {
    date: '08/07',
    condition: 4,
  },
  {
    date: '08/08',
    condition: 4,
  },
]

export default function ConditionAllList() {
  return (
    <>
      <ConditionItem id="1" name="体調" chartData={chartData} />
      <ConditionItem id="2" name="メンタル" chartData={chartData} />
    </>
  )
}
