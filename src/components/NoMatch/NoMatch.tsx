import { FunctionComponent } from 'react';

import styles from './NoMatch.module.scss';

type NoMatchProps = {};

const NoMatch: FunctionComponent<NoMatchProps> = function ({}) {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Nothing Here Matches Your Search</p>
    </div>
  );
};

export default NoMatch;
