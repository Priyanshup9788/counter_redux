
import './App.css'
import AddEmp from './assets/Components/AddEmp'
import Counter from './assets/Components/Counter'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Header from './assets/Components/Header'
import ViewEmp from './assets/Components/ViewEmp'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Counter />}></Route>
          <Route path='/addemp/' element={<AddEmp></AddEmp>}></Route>
          <Route path='/viewemp/' element={<ViewEmp></ViewEmp>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
