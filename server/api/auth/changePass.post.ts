import prisma from "@prisma/client";
const client = new prisma.PrismaClient({});

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const user = await client.user.findFirst({
    where: { username: body.username, password: body.password },
  });
  if (user) {
    const newUser = await client.user.update({
      where: { id: user.id },
      data: { password: body.newPassword },
      select: {
        id: true,
        username: true,
        name: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (newUser) {
      return { success: true, newUser };
    }
  }
  return {
    success: false,
    error: "An error occured!",
  };
});
