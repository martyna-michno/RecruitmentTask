import React from 'react';
import { Icon } from "semantic-ui-react";
import styles from "./Appbar.module.css";

const Appbar = () => {
  return (
    <header className={styles.appbar}>
      <p>
        XYZ
        <Icon name='picture' />
      </p>
    </header>);
}

export default Appbar;