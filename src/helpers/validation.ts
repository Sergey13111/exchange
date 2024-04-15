import { z } from 'zod';

export const currencySchema = z.object({
  amountFrom: z.string(),
  amountTo: z.string(),
  currencyFrom: z.string(),
  currencyTo: z.string(),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
});

export type IFormData = z.infer<typeof currencySchema>;
