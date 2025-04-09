import './App.css'
import Header from './Header';
import Content from './Content';
import Product from './Product';


const App=()=>{
    return <div className='container'>
      <Header/>
      <div className='container-1'>
      <Content/>
      <Product/>
    </div>
    </div>
}

export default App;