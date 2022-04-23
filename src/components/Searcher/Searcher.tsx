import { FunctionComponent, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styles from './Searcher.module.scss';
import { AiOutlineSearch } from 'react-icons/ai';
import React from 'react';
import classNames from 'classnames';

type SearcherProps = {};

const Searcher: FunctionComponent<SearcherProps> = function () {
  const [input, setInput] = useState('');

  const navigate = useNavigate();
  const { pathname } = useLocation();
  const inShowDataPage = pathname.startsWith('/showdata');

  const cx = classNames.bind(styles);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/showdata/${input}`);
    setInput('');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={cx(
          styles.searcher,
          inShowDataPage && styles['searcher--inShowDataPage']
        )}
      >
        <input
          type='text'
          value={input}
          onChange={handleChange}
          placeholder="Search for Summoner's Nickname"
          className={styles.input}
        />
        <button type='submit' onClick={() => handleSubmit} className={styles.button}>
          <AiOutlineSearch size='24' color='white' />
        </button>
      </form>
      <Outlet />
    </>
  );
};

Searcher.defaultProps = {};

export default React.memo(Searcher);
