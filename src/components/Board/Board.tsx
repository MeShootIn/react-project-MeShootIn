import React from 'react';
import BoardItem, {Account} from '../BoardItem/BoardItem';
import styles from './Board.module.css';

interface BoardProps {
  accounts: Account[]
}

// TODO Тут должна быть сортировка
const Board = ({accounts}: BoardProps) => (
  <div className={styles.board}>
    {
      accounts.map(account => (
        <BoardItem key={account.id} title={account.title} customTitle={account.customTitle}
                   currency={account.currency} type={account.type} amount={account.amount} id={account.id}/>
      ))
    }
  </div>
);

// const Board: React.FC<any> = ({accounts}) => <div className={styles.board}/>;

export default Board;