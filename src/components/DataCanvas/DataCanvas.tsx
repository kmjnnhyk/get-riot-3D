import { FunctionComponent, useMemo } from 'react';
import styles from './DataCanvas.module.scss';
import { Canvas } from '@react-three/fiber';
import { TrackballControls } from '@react-three/drei';
import Words from './Words';
import * as THREE from 'three';
import { MathUtils } from 'three';

type DataCanvasProps = {
  info: Array<string | undefined>;
};

// const particles = useMemo(() => {
//   const temp = [];
//   const spherical = new THREE.Spherical();
//   const phiSpan = Math.PI / (info.length + 1);
//   const thetaSpan = (Math.PI * 2) / info.length;
//   for (let i = 1; i < info.length + 1; i++)
//     for (let j = 0; j < info.length; j++)
//       temp.push([new THREE.Vector3().setFromSpherical(spherical.set(RADIUS, phiSpan * i, thetaSpan * j)), info[j]]);
//   return temp;
// }, [info.length, RADIUS]);

const DataCanvas: FunctionComponent<DataCanvasProps> = function ({ info }) {
  const SPHERE_DIV = Math.sqrt(16); // 가상의 구를 총 16등분
  // https://www.researchgate.net/figure/Definition-of-spherical-coordinates-for-measured-data_fig2_301657822
  // 0° ≤ θ ≤ 180°(PI), 0° ≤ φ < 360°(2PI)
  const phiSpan = Math.PI / (SPHERE_DIV + 1); // 범위가 겹치지 않게 SPHERE_DIV에 1을 더해줌
  const thetaSpan = (Math.PI * 2) / SPHERE_DIV;

  const particles = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();

    for (let i = 0; i < info.length; i++) {
      const PHI_RAND = MathUtils.randInt(1, 4) * phiSpan;
      const THETA_RAND = MathUtils.randInt(0, 3) * thetaSpan;
      const RADIUS = MathUtils.randInt(3, 7);
      if (i === 0) temp.push([[0, 0, 0], info[i]]);
      else temp.push([new THREE.Vector3().setFromSpherical(spherical.set(RADIUS, PHI_RAND, THETA_RAND)), info[i]]);
    }
    return temp;
  }, [SPHERE_DIV]);

  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight />
        <Words particles={particles} />
        <TrackballControls />
      </Canvas>
    </div>
  );
};

export default DataCanvas;
