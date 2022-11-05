import prisma from "@prisma/client";
import bcrypt from "bcrypt";
import * as jose from "jose";
const client = new prisma.PrismaClient({});

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const user = await client.user.findUnique({
    where: { username: body.username }
  });
  if (user) {
    const validPass = await bcrypt.compare(body.password, user.password);
    if (validPass) {
      const token = await new jose.SignJWT({
        id: user.id,
        name: user.name,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      })
        .setProtectedHeader({
          alg: "HS256",
          typ: "JWT",
        })
        .setIssuedAt()
        .setExpirationTime("1h")
        .sign(new TextEncoder().encode(process.env.JWT_TOKEN_SECRET));

      setCookie(event, "chronicle-auth-token", token, {
        expires: new Date(Date.now() + 60 * 60 * 1000),
      });
      return {
        success: true,
        id: user.id,
        name: user.name,
        username: user.username,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
        token,
      };
    }
  }

  return {
    success: false,
    error: "No user found matching those credentials!",
  };
});
