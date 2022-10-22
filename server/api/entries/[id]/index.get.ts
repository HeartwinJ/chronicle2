import prisma from "@prisma/client";
const client = new prisma.PrismaClient({});

export default defineEventHandler(async (event) => {
  const entries = await client.entry.findMany({
    where: { authorId: event.context.params.id },
  });
  if (entries) {
    return { success: true, entries };
  } else {
    return {
      success: false,
      error: "An error occured!",
    };
  }
});
