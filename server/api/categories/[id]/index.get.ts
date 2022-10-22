import prisma from "@prisma/client";
const client = new prisma.PrismaClient({});

export default defineEventHandler(async (event) => {
  const categories = await client.category.findMany({
    where: { userId: event.context.params.id },
  });
  if (categories) {
    return { success: true, categories };
  } else {
    return {
      success: false,
      error: "An error occured!",
    };
  }
});
