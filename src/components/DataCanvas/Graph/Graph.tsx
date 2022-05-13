import { FunctionComponent, useMemo, useRef } from 'react';
// import Box from '../Box';
import { Instances } from '@react-three/drei';
import Box from '../Box';

type GraphProps = {
  info: object;
};

const Graph: FunctionComponent<GraphProps> = function ({ info }) {
  const ref = useRef(null);
  const BOX_SIZE = 2;

  const boxes = useMemo(() => {
    const temp = [];
    for (const i in info) {
      temp.push([info[i].year, info[i].figure, [BOX_SIZE * parseInt(i), 0, 0]]);
    }
    return temp;
  }, [info, BOX_SIZE]);

  return (
    <Instances ref={ref} position={[0, 0, 0]}>
      <boxGeometry />
      <meshStandardMaterial roughness={0} color="#353535" />
      {boxes.map(([year, figure, pos], index) => (
        <Box key={index} year={year} figure={figure} pos={pos} size={BOX_SIZE} />
      ))}
    </Instances>
  );
};

export default Graph;
