import { Elysia, t } from 'elysia'
import { cors } from '@elysiajs/cors'
import { staticPlugin } from '@elysiajs/static'
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
    .use(cors())
    .use(swagger())
    .use(
        staticPlugin({
            prefix: '' //ddd
        })
    )
    .get('/', () => 'Hello Elysia')
    .get('/nendoroid/skadi', () => ({
        id: 2025,
        name: 'Skadino',
        type: 'Nendoroid',
        manufacture: 'Goodsmile',
        cover: 'http://localhost:8000/assets/skadi.jpg',
        license: {
            type: 'approved',
            holder: 'Hypergraph',
            from: 'Arknights'
        }
    }))
    .post('/sign-in', ({ body }) => body, {
        body: t.Object({
            username: t.String(),
            password: t.String()
        }),
        response: {
            200: t.Object({
                username: t.String(),
                password: t.String()
            }),
            400: t.Object({
                error: t.String(),
                status: t.Number()
            })
        }
    })
    .listen(8000)

export type App = typeof app

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
