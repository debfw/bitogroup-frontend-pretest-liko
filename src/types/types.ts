export type DataType = {
  currency: string;
  currency_icon: string;
  twd_price: number;
  amount_decimal: string;
  id: string;
};

export type NullableDataType = DataType | null;


export type CurrencyItemProps = {
  currencies?: DataType[];
  currentCurrency: NullableDataType;
  onCurrencyChange: (currency: NullableDataType) => void;
  value: number;
  onValueChange?: (value: number) => void;
};