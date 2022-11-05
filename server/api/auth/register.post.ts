import prisma from "@prisma/client";
import bcrypt from "bcrypt";

const client = new prisma.PrismaClient({});

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const hashedPassword = await bcrypt.hash(body.password, 10);
  const user = await client.user.create({
    data: {
      username: body.username,
      password: hashedPassword,
      name: body.name,
    },
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
