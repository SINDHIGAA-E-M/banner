import {z} from "zod";

const clean=(text)=>text.replace(/[<>]/g,"");
const studentSchema = z.object({
  Name: z.string()
  .min(2,"minimum 2 characters")
  .max(20,"maximum 20 characters")
  .trim().regex(/^[a-zA-Z\s]+$/,"only alphabets and spaces are allowed")
  .transform(clean),
  age: z.number().min(0).optional(),
  email: z.string()
  .toLowerCase()
  .transform(clean)
})