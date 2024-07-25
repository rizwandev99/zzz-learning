import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(username: string) {
  const res = await prisma.user.findUnique({
    where: {
      email: username,
    },
  });
  console.log(res);
}
getUser("a1");
