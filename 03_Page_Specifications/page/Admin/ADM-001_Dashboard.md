# ADM-001 - Admin Dashboard

---

# Document Information

| Field        | Value           |
| ------------ | --------------- |
| Page ID      | ADM-001         |
| Page Name    | Admin Dashboard |
| Module       | Admin Portal    |
| Version      | 1.0             |
| Status       | Draft           |
| Author       | Priti           |
| Last Updated | YYYY-MM-DD      |

---

# 1. Overview

Admin Dashboard là trung tâm điều hành của toàn bộ nền tảng học tiếng Trung.

Trang này cung cấp cái nhìn tổng quan theo thời gian thực về học viên, giáo viên, khóa học, doanh thu, hệ thống, AI và các hoạt động trên website.

Đây là trang đầu tiên Admin nhìn thấy sau khi đăng nhập.

---

# 2. Purpose

Dashboard giúp Admin:

- Theo dõi hoạt động toàn hệ thống.
- Theo dõi doanh thu.
- Quản lý học viên.
- Quản lý giáo viên.
- Theo dõi khóa học.
- Theo dõi AI.
- Theo dõi thanh toán.
- Theo dõi hệ thống.

---

# 3. User Roles

- Super Admin
- Admin
- Operation Manager (nếu được phân quyền)
- Finance Manager (quyền giới hạn)

---

# 4. Route

```
/admin/dashboard
```

---

# 5. Layout

Admin Layout

Bao gồm

- Sidebar
- Top Navigation
- Dashboard Widgets
- Notification Center

---

# 6. Navigation

Sidebar

- Dashboard
- Users
- Students
- Teachers
- Courses
- Classes
- Homework
- Exams
- AI
- Dictionary
- Payments
- Reports
- CMS
- Notifications
- System
- Logs
- Settings

---

# 7. Objectives

Admin có thể:

- Theo dõi toàn bộ hệ thống.
- Phát hiện vấn đề nhanh.
- Quản lý mọi dữ liệu.
- Đưa ra quyết định dựa trên thống kê.

---

# 8. User Stories

"Tôi muốn biết hôm nay hệ thống hoạt động như thế nào."

"Tôi muốn biết doanh thu hôm nay."

"Tôi muốn biết có bao nhiêu học viên mới."

"Tôi muốn biết website có lỗi không."

---

# 9. Entry Points

- Login

---

# 10. Exit Points

- User Management
- Course Management
- Payment Management
- Reports
- System Monitor

---

# 11. Dashboard Structure

1. Welcome Section
2. Quick Statistics
3. Revenue Overview
4. User Statistics
5. Course Statistics
6. AI Statistics
7. Payment Overview
8. Teacher Overview
9. Student Alerts
10. System Health
11. Recent Activities
12. Notifications
13. Quick Actions

---

# 12. Section Details

## 12.1 Welcome Section

Hiển thị

- Admin Avatar
- Name
- Role
- Current Time
- System Status

---

## 12.2 Quick Statistics

Hiển thị

- Total Users
- Students
- Teachers
- Courses
- Classes
- Active Sessions

---

## 12.3 Revenue Overview

Hiển thị

- Revenue Today
- Revenue This Week
- Revenue This Month
- Revenue This Year

Biểu đồ

- Revenue Trend
- Orders
- Conversion Rate

---

## 12.4 User Statistics

Hiển thị

- New Students
- New Teachers
- Active Users
- Daily Active Users
- Monthly Active Users

Biểu đồ

- User Growth
- Active Users

---

## 12.5 Course Statistics

Hiển thị

- Total Courses
- Active Courses
- Best Seller
- Most Viewed
- Completion Rate

---

## 12.6 AI Statistics

Hiển thị

- AI Chats
- Speaking Sessions
- Writing Corrections
- Tokens Used
- AI Response Time
- AI Error Rate

---

## 12.7 Payment Overview

Hiển thị

- Successful Payments
- Pending Payments
- Failed Payments
- Refund Requests
- Coupon Usage

---

## 12.8 Teacher Overview

Hiển thị

- Active Teachers
- Classes Today
- Homework Waiting
- Average Rating

---

## 12.9 Student Alerts

Hiển thị

- Students At Risk
- Students Inactive
- Students Need Support

Có nút

View Details

---

## 12.10 System Health

Hiển thị

- Server Status
- API Status
- Database Status
- Storage Usage
- CPU Usage
- Memory Usage
- Queue Status

---

## 12.11 Recent Activities

Hiển thị

- New Registration
- Course Purchased
- Homework Submitted
- Teacher Assigned
- AI Usage

---

## 12.12 Notifications

Thông báo

- System Updates
- Payment Failed
- Server Warning
- Security Alerts
- New Support Ticket

---

## 12.13 Quick Actions

Buttons

- Create Course
- Add Teacher
- Add Student
- Publish Announcement
- Create Coupon
- View Reports

---

# 13. Components

- Statistics Cards
- Revenue Charts
- Line Chart
- Pie Chart
- Data Tables
- Activity Timeline
- Notification List
- Progress Bars
- Health Indicators
- Quick Action Cards

---

# 14. Data Display

Hiển thị

- Users
- Students
- Teachers
- Courses
- Classes
- Revenue
- Payments
- AI Usage
- Server Metrics
- Notifications

---

# 15. User Actions

Admin có thể

- Quản lý người dùng.
- Quản lý khóa học.
- Quản lý giáo viên.
- Quản lý học viên.
- Quản lý thanh toán.
- Xuất báo cáo.
- Theo dõi hệ thống.

---

# 16. Business Rules

- Dashboard hiển thị dữ liệu theo quyền của từng Admin.
- Thống kê cập nhật theo thời gian thực.
- Chỉ Super Admin xem được toàn bộ dữ liệu tài chính và hệ thống.

---

# 17. Validation Rules

- Không hiển thị dữ liệu ngoài phạm vi quyền.
- Báo cáo doanh thu lấy từ giao dịch đã xác nhận.
- Thống kê phải đồng bộ với dữ liệu gốc.

---

# 18. API Endpoints

- GET /api/admin/dashboard
- GET /api/admin/statistics
- GET /api/admin/revenue
- GET /api/admin/system
- GET /api/admin/activities
- GET /api/admin/notifications

---

# 19. Database Tables

- users
- students
- teachers
- courses
- classes
- orders
- payments
- ai_logs
- notifications
- system_logs

---

# 20. Permissions

Super Admin

- Full Access.

Admin

- Theo quyền được cấp.

Manager

- Quyền giới hạn theo module.

---

# 21. Page States

Loading

Skeleton Dashboard.

---

Empty

"Không có dữ liệu."

---

Error

"Không thể tải Dashboard."

Retry.

---

# 22. Notifications

- New Student Registered
- Payment Failed
- Server Offline
- AI Service Error
- New Teacher Joined
- Backup Completed

---

# 23. Responsive Design

Desktop

4 cột Dashboard.

Tablet

2 cột.

Mobile

1 cột.

---

# 24. Accessibility

- Keyboard Navigation
- Screen Reader
- High Contrast
- ARIA Labels

---

# 25. Security

- RBAC (Role-Based Access Control).
- Multi-Factor Authentication.
- Audit Logs.
- Session Management.
- IP Whitelist (tùy chọn).
- Mã hóa dữ liệu nhạy cảm.

---

# 26. Performance

- Dashboard tải dưới 2 giây.
- Realtime qua WebSocket.
- Cache thống kê.
- Lazy Load Charts.

---

# 27. Analytics Events

- Dashboard Viewed
- Report Exported
- Revenue Opened
- User Managed
- Course Created
- Coupon Created
- System Checked

---

# 28. Acceptance Criteria

- Thống kê hiển thị chính xác.
- Biểu đồ cập nhật theo thời gian thực.
- Chỉ hiển thị dữ liệu theo quyền.
- Responsive trên Desktop, Tablet và Mobile.
- Lighthouse Performance ≥ 90.

---

# 29. Future Improvements

- AI Business Assistant phân tích doanh thu.
- AI dự báo số lượng học viên.
- AI phát hiện gian lận thanh toán.
- Dashboard tùy chỉnh bằng kéo thả widget.
- Heatmap hoạt động theo giờ.
- Báo cáo tự động gửi email.
- Theo dõi KPI theo từng giáo viên.

---

# Related Documents

- ADM-002_User_Management.md
- ADM-003_Course_Management.md
- ADM-004_Payment_Management.md
- ADM-005_System_Monitor.md
- Reports Module
- Notification Module
- AI Module

---

# Notes

Admin Dashboard là bảng điều khiển tổng hợp của toàn bộ hệ thống. Thiết kế cần ưu tiên khả năng quan sát nhanh, hỗ trợ ra quyết định, phát hiện sự cố sớm và giảm số lần chuyển trang khi thực hiện các tác vụ quản trị.
