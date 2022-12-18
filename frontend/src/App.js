import Login from './Components/Login/Login';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Verifyuser from './Components/Login/Verifyuser';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Password from './Components/User/Password';
import SetPassword from './Components/User/setPassword';
import VerifyOtp from './Components/Login/VerifyOtp';
import Dashboard from './Components/Dashboard/Dashboard';
import AddDocument from './Components/Task/AddDocument';
import TaskDetails from './Components/Task/TaskDetails';

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter> 
    <Routes>   
       <Route exact path='/' element={<Login/>}/> 
       <Route path='/verify' element={<Verifyuser/>}/>
       <Route path='/changepass' element={<Password/>}/>
          <Route path='/setPassword' element={<SetPassword />} />
          <Route path='/otp' element={<VerifyOtp/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          

          {/* Task Module */}
          <Route path='/adddoc' element={<AddDocument/>}/>
          <Route path='/taskdetails' element={<TaskDetails/>}/>

          
        </Routes> 
       </BrowserRouter>
       <Footer/>
    </div>
  );
}

export default App;
