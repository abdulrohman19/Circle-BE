-- CreateTable
CREATE TABLE "Threads" (
    "id" SERIAL NOT NULL,
    "content" TEXT,
    "file" TEXT,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Threads_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Threads" ADD CONSTRAINT "Threads_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
