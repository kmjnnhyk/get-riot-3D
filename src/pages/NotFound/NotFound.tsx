import { FunctionComponent } from 'react';

import styles from './NotFound.module.scss';

const NotFound: FunctionComponent = function () {
  return (
    <section className={styles.container}>
      <h1>PAGE NOT FOUND :(</h1>
    </section>
  );
};

export default NotFound;
