/* Riot API Summoner Information Type */
export type RInfo = {
  losses: number;
  rank: string;
  summonerName: string;
  tier: string;
  wins: number;
};

/* DataCanvas Word Particle Type */
export type WordProps = {
  pos: { x: number; y: number; z: number };
  xRot: number;
  yRot: number;
  word?: string | number;
};
