import React, {useEffect, useState} from 'react';
import {getLayout} from '@View/layout/MasterLayout';
import styles from '@View/share/assets/share.module.scss';
import {styleCombine} from "@Common/helper";
import {useRouter} from 'next/router';

const Share = () => {
  const router = useRouter();
  const [link, setLink] = useState<string>('');
  const [userData, setUserData] = useState<any>(null);

  const init = async () => {
    const auth: any = localStorage.getItem('auth');

    if (!auth) return;

    setUserData(JSON.parse(auth));
  };

  const handleChange = async (event: any) => {
    setLink(event.target.value);
  };

  const handleSubmit = async () => {
    if (!link.length) {
      alert('Please enter your youtube link');
      return;
    }
    const urlId = new URL(link).searchParams.get('v');
    if (!urlId) return;

    const miniData = localStorage.getItem('mini-data');
    let data: any;
    if (miniData) {
      let newData = {id: urlId, email: userData.email};
      data = [newData, ...JSON.parse(miniData)];
    } else {
      data = [{id: urlId, email: userData.email}];
    }
    localStorage.setItem('mini-data', JSON.stringify(data));
    setLink('');
    let proceed = confirm("Submit successfully, back to home page");

    if (proceed) {
      router.push('/');
    }
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styleCombine('container')}>
        <div className={styles.group_form}>
          <p className={styles.title}>Share a Youtube movie</p>
          <div className={styles.block_input}>
            <label>Youtube URL:</label>
            <input type="text" value={link} onChange={handleChange} />
          </div>
          <button id="share" onClick={handleSubmit}>Share</button>
        </div>
      </div>
    </div>
  );
};

Share.getLayout = getLayout;
export default Share;
