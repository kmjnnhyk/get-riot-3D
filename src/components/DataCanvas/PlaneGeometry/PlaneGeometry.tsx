import { FunctionComponent, useEffect, useRef } from 'react';

type PlaneGeometryProps = {
  width: number;
  length: number;
};

const PlaneGeometry: FunctionComponent<PlaneGeometryProps> = function ({ width, length }) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.rotation.x = -Math.PI / 2;
    ref.current.position.x = 20;
    ref.current.position.y = 0;
    ref.current.position.z = 0;
  }, []);

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[width, length]} />
      <shadowMaterial color="#545454" />
    </mesh>
  );
};

export default PlaneGeometry;
