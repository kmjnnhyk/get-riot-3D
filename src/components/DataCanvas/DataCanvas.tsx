import { FunctionComponent, useRef, useState } from 'react';
import { RInfo } from '@/types';
import styles from './DataCanvas.module.scss';

import * as THREE from 'three';
import { Canvas, useFrame } from '@react-three/fiber';
import { Instance, Instances, OrbitControls } from '@react-three/drei';
import { MathUtils } from 'three';

type DataCanvasProps = {
  data: RInfo;
};

type ParticleType = {
  pos: { x: number; y: number; z: number };
  xRot: number;
  yRot: number;
};

const NUMBER_OF_PARTICLE = 13;
const POSITION_RANGE = 8;
const ROTATION_SPEED_RANGE = 0.01;

const particles: ParticleType[] = Array.from({ length: NUMBER_OF_PARTICLE }, () => ({
  pos: {
    x: MathUtils.randInt(-POSITION_RANGE, POSITION_RANGE),
    y: MathUtils.randInt(-POSITION_RANGE, POSITION_RANGE),
    z: MathUtils.randInt(-POSITION_RANGE, POSITION_RANGE),
  },
  xRot: MathUtils.randFloat(0.005, ROTATION_SPEED_RANGE),
  yRot: MathUtils.randFloat(0.005, ROTATION_SPEED_RANGE),
}));

function Sphere({ pos, xRot, yRot }: ParticleType) {
  const ref = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (ref.current != null) {
      ref.current.position.set(pos.x, pos.y, pos.z);
      if (!hovered) {
        ref.current.rotation.x += xRot;
        ref.current.rotation.y += yRot;
      }
    }
  });

  return <Instance ref={ref} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} />;
}

function Spheres() {
  const ref = useRef(null);

  return (
    <Instances ref={ref} limit={NUMBER_OF_PARTICLE}>
      <sphereBufferGeometry args={[1, 12, 12]} />
      <meshStandardMaterial color={'hotpink'} />
      {particles.map((data, i) => (
        <Sphere key={i} {...data} />
      ))}
    </Instances>
  );
}

const DataCanvas: FunctionComponent<DataCanvasProps> = function ({ data }) {
  console.log('data in DataCanvas Compo', data);

  return (
    <div className={styles.container}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Spheres />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default DataCanvas;
