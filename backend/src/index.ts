import { Hono } from 'hono'
import userRouter from './routes/user.route'
import blogRouter from './routes/blog.route'
import { cors } from 'hono/cors';
import { authMiddleware } from './middlewares/authentication.middleware';


const app = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        SECRET_KEY: string
    }
}>().basePath('/api/v1/');

app.use("/*", cors());

app.get('/', (c) => {
    return c.text('Hello Hono!')
})


app.get("/me", authMiddleware, (c) => {
    c.status(200)
    return c.json({
        msg: 'Success'
    })
});

app.route('/user', userRouter);
app.route('/blog', blogRouter);

export default app;                  
