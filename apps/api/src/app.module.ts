import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { CoursesModule } from './courses/courses.module';
import { ChaptersModule } from './chapters/chapters.module';
import { LessonsModule } from './lessons/lessons.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { HomeworkModule } from './homework/homework.module';
import { QuizModule } from './quiz/quiz.module';
import { ProgressModule } from './progress/progress.module';
import { NotificationsModule } from './notifications/notifications.module';
import { FlashcardsModule } from './flashcards/flashcards.module';
import { DictionaryModule } from './dictionary/dictionary.module';
import { CalendarModule } from './calendar/calendar.module';
import { ContactModule } from './contact/contact.module';
import { SessionsModule } from './sessions/sessions.module';
import { TeacherModule } from './teacher/teacher.module';
import { AnnouncementsModule } from './announcements/announcements.module';
import { AttendanceModule } from './attendance/attendance.module';
import { AdminModule } from './admin/admin.module';
import { FlashcardDecksModule } from './flashcard-decks/flashcard-decks.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    UsersModule,
    AuthModule,
    CoursesModule,
    ChaptersModule,
    LessonsModule,
    EnrollmentsModule,
    HomeworkModule,
    QuizModule,
    ProgressModule,
    NotificationsModule,
    FlashcardsModule,
    DictionaryModule,
    CalendarModule,
    ContactModule,
    SessionsModule,
    TeacherModule,
    AnnouncementsModule,
    AttendanceModule,
    AdminModule,
    FlashcardDecksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
