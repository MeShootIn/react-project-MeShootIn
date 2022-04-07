import React from 'react';
import cn from 'classnames';

import styles from './BoardItem.module.css';

const BoardItem: React.FC<any> = ({ type, title }) => {
	return (
		<div className={styles.item}>
			<div className={cn(styles.logo, styles[`logo_${type}`])} />
			<div className={styles.title}>{title}</div>
		</div>
	);
};

export default BoardItem;
