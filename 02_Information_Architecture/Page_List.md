# Page List

## Overview

Page List là danh sách đầy đủ tất cả các trang (Pages) của Chinese Learning Platform.

Tài liệu này đóng vai trò là chỉ mục trung tâm (Master Page Index), giúp quản lý toàn bộ giao diện của hệ thống.

Mỗi trang sẽ có một tài liệu đặc tả (Page Specification) riêng trong thư mục `04_Page_Specifications/Pages`.

---

# Page Status

Mỗi trang có một trạng thái:

- Planned
- Designing
- Development
- Testing
- Completed

---

# Page Information

Mỗi trang bao gồm:

- Page ID
- Page Name
- URL
- Module
- User Roles
- Status
- Priority

---

# 1. Public Website

| ID      | Page             | URL           | Roles | Priority | Status  |
| ------- | ---------------- | ------------- | ----- | -------- | ------- |
| PUB-001 | Home             | /             | Guest | High     | Planned |
| PUB-002 | About Us         | /about        | Guest | Medium   | Planned |
| PUB-003 | Courses          | /courses      | Guest | High     | Planned |
| PUB-004 | Course Detail    | /courses/:id  | Guest | High     | Planned |
| PUB-005 | Teachers         | /teachers     | Guest | Medium   | Planned |
| PUB-006 | Teacher Profile  | /teachers/:id | Guest | Medium   | Planned |
| PUB-007 | Pricing          | /pricing      | Guest | High     | Planned |
| PUB-008 | Blog             | /blog         | Guest | Medium   | Planned |
| PUB-009 | Blog Detail      | /blog/:slug   | Guest | Medium   | Planned |
| PUB-010 | Dictionary       | /dictionary   | Guest | High     | Planned |
| PUB-011 | Contact          | /contact      | Guest | Medium   | Planned |
| PUB-012 | FAQ              | /faq          | Guest | Low      | Planned |
| PUB-013 | Privacy Policy   | /privacy      | Guest | Low      | Planned |
| PUB-014 | Terms of Service | /terms        | Guest | Low      | Planned |

---

# 2. Authentication

| ID       | Page             | URL               |
| -------- | ---------------- | ----------------- |
| AUTH-001 | Login            | /login            |
| AUTH-002 | Register         | /register         |
| AUTH-003 | Forgot Password  | /forgot-password  |
| AUTH-004 | Reset Password   | /reset-password   |
| AUTH-005 | Verify Email     | /verify-email     |
| AUTH-006 | Verify Phone     | /verify-phone     |
| AUTH-007 | Complete Profile | /complete-profile |

---

# 3. Student Portal

| ID      | Page                |
| ------- | ------------------- |
| STU-001 | Dashboard           |
| STU-002 | My Courses          |
| STU-003 | Course Learning     |
| STU-004 | Lesson Detail       |
| STU-005 | Homework            |
| STU-006 | Homework Detail     |
| STU-007 | Quiz                |
| STU-008 | Mock Exam           |
| STU-009 | Exam Result         |
| STU-010 | AI Teacher          |
| STU-011 | AI Chat             |
| STU-012 | AI Writing          |
| STU-013 | AI Speaking         |
| STU-014 | AI Grammar          |
| STU-015 | Dictionary          |
| STU-016 | Flashcards          |
| STU-017 | Vocabulary Notebook |
| STU-018 | Calendar            |
| STU-019 | Messages            |
| STU-020 | Notifications       |
| STU-021 | Certificates        |
| STU-022 | Payment History     |
| STU-023 | Membership          |
| STU-024 | Profile             |
| STU-025 | Settings            |

---

# 4. Teacher Portal

| ID      | Page               |
| ------- | ------------------ |
| TEA-001 | Dashboard          |
| TEA-002 | My Classes         |
| TEA-003 | Students           |
| TEA-004 | Student Detail     |
| TEA-005 | Attendance         |
| TEA-006 | Homework           |
| TEA-007 | Homework Review    |
| TEA-008 | Exams              |
| TEA-009 | Grades             |
| TEA-010 | Calendar           |
| TEA-011 | Messages           |
| TEA-012 | Teaching Resources |
| TEA-013 | AI Assistant       |
| TEA-014 | Reports            |
| TEA-015 | Profile            |
| TEA-016 | Settings           |

---

# 5. Admin Portal

| ID      | Page                  |
| ------- | --------------------- |
| ADM-001 | Dashboard             |
| ADM-002 | User Management       |
| ADM-003 | Teacher Management    |
| ADM-004 | Student Management    |
| ADM-005 | Course Management     |
| ADM-006 | Lesson Management     |
| ADM-007 | Category Management   |
| ADM-008 | Enrollment Management |
| ADM-009 | Payment Management    |
| ADM-010 | Membership Management |
| ADM-011 | Coupon Management     |
| ADM-012 | AI Management         |
| ADM-013 | Dictionary Management |
| ADM-014 | Blog Management       |
| ADM-015 | Notification Center   |
| ADM-016 | Reports               |
| ADM-017 | Role Management       |
| ADM-018 | Permission Management |
| ADM-019 | File Manager          |
| ADM-020 | System Settings       |

---

# 6. AI Module

| ID     | Page          |
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
| AI-010 | AI Analytics  |

---

# 7. Dictionary Module

| ID      | Page              |
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

# 8. Payment Module

| ID      | Page           |
| ------- | -------------- |
| PAY-001 | Pricing        |
| PAY-002 | Checkout       |
| PAY-003 | Payment Result |
| PAY-004 | Invoice        |
| PAY-005 | Order History  |
| PAY-006 | Membership     |
| PAY-007 | Coupon         |
| PAY-008 | Refund         |

---

# 9. Community Module

| ID      | Page           |
| ------- | -------------- |
| COM-001 | Community Home |
| COM-002 | Discussion     |
| COM-003 | Post Detail    |
| COM-004 | My Posts       |
| COM-005 | Leaderboard    |

---

# 10. System Module

| ID      | Page             |
| ------- | ---------------- |
| SYS-001 | General Settings |
| SYS-002 | Authentication   |
| SYS-003 | Roles            |
| SYS-004 | Permissions      |
| SYS-005 | API Center       |
| SYS-006 | Backup           |
| SYS-007 | Logs             |
| SYS-008 | Monitoring       |
| SYS-009 | Cache            |
| SYS-010 | Version          |

---

# Summary

Estimated Total Pages

| Module            | Pages |
| ----------------- | ----: |
| Public Website    |    14 |
| Authentication    |     7 |
| Student Portal    |    25 |
| Teacher Portal    |    16 |
| Admin Portal      |    20 |
| AI Module         |    10 |
| Dictionary Module |    10 |
| Payment Module    |     8 |
| Community Module  |     5 |
| System Module     |    10 |

**Estimated Total: 125+ Pages**

---

# Related Documents

- Sitemap.md
- Navigation.md
- User_Flow.md
- Permission_Matrix.md
- Database_Design.md
- API_Specifications.md

---

# Notes

- Mỗi Page ID phải là duy nhất trong toàn bộ hệ thống.
- Mỗi trang trong danh sách phải có một tài liệu đặc tả riêng (ví dụ: `Pages/STU-003_Course_Learning.md`).
- Khi có tính năng mới, cần cập nhật `Page_List.md` trước khi bắt đầu thiết kế hoặc phát triển.
- `Page_List.md` được xem là nguồn tham chiếu chính để quản lý phạm vi (scope) của toàn bộ dự án.
