import { api } from '../lib/axios'

export interface RegisterRestautantBody {
  restaurantName: string
  managerName: string
  phone: string
  email: string
}

export async function registerRestautant({
  email,
  restaurantName,
  phone,
  managerName,
}: RegisterRestautantBody) {
  await api.post('/authenticate', {
    email,
    managerName,
    restaurantName,
    phone,
  })
}
