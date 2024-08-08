import * as z from "zod";
import commonTextError from "..";

const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: `Username ${commonTextError.required}` }),
  password: z
    .string()
    .min(1, { message: `Password ${commonTextError.required}` }),
});

export default loginSchema;
