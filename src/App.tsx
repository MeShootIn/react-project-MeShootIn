import React, {Fragment, useState} from 'react';
import Board from './components/Board/Board';
import NewAccountForm from './components/NewAccountForm/NewAccountForm';
import styles from './App.module.css';
import {Account} from "./components/BoardItem/BoardItem";

export const accs: Account[] = [
  {
    id: 1,
    type: 'debit',
    amount: 20000.95,
    currency: 'RUB',
    title: 'Дебетовая карта *7711',
  },
  {
    id: 2,
    type: 'debit',
    amount: 600.2,
    currency: 'EUR',
    title: 'Дебетовая карта *8862',
  },
  {
    id: 3,
    type: 'credit',
    amount: 150000.19,
    currency: 'RUB',
    title: 'Кредитная карта *5234',
    customTitle: 'Кредитка',
  },
  {
    id: 4,
    type: 'external',
    title: 'Привязанная карта *4670',
  },
  {
    id: 5,
    type: 'loan',
    amount: 900000.53,
    currency: 'RUB',
    title: 'Кредит',
  },
  {
    id: 6,
    type: 'saving',
    amount: 300000,
    currency: 'RUB',
    title: 'Вклад',
  },
];

const App = () => {
  const [accounts, setAccounts] = useState(accs);

  const handleSubmit = (account: Account): void => {
    setAccounts(prevAccounts => [...prevAccounts, account]);
  };

  return (
    <Fragment>
      <Board accounts={accounts}/>
      <div className={styles.pageContent}>
        <NewAccountForm handleSubmit={handleSubmit}/>
      </div>
    </Fragment>
  );
}

export default App;