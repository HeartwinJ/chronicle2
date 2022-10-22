import prisma from "@prisma/client";
const client = new prisma.PrismaClient({});

export default defineEventHandler(async (event) => {
  const body = await useBody(event);
  const category = await client.category.update({
    where: {
      id: body.id,
    },
    data: {
      label: body.label,
      color: body.color,
    },
  });
  if (category) {
    return { success: true, category };
  } else {
    return {
      success: false,
      error: "An error occured!",
    };
  }
});
