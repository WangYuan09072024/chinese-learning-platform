# 03 - Page Specifications

## Overview

Thư mục **03_Page_Specifications** chứa toàn bộ tài liệu đặc tả chi tiết (Functional Specifications) cho từng trang của Chinese Learning Platform.

Đây là nguồn tài liệu chính để thiết kế giao diện, xây dựng chức năng và triển khai hệ thống.

Mỗi trang trong website phải có một tài liệu đặc tả riêng, mô tả đầy đủ về mục đích, giao diện, thành phần, dữ liệu, quy tắc nghiệp vụ và cách người dùng tương tác.

Tài liệu trong thư mục này được sử dụng bởi:

- Product Owner
- UI/UX Designer
- Frontend Developer
- Backend Developer
- QA Engineer
- AI Coding Assistant (Claude Code, ChatGPT, Gemini...)

---

# Objectives

- Chuẩn hóa đặc tả của tất cả các trang.
- Đảm bảo mọi trang đều có cấu trúc thống nhất.
- Giảm sự mơ hồ trong quá trình phát triển.
- Giúp AI có thể xây dựng giao diện và chức năng chính xác.
- Là tài liệu tham chiếu trong suốt vòng đời của dự án.

---

# Folder Structure

```
03_Page_Specifications/
│
├── README.md
├── Page_Template.md
├── Page_List.md
│
└── Pages/
      │
      ├── Public/
      ├── Student/
      ├── Teacher/
      ├── Admin/
      ├── AI/
      ├── Dictionary/
      ├── Payment/
      └── System/
```

---

# File Descriptions

## README.md

Giới thiệu mục đích, cấu trúc và quy tắc của thư mục.

---

## Page_Template.md

Template chuẩn dùng để viết đặc tả cho mọi trang trong hệ thống.

Tất cả các trang phải tuân thủ template này để đảm bảo tính nhất quán.

---

## Page_List.md

Danh sách toàn bộ các trang của website.

Bao gồm:

- Page ID
- Page Name
- Module
- URL
- Roles
- Priority
- Status

Đây là tài liệu dùng để quản lý phạm vi (Scope) của toàn bộ giao diện.

---

## Pages/

Chứa tài liệu đặc tả chi tiết của từng trang.

Mỗi trang sẽ có một file Markdown riêng.

Ví dụ:

```
Pages/

Student/

STU-001_Dashboard.md

STU-002_My_Courses.md

STU-003_Course_Learning.md

...
```

---

# Naming Convention

Tên file phải theo quy tắc:

```
<Page_ID>_<Page_Name>.md
```

Ví dụ:

```
PUB-001_Home.md

PUB-003_Course_Detail.md

STU-001_Dashboard.md

STU-003_Course_Learning.md

TEA-004_Student_Profile.md

ADM-001_Dashboard.md
```

---

# Page Categories

Website được chia thành các nhóm trang sau:

## Public

Các trang công khai.

Ví dụ:

- Home
- Courses
- Pricing
- Blog
- Dictionary
- Contact

---

## Student

Các trang dành cho học viên.

Ví dụ:

- Dashboard
- Learning
- Homework
- AI Learning
- Flashcards
- Calendar

---

## Teacher

Các trang dành cho giáo viên.

Ví dụ:

- Dashboard
- Classes
- Students
- Homework Review
- Reports

---

## Admin

Các trang quản trị.

Ví dụ:

- User Management
- Course Management
- Payments
- Reports
- System Settings

---

## AI

Các trang liên quan đến AI.

Ví dụ:

- AI Chat
- AI Teacher
- AI Speaking
- AI Writing

---

## Dictionary

Các trang của hệ thống từ điển.

Ví dụ:

- Dictionary Home
- Word Detail
- Stroke Order
- Grammar
- Favorites

---

## Payment

Các trang thanh toán.

Ví dụ:

- Pricing
- Checkout
- Payment Result
- Invoice

---

## System

Các trang quản trị hệ thống.

Ví dụ:

- API Center
- Monitoring
- Backup
- Logs
- Version Management

---

# General Rules

Mỗi trang phải có:

- Một Page ID duy nhất.
- Một URL duy nhất.
- Một tài liệu đặc tả riêng.
- Một Module xác định.
- Vai trò người dùng được phép truy cập.
- Quy tắc nghiệp vụ rõ ràng.
- API được sử dụng.
- Quy tắc hiển thị dữ liệu.
- Trạng thái Loading, Empty và Error.

Không được triển khai bất kỳ giao diện nào khi chưa có tài liệu đặc tả tương ứng.

---

# Workflow

Quy trình tạo một trang mới:

1. Thêm trang vào `Page_List.md`.
2. Tạo file mới trong thư mục `Pages/`.
3. Viết đặc tả theo `Page_Template.md`.
4. Thiết kế giao diện.
5. Xây dựng Frontend.
6. Xây dựng Backend.
7. Kiểm thử.
8. Hoàn thành.

---

# Related Documents

- Product Vision
- Sitemap
- Navigation
- User Flow
- Permission Matrix
- Database Design
- API Specifications

---

# Notes

Toàn bộ tài liệu trong thư mục này là nguồn tham chiếu chính để xây dựng giao diện và chức năng của Chinese Learning Platform.

Mọi thay đổi về giao diện hoặc hành vi của một trang phải được cập nhật trong tài liệu đặc tả trước khi triển khai vào mã nguồn.

Mục tiêu của thư mục này là đảm bảo hệ thống luôn nhất quán, dễ bảo trì và có thể mở rộng trong tương lai.
