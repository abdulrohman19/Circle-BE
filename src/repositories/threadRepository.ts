import { Threads } from "@prisma/client";
import prisma from "../libs/prisma";
import { redisClient } from "../libs/redis-client";

export const createThread = async (thread: Threads) => {
  await redisClient.del("THREADS_DATA")

  return await prisma.threads.create({
    data: {
      content: thread.content,
      file: thread.file,
      userId: thread.userId,
    },
  });
};

export const findManyThreads = async () => {
  const threadRedis = await redisClient.get("THREADS_DATA");
  
  if(threadRedis) {
    return JSON.parse (threadRedis);
  }

  const threads = await prisma.threads.findMany({
    orderBy: {
      createdAt: "desc",
    },
});

  redisClient.set("THREADS_DATA", JSON.stringify(threads));

  return threads;
};

export const findUniqueThread = async (id: number) => {
  return await prisma.threads.findUnique({
    where: { id },
  });
};