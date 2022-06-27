import { FunctionComponent } from 'react';
import * as THREE from 'three';

type TarotCardProps = {
  position: THREE.Vector3;
};

const TarotCard: FunctionComponent<TarotCardProps> = function ({ position }) {
  return (
    <mesh position={position}>
      <boxGeometry />
    </mesh>
  );
};

export default TarotCard;
