import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/home.component'
import Nav from './routes/nav/nav.component'
import Authentication from './routes/authentication/authentication.component.jsx'
import Shop from './routes/shop/shop.component'
import CheckOut from './routes/checkout/checkout.component'

const App = () => {


  return (
  <Routes>
    <Route path="/" element={<Nav />}> 
      <Route index element={<Home />} />
      <Route path="shop/*" element={<Shop />} />
      <Route path="auth" element={<Authentication />} />
      <Route path="checkout" element={<CheckOut />} />
    </Route>
  </Routes>
  )
}

export default App;
