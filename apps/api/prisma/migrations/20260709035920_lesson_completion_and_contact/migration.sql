-- CreateTable
CREATE TABLE "lesson_completions" (
    "id" TEXT NOT NULL,
    "studentId" TEXT NOT NULL,
    "lessonId" TEXT NOT NULL,
    "completedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "lesson_completions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "contact_messages" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "contact_messages_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "lesson_completions_lessonId_idx" ON "lesson_completions"("lessonId");

-- CreateIndex
CREATE UNIQUE INDEX "lesson_completions_studentId_lessonId_key" ON "lesson_completions"("studentId", "lessonId");

-- AddForeignKey
ALTER TABLE "lesson_completions" ADD CONSTRAINT "lesson_completions_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lesson_completions" ADD CONSTRAINT "lesson_completions_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "lessons"("id") ON DELETE CASCADE ON UPDATE CASCADE;
