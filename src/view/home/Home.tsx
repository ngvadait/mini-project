import React, {useEffect, useState} from 'react';
import {getLayout} from '@View/layout/MasterLayout';
import styles from '@View/home/assets/home.module.scss';
import {styleCombine} from "@Common/helper";

const Home = () => {
  const [idList, setIdList] = useState([]);

  const init = async () => {
    const miniDatas = localStorage.getItem('mini-data');
    if (!miniDatas) return;
    let idList = JSON.parse(miniDatas);
    setIdList(idList);
  }

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styleCombine('container')}>
        {!idList.length ? (
          <p className={styles.empty_data}>Empty Data</p>
        ) : (
          <>
            {idList.map((item: any, key: number) => (
              <div key={key} className={styles.block_yt}>
                <iframe width="420" height="315"
                        src={`https://www.youtube.com/embed/${item.id}`} />
                <div className={styleCombine(styles.detail)}>
                  <p className={styles.title_yt}>Movie Title</p>
                  <p className={styles.shared_by}>Shared by: <b>{item.email}</b></p>
                  <p className={styles.description}>Description:</p>
                  <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

Home.getLayout = getLayout;
export default Home;
