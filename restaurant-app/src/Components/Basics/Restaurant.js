import React, { useState } from "react";
import "./Style.css";
import Data from "./data.js";
import MenuCard from "./MenuList";
import Navbar from "./Navbar";

const uniqueList = [
  ...new Set(
    Data.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

// console.log(uniqueList);

const Resturant = () => {
  const [menuData, setMenuData] = useState(Data);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Data);
      return;
    }

    const updatedList = Data.filter((curElem) => {
      return curElem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
