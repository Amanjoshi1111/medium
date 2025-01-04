import { Hono } from "hono";
import { decode, sign, verify } from 'hono/jwt'
import { getPrisma } from "../db";
import { signinInput, signupInput } from "@amanjoshi1111/medium-types";

const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        SECRET_KEY: string
    }
}>();

userRouter.post('/signup', async (c) => {
    try {
        const prisma = getPrisma(c.env.DATABASE_URL);

        const body = await c.req.json();
        const { success, error } = signupInput.safeParse(body);

        if (!error) {
            return c.json({
                msg: error
            })
        }

        const user = await prisma.user.create({
            data: body
        })

        const token = await sign({ id: user.id }, c.env.SECRET_KEY);
        return c.json({
            msg: "User created successfully",
            jwt: token
        })
    } catch (err) {
        if (err instanceof Error) {
            console.log('ERROR: ', err.stack);
            return c.json({
                error: err.message
            })
        }
    }
})

userRouter.post('/signin', async (c) => {
    try {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const body = await c.req.json();

        const { success, error } = signinInput.safeParse(body);

        if (error) {
            return c.json({
                msg: error
            })
        }

        const user = await prisma.user.findUnique({
            where: body
        })

        if (!user) {
            return c.json({
                msg: "No such user found"
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