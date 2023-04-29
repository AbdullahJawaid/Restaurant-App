import React, { useState } from 'react'
import Data from './data.js'
import  './Style.css'
import MenuList from '../MenuList';

function Restaurant() {

  const [menuData,setMenuData]=useState(Data);



  return (
    <>
     <MenuList
     menuData={menuData}
     />
    </>
  )
}

export default Restaurant
