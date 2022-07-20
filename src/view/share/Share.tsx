import React from 'react';
import {getLayout} from '@View/layout/MasterLayout';
import styles from '@View/share/assets/share.module.scss';
import {styleCombine} from "@Common/helper";

const Share = () => {
  return (
    <div className={styles.main}>
      <div className={styleCombine('container')}>
        <div className={styles.group_form}>
          <p className={styles.title}>Share a Youtube movie</p>
          <div className={styles.block_input}>
            <label>Youtube URL:</label>
            <input type="text" />
          </div>
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

Share.getLayout = getLayout;
export default Share;
