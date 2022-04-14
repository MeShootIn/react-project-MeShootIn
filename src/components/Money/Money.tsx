import React from 'react';

interface UnitProps {
  value: number
}

const BaseUnit = ({value}: Readonly<UnitProps>) => {
  const baseUnit = Math.trunc(value);

  return (
    <span>{baseUnit}</span>
  );
}

const getDerivedUnit = (value): number => {
  if (Number.isInteger(value)) {
    return 0;
  }

  const decimalStr = value
    .toString()
    .split('.')[1];

  return Number(decimalStr);
}

const DerivedUnit = ({value}: Readonly<UnitProps>) => {
  const derivedUnit = getDerivedUnit(value);

  if (derivedUnit === 0) {
    return null;
  }

  return (
    <span>,{derivedUnit}</span>
  );
}

export type Currency = 'RUB' | 'USD' | 'EUR' | 'GBP';

const CurrencyMasks: Record<Currency, string> = {
  'RUB': '₽',
  'EUR': '€',
  'GBP': '£',
  'USD': '$'
};

export interface CurrencyProps {
  currency?: Currency
}

export const CurrencyMask = ({currency}: Readonly<CurrencyProps>) => {
  if (currency === undefined) {
    return null;
  }

  return (
    <span>{CurrencyMasks[currency]}</span>
  );
}

interface MoneyProps extends UnitProps, CurrencyProps {
}

const Money = ({value, currency}: Readonly<MoneyProps>) => (
  <span>
    <BaseUnit value={value}/>
    <DerivedUnit value={value}/>
    <CurrencyMask currency={currency}/>
  </span>
);

export default Money;