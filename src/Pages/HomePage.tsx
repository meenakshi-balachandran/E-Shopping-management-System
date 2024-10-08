import sale from '../assets/fashionSale.jpg'

function HomePage() {
  return (
    <>
    <div className='flex w-full h-full items center'>
      <img className='w-1/3 h-1/3 items-center mt-12 ml-12' src={sale}></img>
      <div className='flex flex-col items-center justify-center'>
      <p className='ml-12'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, veniam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut ipsam aspernatur labore cupiditate? Exercitationem, tempore expedita! Quas, perferendis. Corrupti quia magni consectetur deleniti impedit perspiciatis minima totam culpa rem dolor necessitatibus, nostrum nisi esse cumque obcaecati recusandae laboriosam labore ipsa atque repudiandae tenetur. Veritatis cumque eligendi et quo consequuntur perferendis?</p>
      </div>
    </div>
    </>
  )
}

export default HomePage