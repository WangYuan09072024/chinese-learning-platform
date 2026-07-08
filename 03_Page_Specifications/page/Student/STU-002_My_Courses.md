# STU-002 - My Courses

---

# Document Information

| Field        | Value          |
| ------------ | -------------- |
| Page ID      | STU-002        |
| Page Name    | My Courses     |
| Module       | Student Portal |
| Version      | 1.0            |
| Status       | Draft          |
| Author       | Priti          |
| Last Updated | YYYY-MM-DD     |

---

# 1. Overview

My Courses là trang quản lý toàn bộ khóa học mà học viên đã đăng ký hoặc được cấp quyền truy cập.

Trang giúp học viên theo dõi tiến độ học tập, tiếp tục học nhanh, tìm kiếm khóa học và quản lý thư viện học tập cá nhân.

---

# 2. Purpose

Trang giúp học viên:

- Xem tất cả khóa học.
- Tiếp tục học.
- Theo dõi tiến độ.
- Tìm kiếm khóa học.
- Sắp xếp khóa học.
- Lọc khóa học.
- Xem chứng chỉ sau khi hoàn thành.

---

# 3. User Roles

- Student

---

# 4. Route

```
/student/my-courses
```

---

# 5. Layout

Student Layout

Bao gồm:

- Sidebar
- Topbar
- Filter Bar
- Course Grid
- Footer

---

# 6. Navigation

Dashboard

↓

My Courses

↓

Course Learning

---

# 7. Objectives

Sau khi vào trang này, học viên có thể:

- Biết mình đang học bao nhiêu khóa.
- Tiếp tục học trong một lần nhấp.
- Tìm khóa học nhanh.
- Xem tiến độ của từng khóa.

---

# 8. User Stories

"Tôi muốn xem toàn bộ khóa học mình đã mua."

"Tôi muốn tiếp tục học ngay từ bài gần nhất."

"Tôi muốn biết mình còn bao nhiêu khóa chưa học."

"Tôi muốn xem khóa nào đã hoàn thành."

---

# 9. Entry Points

- Dashboard
- Notification
- Search
- Continue Learning

---

# 10. Exit Points

- Course Learning
- Lesson
- Certificate
- Course Detail

---

# 11. Page Structure

1. Page Header
2. Learning Summary
3. Search Bar
4. Filter & Sort
5. Course Categories
6. Course Grid
7. Continue Learning
8. AI Recommendations
9. Learning Statistics

---

# 12. Section Details

## 12.1 Page Header

Hiển thị:

- My Courses
- Tổng số khóa học
- Tổng số khóa đang học

---

## 12.2 Learning Summary

Hiển thị:

- Total Courses
- In Progress
- Completed
- Not Started
- Certificates Earned
- Average Progress

---

## 12.3 Search Bar

Cho phép tìm theo:

- Tên khóa học
- Giáo viên
- HSK Level
- Chủ đề

Hỗ trợ tìm kiếm tức thời (Real-time Search).

---

## 12.4 Filter & Sort

### Filter

- All
- In Progress
- Completed
- Not Started
- Favorites

Theo HSK:

- HSK1
- HSK2
- HSK3
- HSK4
- HSK5
- HSK6

Theo loại:

- Free
- Premium

---

### Sort

- Recently Studied
- Recently Purchased
- A → Z
- Progress
- Completion Date

---

## 12.5 Course Categories

Hiển thị theo nhóm:

- HSK Courses
- Speaking
- Grammar
- Vocabulary
- Business Chinese
- Travel Chinese
- Writing
- HSKK

---

## 12.6 Course Grid

Mỗi Course Card gồm:

- Thumbnail
- Course Name
- Teacher
- HSK Level
- Progress Bar
- Last Studied
- Time Remaining (ước tính)
- Next Lesson
- Status Badge

### Status

- Not Started
- In Progress
- Completed

Buttons:

- Continue Learning
- View Details
- Certificate (nếu có)

---

## 12.7 Continue Learning

Hiển thị khóa học gần nhất.

Bao gồm:

- Thumbnail
- Lesson đang học
- Chapter
- Progress

Button

Continue

---

## 12.8 AI Recommendations

AI phân tích:

- Khóa nên học tiếp.
- Khóa nên ôn tập.
- Khóa phù hợp với mục tiêu HSK.
- Đề xuất bài luyện nói hoặc luyện nghe bổ sung.

---

## 12.9 Learning Statistics

Hiển thị:

- Tổng giờ học
- Tổng bài học đã hoàn thành
- Tổng video đã xem
- Tổng bài tập đã nộp
- Tỷ lệ hoàn thành
- Thời gian học trung bình mỗi ngày

---

# 13. Components

- Search Box
- Filter Chips
- Dropdown
- Course Card
- Progress Bar
- Badge
- Statistics Card
- AI Suggestion Card
- Pagination / Infinite Scroll

---

# 14. Data Display

Mỗi khóa học hiển thị:

- Course ID
- Thumbnail
- Course Name
- Teacher
- Category
- HSK Level
- Progress (%)
- Lessons Completed
- Total Lessons
- Last Access Time
- Next Lesson
- Enrollment Date
- Completion Status

---

# 15. User Actions

Người dùng có thể:

- Tiếp tục học.
- Xem chi tiết khóa học.
- Tìm kiếm.
- Lọc.
- Sắp xếp.
- Đánh dấu yêu thích.
- Xem chứng chỉ.
- Chia sẻ chứng chỉ.

---

# 16. Business Rules

- Chỉ hiển thị các khóa học đã đăng ký.
- Khóa học hết hạn sẽ hiển thị trạng thái "Expired".
- Khóa học hoàn thành sẽ mở nút tải chứng chỉ nếu đáp ứng điều kiện.
- AI Recommendation dựa trên tiến độ và lịch sử học.

---

# 17. Validation Rules

- Không hiển thị khóa học đã bị xóa khỏi hệ thống.
- Chỉ học viên sở hữu khóa học mới xem được tiến độ.
- Tiến độ được tính theo số bài học hoàn thành.

---

# 18. API Endpoints

- GET /api/student/courses
- GET /api/student/course-progress
- GET /api/student/recommendations
- GET /api/student/certificates

---

# 19. Database Tables

- users
- courses
- enrollments
- course_progress
- lessons
- certificates
- teachers

---

# 20. Permissions

Student

- Quản lý và xem khóa học của chính mình.

Teacher

- Không truy cập.

Admin

- Có thể xem để hỗ trợ.

---

# 21. Page States

Loading

Skeleton Course Cards.

---

Empty

"Bạn chưa đăng ký khóa học nào."

Hiển thị nút:

Browse Courses

---

Error

"Không thể tải danh sách khóa học."

Retry.

---

# 22. Notifications

- New Lesson Available
- Course Completed
- Certificate Ready
- Course Expiring Soon

---

# 23. Responsive Design

Desktop

Grid 4 cột.

Tablet

Grid 2 cột.

Mobile

Grid 1 cột.

Filter chuyển thành Bottom Sheet.

---

# 24. Accessibility

- Keyboard Navigation
- Screen Reader
- Focus States
- ARIA Labels
- Alt Text

---

# 25. Security

- Chỉ hiển thị khóa học thuộc tài khoản hiện tại.
- Kiểm tra quyền truy cập trước khi mở khóa học.
- Không để lộ tài nguyên Premium qua URL trực tiếp.

---

# 26. Performance

- Lazy Load Course Cards.
- Cache danh sách khóa học.
- Debounce Search.
- Ảnh thumbnail tối ưu bằng CDN.

---

# 27. Analytics Events

- My Courses Viewed
- Course Continued
- Course Filter Applied
- Course Search Used
- Certificate Opened
- AI Recommendation Clicked

---

# 28. Acceptance Criteria

- Danh sách khóa học hiển thị chính xác.
- Tiến độ đồng bộ theo thời gian thực.
- Bộ lọc và tìm kiếm hoạt động chính xác.
- Responsive trên Desktop, Tablet và Mobile.
- Lighthouse Performance ≥ 90.

---

# 29. Future Improvements

- Tạo Collection cá nhân.
- Ghim khóa học yêu thích.
- So sánh tiến độ với mục tiêu học tập.
- AI dự đoán ngày hoàn thành.
- Đồng bộ tiến độ giữa Web và Mobile App.
- Chế độ học Offline (PWA).

---

# Related Documents

- STU-001_Dashboard.md
- STU-003_Course_Learning.md
- PUB-004_Course_Detail.md
- Certificate Module
- AI Module
- User_Flow.md

---

# Notes

My Courses là thư viện học tập cá nhân của học viên. Thiết kế cần ưu tiên tốc độ truy cập, khả năng quản lý nhiều khóa học và giúp học viên quay lại bài học chỉ với một lần nhấp, đồng thời tạo động lực hoàn thành toàn bộ lộ trình học.
