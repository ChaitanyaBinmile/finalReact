import './App.css'
import { CategoriesNavigation } from './components/CategoriesNavigation/CategoriesNavigation'
import { NavigationComponent } from './components/HeaderNavigation/NavigationComponent'
import { LoginNavigation } from './components/LoginNavigation/LoginNavigation'
import { FooterComponent } from './components/common/footer/FooterComponent'
import { RouteProvider } from './router/RouteProvider'

function App() {

  return (
    <div className='w-[100%]'>
      <NavigationComponent/>
      <LoginNavigation/>
      <CategoriesNavigation/>
      <RouteProvider/>
      <FooterComponent/>
    </div>
  )
}

export default App
