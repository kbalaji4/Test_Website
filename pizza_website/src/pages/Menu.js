import React from 'react'
import '../styles/Menu.css'
import {MenuList} from '../helpers/MenuList' // Import variable from MenuList
import MenuItem from '../components/MenuItem'

function Menu() {
  return (
    <div className="menu">
        <h1 className="menuTitle">Arthur's Menu</h1>
        <div className="menuList">
            {MenuList.map((menuItem, key) => {
                key={key}
                return <MenuItem image={menuItem.image} name={menuItem.name} price={menuItem.price}/>
            })}
        </div>
    </div>
  )
}

export default Menu
