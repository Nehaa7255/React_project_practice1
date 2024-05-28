const Product = () => {
    const products = [
        { name: 'Pepsi', quantity: 10, sales: 20 },
        { name: 'Coke', quantity: 18, sales: 50 },
        { name: '5Star', quantity: 7, sales: 9 },
       ]
  return (
    <div>
    <ul>
    {products.map((product) => (
<li> <h3>
Name: {product.name},
Quantity: {product.quantity},
Sales: {product.sales}</h3></li>
  ))}
    </ul>
    </div>
  )
}
export default Product