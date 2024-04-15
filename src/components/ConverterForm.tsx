'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import Image from 'next/image';
import InputDate from './ui-kit/InputDate';
import InputGroup from './ui-kit/InputGroup';
import PrimaryButton from './ui-kit/PrimaryButton';
import { currencySchema } from '@/helpers/validation';
import { FormDataType } from '@/types/FormDataType';
import { getAllCurrencies } from '@/actions/currency';
import { NameCurrencyType } from '@/types/NameCurrencyType';
import { CurrencyRateType } from '@/types/CurrencyRateType';
import useConversionStore from '@/store/converter';

const ConverterForm: React.FC = () => {
  const [history, setHistory] = useConversionStore((state) => [state.history, state.setHistory]);
  const [formData, setFormData] = useState<FormDataType | null>(null);
  const [lastChanged, setLastChanged] = useState('amountFrom');
  const [nameCurrency, setNameCurrency] = useState<NameCurrencyType[]>([]);
  const [rates, setRates] = useState<CurrencyRateType[]>([]);
  const date = formData?.date?.replace(/-/g, '');

  useEffect(() => {
    const fetchRates = async () => {
      const data = date && (await getAllCurrencies(date));
      setRates(data);
    };

    fetchRates();
  }, [date]);

  useEffect(() => {
    const newCurrencyOptions =
      rates &&
      rates.map((rate) => ({
        label: rate.cc,
        value: rate.cc,
      }));
    setNameCurrency(newCurrencyOptions);
  }, [rates]);

  const handleSaveConversion = () => {
    formData && setHistory(formData);
  };

  const {
    handleSubmit,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormDataType>({
    defaultValues: {
      amountFrom: '',
      amountTo: '',
      currencyFrom: 'EUR',
      currencyTo: 'USD',
      date: format(new Date(), 'yyyyMMdd'),
    },
    resolver: zodResolver(currencySchema),
  });

  const handleAmountFromChange = () => {
    setLastChanged('amountFrom');
  };

  const handleAmountToChange = () => {
    setLastChanged('amountTo');
  };

  const watchedAmountFrom = watch('amountFrom');
  const watchedAmountTo = watch('amountTo');
  const watchedDate = watch('date');
  const watchedCurrencyFrom = watch('currencyFrom');
  const watchedCurrencyTo = watch('currencyTo');

  useEffect(() => {
    setFormData((prevState: FormDataType | null) => ({
      ...prevState,
      amountFrom: watchedAmountFrom,
      amountTo: watchedAmountTo,
      date: watchedDate,
      currencyFrom: watchedCurrencyFrom,
      currencyTo: watchedCurrencyTo,
    }));
  }, [watchedAmountFrom, watchedAmountTo, watchedDate, watchedCurrencyFrom, watchedCurrencyTo]);

  const convertCurrency = useCallback(() => {
    if (!formData || !rates) return;

    const rateFrom = rates.find((rate) => rate.cc === formData.currencyFrom)?.rate || 1;
    const rateTo = rates.find((rate) => rate.cc === formData.currencyTo)?.rate || 1;
    if (lastChanged === 'amountFrom') {
      const newAmountTo = (+formData.amountFrom * rateFrom) / rateTo;
      setValue('amountTo', newAmountTo.toFixed(2));
    } else {
      const newAmountFrom = (+formData.amountTo * rateTo) / rateFrom;
      setValue('amountFrom', newAmountFrom.toFixed(2));
    }
  }, [formData, rates, lastChanged, setValue]);

  useEffect(() => {
    convertCurrency();
  }, [convertCurrency]);

  const onSubmit: SubmitHandler<FormDataType> = (data) => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full  flex-row justify-between gap-4 mb-4'>
      <div className='space-y-6'>
        <InputGroup
          label='В мене є:'
          name='amountFrom'
          nameSelect='currencyFrom'
          options={nameCurrency && nameCurrency}
          control={control}
          onAmountChange={handleAmountFromChange}
        />
        <div className='flex items-center'>
          <InputDate
            control={control}
            name='date'
          />
        </div>
      </div>

      <div className='flex pb-[30px] '>
        <Image
          src='/images/icon_convert.svg'
          width={22}
          height={22}
          alt='Converter'
        />
      </div>

      <div className='space-y-6 text-end'>
        <InputGroup
          label='Хочу придбати:'
          name='amountTo'
          nameSelect='currencyTo'
          onAmountChange={handleAmountToChange}
          options={nameCurrency && nameCurrency}
          control={control}
        />

        <PrimaryButton
          bg='bg-blue'
          width='w-[220px]'
          onClick={handleSaveConversion}>
          <span className='block text-center px-6 font-robotoMedium text-light text-lg'>
            Зберегти результат
          </span>
        </PrimaryButton>
      </div>
    </form>
  );
};

export default ConverterForm;
