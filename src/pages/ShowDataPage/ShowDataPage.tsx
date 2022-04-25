import DataCanvas from '@components/DataCanvas';
import { FunctionComponent } from 'react';
import { RInfo } from '@/types';

const ShowDataPage: FunctionComponent = function () {
  const data: RInfo = {
    freshBlood: true,
    hotStreak: true,
    inactive: true,
    leagueId: 'defalut',
    leaguePoints: 0,
    losses: 0,
    queueType: 'defalut',
    rank: 'defalut',
    summonerId: 'defalut',
    summonerName: 'defalut',
    tier: 'defalut',
    veteran: true,
    wins: 0,
  };
  return (
    <>
      <DataCanvas data={data} />
    </>
  );
};

export default ShowDataPage;
