import { useContext, useEffect, useState } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ProductType } from '../type/ProductType';
import CardComponent from '../components/CardComponent';
import { DASHBOARD } from '../utils/constants';

const CategoryList = () => {
  const appContext = useContext(AppContext)
  const navigate = useNavigate()
  if (!appContext) {
    throw new Error('AppContextProvider is missing');
  }
  const[selectedCategory, setSlectedCategory] = useState(
    
  );

  useEffect(() => {


  }, [selectedCategory])
  return (
    <div className="p-8 bg-green-50">
      <h1 className="text-3xl text-center font-semibold mb-6">Products Based on categories</h1>
      <div>
        <Button name='Back' onClick={() => navigate(`${DASHBOARD}`)}></Button>
      </div>
      <div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 text-center">
          {appContext.products.map((product: ProductType) => (
           <CardComponent product={product}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryList;
