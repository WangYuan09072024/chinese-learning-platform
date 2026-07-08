# PUB-004 - Course Detail

---

# Document Information

| Field        | Value          |
| ------------ | -------------- |
| Page ID      | PUB-004        |
| Page Name    | Course Detail  |
| Module       | Public Website |
| Version      | 1.0            |
| Status       | Draft          |
| Author       | Priti          |
| Last Updated | YYYY-MM-DD     |

---

# 1. Overview

Course Detail là trang giới thiệu chi tiết một khóa học.

Trang này cung cấp đầy đủ thông tin về khóa học, giáo viên, lộ trình học, danh sách bài học, đánh giá của học viên và các câu hỏi thường gặp nhằm giúp người dùng đưa ra quyết định đăng ký.

Nếu học viên đã mua khóa học, trang sẽ chuyển sang chế độ học tập và hiển thị nút **Tiếp tục học**.

---

# 2. Purpose

Trang giúp người dùng:

- Hiểu rõ nội dung khóa học.
- Biết khóa học phù hợp với ai.
- Xem toàn bộ lộ trình học.
- Xem bài học miễn phí.
- Xem giáo viên.
- Xem đánh giá.
- Đăng ký hoặc mua khóa học.

---

# 3. User Roles

- Guest
- Student
- Teacher
- Admin

---

# 4. Route

```
/courses/:courseSlug
```

Ví dụ

```
/courses/hsk-3-complete-course
```

---

# 5. Layout

Public Layout

---

# 6. Navigation

Home

↓

Courses

↓

Course Detail

---

# 7. Objectives

Người dùng sau khi xem trang nên có thể:

- Hiểu rõ khóa học.
- Học thử.
- Đăng ký.
- Thanh toán.
- Tiếp tục học (nếu đã mua).

---

# 8. User Stories

Guest

"Tôi muốn biết khóa học này có phù hợp với mình không."

Student

"Tôi muốn xem mình sẽ học những gì."

Teacher

"Tôi muốn xem thông tin khóa học mình đang giảng dạy."

---

# 9. Entry Points

- Trang Courses
- Search
- Google
- AI Recommendation
- Blog
- Link chia sẻ

---

# 10. Exit Points

- Checkout
- Dashboard
- Lesson
- Teacher Profile
- Dictionary
- AI Chat

---

# 11. Page Structure

1. Hero Section
2. Sticky Purchase Card
3. Course Overview
4. Course Statistics
5. Learning Outcomes
6. Course Curriculum
7. Free Preview Lessons
8. Course Features
9. Teacher Information
10. Student Reviews
11. FAQ
12. Related Courses
13. Footer

---

# 12. Section Details

## 12.1 Hero Section

Hiển thị:

- Course Thumbnail
- Course Name
- Short Description
- HSK Level
- Rating
- Number of Students
- Number of Lessons
- Total Learning Hours

CTA

- Buy Course
- Start Learning
- Watch Preview

---

## 12.2 Sticky Purchase Card

Luôn hiển thị bên phải.

Bao gồm:

- Giá gốc
- Giá khuyến mãi
- Thời gian ưu đãi
- Danh sách quyền lợi
- Nút Buy Now
- Add to Wishlist
- Share

---

## 12.3 Course Overview

Giới thiệu:

- Mục tiêu khóa học
- Đối tượng phù hợp
- Điều kiện đầu vào
- Kết quả sau khi hoàn thành

---

## 12.4 Course Statistics

Hiển thị:

- Tổng bài học
- Video
- Quiz
- Homework
- Speaking Practice
- Flashcards
- AI Exercises

---

## 12.5 Learning Outcomes

Sau khóa học học viên sẽ:

- Giao tiếp
- Viết
- Đọc
- Nghe
- Thi HSK

---

## 12.6 Course Curriculum

Danh sách chương.

Ví dụ

Chapter 1

Lesson 1 ✅ Free

Lesson 2 🔒

Lesson 3 🔒

Chapter 2

Lesson 4 🔒

...

Bài miễn phí mở.

Bài Premium khóa.

---

## 12.7 Free Preview Lessons

Hiển thị các bài học miễn phí.

Video Preview.

---

## 12.8 Course Features

- Video HD
- Download Materials
- Homework
- AI Teacher
- AI Speaking
- Flashcards
- Certificate
- Lifetime Access
- Mobile Friendly

---

## 12.9 Teacher Information

Hiển thị:

- Avatar
- Name
- Experience
- Specialization
- Bio
- Social Links

Có nút

View Teacher

---

## 12.10 Student Reviews

Hiển thị:

- Rating Summary
- Review List
- Photos (nếu có)
- Filter theo số sao

---

## 12.11 FAQ

Accordion.

---

## 12.12 Related Courses

AI gợi ý khóa học tương tự.

---

# 13. Components

- Hero Banner
- Purchase Card
- Tabs
- Accordion
- Progress Bar
- Video Player
- Review Card
- Rating
- Button
- Badge
- Timeline
- Tooltip

---

# 14. Data Display

Hiển thị:

- Course Name
- Description
- Price
- Discount
- Teacher
- Lessons
- Chapters
- Reviews
- Students
- Rating
- Tags
- Category
- Language
- Last Updated

---

# 15. User Actions

Người dùng có thể:

- Buy Course
- Watch Preview
- Add Wishlist
- Share
- Read Reviews
- Expand Curriculum
- View Teacher
- Ask AI About Course
- Contact Support

---

# 16. Business Rules

- Chỉ bài học miễn phí được xem trước.
- Sau khi thanh toán, toàn bộ bài học mở khóa.
- Học viên chỉ có thể đánh giá sau khi hoàn thành ít nhất 30% khóa học.
- Chỉ Admin hoặc Teacher được chỉnh sửa thông tin khóa học.

---

# 17. Validation Rules

- Không thể mua lại khóa học đã sở hữu.
- Không thể gửi đánh giá rỗng.
- Rating chỉ từ 1–5 sao.
- Chỉ người đã đăng ký mới được bình luận.

---

# 18. API Endpoints

- GET /api/courses/{id}
- GET /api/courses/{id}/curriculum
- GET /api/courses/{id}/reviews
- GET /api/courses/{id}/teacher
- POST /api/cart
- POST /api/wishlist
- POST /api/reviews

---

# 19. Database Tables

- courses
- course_chapters
- lessons
- teachers
- users
- enrollments
- reviews
- wishlist
- orders

---

# 20. Permissions

Guest

- Xem thông tin khóa học
- Xem bài miễn phí

Student

- Mua khóa học
- Đánh giá
- Học

Teacher

- Chỉnh sửa khóa học của mình

Admin

- Full Access

---

# 21. Page States

Loading

Skeleton cho toàn bộ trang.

---

Empty

"Khóa học không tồn tại."

---

Error

"Không thể tải thông tin khóa học."

Retry.

---

# 22. Notifications

- Đã thêm vào Wishlist.
- Đã thêm vào giỏ hàng.
- Thanh toán thành công.
- Đánh giá thành công.

---

# 23. Responsive Design

Desktop

- Hero + Purchase Card

Tablet

- Purchase Card xuống dưới

Mobile

- Sticky Bottom Buy Button

---

# 24. Accessibility

- Keyboard Navigation
- Screen Reader
- Alt Text
- ARIA Labels

---

# 25. Security

- Kiểm tra quyền trước khi mở bài Premium.
- Không để lộ URL video trả phí.
- Chống tải trái phép tài liệu.
- Chống chia sẻ link bài học không có quyền.

---

# 26. Performance

- Lazy Load Curriculum
- Lazy Load Reviews
- Image Optimization
- Video Streaming
- CDN
- Cache

---

# 27. SEO

- Dynamic Title
- Meta Description
- Open Graph
- JSON-LD Course Schema
- Canonical URL

---

# 28. Analytics Events

- Course Viewed
- Preview Started
- Buy Button Clicked
- Wishlist Added
- Teacher Viewed
- Review Submitted
- FAQ Expanded

---

# 29. Acceptance Criteria

- Thông tin khóa học hiển thị chính xác.
- Curriculum mở/khóa đúng theo quyền.
- Bài miễn phí xem được không cần thanh toán.
- Nút "Tiếp tục học" xuất hiện nếu học viên đã mua.
- Responsive trên Desktop, Tablet và Mobile.
- Điểm Lighthouse ≥ 90.

---

# 30. Future Improvements

- AI tư vấn khóa học phù hợp.
- So sánh hai khóa học.
- Hiển thị tiến độ bạn bè.
- Huy hiệu "Best Seller", "Editor's Choice".
- Video giới thiệu từ giáo viên.
- Hỏi đáp trực tiếp dưới từng khóa học.
- Gợi ý lộ trình học tiếp theo sau khi hoàn thành khóa.

---

# Related Documents

- PUB-001_Home.md
- PUB-003_Courses.md
- STU-003_Course_Learning.md
- Payment Module
- User_Flow.md
- Database Design
- API Specifications

---

# Notes

Course Detail là trang có tỷ lệ chuyển đổi cao nhất sau Home Page. Thiết kế cần tập trung vào việc xây dựng niềm tin, trình bày rõ giá trị khóa học và giảm tối đa các rào cản trước khi người dùng quyết định đăng ký hoặc thanh toán.
