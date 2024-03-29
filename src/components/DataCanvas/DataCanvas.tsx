import { FunctionComponent } from 'react';
import styles from './DataCanvas.module.scss';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import PlaneGeometry from './PlaneGeometry';
import Graph from './Graph/Graph';

const DataCanvas: FunctionComponent = function () {
  const tempInfo = [
    {
      year: '2019',
      figure: 5,
    },
    {
      year: '2020',
      figure: 10,
    },
    {
      year: '2021',
      figure: 12,
    },
    {
      year: '2022',
      figure: 15,
    },
  ];

  const BOX_SIZE = 0.4;

  /* ground setting */
  const GROUND_WIDTH = 100;
  const GROUND_LENGHT = 100;

  /* camera setting */
  const camera = new THREE.OrthographicCamera();
  camera.zoom = 100;
  camera.position.set(-10, 10, 10);
  camera.near = 1;
  camera.far = 1000;

  return (
    <div className={styles.container}>
      <Canvas dpr={[1, 2]} orthographic shadows camera={camera}>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 10, 10]} castShadow intensity={2} shadow-camera-far={70} />
        <Graph info={tempInfo} boxSize={BOX_SIZE} />
        <PlaneGeometry width={GROUND_WIDTH} length={GROUND_LENGHT} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default DataCanvas;
