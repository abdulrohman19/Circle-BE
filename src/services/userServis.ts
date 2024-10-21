import { User } from "@prisma/client";
import * as userRepository from "../repositories/userRepository";

export async function getUsers() {
  return await userRepository.findManyUsers();
}

export const createUser = async (user: User) => {
  return await userRepository.createUser(user);
};
