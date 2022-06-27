import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.scss';

// 한글 번역
// 당신의 전적을 세상에 특별하게 공유해 보세요.
// LoL 3DV는 소환사님의 정보를 3D로 시각화하여 제공합니다. 딱딱하고 지루할 수 있는 데이터를 생동감 있게 표현해 보고 싶었고 리그오브레전드를 사랑하는 모든 게이머 여러분들이 LoL 3DV의 서비스를 편하게 사용하고 서로 공유하며 즐겨주셨으면 좋겠습니다.

const Home: FunctionComponent = function () {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>타로 카드 뽑기</h1>
      <p className={styles.p}>오늘의 운세를 점쳐보다</p>
      <button className={styles.button} onClick={() => navigate('/showcards')}>
        카드뽑기
      </button>
    </div>
  );
};

export default Home;
