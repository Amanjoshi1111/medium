import { Context } from "hono";
import { createMiddleware } from "hono/factory";
import { verify } from "hono/jwt";
import { SignatureKey } from "hono/utils/jwt/jws";

export const authMiddleware = createMiddleware(async (c, next) => {

    const headers = c.req.header('authorization') || "";
    const token = headers.split(" ")[1];

    try {
        const data = await verify(token, c.env.SECRET_KEY);
        c.set('userId', data.id);
        await next();
    } catch (err) {
        return c.json({
            msg: "Invalid or expired token"
        }, 401);
    }
})