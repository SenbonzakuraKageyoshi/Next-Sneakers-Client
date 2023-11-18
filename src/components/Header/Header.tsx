'use client'

import { useState } from 'react';
import Logo from '../Logo/Logo';
import HeaderNavItem from '../HeaderNavItem/HeaderNavItem';
import styles from './header.module.scss';
import Cart from '@/assets/icons/header-navigation/cart.svg'
import { headerNav } from '@/data/headerNav';
import NavMenuButton from '../NavMenuButton/NavMenuButton';

const Header = () => {

  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);

  return (
    <header className={styles.header}>
        <div className="container">
            <div className={styles.headerContent}>
                <Logo/>
                <NavMenuButton mobileMenuIsActive={mobileMenuIsActive} setMobileMenuIsActive={setMobileMenuIsActive}/>
                <nav className={mobileMenuIsActive ? styles.headerNavActive : styles.headerNav}>
                  <HeaderNavItem icon={Cart} linkName="Корзина" href="/cart">
                    <strong>1250 ₽</strong>
                  </HeaderNavItem>
                  {headerNav.map((el) => (
                    <HeaderNavItem key={el.id} icon={el.icon} linkName={el.linkName} href={el.href}>
                      {el.content}
                    </HeaderNavItem>
                  ))}
                </nav>
            </div>
        </div>
    </header>
  )
}

export default Header