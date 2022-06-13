import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type ZoomControllerProps = {
  zoom: boolean;
  focus: THREE.Vector3;
};

const ZoomController = function ({ zoom, focus }: ZoomControllerProps) {
  const pos = new THREE.Vector3();
  const look = new THREE.Vector3();

  return useFrame((state) => {
    if (zoom) {
      state.camera.zoom = 200;
      pos.set(focus.x, focus.y, focus.z + 5);
      look.set(focus.x, focus.y, focus.z - 5);
    } else {
      state.camera.zoom = 100;
      pos.set(-10, 10, 10);
      look.set(0, 0, 0);
    }
    state.camera.position.lerp(pos, 0.3);
    state.camera.lookAt(look);
    state.camera.updateProjectionMatrix();
  });
};

export default ZoomController;
