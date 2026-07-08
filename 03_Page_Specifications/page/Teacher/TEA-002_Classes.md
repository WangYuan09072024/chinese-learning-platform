# TEA-002 - My Classes

---

# Document Information

| Field        | Value          |
| ------------ | -------------- |
| Page ID      | TEA-002        |
| Page Name    | My Classes     |
| Module       | Teacher Portal |
| Version      | 1.0            |
| Status       | Draft          |
| Author       | Priti          |
| Last Updated | YYYY-MM-DD     |

---

# 1. Overview

My Classes là trang quản lý tất cả các lớp học mà giáo viên đang phụ trách.

Trang này giúp giáo viên theo dõi thông tin lớp học, số lượng học viên, lịch học, tiến độ giảng dạy, điểm danh, bài tập và nhanh chóng truy cập vào trang quản lý chi tiết của từng lớp.

Đây là trang được giáo viên sử dụng hằng ngày để quản lý việc giảng dạy.

---

# 2. Purpose

Giúp giáo viên:

- Xem tất cả lớp đang dạy.
- Tìm kiếm lớp.
- Lọc lớp.
- Xem tiến độ từng lớp.
- Mở trang quản lý lớp.
- Điểm danh.
- Giao bài tập.
- Gửi thông báo.

---

# 3. User Roles

- Teacher

(Admin có thể xem tất cả lớp.)

---

# 4. Route

```
/teacher/classes
```

---

# 5. Layout

Teacher Layout

Bao gồm

- Sidebar
- Topbar
- Filter Bar
- Class Grid / Table
- Footer

---

# 6. Navigation

Dashboard

↓

My Classes

↓

Class Detail

---

# 7. Objectives

Giáo viên có thể:

- Biết mình đang quản lý bao nhiêu lớp.
- Biết lớp nào sắp học.
- Biết lớp nào còn chậm tiến độ.
- Mở lớp chỉ với 1 click.

---

# 8. User Stories

"Tôi muốn xem toàn bộ lớp mình đang phụ trách."

"Tôi muốn tìm nhanh lớp HSK3."

"Tôi muốn biết lớp nào chưa học bài mới."

"Tôi muốn mở lớp để điểm danh."

---

# 9. Entry Points

- Dashboard
- Calendar
- Notification

---

# 10. Exit Points

- Class Detail
- Attendance
- Homework
- Student List
- Schedule

---

# 11. Page Structure

1. Page Header
2. Teaching Summary
3. Search
4. Filter
5. Sort
6. Class Cards
7. Calendar View
8. Teaching Statistics

---

# 12. Section Details

## 12.1 Page Header

Hiển thị

- My Classes
- Tổng số lớp
- Tổng học viên

Button

Create Announcement (nếu có quyền)

---

## 12.2 Teaching Summary

Hiển thị

- Active Classes
- Total Students
- Classes Today
- Average Attendance
- Homework Pending

---

## 12.3 Search

Tìm theo

- Class Name
- Course
- Teacher
- Student Name

Realtime Search.

---

## 12.4 Filter

Theo trạng thái

- Active
- Upcoming
- Completed
- Archived

Theo khóa học

- HSK1
- HSK2
- HSK3
- HSK4
- HSK5
- HSK6
- Speaking
- Grammar
- Business Chinese

Theo hình thức

- Online
- Offline
- Hybrid

---

## 12.5 Sort

- Recently Updated
- Class Name
- Student Count
- Progress
- Next Class Date

---

## 12.6 Class Cards

Mỗi Class Card gồm

- Class Avatar
- Class Name
- Course Name
- Teacher
- Student Count
- Schedule
- Progress
- Attendance Rate
- Next Lesson
- Status

Buttons

- Open Class
- Attendance
- Homework
- Messages

---

## 12.7 Calendar View

Hiển thị lịch theo

- Month
- Week
- Day

Có thể click trực tiếp vào lớp.

---

## 12.8 Teaching Statistics

Hiển thị

- Số lớp đang dạy
- Tổng học viên
- Tỷ lệ hoàn thành khóa
- Điểm trung bình
- Tỷ lệ đi học
- Homework Completion Rate

Biểu đồ

- Attendance Trend
- Student Progress
- Homework Completion

---

# 13. Components

- Search Box
- Filter Chips
- Dropdown
- Class Card
- Calendar
- Statistics Cards
- Progress Bar
- Chart
- Badge
- Pagination

---

# 14. Data Display

Hiển thị

- Class ID
- Class Name
- Course
- Teacher
- Students
- Schedule
- Progress
- Attendance
- Status
- Created Date

---

# 15. User Actions

Giáo viên có thể

- Mở lớp.
- Điểm danh.
- Xem học viên.
- Xem tiến độ.
- Giao bài.
- Gửi thông báo.
- Chat với lớp.
- Xuất danh sách học viên (Excel/PDF nếu được cấp quyền).

---

# 16. Business Rules

- Giáo viên chỉ nhìn thấy lớp được phân công.
- Một lớp có thể có nhiều giáo viên (Teacher, Assistant Teacher).
- Một giáo viên có thể phụ trách nhiều lớp.
- Lớp đã kết thúc sẽ chuyển sang Archived.

---

# 17. Validation Rules

- Không hiển thị lớp chưa được phân công.
- Không chỉnh sửa lớp nếu không có quyền.
- Không xóa lớp từ giao diện giáo viên.

---

# 18. API Endpoints

- GET /api/teacher/classes
- GET /api/teacher/classes/{id}
- GET /api/teacher/classes/statistics
- GET /api/teacher/classes/calendar
- POST /api/teacher/classes/search

---

# 19. Database Tables

- classes
- class_teachers
- class_students
- schedules
- attendance
- course_progress
- announcements

---

# 20. Permissions

Teacher

- Xem lớp được phân công.
- Điểm danh.
- Giao bài.
- Gửi thông báo.

Admin

- Full Access.

---

# 21. Page States

Loading

Skeleton Cards.

---

Empty

"Bạn chưa được phân công lớp học nào."

---

Error

"Không thể tải danh sách lớp."

Retry.

---

# 22. Notifications

- New Student Joined
- Student Left Class
- Upcoming Class
- Attendance Missing
- Homework Deadline

---

# 23. Responsive Design

Desktop

Grid 3–4 cột.

Tablet

Grid 2 cột.

Mobile

Grid 1 cột.

Calendar chuyển sang dạng danh sách.

---

# 24. Accessibility

- Keyboard Navigation
- Screen Reader
- Focus States
- ARIA Labels

---

# 25. Security

- Role-Based Access Control.
- Chỉ truy cập lớp được phân quyền.
- Audit Log cho các thao tác quan trọng.
- Chống truy cập trái phép vào dữ liệu lớp.

---

# 26. Performance

- Lazy Load Class Cards.
- Cache danh sách lớp.
- Realtime Attendance.
- Realtime Student Status.

---

# 27. Analytics Events

- My Classes Viewed
- Class Opened
- Attendance Started
- Homework Created
- Announcement Sent
- Student Viewed

---

# 28. Acceptance Criteria

- Hiển thị đúng danh sách lớp của giáo viên.
- Bộ lọc và tìm kiếm hoạt động chính xác.
- Calendar hiển thị đúng lịch học.
- Responsive trên Desktop, Tablet và Mobile.
- Lighthouse Performance ≥ 90.

---

# 29. Future Improvements

- AI phân tích sức khỏe từng lớp học.
- AI đề xuất tốc độ giảng dạy.
- Tự động chia nhóm học viên theo trình độ.
- Theo dõi mức độ tương tác của học viên trong lớp.
- Heatmap điểm danh theo từng tuần.
- Dashboard riêng cho từng lớp.
- Tích hợp Zoom/Google Meet/Tencent Meeting.

---

# Related Documents

- TEA-001_Dashboard.md
- TEA-003_Class_Detail.md
- TEA-004_Student_Detail.md
- Calendar Module
- Homework Module
- Notification Module

---

# Notes

My Classes là thư viện quản lý lớp học của giáo viên. Trang cần tối ưu để giáo viên có thể truy cập nhanh vào từng lớp, theo dõi tiến độ giảng dạy và thực hiện các tác vụ như điểm danh, giao bài tập hoặc gửi thông báo với số thao tác tối thiểu.
