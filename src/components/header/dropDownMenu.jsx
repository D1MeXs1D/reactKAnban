import React from 'react'

import svgImage from '../../image/Vector.svg';
import style from '../../style/header/dropDownMenu.module.css'

export default function DropDownMenu() {
  return (
    <div className= {style.menu}>
      <img src= {svgImage} alt="" />
    </div>
  )
}
