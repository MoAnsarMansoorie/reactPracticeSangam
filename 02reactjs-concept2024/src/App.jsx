
import './App.css'
import ClassBasedComponent from './components/class-based-component'
import FunctionalComponent from './components/functional-component'
import ProductList from './components/products'

const dummyProductData = ["product 1", "product 2", "product 3"]

function App() {

  return (
    <div>
      <h1>Reactjs concepts</h1>
      {/* <ClassBasedComponent />
      <FunctionalComponent /> */}
      <ProductList name="Ansar" city="farrukhabad" listOfProducts={dummyProductData}/>
    </div>
  )
}

export default App
