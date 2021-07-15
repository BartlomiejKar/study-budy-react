import { students } from "mocks/data/students";
import { rest } from "msw"

export const handlers = [
    rest.get('/students', (req, res, ctx) => {
        return res(ctx.status(200)), res(
            ctx.json({
                students: students,
            }),
        )
    }),
];