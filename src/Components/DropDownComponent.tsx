
import { Link } from 'react-router-dom'


interface categoryType {
  listOfCategory : string[]
}
function DropDownComponent({listOfCategory} : categoryType) {
  return (
    <>
    <ul className='absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-lg'>
                  {listOfCategory.map((category, index) => (
                    <li key={index} className='px-4 py-2 hover:bg-gray-100'>
                      <Link to={`/categories/${category.toLowerCase()}`}>{category}</Link>
                    </li>
                  ))}
                </ul>
    </>
  )
}

export default DropDownComponent