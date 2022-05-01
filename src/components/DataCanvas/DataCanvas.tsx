import { FunctionComponent } from 'react';
import styles from './DataCanvas.module.scss';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Words from './Words';
import useRandomAttri from '@/hooks/useRandomAttri';

type DataCanvasProps = {
  info: Array<string | undefined>;
};

const POSITION_RANGE = 8; // 데이터 Particle의 랜덤 위치 범위
const ROTATION_SPEED_RANGE = 0.01; // 각각의 Particle의 다른 회전 속도 범위

const DataCanvas: FunctionComponent<DataCanvasProps> = function ({ info }) {
  const particles = [];
  for (let i = 0; i < info.length; i++) {
    const PARTICLE_ATTRIBUE = useRandomAttri(POSITION_RANGE, ROTATION_SPEED_RANGE);
    particles.push({ ...PARTICLE_ATTRIBUE, word: info[i] });
  }

  return (
    <div className={styles.container}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Words particles={particles} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default DataCanvas;
