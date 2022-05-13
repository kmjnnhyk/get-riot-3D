import { Html, Instance } from '@react-three/drei';
import { useFrame, Vector3 } from '@react-three/fiber';
import { FunctionComponent, useRef } from 'react';

type BoxProps = {
  pos: Vector3;
  size: number;
  year: string;
  figure: number;
};

const GRWOING_SPEED = 0.1;

const Box: FunctionComponent<BoxProps> = function ({ year, figure, pos, size }) {
  const ref = useRef(null);
  let height = 0;

  useFrame(() => {
    if (height < figure) height += GRWOING_SPEED;
    ref.current.scale.set(size, height, size);
    ref.current.position.set(pos[0], height / 2, 0);
  });

  return (
    <Instance ref={ref}>
      <Html>{year}</Html>
    </Instance>
  );
};

export default Box;
