# STU-001 - Student Dashboard

---

# Document Information

| Field | Value |
|--------|-------|
| Page ID | STU-001 |
| Page Name | Student Dashboard |
| Module | Student Portal |
| Version | 1.0 |
| Status | Draft |
| Author | Priti |
| Last Updated | YYYY-MM-DD |

---

# 1. Overview

Student Dashboard là trang chính sau khi học viên đăng nhập.

Đây là trung tâm quản lý toàn bộ quá trình học tập, giúp học viên theo dõi tiến độ, bài học, lịch học, bài tập, điểm số, thông báo và các đề xuất học tập từ AI.

Dashboard cần được cá nhân hóa theo từng học viên.

---

# 2. Purpose

Dashboard giúp học viên:

- Tiếp tục học nhanh.
- Theo dõi tiến độ.
- Quản lý khóa học.
- Quản lý lịch học.
- Quản lý bài tập.
- Theo dõi thành tích.
- Nhận thông báo.
- Nhận gợi ý học tập từ AI.

---

# 3. User Roles

- Student

---

# 4. Route

```
/student/dashboard
```

---

# 5. Layout

Student Layout

Bao gồm:

- Sidebar
- Topbar
- Main Dashboard
- Notification Panel

---

# 6. Navigation

Sidebar

- Dashboard
- My Courses
- Homework
- Calendar
- Dictionary
- AI Learning
- Flashcards
- Exams
- Certificates
- Payment
- Profile
- Settings

---

# 7. Objectives

Sau khi mở Dashboard, học viên có thể:

- Biết hôm nay cần học gì.
- Tiếp tục bài học chỉ với 1 lần click.
- Xem lịch học.
- Xem bài tập.
- Xem điểm.
- Chat với AI.

---

# 8. User Stories

"Tôi muốn khi đăng nhập là biết ngay hôm nay mình phải làm gì."

"Tôi muốn tiếp tục bài học dang dở."

"Tôi muốn biết còn bao nhiêu bài tập chưa nộp."

"Tôi muốn AI hướng dẫn mình nên học tiếp gì."

---

# 9. Entry Points

- Login
- Continue Learning
- Notification
- Email Reminder

---

# 10. Exit Points

- Lesson
- Homework
- Calendar
- AI Chat
- Dictionary
- Course Detail

---

# 11. Dashboard Structure

1. Welcome Section
2. Today's Learning
3. Continue Learning
4. Learning Progress
5. My Courses
6. Today's Schedule
7. Homework
8. AI Recommendation
9. Daily Vocabulary
10. Learning Statistics
11. Achievements
12. Recent Activities
13. Notifications
14. Quick Actions

---

# 12. Section Details

## 12.1 Welcome Section

Hiển thị:

- Avatar
- Tên học viên
- Cấp độ hiện tại
- Ngày học liên tục (Learning Streak)
- Lời chào theo thời gian

Ví dụ:

Good Morning, Priti!

You've studied for 15 consecutive days.

---

## 12.2 Today's Learning

Hiển thị:

- Bài học hôm nay
- Mục tiêu hôm nay
- Thời gian dự kiến

Button

Continue Learning

---

## 12.3 Continue Learning

Hiển thị bài học gần nhất.

Bao gồm:

- Course
- Chapter
- Lesson
- Progress

Button

Continue

---

## 12.4 Learning Progress

Hiển thị:

- Tổng tiến độ
- Theo từng khóa
- Theo từng kỹ năng

Dạng:

Progress Ring

Progress Bar

---

## 12.5 My Courses

Hiển thị các khóa học đang học.

Mỗi Card gồm:

- Thumbnail
- Tên
- Tiến độ
- Giáo viên
- Nút Continue

---

## 12.6 Today's Schedule

Hiển thị:

- Lớp học hôm nay
- Thời gian
- Giáo viên
- Link học

Có nút:

Join Class

---

## 12.7 Homework

Hiển thị:

- Chưa làm
- Sắp hết hạn
- Đã nộp
- Đã chấm

Button

Open Homework

---

## 12.8 AI Recommendation

AI phân tích tiến độ học.

Đề xuất:

- Bài học tiếp theo
- Ôn tập từ vựng
- Luyện nói
- Làm Quiz
- Thi thử HSK

---

## 12.9 Daily Vocabulary

Hiển thị:

- 5~20 từ mới mỗi ngày
- Pinyin
- Nghĩa
- Phát âm

Button

Practice

---

## 12.10 Learning Statistics

Hiển thị:

- Tổng giờ học
- Tổng bài học
- Tổng từ đã học
- Flashcards
- Speaking Score
- Writing Score

---

## 12.11 Achievements

Hiển thị:

- Badges
- Certificates
- Learning Streak
- Milestones

---

## 12.12 Recent Activities

Hiển thị:

- Bài vừa học
- Bài vừa nộp
- Điểm mới
- Bình luận giáo viên

---

## 12.13 Notifications

Thông báo:

- Bài tập
- Lịch học
- Khuyến mãi
- Tin nhắn giáo viên
- Thông báo hệ thống

---

## 12.14 Quick Actions

Button:

- Continue Learning
- Dictionary
- AI Chat
- Homework
- Calendar
- Flashcards

---

# 13. Components

- Sidebar
- Topbar
- Cards
- Progress Ring
- Progress Bar
- Calendar Widget
- Statistics Card
- AI Recommendation Card
- Notification List
- Badge
- Button

---

# 14. Data Display

Hiển thị:

- Avatar
- Name
- Level
- HSK Level
- Learning Streak
- Total Courses
- Total Lessons
- Total Homework
- Progress
- Statistics
- Notifications

---

# 15. User Actions

Người dùng có thể:

- Tiếp tục học.
- Xem lịch.
- Nộp bài.
- Chat AI.
- Mở từ điển.
- Làm Quiz.
- Xem chứng chỉ.
- Cập nhật hồ sơ.

---

# 16. Business Rules

- Chỉ hiển thị khóa học đã đăng ký.
- AI Recommendation dựa trên lịch sử học.
- Chỉ hiển thị Homework còn hiệu lực.
- Dashboard được cá nhân hóa theo từng tài khoản.

---

# 17. Validation Rules

- Không hiển thị khóa học đã xóa.
- Chỉ hiển thị dữ liệu của chính học viên.
- Điểm số lấy từ kết quả mới nhất.

---

# 18. API Endpoints

- GET /api/student/dashboard
- GET /api/student/progress
- GET /api/student/courses
- GET /api/student/homework
- GET /api/student/calendar
- GET /api/student/statistics
- GET /api/student/notifications
- GET /api/student/recommendations

---

# 19. Database Tables

- users
- enrollments
- courses
- lessons
- homework
- submissions
- exams
- certificates
- notifications
- ai_recommendations

---

# 20. Permissions

Student

- Xem Dashboard của mình.

Teacher

- Không được truy cập.

Admin

- Có thể xem Dashboard của học viên để hỗ trợ.

---

# 21. Page States

Loading

Skeleton Dashboard.

Empty

"Bạn chưa đăng ký khóa học nào."

Error

"Không thể tải Dashboard."

Retry.

---

# 22. Notifications

- Homework Due Soon
- Homework Graded
- New Lesson
- Class Reminder
- Payment Success
- Achievement Unlocked

---

# 23. Responsive Design

Desktop

- 3 cột.

Tablet

- 2 cột.

Mobile

- 1 cột.

Sidebar chuyển thành Bottom Navigation.

---

# 24. Accessibility

- Keyboard Navigation
- Screen Reader
- Focus States
- Alt Text
- ARIA Labels

---

# 25. Security

- Chỉ truy cập được dữ liệu của chính mình.
- Kiểm tra JWT/Session trước khi tải Dashboard.
- Chống truy cập trái phép vào API.

---

# 26. Performance

- Dashboard tải dưới 2 giây.
- Lazy Load các widget.
- Cache dữ liệu ít thay đổi.
- Cập nhật thông báo theo thời gian thực (Realtime/WebSocket).

---

# 27. Analytics Events

- Dashboard Viewed
- Continue Learning Clicked
- AI Recommendation Clicked
- Homework Opened
- Calendar Opened
- Dictionary Opened

---

# 28. Acceptance Criteria

- Dashboard hiển thị dữ liệu chính xác theo từng học viên.
- Nút Continue Learning luôn mở đúng bài học gần nhất.
- Tiến độ học được cập nhật theo thời gian thực sau khi hoàn thành bài học.
- Responsive trên Desktop, Tablet và Mobile.
- Lighthouse Performance ≥ 90.

---

# 29. Future Improvements

- AI lập kế hoạch học theo mục tiêu HSK.
- Widget có thể kéo thả để tùy chỉnh.
- Đồng bộ với Google Calendar.
- Bảng xếp hạng học viên.
- Thử thách học tập hằng tuần.
- Pomodoro Timer tích hợp.
- AI dự đoán ngày thi HSK phù hợp.
- Đồng bộ tiến độ trên nhiều thiết bị.

---

# Related Documents

- STU-002_My_Courses.md
- STU-003_Course_Learning.md
- STU-004_Lesson.md
- AI Module
- Notification Module
- User_Flow.md
- API Specifications

---

# Notes

Student Dashboard là "trung tâm điều khiển" của toàn bộ trải nghiệm học tập. Giao diện cần trực quan, hiển thị đúng những thông tin quan trọng nhất và giúp học viên có thể bắt đầu học chỉ sau một lần nhấp chuột.