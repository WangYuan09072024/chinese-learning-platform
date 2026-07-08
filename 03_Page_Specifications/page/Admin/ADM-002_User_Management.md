# ADM-002 - User Management

---

# Document Information

| Field        | Value           |
| ------------ | --------------- |
| Page ID      | ADM-002         |
| Page Name    | User Management |
| Module       | Admin Portal    |
| Version      | 1.0             |
| Status       | Draft           |
| Author       | Priti           |
| Last Updated | YYYY-MM-DD      |

---

# 1. Overview

User Management là trung tâm quản lý toàn bộ tài khoản trên hệ thống.

Admin có thể tạo, chỉnh sửa, khóa, mở khóa, phân quyền, tìm kiếm và theo dõi lịch sử hoạt động của tất cả người dùng.

Hệ thống hỗ trợ nhiều loại tài khoản như Student, Teacher, Assistant Teacher, Admin và Super Admin.

---

# 2. Purpose

Trang giúp Admin:

- Quản lý toàn bộ tài khoản.
- Phân quyền người dùng.
- Theo dõi trạng thái.
- Theo dõi lịch sử đăng nhập.
- Quản lý xác thực.
- Khóa hoặc mở khóa tài khoản.
- Import / Export dữ liệu.

---

# 3. User Roles

- Super Admin
- Admin (được phân quyền)

---

# 4. Route

```
/admin/users
```

---

# 5. Layout

Admin Layout

Bao gồm:

- Sidebar
- Topbar
- Statistics Cards
- Search & Filter
- User Table
- Pagination
- Right Detail Drawer (tùy chọn)

---

# 6. Navigation

Dashboard

↓

User Management

↓

User Detail

---

# 7. Objectives

Admin có thể:

- Quản lý mọi tài khoản từ một nơi.
- Tìm kiếm người dùng trong vài giây.
- Phân quyền chính xác.
- Kiểm tra lịch sử hoạt động.

---

# 8. User Stories

"Tôi muốn tìm học viên theo email."

"Tôi muốn khóa tài khoản spam."

"Tôi muốn đổi quyền Teacher thành Admin."

"Tôi muốn xem lịch sử đăng nhập của người dùng."

---

# 9. Entry Points

- Dashboard
- Global Search
- Notifications

---

# 10. Exit Points

- User Detail
- Role Management
- Activity Logs

---

# 11. Page Structure

1. Header
2. Statistics
3. Search
4. Filters
5. User Table
6. Bulk Actions
7. Quick Actions
8. Activity Summary

---

# 12. Section Details

## 12.1 Header

Hiển thị:

- User Management
- Total Users

Buttons:

- Add User
- Import Users
- Export Users

---

## 12.2 Statistics

Hiển thị:

- Total Users
- Students
- Teachers
- Admins
- Active Users
- Suspended Users
- Pending Verification

---

## 12.3 Search

Hỗ trợ tìm theo:

- User ID
- Name
- Email
- Phone
- Username

Realtime Search.

---

## 12.4 Filters

Theo Role:

- Student
- Teacher
- Assistant Teacher
- Admin
- Super Admin

Theo Status:

- Active
- Suspended
- Pending
- Deleted

Theo Verification:

- Verified
- Unverified

Theo Login Status:

- Online
- Offline

Theo Registration Date.

---

## 12.5 Sort

- Newest
- Oldest
- Name A-Z
- Last Login
- Registration Date

---

## 12.6 User Table

Mỗi dòng gồm:

- Avatar
- User ID
- Full Name
- Email
- Phone
- Role
- Status
- Last Login
- Registration Date

Actions:

- View
- Edit
- Reset Password
- Change Role
- Suspend
- Delete

---

## 12.7 Bulk Actions

Cho phép chọn nhiều tài khoản để:

- Activate
- Suspend
- Delete
- Change Role
- Export
- Send Notification
- Assign Teacher
- Reset Password

---

## 12.8 Quick Actions

- Add Student
- Add Teacher
- Add Admin
- Import CSV
- Export Excel
- Send Announcement

---

## 12.9 Activity Summary

Hiển thị:

- Users Created Today
- New Registrations
- Failed Login Attempts
- Password Reset Requests

---

# 13. User Detail Drawer

Khi click một người dùng sẽ mở Drawer hoặc trang chi tiết gồm:

## Profile

- Avatar
- Full Name
- Username
- Gender
- Birthday
- Nationality

---

## Contact

- Email
- Phone
- Address

---

## Account

- User ID
- Role
- Status
- Membership
- Registration Date

---

## Security

- 2FA Status
- Email Verified
- Phone Verified
- Last Password Change
- Last Login
- Login Devices

---

## Learning / Teaching Information

Student:

- Courses
- Progress
- Certificates

Teacher:

- Classes
- Students
- Rating

---

## Activity Logs

- Login
- Logout
- Payment
- Course Purchase
- Homework
- AI Usage

---

# 14. User Actions

Admin có thể:

- Thêm tài khoản.
- Sửa thông tin.
- Đổi vai trò.
- Đổi trạng thái.
- Đặt lại mật khẩu.
- Gửi email.
- Gửi thông báo.
- Khóa tài khoản.
- Xóa tài khoản.
- Xem nhật ký hoạt động.
- Đăng nhập với tư cách người dùng (Super Admin).

---

# 15. Business Rules

- Email phải là duy nhất.
- Số điện thoại không được trùng (nếu bắt buộc).
- Super Admin không thể bị xóa bởi Admin.
- Không được tự hạ quyền của chính mình.
- Mọi thay đổi quyền đều phải ghi Audit Log.

---

# 16. Validation Rules

- Email hợp lệ.
- Username duy nhất.
- Role hợp lệ.
- Không xóa tài khoản đang sở hữu dữ liệu quan trọng nếu chưa chuyển quyền.

---

# 17. API Endpoints

- GET /api/admin/users
- GET /api/admin/users/{id}
- POST /api/admin/users
- PUT /api/admin/users/{id}
- DELETE /api/admin/users/{id}
- POST /api/admin/users/import
- GET /api/admin/users/export
- POST /api/admin/users/reset-password
- POST /api/admin/users/change-role

---

# 18. Database Tables

- users
- user_profiles
- roles
- permissions
- user_roles
- login_history
- activity_logs
- devices

---

# 19. Permissions

Super Admin

- Full Access.

Admin

- Theo quyền được cấp.

---

# 20. Page States

Loading

Skeleton Table.

---

Empty

"Không tìm thấy người dùng."

---

Error

"Không thể tải dữ liệu."

Retry.

---

# 21. Notifications

- New User Registered
- Account Suspended
- Password Reset
- Role Changed
- Login Failed

---

# 22. Responsive Design

Desktop

Data Table đầy đủ.

Tablet

Bảng cuộn ngang.

Mobile

Card Layout.

---

# 23. Accessibility

- Keyboard Navigation
- Screen Reader
- Focus States
- ARIA Labels

---

# 24. Security

- RBAC.
- MFA Support.
- Audit Logs.
- Session Management.
- CSRF Protection.
- Rate Limiting.
- Login History.

---

# 25. Performance

- Server-side Pagination.
- Server-side Filtering.
- Server-side Sorting.
- Lazy Loading.
- Debounced Search.

---

# 26. Analytics Events

- User Created
- User Updated
- User Deleted
- Role Changed
- Password Reset
- Login As User
- Export Users

---

# 27. Acceptance Criteria

- Có thể quản lý hàng trăm nghìn tài khoản.
- Bộ lọc hoạt động chính xác.
- Tìm kiếm dưới 1 giây.
- Responsive trên Desktop, Tablet và Mobile.
- Lighthouse Performance ≥ 90.

---

# 28. Future Improvements

- AI phát hiện tài khoản bất thường.
- AI phát hiện spam.
- AI gợi ý phân quyền.
- Đồng bộ LDAP / Google Workspace / Microsoft Entra ID.
- Hỗ trợ SSO (Single Sign-On).
- Nhật ký hoạt động theo thời gian thực.
- Dashboard thống kê theo từng nhóm người dùng.

---

# Related Documents

- ADM-001_Dashboard.md
- ADM-003_Role_Management.md
- ADM-004_Student_Management.md
- ADM-005_Teacher_Management.md
- System Module
- Authentication Module

---

# Notes

User Management là nền tảng của toàn bộ hệ thống quản trị. Mọi thao tác liên quan đến tài khoản và phân quyền cần được ghi nhận trong Audit Log để đảm bảo khả năng truy vết, bảo mật và tuân thủ các yêu cầu vận hành.
