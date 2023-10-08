import React from 'react';
import Link from 'next/link';
import Style from './index.module.scss';
import Image from 'next/image';
import logo from '@/app/assets/logo.svg';

const Navbar = () => {
  return (
    <>
      <section className={Style['navbar-section']}>
        <div className={Style['container']}>
          <div className={Style['logo']}>
            <Image src={logo} alt="LOGO" />
          </div>
          <div className={Style['items-wrapper']}>
            <ul className={Style['item']}>
              <li>
                <Link href="#">
                  <p>ABOUT</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>WORK</p>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <p>CONTACT</p>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
