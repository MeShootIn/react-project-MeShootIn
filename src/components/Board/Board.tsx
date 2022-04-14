import React from 'react';
import BoardItem, {Account, AccountType} from '../BoardItem/BoardItem';
import styles from './Board.module.css';
import {Currency} from "../Money/Money";

interface BoardProps {
  accounts: Account[]
}

const Board = ({accounts}: Readonly<BoardProps>) => {
  // FIXME
  const Types: (AccountType | string | undefined)[] = ['debit' , 'credit' , 'external' , 'saving' , 'loan'];
  const Currencies: (Currency | undefined)[] = ['RUB', 'USD', 'EUR', 'GBP'];
  const accountsCopy = [...accounts];

  accountsCopy.sort((a, b) => {
    const typeDiff = Types.indexOf(a.type) - Types.indexOf(b.type);

    if (typeDiff !== 0) {
      return typeDiff;
    }

    return Currencies.indexOf(a.currency) - Currencies.indexOf(b.currency);
  });

  return (
    <div className={styles.board}>
      {
        accountsCopy.map(account => (
          <BoardItem key={account.title} title={account.title} customTitle={account.customTitle}
                     currency={account.currency} type={account.type} amount={account.amount} id={account.id}/>
        ))
      }
    </div>
  );
};

export default Board;