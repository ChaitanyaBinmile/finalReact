import { BannerComponent } from '../../components/common/woman/BannerComponent/BannerComponent'
import { SalecardComponent } from '../../components/common/SalecardCoponent/SalecardComponent'
import { TrendingcardComponent } from '../../components/common/TrendingcardComponent/TrendingcardComponent'
import { TopcardComponent } from '../../components/common/TopcardComponent/TopcardComponent'
import { Cardrepeat } from '../../components/common/PopcardComponent/Cardrepeat'
import { PhoneBanner } from '../../components/common/PhoneBanner/PhoneBanner'

export const HomeScreen = () => {
  return (
    <div>
      <BannerComponent/>
      <SalecardComponent/>
      <TrendingcardComponent/>
      <TopcardComponent/>
      <Cardrepeat/>
      <PhoneBanner/>
      <Cardrepeat/>
    
      
    </div>
  )
}
