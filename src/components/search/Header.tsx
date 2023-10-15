import React from 'react'
import Image from 'next/image'
import Logo from '../../../public/gpt-logo.png'
import {GiSettingsKnobs} from 'react-icons/gi'
import style from '../../styles/search/header.module.css'

const Header = () => {
  return (
    <div className={style.header__container}>
        <div className={style.header__logo}>
            <GiSettingsKnobs size={50} />
            <span className={style.logo__title}>Instructions</span>
        </div>
        <p className={style.header__title}>Discover amazing instructions made by the community!</p>
    </div>
  )
}

export default Header
