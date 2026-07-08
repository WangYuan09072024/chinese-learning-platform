# ADM-003 - Course Management

---

# Document Information

| Field        | Value             |
| ------------ | ----------------- |
| Page ID      | ADM-003           |
| Page Name    | Course Management |
| Module       | Admin Portal      |
| Version      | 1.0               |
| Status       | Draft             |
| Author       | Priti             |
| Last Updated | YYYY-MM-DD        |

---

# 1. Overview

Course Management là trung tâm quản lý toàn bộ khóa học trên hệ thống.

Admin có thể tạo, chỉnh sửa, xuất bản, lưu nháp, sao chép, lưu trữ và theo dõi hiệu quả của tất cả khóa học.

Mỗi khóa học bao gồm nhiều chương, nhiều bài học và nhiều loại tài nguyên học tập.

---

# 2. Purpose

Trang giúp Admin:

- Quản lý khóa học.
- Quản lý nội dung bài học.
- Quản lý giáo viên.
- Quản lý giá bán.
- Quản lý quyền truy cập.
- Theo dõi doanh thu.
- Theo dõi tiến độ học.

---

# 3. User Roles

- Super Admin
- Academic Admin
- Content Admin

Teacher chỉ được chỉnh sửa khóa học nếu được cấp quyền.

---

# 4. Route

/admin/courses

---

# 5. Layout

Admin Layout

Bao gồm:

- Sidebar
- Topbar
- Statistics Cards
- Search & Filter
- Course Table/Grid
- Pagination

---

# 6. Navigation

Dashboard

↓

Course Management

↓

Course Detail

↓

Chapter

↓

Lesson

---

# 7. Objectives

Admin có thể:

- Quản lý toàn bộ khóa học.
- Xuất bản khóa học mới.
- Cập nhật nội dung.
- Theo dõi hiệu quả khóa học.

---

# 8. User Stories

"Tôi muốn tạo khóa HSK3 mới."

"Tôi muốn chỉnh sửa Lesson."

"Tôi muốn đổi giá khóa học."

"Tôi muốn xem bao nhiêu người đang học."

---

# 9. Entry Points

- Dashboard
- Search
- Reports

---

# 10. Exit Points

- Course Detail
- Chapter
- Lesson
- Analytics

---

# 11. Page Structure

1. Header
2. Statistics
3. Search
4. Filter
5. Course Table
6. Bulk Actions
7. Quick Actions

---

# 12. Section Details

## 12.1 Header

Hiển thị:

- Course Management
- Total Courses

Buttons

- Create Course
- Import
- Export

---

## 12.2 Statistics

Hiển thị:

- Total Courses
- Published
- Draft
- Archived
- Premium
- Free

---

## 12.3 Search

Tìm theo:

- Course Name
- Course ID
- Teacher
- Category

Realtime Search.

---

## 12.4 Filters

Theo:

Status

- Draft
- Published
- Private
- Archived

Type

- Free
- Premium

Level

- Beginner
- Intermediate
- Advanced

HSK

- HSK1
- HSK2
- HSK3
- HSK4
- HSK5
- HSK6

Language

- Chinese
- English
- Vietnamese

---

## 12.5 Sort

- Newest
- Oldest
- Most Students
- Revenue
- Rating
- Updated Date

---

## 12.6 Course Table

Hiển thị:

- Thumbnail
- Course Name
- Course ID
- Teacher
- Level
- Students
- Price
- Rating
- Status
- Updated Date

Actions

- View
- Edit
- Publish
- Duplicate
- Archive
- Delete

---

## 12.7 Bulk Actions

- Publish
- Unpublish
- Archive
- Delete
- Export
- Assign Teacher

---

## 12.8 Quick Actions

- Create Course
- Create Chapter
- Create Lesson
- Upload Videos
- Import Vocabulary
- Import PDF

---

# 13. Course Detail

Mỗi Course gồm:

## Basic Information

- Thumbnail
- Cover Image
- Title
- Subtitle
- Description
- Category
- Tags

---

## Pricing

- Free
- Premium
- Price
- Discount
- Coupon
- Subscription

---

## Teachers

- Main Teacher
- Assistant Teacher

---

## Curriculum

Course

↓

Chapter

↓

Lesson

↓

Quiz

↓

Homework

↓

Resources

Có thể kéo thả để thay đổi thứ tự.

---

## Lesson

Mỗi Lesson gồm:

- Video
- Text
- Images
- Audio
- Vocabulary
- Grammar
- Speaking
- Writing
- Quiz
- Homework
- AI Prompt
- Download Files

---

## Resources

- PDF
- PPT
- Audio
- Flashcards
- ZIP

---

## SEO

- SEO Title
- Meta Description
- URL Slug
- Open Graph Image

---

## Publish

Status

- Draft
- Review
- Published
- Scheduled
- Archived

---

## Analytics

Hiển thị:

- Total Students
- Completion Rate
- Revenue
- Rating
- Reviews
- Watch Time

---

# 14. User Actions

Admin có thể:

- Tạo khóa học.
- Chỉnh sửa khóa học.
- Tạo Chapter.
- Tạo Lesson.
- Upload Video.
- Upload PDF.
- Chỉnh giá.
- Phân công giáo viên.
- Publish.
- Archive.
- Duplicate.

---

# 15. Business Rules

- Course phải có ít nhất 1 Chapter.
- Chapter phải có ít nhất 1 Lesson.
- Không Publish nếu thiếu nội dung bắt buộc.
- Chỉ khóa học Published mới hiển thị cho học viên.
- Lesson có thể đánh dấu là Free Preview.

---

# 16. Validation Rules

- Tiêu đề khóa học không được trống.
- Slug phải duy nhất.
- Giá bán không được âm.
- Thumbnail là bắt buộc trước khi Publish.
- Video phải đúng định dạng được hệ thống hỗ trợ.

---

# 17. API Endpoints

GET /api/admin/courses

POST /api/admin/courses

PUT /api/admin/courses/{id}

DELETE /api/admin/courses/{id}

POST /api/admin/courses/publish

POST /api/admin/courses/archive

POST /api/admin/courses/duplicate

---

# 18. Database Tables

- courses
- chapters
- lessons
- lesson_contents
- lesson_resources
- teachers
- enrollments
- course_reviews
- course_categories
- course_tags

---

# 19. Permissions

Super Admin

- Full Access

Academic Admin

- Quản lý khóa học

Teacher

- Chỉ chỉnh sửa khóa học được phân công

---

# 20. Page States

Loading

Skeleton Table.

Empty

"Chưa có khóa học."

Error

"Không thể tải dữ liệu."

---

# 21. Notifications

- Course Published
- Course Archived
- Lesson Added
- Teacher Assigned
- Student Enrollment Milestone

---

# 22. Responsive Design

Desktop

Data Table + Detail Panel

Tablet

Responsive Table

Mobile

Card View

---

# 23. Accessibility

- Keyboard Navigation
- Screen Reader
- ARIA Labels
- Focus Indicators

---

# 24. Security

- RBAC
- Audit Logs
- Version History
- Auto Save Draft
- Permission Validation

---

# 25. Performance

- Lazy Loading
- Server-side Pagination
- Auto Save
- Image Optimization
- Video Streaming

---

# 26. Analytics Events

- Course Created
- Course Updated
- Lesson Created
- Chapter Created
- Course Published
- Course Archived
- Teacher Assigned

---

# 27. Acceptance Criteria

- Có thể quản lý hàng nghìn khóa học.
- Hỗ trợ kéo thả Curriculum.
- Hỗ trợ Draft và Publish.
- Hỗ trợ Preview trước khi Publish.
- Responsive trên Desktop, Tablet và Mobile.
- Lighthouse Performance ≥ 90.

---

# 28. Future Improvements

- AI tự động tạo Lesson từ tài liệu.
- AI sinh Quiz và Homework.
- AI tạo Flashcards từ Vocabulary.
- AI đề xuất lộ trình học.
- Version Control cho từng khóa học.
- Collaborative Editing (nhiều giáo viên cùng chỉnh sửa).
- A/B Testing cho trang giới thiệu khóa học.

---

# Related Documents

- ADM-001_Dashboard.md
- ADM-004_Class_Management.md
- TEA-002_My_Classes.md
- STU-002_My_Courses.md
- Dictionary Module
- AI Module

---

# Notes

Course Management là hệ thống quản trị nội dung học tập (LMS CMS) của nền tảng. Toàn bộ cấu trúc khóa học, chương, bài học, tài nguyên, bài tập và thiết lập xuất bản đều được quản lý tại đây. Thiết kế cần đảm bảo dễ mở rộng, hỗ trợ kéo thả, lưu phiên bản và cộng tác giữa nhiều quản trị viên hoặc giáo viên.
