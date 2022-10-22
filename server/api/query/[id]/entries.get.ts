import prisma from "@prisma/client";
const client = new prisma.PrismaClient({});

export default defineEventHandler(async (event) => {
  const entriesList = await client.entry.findMany({
    where: { authorId: event.context.params.id },
    include: {
      category: true,
    },
  });

  if (entriesList) {
    return { success: true, entriesList };
  } else {
    return {
      success: false,
      error: "An error occured!",
    };
  }
});
