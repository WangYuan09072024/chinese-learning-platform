-- CreateTable
CREATE TABLE "flashcard_decks" (
    "id" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "description" TEXT,
    "level" "CourseLevel",
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "flashcard_decks_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "flashcard_cards" (
    "id" TEXT NOT NULL,
    "deckId" TEXT NOT NULL,
    "hanzi" TEXT NOT NULL,
    "pinyin" TEXT NOT NULL,
    "meaning" TEXT NOT NULL,
    "order" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "flashcard_cards_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "flashcard_cards_deckId_idx" ON "flashcard_cards"("deckId");

-- AddForeignKey
ALTER TABLE "flashcard_cards" ADD CONSTRAINT "flashcard_cards_deckId_fkey" FOREIGN KEY ("deckId") REFERENCES "flashcard_decks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
