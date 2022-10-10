import prisma from "@prisma/client";
const client = new prisma.PrismaClient({});

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const user = await client.users.findFirst({
    where: { username: body.username, password: body.password },
  });
	const users = await client.users.findMany()

	return {
		body,
		user,
		users,
	}
});
