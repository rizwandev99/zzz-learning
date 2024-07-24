// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
// interface UpdateParams {
//   firstName: string;
//   lastName: string;
// }
// async function updateUser(
//   username: string,
//   { firstName, lastName }: UpdateParams
// ) {
//   try {
//     const res = await prisma.user.update({
//       where: { email: username },
//       data: {
//         firstName,
//         lastName,
//       },
//     });
//     console.log(res);
//   } catch (error) {
//     console.error("Error updating user:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }
// // Call the function
// updateUser("a1", { firstName: "rahul", lastName: "tyagi" });
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function updateUser(username, { firstName, lastName }) {
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName,
            lastName,
        },
    });
    console.log(res);
}
updateUser("a1", { firstName: "mr", lastName: "md" });
