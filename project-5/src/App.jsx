import Items from './components/Items'
import Cart from './components/Cart'
import './App.css'

function App() {

  return (
    <>
     <div className="flex flex-row">
        <div className='flex flex-row items-container'>
          <Items name={"GTA V"} price={499}/>
          <Items name={"Clash of Clans"} price={199}/>
          <Items name={"PUBG Mobile"} price={799}/>
        </div>
     </div>
     <div className="cart-container">
          <Cart/>
        </div>

    </>
  )
}

export default App
