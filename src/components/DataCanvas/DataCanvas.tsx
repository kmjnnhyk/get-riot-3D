import { FunctionComponent } from 'react';
import { RInfo } from '@/types';

import styles from './DataCanvas.module.scss';

type DataCanvasProps = {
  data: RInfo;
};

const DataCanvas: FunctionComponent<DataCanvasProps> = function ({ data }) {
  console.log(data);

  return <div className={styles.container}>3D DATA CANVAS BG</div>;
};

export default DataCanvas;
