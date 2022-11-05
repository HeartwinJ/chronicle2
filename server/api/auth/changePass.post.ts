import prisma from "@prisma/client";
import bcrypt from "bcrypt";
const client = new prisma.PrismaClient({});

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const user = await client.user.findUnique({
    where: { username: body.username },
  });
  if (user) {
    const validPass = await bcrypt.compare(body.password, user.password);
    if (validPass) {
      const hashedPassword = await bcrypt.hash(body.newPassword, 10);
      const newUser = await client.user.update({
        where: { id: user.id },
        data: { password: hashedPassword },
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
  }

  return {
    success: false,
    error: "An error occured!",
  };
});
