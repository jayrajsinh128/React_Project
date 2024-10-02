import React from 'react'
import { BrowserRouter, Route, Routes, } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import Productpages from '../Pages/Productpages'
import Allproduct from '../Pages/Allproduct'
import Singleeditproduct from '../Pages/Singleeditproduct'


function Mainroutes() {
  return (
    <div>
        {/* <BrowserRouter> */}
        <Routes>
            <Route path='/Login' element={<Login/>}> </Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/product' element={<Productpages/>}></Route>
            <Route path='/allproduct' element={<Allproduct/>}></Route>
            <Route path='/product/edit/:id' element={<Singleeditproduct/>} ></Route>


        </Routes>
        {/* </BrowserRouter> */}
    </div>
  )
}

export default Mainroutes