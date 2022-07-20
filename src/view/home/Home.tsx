import React from 'react';
import {getLayout} from '@View/layout/MasterLayout';
import styles from '@View/home/assets/home.module.scss';
import {styleCombine} from "@Common/helper";

const Home = () => {
  return (
    <div className={styles.main}>
      <div className={styleCombine('container')}>
        Welcome back
      </div>
    </div>
  );
};

Home.getLayout = getLayout;
export default Home;
