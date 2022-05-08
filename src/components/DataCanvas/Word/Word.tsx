import { FunctionComponent, useRef, useState } from 'react';

import * as THREE from 'three';
import { ThreeEvent, useFrame } from '@react-three/fiber';
import { Text, Line } from '@react-three/drei';

type WordProps = {
  pos: THREE.Vector3;
  word: string;
};

const Word: FunctionComponent<WordProps> = function ({ pos, word }) {
  const ref = useRef(null);
  const color = new THREE.Color();
  const linePos = [];
  linePos.push(pos, [0, 0, 0]);
  const [hovered, setHovered] = useState(false);

  const over = (e: ThreeEvent<PointerEvent>) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  const fontProps = {
    font: '/fonts/noto-sans-kr-900.woff',
    fontSize: 1,
    letterSpacing: 0,
    lineHeight: 1,
  };

  useFrame(({ camera }) => {
    ref.current.quaternion.copy(camera.quaternion);
    // Animate font color
    ref.current.material.color.lerp(color.set(hovered ? '#13c3c9' : 'black'), 0.1);
  });

  return (
    <>
      <Text ref={ref} {...fontProps} position={pos} onPointerOver={over} onPointerOut={out}>
        {word}
      </Text>
      <Line points={linePos} color="black" linewidth={1}></Line>
    </>
  );
};

export default Word;
