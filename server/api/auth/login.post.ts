import prisma from "@prisma/client";
const client = new prisma.PrismaClient({});

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const user = await client.user.findFirst({
    where: { username: body.username, password: body.password },
    select: {
      id: true,
      username: true,
      name: true,
      createdAt: true,
      updatedAt: true,
    },
  });
  if (user) {
    return { success: true, user };
  } else {
    return {
      success: false,
      error: "No user found matching those credentials!",
    };
  }
});
