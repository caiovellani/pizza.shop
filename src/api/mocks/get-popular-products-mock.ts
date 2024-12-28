import { http, HttpResponse } from 'msw'

import type { GetPopularProductsResponse } from '../get-popular-products'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetPopularProductsResponse
>('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 3 },
    { product: 'Pizza 02', amount: 4 },
  ])
})
