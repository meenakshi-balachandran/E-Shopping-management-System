import '../assets/scss/Button.scss'
interface ButtonType  {
  className? : string,
  onClick ?:  () => void,
  name: string;
  varient?: 'PRIMARY' | 'SECONDARY';
}
function Button({className='', onClick, name='', varient='PRIMARY'} : ButtonType){

  return (
    <>
    <button className={`${className} ${varient}`} onClick={onClick}>{name}</button>
    </>
  )
}

export default Button