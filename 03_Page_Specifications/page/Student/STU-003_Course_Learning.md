# STU-003 - Course Learning

---

# Document Information

| Field        | Value           |
| ------------ | --------------- |
| Page ID      | STU-003         |
| Page Name    | Course Learning |
| Module       | Student Portal  |
| Version      | 1.0             |
| Status       | Draft           |
| Author       | Priti           |
| Last Updated | YYYY-MM-DD      |

---

# 1. Overview

Course Learning là không gian học tập chính của học viên.

Trang này cho phép học viên xem toàn bộ nội dung của một khóa học, theo dõi tiến độ, học bài, làm bài tập, ghi chú, trao đổi với giáo viên và sử dụng AI hỗ trợ học tập.

Đây là trang được sử dụng nhiều nhất của toàn bộ nền tảng.

---

# 2. Purpose

Trang giúp học viên:

- Học toàn bộ khóa học.
- Theo dõi tiến độ.
- Xem chương và bài học.
- Làm bài tập.
- Làm Quiz.
- Tra từ.
- Chat với AI.
- Ghi chú.
- Hỏi giáo viên.
- Đánh dấu bài học.

---

# 3. User Roles

- Student

---

# 4. Route

```
/student/courses/:courseId
```

---

# 5. Layout

Student Learning Layout

Bao gồm:

- Top Navigation
- Left Sidebar (Curriculum)
- Main Learning Area
- Right Sidebar (AI & Notes)
- Bottom Action Bar (Mobile)

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

Học viên có thể:

- Học liên tục không bị gián đoạn.
- Không cần rời khỏi trang để tra từ hoặc hỏi AI.
- Hoàn thành khóa học hiệu quả.

---

# 8. User Stories

"Tôi muốn học mọi thứ ở cùng một nơi."

"Tôi muốn xem video và ghi chú cùng lúc."

"Tôi muốn hỏi AI ngay khi không hiểu."

"Tôi muốn biết mình còn bao nhiêu bài."

---

# 9. Entry Points

- Dashboard
- My Courses
- Continue Learning
- Notification

---

# 10. Exit Points

- Lesson
- Homework
- Quiz
- Dashboard
- Certificate

---

# 11. Overall Layout

Trang được chia thành 3 khu vực chính.

### Left Sidebar

- Danh sách chương
- Danh sách bài học
- Tiến độ

---

### Center

- Nội dung bài học

---

### Right Sidebar

- AI
- Dictionary
- Notes
- Resources

---

# 12. Section Details

## 12.1 Course Header

Hiển thị:

- Course Thumbnail
- Course Name
- Teacher
- Progress
- Last Updated

---

## 12.2 Course Progress

Hiển thị:

- %
- Lesson Completed
- Remaining Lessons
- Estimated Remaining Time

---

## 12.3 Curriculum Sidebar

Hiển thị:

Chapter

↓

Lesson

↓

Exercise

↓

Quiz

↓

Homework

Mỗi Lesson hiển thị:

- Lock / Unlock
- Completed
- Current Lesson
- Duration

Có Collapse.

---

## 12.4 Lesson Area

Hiển thị:

- Lesson Title
- Lesson Description
- Lesson Content

Có thể gồm:

- Video
- Text
- Images
- Audio
- Tables
- Examples

---

## 12.5 Video Player

Video hỗ trợ:

- Playback Speed
- Subtitle
- Transcript
- Bookmark
- Fullscreen
- Resume Playback

---

## 12.6 Transcript

Hiển thị toàn bộ transcript.

Click từng câu sẽ tua tới đúng thời điểm.

---

## 12.7 Vocabulary Panel

Từ mới trong bài.

Hiển thị:

- Hanzi
- Pinyin
- Meaning
- Audio
- Example
- Add Flashcard

---

## 12.8 Grammar Panel

Hiển thị:

- Grammar Point
- Explanation
- Examples
- Common Mistakes

---

## 12.9 Notes

Học viên có thể:

- Ghi chú.
- Highlight.
- Thêm hình ảnh.
- Đính kèm file.
- Đồng bộ Cloud.

---

## 12.10 AI Learning Assistant

Có thể:

- Chat AI
- Giải thích ngữ pháp
- Dịch câu
- Giải thích từ
- Kiểm tra bài viết
- Chấm phát âm

---

## 12.11 Homework

Hiển thị:

- Homework Status
- Due Date
- Submit Button

---

## 12.12 Quiz

Hiển thị:

- Start Quiz
- Previous Score
- Retry

---

## 12.13 Resources

Download:

- PDF
- PPT
- Vocabulary
- Audio

---

## 12.14 Discussion

Trao đổi:

- Teacher
- Students

Có:

- Reply
- Like
- Pin

---

## 12.15 Related Lessons

AI đề xuất:

- Lesson Review
- Next Lesson
- Related Grammar

---

# 13. Components

- Video Player
- Sidebar
- Accordion
- Tabs
- Progress Bar
- Note Editor
- AI Chat Widget
- Dictionary Widget
- Audio Player
- Flashcard Popup
- Resource Card

---

# 14. Data Display

Hiển thị:

- Course Name
- Chapter
- Lesson
- Progress
- Video
- Transcript
- Vocabulary
- Grammar
- Homework
- Quiz
- Notes

---

# 15. User Actions

Người dùng có thể:

- Xem video.
- Đánh dấu hoàn thành bài học.
- Ghi chú.
- Bookmark.
- Tra từ.
- Chat AI.
- Luyện phát âm.
- Làm Quiz.
- Nộp Homework.
- Download tài liệu.

---

# 16. Business Rules

- Phải hoàn thành Lesson trước khi mở Lesson tiếp theo (nếu khóa học bật chế độ Sequential Learning).
- Bài Premium yêu cầu quyền truy cập hợp lệ.
- AI sử dụng theo giới hạn của gói Membership.
- Tiến độ được lưu tự động sau mỗi thao tác.

---

# 17. Validation Rules

- Không mở Lesson bị khóa.
- Không nộp Homework sau hạn nếu giáo viên không cho phép.
- Không đánh dấu hoàn thành khi chưa xem tối thiểu tỷ lệ video do Admin cấu hình (ví dụ 80%).

---

# 18. API Endpoints

- GET /api/course-learning/{courseId}
- GET /api/lesson/{lessonId}
- GET /api/transcript
- GET /api/vocabulary
- GET /api/grammar
- POST /api/lesson/progress
- POST /api/notes
- POST /api/homework
- POST /api/quiz

---

# 19. Database Tables

- courses
- chapters
- lessons
- lesson_progress
- videos
- transcripts
- vocabulary
- grammar_points
- notes
- homework
- quizzes

---

# 20. Permissions

Student

- Học khóa học đã đăng ký.

Teacher

- Xem tiến độ học viên.
- Trả lời Discussion.

Admin

- Full Access.

---

# 21. Page States

Loading

Skeleton Layout.

---

Empty

Khóa học chưa có nội dung.

---

Error

Không thể tải khóa học.

---

# 22. Notifications

- Lesson Completed
- Homework Submitted
- Quiz Passed
- New Resource Added
- Teacher Replied

---

# 23. Responsive Design

Desktop

3 cột:

- Curriculum
- Lesson
- AI

Tablet

2 cột.

Mobile

Sidebar thu gọn thành Drawer.

Bottom Navigation:

- Lesson
- Notes
- AI
- Dictionary

---

# 24. Accessibility

- Keyboard Navigation
- Screen Reader
- Focus States
- Caption cho Video
- Transcript đầy đủ

---

# 25. Security

- Kiểm tra quyền truy cập trước khi tải Lesson.
- Video Streaming Token.
- Không cho phép tải video Premium trực tiếp.
- Tự động hết hạn URL tải tài liệu.

---

# 26. Performance

- Lazy Load Lesson.
- Streaming Video.
- Cache Vocabulary.
- Auto Save Notes.
- Prefetch Lesson tiếp theo.

---

# 27. Analytics Events

- Lesson Started
- Lesson Completed
- Video Played
- Video Paused
- Transcript Used
- AI Chat Started
- Homework Submitted
- Quiz Started
- Resource Downloaded

---

# 28. Acceptance Criteria

- Tiến độ học được lưu tự động.
- Video tiếp tục từ vị trí đã xem.
- AI hoạt động trong cùng trang.
- Responsive trên Desktop, Tablet và Mobile.
- Lighthouse Performance ≥ 90.

---

# 29. Future Improvements

- Picture in Picture.
- Live Class tích hợp ngay trong Lesson.
- AI tự động tạo Flashcards từ bài học.
- AI tóm tắt nội dung bài.
- Đồng bộ ghi chú giữa các thiết bị.
- Chế độ học tập trung (Focus Mode).
- Học Offline (PWA).

---

# Related Documents

- STU-001_Dashboard.md
- STU-002_My_Courses.md
- STU-004_Lesson.md
- AI Module
- Dictionary Module
- Homework Module
- Quiz Module

---

# Notes

Course Learning là không gian học tập trung tâm của nền tảng. Mọi tính năng hỗ trợ học tập (AI, từ điển, ghi chú, bài tập, tài nguyên và trao đổi với giáo viên) cần được tích hợp liền mạch để học viên không phải chuyển qua nhiều trang trong quá trình học.
