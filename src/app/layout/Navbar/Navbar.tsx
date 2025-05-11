import React from 'react'
import styles from '@/app/layout/Navbar/navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <div className={`fixed ${styles.brandName} top-39 ${styles.textWhite}`}>
        <span className="font-serif font-bold text-3xl">Simply Chocolate</span>
      </div>

      <div className={`fixed ${styles.brandName} top-39 ${styles.textBlack}`}>
        <span className="font-serif font-bold text-3xl">Simply Chocolate</span>
      </div>

      <div className={`right-5 top-0 fixed font-accent text-2xl underline underline-offset-3 text-right ${styles.links} ${styles.textWhite}`}>
        <ul>
          <li>
            <a href="">SHOP</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">STORES</a>
          </li>
          <li>
            <a href="">CATALOGUE</a>
          </li>
        </ul>
      </div>

      <div className={`right-5 top-0 fixed font-accent text-2xl underline underline-offset-3 text-right ${styles.links} ${styles.textBlack}`}>
        <ul>
          <li>
            <a href="">SHOP</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">STORES</a>
          </li>
          <li>
            <a href="">CATALOGUE</a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar