# TEA-001 - Teacher Dashboard

---

# Document Information

| Field        | Value             |
| ------------ | ----------------- |
| Page ID      | TEA-001           |
| Page Name    | Teacher Dashboard |
| Module       | Teacher Portal    |
| Version      | 1.0               |
| Status       | Draft             |
| Author       | Priti             |
| Last Updated | YYYY-MM-DD        |

---

# 1. Overview

Teacher Dashboard là trang chính dành cho giáo viên sau khi đăng nhập.

Trang này giúp giáo viên quản lý toàn bộ công việc giảng dạy bao gồm lớp học, học viên, bài tập, lịch dạy, chấm điểm, thông báo, tin nhắn và thống kê giảng dạy.

Đây là trung tâm điều khiển toàn bộ hoạt động của giáo viên.

---

# 2. Purpose

Teacher Dashboard giúp giáo viên:

- Xem lịch dạy hôm nay.
- Quản lý lớp học.
- Quản lý học viên.
- Chấm bài tập.
- Theo dõi tiến độ học viên.
- Trả lời tin nhắn.
- Theo dõi thông báo.
- Xem thống kê giảng dạy.

---

# 3. User Roles

- Teacher

(Admin có thể xem Dashboard của giáo viên khi cần hỗ trợ.)

---

# 4. Route

```
/teacher/dashboard
```

---

# 5. Layout

Teacher Layout

Bao gồm:

- Sidebar
- Topbar
- Main Dashboard
- Notification Panel

---

# 6. Navigation

Sidebar

- Dashboard
- My Classes
- Students
- Homework
- Exams
- Calendar
- Messages
- Resources
- Reports
- Profile
- Settings

---

# 7. Objectives

Sau khi mở Dashboard giáo viên có thể:

- Biết hôm nay cần làm gì.
- Vào lớp học chỉ với một lần click.
- Chấm bài nhanh.
- Theo dõi học viên.
- Trả lời tin nhắn.
- Xem lịch dạy.

---

# 8. User Stories

"Tôi muốn biết hôm nay mình có bao nhiêu lớp."

"Tôi muốn biết còn bao nhiêu bài chưa chấm."

"Tôi muốn xem học viên nào đang học kém."

"Tôi muốn trả lời học viên nhanh."

---

# 9. Entry Points

- Login
- Notification
- Email Reminder

---

# 10. Exit Points

- My Classes
- Student Detail
- Homework
- Calendar
- Messages

---

# 11. Dashboard Structure

1. Welcome Section
2. Today's Schedule
3. Pending Homework
4. My Classes
5. Student Overview
6. Student Alerts
7. Messages
8. Notifications
9. Teaching Statistics
10. Quick Actions

---

# 12. Section Details

## 12.1 Welcome Section

Hiển thị:

- Avatar
- Teacher Name
- Position
- Greeting

Ví dụ:

Good Morning, Teacher Priti!

You have 3 classes today.

---

## 12.2 Today's Schedule

Hiển thị:

- Lớp học
- Thời gian
- Hình thức học
- Số học viên
- Trạng thái

Button

Join Class

---

## 12.3 Pending Homework

Hiển thị:

- Homework cần chấm
- Speaking cần chấm
- Writing cần chấm
- Quiz Review

Button

Start Grading

---

## 12.4 My Classes

Danh sách lớp đang phụ trách.

Mỗi Class Card gồm:

- Class Name
- Course
- Number of Students
- Progress
- Next Lesson

Buttons

- Open Class
- Attendance

---

## 12.5 Student Overview

Hiển thị:

- Tổng số học viên
- Đang học
- Nghỉ học
- Hoàn thành
- Học viên mới

---

## 12.6 Student Alerts

Danh sách học viên cần quan tâm.

Ví dụ:

- Không học 7 ngày.
- Điểm thấp.
- Không nộp bài.
- Sắp hết hạn khóa học.

Có nút:

View Student

---

## 12.7 Messages

Hiển thị:

- Tin nhắn mới
- Tin nhắn chưa đọc
- Chat gần đây

Button

Open Chat

---

## 12.8 Notifications

Thông báo:

- Học viên mới
- Đăng ký mới
- Homework Submitted
- Class Reminder
- System Notice

---

## 12.9 Teaching Statistics

Hiển thị:

- Total Classes
- Total Students
- Homework Graded
- Average Student Score
- Completion Rate
- Attendance Rate

Biểu đồ:

- Số lớp theo tuần
- Tỷ lệ hoàn thành bài tập
- Điểm trung bình học viên

---

## 12.10 Quick Actions

Buttons:

- Create Homework
- Create Quiz
- Open Calendar
- Send Announcement
- View Students
- Upload Resources

---

# 13. Components

- Sidebar
- Statistics Cards
- Calendar Widget
- Class Card
- Homework Card
- Notification List
- Chart
- Progress Bar
- Button

---

# 14. Data Display

Hiển thị:

- Teacher Name
- Avatar
- Classes
- Students
- Homework
- Calendar
- Messages
- Notifications
- Statistics

---

# 15. User Actions

Giáo viên có thể:

- Mở lớp học.
- Chấm bài.
- Điểm danh.
- Xem học viên.
- Chat.
- Tạo bài tập.
- Tạo Quiz.
- Đăng thông báo.

---

# 16. Business Rules

- Chỉ hiển thị lớp được phân công.
- Chỉ xem học viên thuộc lớp mình.
- Chỉ chấm bài thuộc lớp mình.
- Thống kê cập nhật theo thời gian thực.

---

# 17. Validation Rules

- Không hiển thị dữ liệu lớp khác.
- Không sửa điểm sau khi khóa nếu không có quyền.
- Chỉ giáo viên phụ trách mới được đăng thông báo của lớp.

---

# 18. API Endpoints

- GET /api/teacher/dashboard
- GET /api/teacher/classes
- GET /api/teacher/students
- GET /api/teacher/homework
- GET /api/teacher/calendar
- GET /api/teacher/messages
- GET /api/teacher/statistics

---

# 19. Database Tables

- teachers
- classes
- students
- enrollments
- homework
- submissions
- attendance
- messages
- notifications

---

# 20. Permissions

Teacher

- Toàn quyền trong các lớp được phân công.

Admin

- Full Access.

---

# 21. Page States

Loading

Skeleton Dashboard.

---

Empty

"Bạn chưa được phân công lớp học."

---

Error

"Không thể tải Dashboard."

Retry.

---

# 22. Notifications

- New Student Joined
- Homework Submitted
- New Message
- Class Starting Soon
- Student Mentioned You

---

# 23. Responsive Design

Desktop

3 cột.

Tablet

2 cột.

Mobile

1 cột.

Sidebar chuyển thành Drawer.

---

# 24. Accessibility

- Keyboard Navigation
- Screen Reader
- Focus States
- ARIA Labels

---

# 25. Security

- JWT Authentication.
- Role-Based Access Control.
- Chỉ truy cập dữ liệu được phân quyền.
- Ghi Audit Log cho các thao tác quan trọng (chấm điểm, sửa điểm, xóa thông báo).

---

# 26. Performance

- Dashboard tải dưới 2 giây.
- Lazy Load Charts.
- Cache thống kê.
- Realtime Notification.

---

# 27. Analytics Events

- Dashboard Viewed
- Homework Opened
- Homework Graded
- Student Viewed
- Message Replied
- Announcement Created
- Calendar Opened

---

# 28. Acceptance Criteria

- Dashboard hiển thị đúng dữ liệu của giáo viên.
- Lịch dạy chính xác.
- Danh sách bài cần chấm cập nhật theo thời gian thực.
- Responsive trên Desktop, Tablet và Mobile.
- Lighthouse Performance ≥ 90.

---

# 29. Future Improvements

- AI Assistant hỗ trợ giáo viên.
- AI tự động chấm Speaking và Writing.
- AI phát hiện học viên có nguy cơ bỏ học.
- AI gợi ý bài tập theo năng lực từng học viên.
- Dashboard có thể tùy chỉnh widget.
- Đồng bộ với Google Calendar và Outlook Calendar.
- Thống kê hiệu quả giảng dạy theo từng lớp và từng khóa học.

---

# Related Documents

- TEA-002_My_Classes.md
- TEA-003_Class_Detail.md
- TEA-004_Student_Detail.md
- TEA-005_Homework_Management.md
- Calendar Module
- Notification Module
- AI Module

---

# Notes

Teacher Dashboard là trung tâm điều hành công việc của giáo viên. Thiết kế cần ưu tiên tốc độ xử lý công việc hằng ngày, giảm số lần nhấp chuột và giúp giáo viên nhanh chóng xác định các học viên hoặc nhiệm vụ cần ưu tiên.
