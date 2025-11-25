import { BrowserRouter, Route, Routes } from "react-router-dom"
import UserLayout from "../Layouts/UserLayout"
import Hero from "./Components/LandingPage/Home/Hero"
import AdminLayout from "../Layouts/AdminLayout"
import AddFood from "./Components/AdminPage/AddFood/FoodAdd"
import Signup from "./Components/LandingPage/UserAuth/Signup"
import {Toaster} from "react-hot-toast"
import Login from "./Components/LandingPage/UserAuth/Signin"
import ShowFood from "./Components/LandingPage/Food/ShowFood"

import AdminSupport from "./Components/AdminPage/Support/Support"
import FoodList from "./Components/AdminPage/FoodList/FoodList"
import UserSupport from "./Components/LandingPage/Support/Support"
import ShowList from "./Components/AdminPage/FoodList/ShowList"
function App() {
  return (
    <>
      <BrowserRouter>
      <Toaster position="top-center"/>
      <Routes>  
        <Route path="/" element={<UserLayout/>}>
          <Route index element={<Hero/>}/>              
          <Route path="signup" element={<Signup/>}/>    
          <Route path="login" element={<Login/>}/>   
          <Route path="show" element={<ShowFood/>}/>
          <Route path="support" element={<UserSupport/>}/>    
        </Route>
        <Route path="/admin" element={<AdminLayout/>}>
          <Route index element={<AddFood/>}/>
         
          <Route path="support" element={<AdminSupport/>}/>  
          <Route path="foodlist" element={<FoodList/>}/> 
          <Route path="edit/:id" element={<ShowList/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
