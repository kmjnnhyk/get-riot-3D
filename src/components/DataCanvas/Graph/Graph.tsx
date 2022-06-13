import useNormalization from '@/hooks/useNormalization';
import { FunctionComponent, useMemo } from 'react';
import Bar from './Bar';

type GraphProps = {
  info: object;
  boxSize: number;
  zoomToFocus: (focusObj: THREE.Vector3) => void;
};

const Graph: FunctionComponent<GraphProps> = function ({ info, boxSize, zoomToFocus }) {
  const figureNormalized = useNormalization(info, 'figure');
  // 나중에는 data가 많아질것을 대비하여
  // 연산을 줄이기 위하여 useMemo를 사용
  const data = useMemo(() => {
    const temp = [];
    for (const i in info) {
      temp.push([info[i].year, figureNormalized[i] / 5, [boxSize * parseInt(i), 0, 0]]);
    }
    return temp;
  }, [info, figureNormalized, boxSize]);

  return (
    <>
      {data.map((bar, idx) => (
        <group
          key={idx}
          onClick={(e) => {
            e.stopPropagation();
            zoomToFocus(e.object.position);
          }}
        >
          <Bar data={bar} boxSize={boxSize} />
        </group>
      ))}
    </>
  );
};

export default Graph;
