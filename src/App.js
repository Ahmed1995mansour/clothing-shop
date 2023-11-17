import { Route, Routes } from 'react-router-dom';
import Home from './routes/home/Home';
import Navigation from './routes/navigation/Navigation';
import SignIn from './routes/sign-in/SignIn';

const Shop = () => {
  return (
    <div>
      <h1>Shop Page</h1>
    </div>
  );
};
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
