import DataCanvas from '@components/DataCanvas';
import { FunctionComponent } from 'react';
import styles from './ShowDataPage.module.scss';

const ShowDataPage: FunctionComponent = function () {
  return (
    <div className={styles.container}>
      <DataCanvas />
    </div>
  );
};

export default ShowDataPage;
