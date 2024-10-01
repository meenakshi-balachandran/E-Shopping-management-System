
interface ButtonType  {
  className : string,
  onClick ?:  () => void,
  name: string
}
function Button({className="", onClick, name=""} : ButtonType){

  return (
    <>
    <button className={className} onClick={onClick}>{name}</button>
    </>
  )
}

export default Button