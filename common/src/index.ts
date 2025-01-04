import z from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    password: z.string().min(6),
    name: z.string().optional()
}).strict()

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
}).strict()

export const createBlogInput = z.object({
    title : z.string().min(6),
    content : z.string().min(6)
}).strict();

export const updateBlogInput = z.object({
    title: z.string().min(6),
    content : z.string().min(6),
    published: z.boolean().optional()
}).strict();

export type SignupInput = z.infer<typeof signupInput>
export type SigninInput = z.infer<typeof signinInput>
export type CreateBlogInput = z.infer<typeof createBlogInput>
export type UpdateBlogInput = z.infer<typeof updateBlogInput>

