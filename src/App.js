import SignIn from "./components/signIn/signIn";
import "bootstrap/dist/css/bootstrap.min.css"
import { Home } from "./components/home";
import { useEffect, useState } from "react";
import {gapi} from "gapi-script"
import {Routes,route, Route} from "react-router-dom"
import { useDispatch ,useSelector} from "react-redux";
import { getUsers } from "./actions/index";
import Card from "./components/cards/index";
import Details from "./components/cardDetails/details";

function App() {
  const [Id,setId]=useState()
  const clientId="58927125457-1e2s4kidkjgstbf4o2ok053b71m4ptr0.apps.googleusercontent.com"
  const dispatch=useDispatch()
  
  return (
    <>
   <Routes>
   <Route path="/detail/:id" element={<Details id={Id}/>}/>
     <Route path="/home" element={<Home setId={setId}/>}/>
     <Route exact path="/" element={<SignIn/>}/>
    
     {/* <Route path="/students" element={<Card prop="ujjawal"/>}/> */}
   </Routes>
  </>
  )
}

export default App;
