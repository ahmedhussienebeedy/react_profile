import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Portifolio from './components/Portifolio/portifolio'
import Contacts from './components/Contacts/Contacts'
import  myImage from "../src/assets/images/imgi_1_avataaars.svg";
import homeImage from "../src/assets/images/poert1.png"
import sweetImage from "../src/assets/images/port2.png"
import circus  from "../src/assets/images/port3.png"




export default function App() {

let routes = createBrowserRouter([
  
    {path:"" , element:<Layout />,children:[
      {index:true , element:<Home myImage={myImage} />},
      {path:"about" , element:<About/>},
      {path:"portifolio" , element:<Portifolio homeImage={homeImage} sweetImage={sweetImage} circus={circus} />},
      {path:"contacts" , element:<Contacts/>}

    ]
    }

  
])


  
  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
    </>
  )
}
