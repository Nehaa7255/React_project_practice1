

const Item = (props) => {
  return (
    <>
    <div>Item</div>
    <h3>{props.header}</h3>
  <ul>
  {
    props.items.map((itme) => (<li>{itme}</li>))
  }
  </ul>
   
   
    
    
    </>
  )
}

export default Item