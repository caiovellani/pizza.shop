import { Helmet } from 'react-helmet-async'
import { MonthRevenueCard } from './card/month-revenue-card'
import { MonthOrdersAmountCard } from './card/month-orders-amount-card'
import { DayOrdersAmountCard } from './card/day-orders-amount-card'
import { MonthCanceledOrdersAmountCard } from './card/month-canceled-orders-amount'
import { RevenueChart } from './graphics/revenue-chart'
import { PopularProductsChart } from './graphics/popular-products-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
