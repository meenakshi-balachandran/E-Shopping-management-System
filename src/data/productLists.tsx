import shortKurti from "../assets/short-kurti.jpg";
import umbrella from "../assets/umbrella.jpg";
import jeggins from "../assets/jeggins.jfif";
import tshirt from "../assets/tshirt.jfif";
import { ProductType } from "../type/ProductType";

const productLists: ProductType[] = [
  {
    id: 1,
    name: "Short Kurti",
    price: 250,
    category: "Kurti",
    image: shortKurti,
  },
  {
    id: 2,
    name: "Umbrella tops",
    price: 400,
    category: "Anarkalis",
    image: umbrella,
  },
  { 
    id: 3, 
    name: "Jeggins", 
    price: 710, 
    category: "Jeggins", 
    image: jeggins 
  },
  { 
    id: 4, 
    name: "Leggins", 
    price: 300, 
    category: "Leggins", 
    image: jeggins 
  },
  {
    id: 5,
    name: "T-Shirt",
    price: 350,
    category: "Western Tops",
    image: tshirt,
  },
  {
    id: 6,
    name: "Ethnic wear",
    price: 1000,
    category: "Anarkalis",
    image: umbrella,
  },
  {
    id: 7,
    name: "Silk Saree",
    price: 850,
    category: "Coset",
    image: shortKurti,
  },
];

export default productLists;
