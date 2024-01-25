'use client'

import { AreaChart } from '@tremor/react'
import Link from 'next/link'

import type { ConditionChartData } from '@/app/_lib/definitions'

export default function ConditionItem({
  id,
  name,
  chartData,
}: {
  id: string
  name: string
  chartData: ConditionChartData[]
}) {
  return (
    <div>
      <p className="font-normal ml-0.5 mt-1">{name}</p>
      <Link
        href={`/main/private/condition?id=${id}`}
        className="cursor-pointer"
      >
        <AreaChart
          className="h-56 text-[#69E0B3] bg-white-1 border rounded-md p-2 transition-all hover:bg-white-3 cursor-pointer"
          data={chartData}
          index="date"
          categories={['condition']}
          colors={['#69E0B3']}
          showAnimation={true}
          showLegend={false}
          showTooltip={false}
          showGridLines={false}
          showYAxis={false}
          minValue={1}
          maxValue={5}
          curveType="natural"
        />
      </Link>
    </div>
  )
}
