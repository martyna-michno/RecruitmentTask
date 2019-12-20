import React from 'react';
import styles from "./Appbar.module.css";
import { Icon } from 'semantic-ui-react';

const Appbar = () => {
  return (
    <>
    <header className={styles.appbar}>
      <p>
        XyZ 
      <Icon name='photo' size="small"/>
      </p>
    </header>
    </>);
}

export default Appbar;