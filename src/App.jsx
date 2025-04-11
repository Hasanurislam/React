<<<<<<< HEAD
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
      <button></button>
    </div>
    </div>
    
}

export default App;
=======
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display+SC:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
</style>
import './App.css'
import Button from './Components/Button'
import Contact from './Components/Contact'
import Header from './Components/Header'
import { MdOutlineMessage } from "react-icons/md";

function App() {
  return <div>
  <Header/>
  <Contact/>
  <Button text='VIA SUPPORT CHAT' icons={<MdOutlineMessage/>}/> 
  </div>
}

export default App
>>>>>>> 3216e35 (first commit)
