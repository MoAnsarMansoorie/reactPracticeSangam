import ProductItem from "./component/productItem"
import "./style.css"

function ProductList({name, city, listOfProducts}) {
  // console.log(props)
  // const {name, city} = props
  return (
    <div>
      <h3 className="title">Ecommerce Project</h3>
      {/* <ProductItem /> */}

      <h4>name is {name} and belongs to {city} and {listOfProducts}</h4>
      <ul>
        {
          listOfProducts.map((item, index) => (
            <ProductItem singleProductItem={item} key={index}/>
          ))
        }
      </ul>
    </div>
  )
}

export default ProductList