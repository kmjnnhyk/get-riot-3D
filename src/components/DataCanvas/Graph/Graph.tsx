import useNormalization from '@/hooks/useNormalization';
import { FunctionComponent, useMemo } from 'react';
import Bar from './Bar';

type GraphProps = {
  info: object;
  boxSize: number;
};

const Graph: FunctionComponent<GraphProps> = function ({ info, boxSize }) {
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

  console.log(data.length);

  return (
    <mesh position={[(-boxSize * data.length) / 2, 0, boxSize]}>
      {data.map((bar, idx) => (
        <Bar key={idx} data={bar} boxSize={boxSize} />
      ))}
    </mesh>
  );
};

export default Graph;
