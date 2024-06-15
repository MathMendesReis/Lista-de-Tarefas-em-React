'use client'
import { zodResolver } from '@hookform/resolvers/zod';
import { UseFormProps, UseFormReturn, useForm } from 'react-hook-form';
import * as z from 'zod';

export interface Props<T extends z.ZodType<any, any>> extends UseFormProps<z.infer<T>> {
  schema: T;
}

export default function useFormCustom<T extends z.ZodType<any, any>>({ schema, ...props }: Props<T>)
  :UseFormReturn<z.infer<T>> {
  const form = useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    ...props
  });

  return form;
}
