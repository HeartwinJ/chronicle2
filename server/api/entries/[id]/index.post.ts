import prisma from "@prisma/client";
const client = new prisma.PrismaClient({});

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const entry = await client.entry.create({
    data: {
      title: body.title,
      content: body.content,
      authorId: event.context.params.id,
      categoryId: body.categoryId,
    },
  });
  if (entry) {
    return { success: true, entry };
  } else {
    return {
      success: false,
      error: "An error occured!",
    };
  }
});
