import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { RInfo } from '../types';

const RIOT_KEY = process.env.REACT_APP_RIOT_API_KEY;

const initialData = { tier: 'PLATINUM', rank: 'IV', summonerName: '흑순이', wins: 65, losses: 49 };

async function fetchAPI(nickname: string | undefined): Promise<RInfo> {
  // type check
  if (typeof nickname === 'string') {
    try {
      const userResponse = await fetch(
        `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${RIOT_KEY}`,
      );
      const user = await userResponse.json();
      const userId = user.id;

      const userInfoResponse = await fetch(
        `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userId}?api_key=${RIOT_KEY}`,
      );
      const userInfo = await userInfoResponse.json();

      // data filtering : summonerName, tier, rank, wins, losses
      const filtered = Object.fromEntries(
        Object.entries(userInfo[0]).filter(
          ([key]) => key === 'losses' || key === 'rank' || key === 'summonerName' || key === 'tier' || key === 'wins',
        ),
      ) as RInfo;

      console.log(filtered);

      return filtered;
    } catch (error) {
      throw Error('custom hook ERROR');
    }
  } else {
    return Promise.reject(new Error('undefined nickname'));
  }
}

export default function useRiotAPI<TData = RInfo>(
  nickname: string | undefined,
  options?: UseQueryOptions<RInfo, Error, TData>,
) {
  return useQuery(['summoner', nickname] as QueryKey, () => fetchAPI(nickname), {
    ...options,
    initialData,
  });
}
