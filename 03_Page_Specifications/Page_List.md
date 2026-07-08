# Page List

---

# Document Information

| Field         | Value               |
| ------------- | ------------------- |
| Document Name | Page_List.md        |
| Module        | Page Specifications |
| Version       | 1.0                 |
| Status        | Draft               |
| Author        | Priti               |
| Last Updated  | YYYY-MM-DD          |

---

# Overview

Page List là danh sách tổng hợp toàn bộ các trang (Pages) của Chinese Learning Platform.

Đây là tài liệu trung tâm giúp quản lý toàn bộ giao diện của hệ thống.

Mỗi trang trong danh sách này phải có một tài liệu đặc tả riêng trong thư mục `Pages/`.

Không được phát triển bất kỳ trang nào nếu chưa có trong Page List.

---

# Page Status

Mỗi trang sẽ có một trạng thái:

- Planned
- Designing
- Development
- Testing
- Completed
- Deprecated

---

# Priority Levels

- Critical
- High
- Medium
- Low

---

# Page Categories

Website được chia thành các nhóm sau:

- Public
- Authentication
- Student
- Teacher
- Admin
- AI
- Dictionary
- Payment
- System

---

# Master Page List

| ID  | Page Name | Module | Route | Layout | Roles | Priority | Status | Specification |
| --- | --------- | ------ | ----- | ------ | ----- | -------- | ------ | ------------- |

---

# Public Pages

| ID      | Page Name        | Module     | Route          | Layout | Roles | Priority | Status  | Specification              |
| ------- | ---------------- | ---------- | -------------- | ------ | ----- | -------- | ------- | -------------------------- |
| PUB-001 | Home             | Public     | /              | Public | Guest | Critical | Planned | PUB-001_Home.md            |
| PUB-002 | About            | Public     | /about         | Public | Guest | Medium   | Planned | PUB-002_About.md           |
| PUB-003 | Courses          | Public     | /courses       | Public | Guest | Critical | Planned | PUB-003_Courses.md         |
| PUB-004 | Course Detail    | Public     | /courses/:slug | Public | Guest | Critical | Planned | PUB-004_Course_Detail.md   |
| PUB-005 | Teachers         | Public     | /teachers      | Public | Guest | Medium   | Planned | PUB-005_Teachers.md        |
| PUB-006 | Teacher Profile  | Public     | /teachers/:id  | Public | Guest | Medium   | Planned | PUB-006_Teacher_Profile.md |
| PUB-007 | Pricing          | Public     | /pricing       | Public | Guest | High     | Planned | PUB-007_Pricing.md         |
| PUB-008 | Blog             | Public     | /blog          | Public | Guest | Medium   | Planned | PUB-008_Blog.md            |
| PUB-009 | Blog Detail      | Public     | /blog/:slug    | Public | Guest | Medium   | Planned | PUB-009_Blog_Detail.md     |
| PUB-010 | Dictionary       | Dictionary | /dictionary    | Public | Guest | Critical | Planned | DIC-001_Dictionary_Home.md |
| PUB-011 | Contact          | Public     | /contact       | Public | Guest | Medium   | Planned | PUB-011_Contact.md         |
| PUB-012 | FAQ              | Public     | /faq           | Public | Guest | Low      | Planned | PUB-012_FAQ.md             |
| PUB-013 | Privacy Policy   | Public     | /privacy       | Public | Guest | Low      | Planned | PUB-013_Privacy.md         |
| PUB-014 | Terms of Service | Public     | /terms         | Public | Guest | Low      | Planned | PUB-014_Terms.md           |

---

# Authentication Pages

| ID       | Page Name        | Route             |
| -------- | ---------------- | ----------------- |
| AUTH-001 | Login            | /login            |
| AUTH-002 | Register         | /register         |
| AUTH-003 | Forgot Password  | /forgot-password  |
| AUTH-004 | Reset Password   | /reset-password   |
| AUTH-005 | Verify Email     | /verify-email     |
| AUTH-006 | Verify Phone     | /verify-phone     |
| AUTH-007 | Complete Profile | /complete-profile |

---

# Student Pages

| ID      | Page Name           |
| ------- | ------------------- |
| STU-001 | Dashboard           |
| STU-002 | My Courses          |
| STU-003 | Course Learning     |
| STU-004 | Lesson Detail       |
| STU-005 | Homework            |
| STU-006 | Homework Detail     |
| STU-007 | Quiz                |
| STU-008 | HSK Mock Test       |
| STU-009 | Exam Result         |
| STU-010 | AI Teacher          |
| STU-011 | AI Chat             |
| STU-012 | AI Speaking         |
| STU-013 | AI Writing          |
| STU-014 | AI Grammar          |
| STU-015 | Flashcards          |
| STU-016 | Vocabulary Notebook |
| STU-017 | Calendar            |
| STU-018 | Messages            |
| STU-019 | Notifications       |
| STU-020 | Certificates        |
| STU-021 | Payment History     |
| STU-022 | Membership          |
| STU-023 | Profile             |
| STU-024 | Settings            |

---

# Teacher Pages

| ID      | Page Name       |
| ------- | --------------- |
| TEA-001 | Dashboard       |
| TEA-002 | My Classes      |
| TEA-003 | Students        |
| TEA-004 | Student Detail  |
| TEA-005 | Attendance      |
| TEA-006 | Homework        |
| TEA-007 | Homework Review |
| TEA-008 | Exams           |
| TEA-009 | Grades          |
| TEA-010 | Calendar        |
| TEA-011 | Messages        |
| TEA-012 | Resources       |
| TEA-013 | AI Assistant    |
| TEA-014 | Reports         |
| TEA-015 | Profile         |
| TEA-016 | Settings        |

---

# Admin Pages

| ID      | Page Name             |
| ------- | --------------------- |
| ADM-001 | Dashboard             |
| ADM-002 | User Management       |
| ADM-003 | Teacher Management    |
| ADM-004 | Student Management    |
| ADM-005 | Course Management     |
| ADM-006 | Lesson Management     |
| ADM-007 | Enrollment Management |
| ADM-008 | Payment Management    |
| ADM-009 | Membership Management |
| ADM-010 | Coupon Management     |
| ADM-011 | AI Management         |
| ADM-012 | Dictionary Management |
| ADM-013 | Blog Management       |
| ADM-014 | Notifications         |
| ADM-015 | Reports               |
| ADM-016 | Role Management       |
| ADM-017 | Permission Management |
| ADM-018 | File Manager          |
| ADM-019 | System Settings       |

---

# AI Pages

| ID     | Page Name     |
| ------ | ------------- |
| AI-001 | AI Dashboard  |
| AI-002 | AI Chat       |
| AI-003 | AI Teacher    |
| AI-004 | AI Speaking   |
| AI-005 | AI Writing    |
| AI-006 | AI Grammar    |
| AI-007 | AI Vocabulary |
| AI-008 | AI Reading    |
| AI-009 | AI Listening  |

---

# Dictionary Pages

| ID      | Page Name         |
| ------- | ----------------- |
| DIC-001 | Dictionary Home   |
| DIC-002 | Search Result     |
| DIC-003 | Word Detail       |
| DIC-004 | Stroke Order      |
| DIC-005 | Radical Detail    |
| DIC-006 | Grammar           |
| DIC-007 | Example Sentences |
| DIC-008 | Favorites         |
| DIC-009 | Search History    |
| DIC-010 | Daily Vocabulary  |

---

# Payment Pages

| ID      | Page Name       |
| ------- | --------------- |
| PAY-001 | Pricing         |
| PAY-002 | Checkout        |
| PAY-003 | Payment Success |
| PAY-004 | Invoice         |
| PAY-005 | Order History   |
| PAY-006 | Membership      |
| PAY-007 | Coupon          |
| PAY-008 | Refund          |

---

# System Pages

| ID      | Page Name               |
| ------- | ----------------------- |
| SYS-001 | General Settings        |
| SYS-002 | Authentication Settings |
| SYS-003 | Roles                   |
| SYS-004 | Permissions             |
| SYS-005 | API Center              |
| SYS-006 | Backup                  |
| SYS-007 | Audit Logs              |
| SYS-008 | Monitoring              |
| SYS-009 | Cache                   |
| SYS-010 | Version Management      |

---

# Summary

| Module         | Estimated Pages |
| -------------- | --------------: |
| Public         |              14 |
| Authentication |               7 |
| Student        |              24 |
| Teacher        |              16 |
| Admin          |              19 |
| AI             |               9 |
| Dictionary     |              10 |
| Payment        |               8 |
| System         |              10 |

**Estimated Total: ~117 Pages**

---

# Related Documents

- README.md
- Page_Template.md
- Sitemap.md
- Navigation.md
- User_Flow.md
- Permission_Matrix.md

---

# Notes

- Mỗi Page ID phải là duy nhất.
- Mỗi trang phải có một file đặc tả riêng trong thư mục `Pages/`.
- Khi thêm tính năng mới, luôn cập nhật `Page_List.md` trước khi thiết kế hoặc lập trình.
- `Page_List.md` là tài liệu quản lý phạm vi (Scope) của toàn bộ giao diện hệ thống.
