import { Control } from 'react-hook-form';
import { IFormData } from '@/helpers/validation';

export type InputGroupPropsType = {
  label: string;
  name: 'amountFrom' | 'amountTo';
  nameSelect: 'currencyFrom' | 'currencyTo';
  error?: string;
  control: Control<IFormData>;
  options: { label: string; value: string }[];
  onAmountChange?: (value: string) => void;
};
