
import './App.scss';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

import { Home,Error,MealDetailsPage,CategoryPage } from './pages/index';

//components
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
function App() {
  
  return (
    <>
      <div className='App'>

     <BrowserRouter>
     <Header/>
     <Sidebar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/meal/:id' element={<MealDetailsPage/>}/>
      <Route path='/meal/catagory/:name' element={<CategoryPage/>}/>
      <Route path='*' element={<Error/>}/>
     </Routes>
     </BrowserRouter>
        
       </div> 
    </>
  )
}

export default App
