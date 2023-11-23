import { Route, Routes } from 'react-router-dom';
import Authentication from './routes/authentication/Authentication';
import Checkout from './routes/checkout/Checkout';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import Shop from './routes/shop/Shop';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
