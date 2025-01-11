import { Hono } from "hono";
import { authMiddleware } from "../middlewares/authentication.middleware";
import { getPrisma } from "../db";
import { Post, User } from "@prisma/client";
import {createBlogInput, updateBlogInput} from "@amanjoshi1111/medium-types";

const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string
    },
    Variables: {
        userId: string
    }
}>();

blogRouter.use("/*", authMiddleware);

blogRouter
    .post('/', async (c) => {

        const prisma = getPrisma(c.env.DATABASE_URL);
        const body = await c.req.json();

        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                published: body.published,
                authorId: c.get('userId')
            }
        })
        console.log(blog);

        return c.json({
            id: blog.id
        })
    })
    .put('/', async (c) => {
        const prisma = getPrisma(c.env.DATABASE_URL);
        const body: Post = await c.req.json();
        const userId = c.get('userId');



        const blog = await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId
            },
            data: {
                title: body.title,
                content: body.content
            }
        })
        console.log(blog);

        return c.json({
            id: blog.id
        })
    })
    .get('/bulk', async (c) => {

        const prisma = getPrisma(c.env.DATABASE_URL);
        const posts = await prisma.post.findMany({})

        return c.json({
            posts: posts
        })
    })
    .get('/:id', async (c) => {

        console.log(c.req.param('id'));
        const prisma = getPrisma(c.env.DATABASE_URL);
        const post = await prisma.post.findFirst({
            where: {
                id: c.req.param('id')
            },
            include: {
                author: true
            }
        })

        return c.json(post);
    })

export default blogRouter;