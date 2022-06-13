import { FunctionComponent, useRef, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

type BarProps = {
  data: [string, number, number];
  boxSize: number;
};

const Bar: FunctionComponent<BarProps> = function ({ data, boxSize }) {
  const [clicked, setClicked] = useState(false);
  const meshRef = useRef(null);
  const textRef = useRef(null);

  const year = data[0];
  const posX = data[2][0];
  const figure = data[1];

  const color = new THREE.Color();
  const fontProps = {
    font: '/fonts/noto-sans-kr-900.woff',
    fontSize: 0.1,
    'material-toneMapped': false,
  };

  // useFrame의 변수 state를 이용하여 ref값의 변화를 주니까
  // 컴포넌트의 불필요한 re-rendering이 일어나지 않았다.
  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.5;

    if (time < figure) {
      const height = time;
      meshRef.current.position.set(posX, height / 2, 0);
      textRef.current.position.set(posX, height, -boxSize * 2 + 0.01);
      meshRef.current.scale.set(boxSize, height, boxSize);
    }
    meshRef.current.material.color.lerp(color.set(clicked ? '#15e8ef' : '#353535'), 0.3);
  });

  return (
    <>
      <mesh ref={meshRef} castShadow receiveShadow onClick={() => setClicked(!clicked)}>
        <boxGeometry />
        <meshStandardMaterial roughness={0.2} color="#353535" />
      </mesh>
      <mesh ref={textRef}>
        <Text {...fontProps} position={[0, 0, 1]}>
          {year}
        </Text>
      </mesh>
    </>
  );
};

export default Bar;
