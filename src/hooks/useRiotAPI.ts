import { QueryKey, useQuery, UseQueryOptions } from 'react-query';
import { RInfo } from '../types';

const RIOT_KEY = process.env.REACT_APP_RIOT_API_KEY;

async function fetchAPI(nickname: string | undefined): Promise<RInfo> {
  // type check
  if (typeof nickname === 'string') {
    const userResponse = await fetch(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?api_key=${RIOT_KEY}`
    );
    const user = await userResponse.json();
    const userId = user.id;

    const userInfoResponse = await fetch(
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${userId}?api_key=${RIOT_KEY}`
    );
    const userInfo = await userInfoResponse.json();
    return userInfo;
  } else {
    return Promise.reject(new Error('Riot API Error!'));
  }
}

export default function useRiotAPI<TData = RInfo>(
  nickname: string | undefined,
  options?: UseQueryOptions<RInfo, Error, TData>
) {
  return useQuery(['summoner', nickname] as QueryKey, () => fetchAPI(nickname), options);
}
