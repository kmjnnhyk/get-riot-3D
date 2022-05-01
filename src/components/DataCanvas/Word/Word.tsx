import { FunctionComponent, useRef, useState } from 'react';
// import styles from './Word.module.scss';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';
import { WordProps } from '@/types';

const Word: FunctionComponent<WordProps> = function ({ pos, xRot, yRot, word }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<THREE.Mesh>(null);

  const fontProps = {
    font: '/fonts/noto-sans-kr-900.woff',
    fontSize: 1,
    letterSpacing: 0,
    lineHeight: 1,
  };

  useFrame(() => {
    if (ref.current != null) {
      ref.current.position.set(pos.x, pos.y, pos.z);
      if (!hovered) {
        ref.current.rotation.x += xRot;
        ref.current.rotation.y += yRot;
      }
    }
  });
  return (
    <>
      <Text ref={ref} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)} {...fontProps}>
        {word}
      </Text>
    </>
  );
};

export default Word;
