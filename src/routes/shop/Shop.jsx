import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setCategories } from '../../store/categories/categories.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoriesArrray = await getCategoriesAndDocuments();
      dispatch(setCategories(categoriesArrray));
    };
    getCategoriesMap();
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path='/:category' element={<Category />} />
    </Routes>
  );
};

export default Shop;
