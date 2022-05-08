// import { WordProps } from '@/types';
import { FunctionComponent } from 'react';
import Word from '../Word/Word';

type WordsProps = {
  particles: Array<THREE.Vector3 | string>[];
};

const Words: FunctionComponent<WordsProps> = function ({ particles }) {
  return (
    <>
      {particles.map(([pos, word], i) => (
        <Word key={i} pos={pos as THREE.Vector3} word={word as string} />
      ))}
    </>
  );
};

export default Words;
