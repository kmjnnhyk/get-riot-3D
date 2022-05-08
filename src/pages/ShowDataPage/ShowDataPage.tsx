// import useRiotAPI from '@/hooks/useRiotAPI';
import DataCanvas from '@components/DataCanvas';
import { FunctionComponent } from 'react';
// import { useParams } from 'react-router-dom';

const ShowDataPage: FunctionComponent = function () {
  /* 임시 RIOT API로 다 적용 완료했고, 일단 정식 API 키 받게되면 적용하겠습니다. */
  // const params = useParams();
  // const result = useRiotAPI(params.summoner, { refetchOnWindowFocus: false, keepPreviousData: true });
  // const filteredInfo = [
  //   result.data?.summonerName,
  //   `${result.data?.tier} ${result.data?.rank}`,
  //   `LOSSES : ${result.data?.wins}`,
  //   `WINS : ${result.data?.losses}`,
  // ];

  // if (result.isLoading) return <div>Loading...</div>;
  // else if (result.isError) return <div>Riot API ERROR!</div>;

  const tempInfo = ['NICKNAME', 'PLATINUM IV', 'WINS : 24', 'LOSSES : 24']; //

  return (
    <>
      <DataCanvas info={tempInfo} />
    </>
  );
};

export default ShowDataPage;
