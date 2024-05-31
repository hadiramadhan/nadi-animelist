-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "collection" (
    "id" SERIAL NOT NULL,
    "anime_mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "anime_image" TEXT,
    "anime_title" TEXT,

    CONSTRAINT "collection_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "collection_user_email_anime_mal_id_key" ON "collection"("user_email", "anime_mal_id");
