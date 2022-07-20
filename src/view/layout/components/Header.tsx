import {FC} from "react";
import styles from '@View/layout/assets/header.module.scss';
import {styleCombine} from "@Common/helper";
import Link from 'next/link';

const Header: FC = () => {
  return (
    <div className={styles.main}>
      <div className={styleCombine('container')}>
        <div className="row">
          <div className={styleCombine('col-6', styles.header_left)}>
            <Link href="/">
              <a>
                <svg className={styles.house_icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M511.8 287.6L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L416 100.7V64C416 46.33 430.3 32 448 32H480C497.7 32 512 46.33 512 64V185L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6L511.8 287.6z"/>
                </svg>
                <h1 className={styleCombine(styles.title_header)}>Funny Movies</h1>
              </a>
            </Link>
          </div>
          <div className={styleCombine('col-6', styles.header_right)}>
            <div className={styles.logged_in}>
              <span>Welcome fasdf</span>
              <Link href="/share">
                <a>
                  <button>Share a movie</button>
                </a>
              </Link>
              <button>Logout</button>
            </div>
            {/*<div className={styles.not_logged_in}>*/}
            {/*  <input type="text" placeholder="email" />*/}
            {/*  <input type="password" placeholder="password" />*/}
            {/*  <button>Login / Register</button>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
