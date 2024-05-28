

const Product = () => {
  const products=[
    { name: 'Perk', quantity: 10, sales: 7 },
    { name: '5Star', quantity: 7, sales: 9 },
    { name: 'Pepsi', quantity: 10, sales: 20 },
    { name: 'Maggi', quantity: 41, sales: 22 },
    { name: 'Coke', quantity: 18, sales: 50 },
  ]
  return (
    <>
    
    <h1>Product Names</h1>
    <ul>
    {products.map((product) => (
      <li><h2> {product.name} </h2> </li>
  ))}
    </ul> 
    </>
  )
};

export default Product