import { FunctionComponent } from 'react';
import styles from './DataCanvas.module.scss';
// import useRiotAPI from '@/hooks/useRiotAPI';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Graph from './Graph';

const DataCanvas: FunctionComponent = function () {
  // /* 임시 RIOT API로 다 적용 완료했고, 일단 정식 API 키 받게되면 적용하겠습니다. */
  // const params = useParams();
  // const result = useRiotAPI(params.summoner, { refetchOnWindowFocus: false, keepPreviousData: true });
  // const filteredInfo = [
  //   result.data?.summonerName,
  //   `${result.data?.tier} ${result.data?.rank}`,
  //   `LOSSES : ${result.data?.wins}`,
  //   `WINS : ${result.data?.losses}`,
  // ];
  // console.log(filteredInfo);

  // if (result.isLoading) return <div>Loading...</div>;
  // else if (result.isError) return <div>Riot API ERROR!</div>;
  const tempInfo = [
    {
      year: '2019',
      figure: 5,
    },
    {
      year: '2020',
      figure: 10,
    },
    {
      year: '2021',
      figure: 12,
    },
    {
      year: '2022',
      figure: 15,
    },
  ];

  return (
    <div className={styles.container}>
      <Canvas orthographic camera={{ zoom: 10, position: [10, 10, 10] }}>
        <ambientLight />
        <Graph info={tempInfo} />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default DataCanvas;
