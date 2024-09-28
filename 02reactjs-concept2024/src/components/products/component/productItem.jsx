import "./productItem.module.css"

function ButtonComponent() {
  return (
    <div>
      <button>Click here</button>
    </div>
  )
}


function ProductItem({singleProductItem, key}) {
  return (
    <div key={key}>
      <h1>{singleProductItem}</h1>
      <ButtonComponent />
    </div>
  )
}

export default ProductItem