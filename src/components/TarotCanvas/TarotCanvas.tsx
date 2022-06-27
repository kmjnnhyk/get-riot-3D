import { FunctionComponent } from 'react';
import styles from './TarotCanvas.module.scss';
import { Canvas } from '@react-three/fiber';
import { TrackballControls } from '@react-three/drei';
import TarotSphere from '../TarotSphere';

const TarotCanvas: FunctionComponent = function () {
  // const BOX_SIZE = 0.4;

  // /* ground setting */
  // const GROUND_WIDTH = 100;
  // const GROUND_LENGHT = 100;

  // /* camera setting */
  // const camera = new THREE.OrthographicCamera();
  // camera.zoom = 100;
  // camera.near = 1;
  // camera.far = 1000;

  // const [zoom, setZoom] = useState<boolean>(false);
  // const [focus, setFocus] = useState<Vector3>();

  // const zoomToFocus = (focusObj) => {
  //   setZoom(!zoom);
  //   setFocus(focusObj);
  // };

  return (
    <div className={styles.container}>
      <Canvas dpr={[1, 2]} shadows>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 10, 10]} castShadow intensity={2} shadow-camera-far={70} />
        <TarotSphere count={5} radius={20} />
        {/* <ZoomController zoom={zoom} focus={focus} /> */}
        {/* <PlaneGeometry width={GROUND_WIDTH} length={GROUND_LENGHT} /> */}
        <TrackballControls />
      </Canvas>
    </div>
  );
};

export default TarotCanvas;
