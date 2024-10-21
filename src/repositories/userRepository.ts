import { User } from "@prisma/client";
import prisma from "../libs/prisma";

export const createUser = async (user: User) => {
  return await prisma.user.create({
    data: user,
  });
};

export const findManyUsers = async () => {
    return await prisma.user.findMany();
}
