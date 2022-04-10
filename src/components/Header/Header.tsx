import { FunctionComponent } from 'react';

import styles from './Header.module.scss';

type HeaderProps = {
	name?: string;
};

const Header: FunctionComponent<HeaderProps> = function ({ name }) {
	return (
		<header className={styles.header}>
			<h1>{name}</h1>
			<h5>진형&준영 riot 3D 프로젝트 🔥🔥🔥</h5>
		</header>
	);
};

Header.defaultProps = {
	name: 'Hello',
};

export default Header;
