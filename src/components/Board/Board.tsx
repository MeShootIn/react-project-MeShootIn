import React from 'react';

import BoardItem from '../BoardItem/BoardItem';

import styles from './Board.module.css';

const Board: React.FC<any> = ({ accounts }) => <div className={styles.board} />;

export default Board;
