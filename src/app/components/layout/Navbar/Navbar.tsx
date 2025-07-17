import React from 'react'
import styles from '@/app/components/layout/Navbar/navbar.module.css';

const Navbar = () => {
  return (
    <div className="">
      <div className={`fixed ${styles.brandName} top-13 ${styles.textWhite}`}>
        <span className="font-semibold text-3xl">schlurp</span>
      </div>

      <div className={`fixed ${styles.brandName} top-13 ${styles.textBlack}`}>
        <span className="font-semibold text-3xl">schlurp</span>
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