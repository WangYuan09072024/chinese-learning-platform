# STU-004 - Lesson

---

# Document Information

| Field        | Value          |
| ------------ | -------------- |
| Page ID      | STU-004        |
| Page Name    | Lesson         |
| Module       | Student Portal |
| Version      | 1.0            |
| Status       | Draft          |
| Author       | Priti          |
| Last Updated | YYYY-MM-DD     |

---

# 1. Overview

Lesson là trang học của một bài học cụ thể trong khóa học.

Đây là nơi học viên xem video, đọc nội dung, luyện tập, làm bài tập, luyện phát âm, ghi chú và tương tác với AI.

Mỗi Lesson là một đơn vị học tập độc lập nhưng vẫn thuộc Course Learning.

---

# 2. Purpose

Lesson giúp học viên:

- Học từng bài.
- Xem video.
- Đọc giáo trình.
- Luyện phát âm.
- Làm bài tập.
- Làm Quiz.
- Tra từ.
- Chat với AI.
- Đánh dấu hoàn thành.

---

# 3. User Roles

- Student

---

# 4. Route

```
/student/course/:courseId/lesson/:lessonId
```

---

# 5. Layout

Learning Layout

Gồm:

- Lesson Header
- Lesson Content
- Right Learning Tools
- Bottom Navigation

---

# 6. Navigation

Dashboard

↓

My Courses

↓

Course Learning

↓

Lesson

---

# 7. Objectives

Sau khi hoàn thành Lesson, học viên có thể:

- Hiểu nội dung bài.
- Làm xong bài tập.
- Làm Quiz.
- Hoàn thành Lesson.
- Chuyển sang Lesson tiếp theo.

---

# 8. User Stories

"Tôi muốn học từng bài một cách tập trung."

"Tôi muốn hỏi AI khi gặp phần khó."

"Tôi muốn đánh dấu bài học đã hoàn thành."

---

# 9. Entry Points

- Curriculum
- Continue Learning
- AI Recommendation
- Homework

---

# 10. Exit Points

- Previous Lesson
- Next Lesson
- Homework
- Quiz
- Dashboard

---

# 11. Lesson Structure

1. Lesson Header
2. Learning Progress
3. Lesson Introduction
4. Video Lesson
5. Lesson Content
6. Vocabulary
7. Grammar
8. Examples
9. Speaking Practice
10. Writing Practice
11. Listening Practice
12. Reading Practice
13. Quiz
14. Homework
15. Notes
16. AI Assistant
17. Discussion
18. Resources
19. Navigation

---

# 12. Section Details

## 12.1 Lesson Header

Hiển thị:

- Lesson Number
- Lesson Name
- Estimated Time
- Difficulty
- Completion Status

---

## 12.2 Learning Progress

Hiển thị:

- Lesson Progress
- Course Progress

---

## 12.3 Lesson Introduction

Hiển thị:

- Mục tiêu bài học
- Kiến thức cần có trước
- Kết quả đạt được sau bài học

---

## 12.4 Video Lesson

Player hỗ trợ:

- Subtitle
- Playback Speed
- Quality
- Transcript
- Fullscreen
- Resume

---

## 12.5 Lesson Content

Hiển thị:

- Giáo trình
- Hình ảnh
- Ví dụ
- Bảng
- Audio

---

## 12.6 Vocabulary

Mỗi từ gồm:

- Hanzi
- Pinyin
- Nghĩa
- Âm thanh
- Bộ thủ
- Thứ tự nét
- Ví dụ
- HSK Level

Có nút:

- Save
- Flashcard

---

## 12.7 Grammar

Hiển thị:

- Điểm ngữ pháp
- Giải thích
- Ví dụ
- Lưu ý
- Lỗi thường gặp

---

## 12.8 Examples

Ví dụ:

- Hội thoại
- Mẫu câu
- Đoạn văn

Có Audio.

---

## 12.9 Speaking Practice

Học viên:

- Đọc theo.
- Ghi âm.
- AI chấm phát âm.
- So sánh với phát âm chuẩn.

---

## 12.10 Writing Practice

Hiển thị:

- Thứ tự nét.
- Canvas viết chữ.
- AI chấm nét viết.
- So sánh với mẫu.

---

## 12.11 Listening Practice

Bao gồm:

- Audio
- Multiple Choice
- Dictation
- Fill in Blank

---

## 12.12 Reading Practice

Hiển thị:

- Đoạn văn
- Câu hỏi
- Giải thích đáp án

---

## 12.13 Quiz

Các dạng:

- Multiple Choice
- Matching
- Fill in Blank
- Ordering
- Speaking Quiz

---

## 12.14 Homework

Hiển thị:

- Yêu cầu
- Hạn nộp
- Trạng thái
- Upload File
- Submit

---

## 12.15 Notes

Cho phép:

- Ghi chú.
- Highlight.
- Bookmark.
- Đồng bộ Cloud.

---

## 12.16 AI Assistant

AI có thể:

- Giải thích từ.
- Giải thích ngữ pháp.
- Dịch câu.
- Chấm phát âm.
- Chấm bài viết.
- Đặt câu hỏi luyện tập.

---

## 12.17 Discussion

Trao đổi với:

- Giáo viên.
- Học viên khác.

---

## 12.18 Resources

Tài liệu:

- PDF
- Audio
- PPT
- Flashcards

---

## 12.19 Lesson Navigation

Buttons:

- Previous Lesson
- Next Lesson
- Back to Curriculum

---

# 13. Components

- Video Player
- Rich Text Viewer
- Audio Player
- Stroke Animation
- Recording Widget
- AI Chat
- Quiz Engine
- Homework Upload
- Note Editor
- Discussion Panel

---

# 14. User Actions

- Watch Video
- Read Content
- Listen Audio
- Record Voice
- Practice Writing
- Save Vocabulary
- Create Flashcard
- Submit Homework
- Take Quiz
- Ask AI
- Bookmark Lesson
- Mark Lesson Complete

---

# 15. Business Rules

- Lesson được mở theo quyền truy cập của khóa học.
- Một số Lesson có thể miễn phí.
- Có thể yêu cầu hoàn thành Lesson trước để mở Lesson tiếp theo.
- Tự động lưu tiến độ sau mỗi thao tác.

---

# 16. API Endpoints

- GET /api/lesson/{id}
- GET /api/lesson/vocabulary
- GET /api/lesson/grammar
- POST /api/lesson/progress
- POST /api/lesson/complete
- POST /api/lesson/notes
- POST /api/lesson/homework
- POST /api/lesson/quiz
- POST /api/lesson/speaking
- POST /api/lesson/writing

---

# 17. Database Tables

- lessons
- lesson_contents
- lesson_progress
- vocabulary
- grammar_points
- quizzes
- homework
- submissions
- notes
- recordings

---

# 18. Permissions

Student

- Học Lesson.

Teacher

- Theo dõi tiến độ.
- Chấm bài.
- Trả lời Discussion.

Admin

- Full Access.

---

# 19. Analytics Events

- Lesson Viewed
- Lesson Completed
- Video Finished
- Vocabulary Saved
- Flashcard Created
- Speaking Practiced
- Writing Submitted
- Quiz Passed
- Homework Submitted
- AI Chat Started

---

# 20. Acceptance Criteria

- Tiến độ lưu tự động.
- Video tiếp tục từ vị trí đã xem.
- AI phản hồi trong thời gian chấp nhận được.
- Quiz và Homework hoạt động đúng.
- Responsive trên Desktop, Tablet và Mobile.

---

# Related Documents

- STU-003_Course_Learning.md
- STU-005_Homework.md
- STU-006_Quiz.md
- Dictionary Module
- AI Module
