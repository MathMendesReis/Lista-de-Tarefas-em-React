import { z } from "zod";

export const schema = z.object({
  title: z.string().min(1, { message: 'Required' }),
});
export type SchemaType = z.infer<typeof schema>;




