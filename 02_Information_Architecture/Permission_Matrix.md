# Permission Matrix

## Overview

Permission Matrix định nghĩa toàn bộ hệ thống phân quyền của Chinese Learning Platform.

Hệ thống sử dụng mô hình Role-Based Access Control (RBAC).

Mỗi người dùng được gán một hoặc nhiều Role.

Mỗi Role sẽ được cấp các Permission cụ thể.

Permission quyết định người dùng được phép thực hiện hành động nào trong hệ thống.

---

# Roles

Hệ thống bao gồm các Role sau:

1. Guest

2. Student

3. Teacher

4. Teaching Assistant

5. Content Manager

6. Finance Staff

7. Customer Support

8. Admin

9. Super Admin

---

# Permission Types

Mỗi module sẽ sử dụng các loại quyền sau:

View

Create

Edit

Delete

Approve

Assign

Publish

Export

Import

Manage

---

# Permission Matrix

| Module        |  Guest  |  Student   | Teacher  |    TA    | Content  | Finance | Support  | Admin  | Super Admin |
| ------------- | :-----: | :--------: | :------: | :------: | :------: | :-----: | :------: | :----: | :---------: |
| Dashboard     |  View   |    View    |   View   |   View   |   View   |  View   |   View   | Manage |   Manage    |
| Profile       |  View   |    Edit    |   Edit   |   Edit   |   Edit   |  Edit   |   Edit   | Manage |   Manage    |
| Courses       |  View   |    View    |   Edit   |   Edit   |  Manage  |  View   |   View   | Manage |   Manage    |
| Lessons       |  View   |    View    |   Edit   |   Edit   |  Manage  |  View   |   View   | Manage |   Manage    |
| Homework      |  None   |   Submit   |  Create  |  Review  |   View   |  View   |   View   | Manage |   Manage    |
| Exams         |  View   |    Take    |  Create  |  Review  |  Manage  |  View   |   View   | Manage |   Manage    |
| Dictionary    |  View   |    View    |   Edit   |   Edit   |  Manage  |  View   |   View   | Manage |   Manage    |
| Flashcards    |  None   |   Manage   |  Manage  |  Manage  |  Manage  |  None   |   None   | Manage |   Manage    |
| AI Module     | Limited |    Use     |   Use    |   Use    |   Use    |  View   |   View   | Manage |   Manage    |
| Messages      |  None   |    Send    |   Send   |   Send   |   View   |  View   |   View   | Manage |   Manage    |
| Calendar      |  View   |    View    |  Manage  |  Manage  |   View   |  View   |   View   | Manage |   Manage    |
| Certificates  |  None   |    View    |  Create  |  Create  |  Manage  |  View   |   View   | Manage |   Manage    |
| Payment       |  None   |    Pay     |   View   |   View   |   View   | Manage  |   View   | Manage |   Manage    |
| Reports       |  None   |    View    |   View   |   View   |   View   | Finance |   View   | Manage |   Manage    |
| Users         |  None   |    None    |   None   |   None   |   None   |  None   |   View   | Manage |   Manage    |
| Teachers      |  None   |    None    |   View   |   View   |   None   |  None   |   View   | Manage |   Manage    |
| Students      |  None   | View(Self) |  Manage  |  Manage  |   None   |  None   |  Manage  | Manage |   Manage    |
| Notifications |  View   |    View    |   View   |   View   |   View   |  View   |  Manage  | Manage |   Manage    |
| Community     |  View   |   Create   | Moderate | Moderate | Moderate |  None   | Moderate | Manage |   Manage    |
| Files         |  None   |   Upload   |  Upload  |  Upload  |  Upload  | Upload  |  Upload  | Manage |   Manage    |
| Settings      |  None   |    Self    |   Self   |   Self   |   None   |  None   |   None   | Manage |   Manage    |
| System        |  None   |    None    |   None   |   None   |   None   |  None   |   None   |  View  |   Manage    |

---

# Detailed Permissions

## Guest

Có thể:

- Xem trang chủ
- Xem khóa học miễn phí
- Tra từ điển
- Đọc Blog
- Đăng ký
- Đăng nhập

Không thể:

- Học khóa Premium
- Chat
- Làm bài tập
- Thanh toán
- Xem Dashboard

---

## Student

Có thể:

- Học bài
- Làm bài tập
- Thi thử
- Chat AI
- Thanh toán
- Xem điểm
- Xem chứng chỉ
- Quản lý hồ sơ cá nhân

Không thể:

- Tạo khóa học
- Chấm điểm
- Xóa dữ liệu người khác
- Quản lý học viên

---

## Teacher

Có thể:

- Tạo lớp
- Quản lý lớp
- Chấm bài
- Giao bài tập
- Đăng tài liệu
- Xem học viên của mình
- Chat với học viên

Không thể:

- Quản lý tài khoản Admin
- Thay đổi System Settings
- Quản lý tài chính toàn hệ thống

---

## Teaching Assistant

Có thể:

- Hỗ trợ giáo viên
- Điểm danh
- Chấm bài
- Trả lời học viên
- Theo dõi tiến độ học

Không thể:

- Xóa khóa học
- Quản lý tài khoản giáo viên
- Thay đổi quyền

---

## Content Manager

Có thể:

- Quản lý khóa học
- Quản lý bài học
- Quản lý Blog
- Quản lý từ điển
- Quản lý Flashcards

Không thể:

- Quản lý người dùng
- Quản lý thanh toán
- Thay đổi hệ thống

---

## Finance Staff

Có thể:

- Xem thanh toán
- Xử lý hoàn tiền
- Xuất hóa đơn
- Báo cáo doanh thu

Không thể:

- Chỉnh sửa khóa học
- Chỉnh sửa bài học
- Quản lý người dùng

---

## Customer Support

Có thể:

- Trả lời học viên
- Hỗ trợ đăng ký
- Xem lịch sử thanh toán
- Gửi thông báo

Không thể:

- Thay đổi dữ liệu hệ thống
- Quản lý AI
- Quản lý phân quyền

---

## Admin

Có toàn quyền quản lý:

- Người dùng
- Khóa học
- Giáo viên
- Học viên
- AI
- Thông báo
- Thanh toán
- Báo cáo
- Nội dung

Không thể:

- Thay đổi quyền của Super Admin
- Xóa Super Admin
- Truy cập cấu hình hạ tầng hệ thống

---

## Super Admin

Có toàn quyền đối với toàn bộ hệ thống.

Bao gồm:

- Quản lý mọi tài khoản
- Quản lý phân quyền
- Quản lý hệ thống
- Quản lý Database
- Backup
- Restore
- API
- Security
- Infrastructure
- Feature Flags

Super Admin không bị giới hạn bởi bất kỳ Role nào khác.

---

# Permission Rules

- Mọi API phải kiểm tra Permission trước khi xử lý.
- Người dùng không có quyền phải nhận lỗi **403 Forbidden**.
- Menu chỉ hiển thị các chức năng mà Role được phép truy cập.
- Permission được kiểm tra ở cả Frontend và Backend.
- Một người dùng có thể sở hữu nhiều Role.
- Khi có nhiều Role, quyền được hợp nhất theo nguyên tắc **Union of Permissions** (tổng hợp các quyền được cấp), trừ khi có quy tắc từ chối rõ ràng.

---

# Related Documents

Navigation.md

Authentication.md

Admin_Portal.md

Teacher_Portal.md

Student_Portal.md

System_Module.md
