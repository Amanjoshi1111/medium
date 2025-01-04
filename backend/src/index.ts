import { Hono } from 'hono'
import userRouter from './routes/user.route'
import blogRouter from './routes/blog.route'

const app = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        SECRET_KEY: string
    }
}>().basePath('/api/v1/');

app.get('/', (c) => {
    return c.text('Hello Hono!')
})

app.route('/user', userRouter);
app.route('/blog', blogRouter);

export default app;                  
