import '../assets/scss/Button.scss'
interface ButtonType  {
  className? : string,
  onClick ?:  () => void,
  name: string;
  variant?: 'PRIMARY' | 'SECONDARY';
}
function Button({className='', onClick, name='', variant='PRIMARY'} : ButtonType){

  return (
    <>
    <button className={`${className} ${variant}`} onClick={onClick}>{name}</button>
    </>
  )
}

export default Button