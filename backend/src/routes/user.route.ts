import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'
import { getPrisma } from "../db";
import { signinInput, signupInput } from "@amanjoshi1111/medium-types";
import { Prisma } from "@prisma/client";

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        SECRET_KEY: string
    }
}>();

userRouter.post('/signup', async (c) => {
    try {
        const body = await c.req.json();
        const prisma = getPrisma(c.env.DATABASE_URL);
        const { success, data, error } = signupInput.safeParse(body);

        if (!success) {
            return c.json({
                msg: error
            }, 411)
        }

        const user = await prisma.user.create({
            data: body
        })

        const token = await sign({ id: user.id }, c.env.SECRET_KEY);
        return c.json({
            msg: "User created successfully",
            jwt: token
        }, 200)
    } catch (err: unknown) {
        if (err instanceof Error) {
            if((err as any).code == 'P2002'){
                return c.json({
                    msg: "Email already exist"
                }, 401)
            }
        }
        if (err instanceof Error) {
            console.log('ERROR: ', err.stack);
            return c.json({
                error: err.message
            }, 500)
        }
    }
})

userRouter.post('/signin', async (c) => {
    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const body = await c.req.json();

        const { success, data, error } = signinInput.safeParse(body);

        if (!success) {
            return c.json({
                msg: error
            }, 411)
        }

        const user = await prisma.user.findUnique({
            where: body
        })

        if (!user) {
            return c.json({
                msg: "Invalid Credentials"
            }, 401)
        }

        const token = await sign({ id: user.id }, c.env.SECRET_KEY);
        return c.json({
            msg: "User successfully signedin",
            jwt: token
        })

    } catch (err) {
        if (err instanceof Error) {
            return c.json({
                err: err.message
            }, 500)
        }
    }
})

// async function hashPassword(password: string) {
//     const encoder = new TextEncoder();
//     const data = encoder.encode(password);
//     const hash = await crypto.subtle.digest("SHA-256", data);
//     const hashPassword = Array.from(new Uint8Array(hash))
//         .map(byte => byte.toString(16).padStart(2, '0'))
//         .join("");

//     console.log(hashPassword);
// }

export default userRouter;