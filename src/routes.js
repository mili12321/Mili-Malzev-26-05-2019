import { WeatherDetails } from './pages/WeatherDetails.jsx'
import { FavoriteCitys } from './pages/FavoriteCitys.jsx'


export const routes=[
  {
    path: '/favorite',
    component: FavoriteCitys,
  },
  {
    path: '/:id',
    component: WeatherDetails,
  }
]
