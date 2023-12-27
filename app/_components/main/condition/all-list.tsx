'use client'

import { AreaChart, ProgressCircle } from '@tremor/react'

const chartdata = [
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
      <div>
        <p className="font-normal ml-0.5 mt-1">体調</p>
        <AreaChart
          className="h-56 text-brand-1 bg-white-1 border rounded-md p-2"
          data={chartdata}
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
      </div>
      <div>
        <p className="font-normal ml-0.5 mt-1">体調</p>
        <AreaChart
          className="h-56 text-brand-1 bg-white-1 border rounded-md p-2"
          data={chartdata}
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
      </div>
      <div>
        <p className="font-normal ml-0.5 mt-1">体調</p>
        <AreaChart
          className="h-56 text-brand-1 bg-white-1 border rounded-md p-2"
          data={chartdata}
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
      </div>
      <div>
        <p className="font-normal ml-0.5 mt-1">体調</p>
        <AreaChart
          className="h-56 text-brand-1 bg-white-1 border rounded-md p-2"
          data={chartdata}
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
      </div>
      <div>
        <p className="font-normal ml-0.5 mt-1">体調</p>
        <AreaChart
          className="h-56 text-brand-1 bg-white-1 border rounded-md p-2"
          data={chartdata}
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
      </div>
      <div>
        <p className="font-normal ml-0.5 mt-1">体調</p>
        <AreaChart
          className="h-56 text-brand-1 bg-white-1 border rounded-md p-2"
          data={chartdata}
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
      </div>
      <div>
        <p className="font-normal ml-0.5 mt-1">体調</p>
        <AreaChart
          className="h-56 text-brand-1 bg-white-1 border rounded-md p-2"
          data={chartdata}
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
      </div>
      <div>
        <p className="font-normal ml-0.5 mt-1">体調</p>
        <AreaChart
          className="h-56 text-brand-1 bg-white-1 border rounded-md p-2"
          data={chartdata}
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
      </div>
    </>
  )
}
