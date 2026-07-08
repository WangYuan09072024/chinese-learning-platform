# PUB-003 - Courses

---

# Document Information

| Field        | Value          |
| ------------ | -------------- |
| Page ID      | PUB-003        |
| Page Name    | Courses        |
| Module       | Public Website |
| Version      | 1.0            |
| Status       | Draft          |
| Author       | Priti          |
| Last Updated | YYYY-MM-DD     |

---

# 1. Overview

Trang Courses hiển thị toàn bộ các khóa học của nền tảng.

Người dùng có thể tìm kiếm, lọc, so sánh và xem thông tin chi tiết trước khi quyết định đăng ký hoặc mua khóa học.

Đây là trang chuyển đổi (Conversion Page) quan trọng nhất của hệ thống.

---

# 2. Purpose

Trang này giúp người dùng:

- Xem toàn bộ khóa học.
- Tìm kiếm khóa học phù hợp.
- Lọc theo trình độ.
- So sánh các khóa học.
- Xem giá.
- Xem giáo viên.
- Xem số lượng học viên.
- Xem đánh giá.
- Đăng ký học.

---

# 3. User Roles

- Guest
- Student
- Teacher
- Admin

---

# 4. Route

```
/courses
```

---

# 5. Layout

Public Layout

Bao gồm:

- Header
- Sidebar Filter
- Main Content
- Footer

---

# 6. Navigation

Header

↓

Courses

---

# 7. Objectives

Sau khi truy cập trang Courses, người dùng có thể:

- Tìm thấy khóa học mong muốn.
- Hiểu rõ nội dung khóa học.
- Mua khóa học.
- Học thử bài miễn phí.

---

# 8. User Stories

### Guest

"Tôi muốn tìm một khóa học phù hợp với trình độ của mình."

---

### Student

"Tôi muốn mua thêm khóa học mới."

---

### Teacher

"Tôi muốn xem khóa học mình đang giảng dạy."

---

# 9. Entry Points

Người dùng có thể đến trang này từ:

- Home Page
- Menu
- Search
- AI Recommendation
- Blog
- Landing Page
- Google Search

---

# 10. Exit Points

Người dùng có thể chuyển sang:

- Course Detail
- Checkout
- Dashboard
- Login
- Register

---

# 11. Page Structure

1. Hero Banner
2. Search Bar
3. Filter Sidebar
4. Sort Toolbar
5. Course Grid
6. Pagination
7. Recommended Courses
8. FAQ
9. Footer

---

# 12. Section Details

## 12.1 Hero Banner

Hiển thị:

- Tiêu đề
- Mô tả
- Ảnh minh họa
- CTA "Bắt đầu học ngay"

---

## 12.2 Search Bar

Cho phép tìm kiếm theo:

- Tên khóa học
- Giáo viên
- HSK Level
- Chủ đề
- Từ khóa

Có Auto Suggest.

---

## 12.3 Filter Sidebar

Có thể lọc theo:

### Trình độ

- Beginner
- Intermediate
- Advanced

---

### HSK

- HSK1
- HSK2
- HSK3
- HSK4
- HSK5
- HSK6

---

### Chủ đề

- Giao tiếp
- Phát âm
- Ngữ pháp
- Từ vựng
- Luyện thi
- Viết chữ Hán
- Business Chinese
- Du lịch
- HSKK

---

### Giá

- Miễn phí
- Trả phí

---

### Hình thức

- Video
- Livestream
- Offline
- Hybrid

---

### Giáo viên

Dropdown chọn giáo viên.

---

### Đánh giá

- 5 sao
- 4 sao trở lên
- 3 sao trở lên

---

## 12.4 Sort Toolbar

Sắp xếp theo:

- Mới nhất
- Phổ biến nhất
- Đánh giá cao
- Giá tăng dần
- Giá giảm dần
- A → Z

---

## 12.5 Course Grid

Hiển thị dạng Card.

Mỗi Card gồm:

- Ảnh bìa
- Tên khóa học
- Giáo viên
- HSK Level
- Giá
- Giá khuyến mãi
- Rating
- Số học viên
- Thời lượng
- Số bài học
- Badge (New / Hot / Bestseller)
- Tiến độ học (nếu đã đăng ký)

Nút:

- Xem chi tiết
- Học thử
- Mua ngay

---

## 12.6 Pagination

Có:

- Previous
- Next
- Số trang

---

## 12.7 Recommended Courses

Hiển thị:

- Khóa học liên quan.
- AI Recommendation.
- Best Seller.

---

## 12.8 FAQ

Các câu hỏi thường gặp.

---

## 12.9 Footer

Footer chuẩn của website.

---

# 13. Components

- Search Box
- Filter Sidebar
- Dropdown
- Checkbox
- Radio Button
- Card
- Badge
- Pagination
- Button
- Skeleton Loader
- Toast

---

# 14. Data Display

Mỗi khóa học hiển thị:

- Thumbnail
- Tên
- Mô tả ngắn
- Giá
- Giá khuyến mãi
- HSK Level
- Chủ đề
- Giáo viên
- Rating
- Số học viên
- Tổng số bài học
- Tổng thời lượng
- Trạng thái (Free/Premium)

---

# 15. User Actions

Người dùng có thể:

- Search
- Filter
- Sort
- Xem chi tiết
- Học thử
- Thêm yêu thích
- Mua khóa học
- Chia sẻ khóa học

---

# 16. Business Rules

- Khóa học miễn phí luôn hiển thị mở.
- Khóa Premium yêu cầu thanh toán.
- Nếu đã mua sẽ hiển thị "Tiếp tục học".
- Nếu chưa đăng nhập, khi mua sẽ yêu cầu đăng nhập trước.

---

# 17. Validation Rules

- Từ khóa tìm kiếm tối đa 100 ký tự.
- Chỉ cho phép chọn các bộ lọc hợp lệ.
- Không thể chọn mức giá âm.

---

# 18. API Endpoints

- GET /api/courses
- GET /api/courses/featured
- GET /api/courses/search
- GET /api/courses/categories
- GET /api/teachers
- GET /api/recommendations

---

# 19. Database Tables

- courses
- course_categories
- teachers
- enrollments
- reviews
- users
- course_tags

---

# 20. Permissions

Guest

- Xem khóa học
- Học thử

Student

- Mua khóa học
- Tiếp tục học
- Đánh giá khóa học

Teacher

- Xem khóa học của mình

Admin

- Toàn quyền

---

# 21. Page States

Loading

Hiển thị Skeleton Card.

---

Empty

"Không tìm thấy khóa học phù hợp."

---

Error

"Không thể tải danh sách khóa học."

Có nút Retry.

---

# 22. Notifications

- Đã thêm vào yêu thích.
- Đã đăng ký thành công.
- Thanh toán thành công.
- Khóa học đã được mở khóa.

---

# 23. Responsive Design

Desktop:

- Sidebar trái
- Grid 4 cột

Tablet:

- Filter thu gọn
- Grid 2–3 cột

Mobile:

- Filter dạng Bottom Sheet
- Grid 1 cột

---

# 24. Accessibility

- Hỗ trợ bàn phím.
- ARIA Labels.
- Focus rõ ràng.
- Alt Text cho ảnh khóa học.

---

# 25. Security

- Chỉ hiển thị nút "Tiếp tục học" với học viên đã đăng ký.
- Kiểm tra quyền trước khi truy cập khóa học Premium.
- Chống spam tìm kiếm.

---

# 26. Performance

- Lazy Loading ảnh.
- Infinite Scroll hoặc Pagination.
- Cache bộ lọc.
- Debounce Search.
- CDN cho thumbnail.

---

# 27. SEO

- Dynamic Meta Title.
- Dynamic Meta Description.
- Canonical URL.
- Open Graph.
- Schema.org Course.

---

# 28. Analytics Events

- Course List Viewed
- Search Used
- Filter Applied
- Course Card Clicked
- Free Lesson Started
- Purchase Clicked
- Favorite Added

---

# 29. Acceptance Criteria

- Người dùng tìm kiếm và lọc khóa học dưới 500ms (sau khi dữ liệu đã được tải hoặc cache phù hợp).
- Bộ lọc hoạt động chính xác.
- Responsive trên Desktop, Tablet và Mobile.
- Chỉ hiển thị nút "Tiếp tục học" với học viên đã mua khóa học.
- Lighthouse Performance ≥ 90.

---

# 30. Future Improvements

- AI đề xuất khóa học theo mục tiêu học tập.
- So sánh nhiều khóa học.
- Wishlist đồng bộ giữa các thiết bị.
- Gợi ý lộ trình học tự động.
- Bộ lọc theo thời gian học mỗi ngày.
- Hiển thị mức độ phù hợp của khóa học với từng học viên.

---

# Related Documents

- PUB-001_Home.md
- PUB-004_Course_Detail.md
- Sitemap.md
- Navigation.md
- User_Flow.md
- Database Design
- API Specifications

---

# Notes

Trang Courses là một trong những trang có tỷ lệ chuyển đổi cao nhất của nền tảng. Giao diện cần ưu tiên tốc độ tải, khả năng tìm kiếm nhanh, bộ lọc trực quan và hiển thị đầy đủ thông tin để người dùng dễ dàng đưa ra quyết định đăng ký khóa học.
