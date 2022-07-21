import React, {FC} from 'react';

import Header from '@View/layout/components/Header';
import Footer from '@View/layout/components/Footer';
import styles from '@View/layout/assets/master.module.scss';

const MasterLayout: FC | any = ({children}: any) => {
  return (
    <>
      <div className="w-100">
        <Header />
        <div className={styles.master_content}>{children}</div>
        <Footer />
      </div>
    </>
  );
};

export const getLayout = (page: any) => <MasterLayout>{page}</MasterLayout>;

export default MasterLayout;
