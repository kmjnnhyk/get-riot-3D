import { FunctionComponent, useMemo } from 'react';
import * as THREE from 'three';
import TarotCard from './TarotCard';

type TarotSphereProps = {
  count: number;
  radius: number;
};

const TarotSphere: FunctionComponent<TarotSphereProps> = function ({
  count = 5,
  radius = 20,
}) {
  const cardsPos = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++)
      for (let j = 0; j < count; j++)
        temp.push(
          new THREE.Vector3().setFromSpherical(
            spherical.set(radius, phiSpan * i, thetaSpan * j),
          ),
        );
    return temp;
  }, [count, radius]);

  return (
    <>
      {cardsPos.map((pos, idx) => (
        <TarotCard key={idx} position={pos} />
      ))}
    </>
  );
};

export default TarotSphere;
