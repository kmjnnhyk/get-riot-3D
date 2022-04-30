import { WordProps } from '@/types';
import { FunctionComponent } from 'react';
import Word from '../Word/Word';

// import styles from './Words.module.scss'

type WordsProps = {
  particles: WordProps[];
};

const Words: FunctionComponent<WordsProps> = function ({ particles }) {
  return (
    <>
      {particles.map((data, i) => (
        <Word key={i} {...data} />
      ))}
    </>
  );
};

export default Words;
