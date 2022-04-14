import React from 'react';
import cn from 'classnames';
import styles from './BoardItem.module.css';
import Money, {CurrencyMask, CurrencyProps} from '../Money/Money';

export type AccountType = 'debit' | 'credit' | 'external' | 'saving' | 'loan';

export interface Account extends CurrencyProps {
  id?: number,
  type?: AccountType | string, // FIXME
  amount?: number,
  title: string,
  customTitle?: string
}

const BoardItem = (account: Readonly<Account>) => (
  <div className={styles.item}>
    <div className={cn(styles.logo, styles[`logo_${account.type}`])}>
      {
        account.type !== 'saving' && account.type !== 'loan' &&
        <CurrencyMask currency={account.currency}/>
      }
    </div>
    <div className={styles.description}>
      <div className={styles.title}>{account.customTitle ?? account.title}</div>
      {
        account.amount !== undefined && account.type !== 'external' &&
        <Money value={account.amount} currency={account.currency}/>
      }
    </div>
  </div>
);

export default BoardItem;