import { useContext } from 'react';
import AppContext from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { ProductType } from '../type/ProductType';
import CardComponent from '../components/CardComponent';

const CategoryList = () => {
  const appContext = useContext(AppContext)
  const navigate = useNavigate()
  if (!appContext) {
    throw new Error('AppContextProvider is missing. Ensure your app is wrapped with AppContextProvider.');
  }
  return (
    <div className="p-8">
      <h1 className="text-3xl text-center font-semibold mb-6">Products Based on categories</h1>
      <div>
        <Button name='Back' onClick={() => navigate("/dashboard")}></Button>
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
