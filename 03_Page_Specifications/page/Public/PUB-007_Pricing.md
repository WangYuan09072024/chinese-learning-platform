# PUB-007 - Pricing & Membership

---

# Document Information

| Field        | Value                |
| ------------ | -------------------- |
| Page ID      | PUB-007              |
| Page Name    | Pricing & Membership |
| Module       | Public Website       |
| Version      | 1.0                  |
| Status       | Draft                |
| Author       | Priti                |
| Last Updated | YYYY-MM-DD           |

---

# 1. Overview

Pricing & Membership là trang giới thiệu toàn bộ các gói học và dịch vụ trả phí của Chinese Learning Platform.

Người dùng có thể:

- So sánh các gói.
- Xem quyền lợi.
- Chọn hình thức thanh toán.
- Đăng ký Membership.
- Mua khóa học.
- Áp dụng mã giảm giá.

Đây là trang chuyển đổi doanh thu (Revenue Conversion Page) quan trọng của hệ thống.

---

# 2. Purpose

Trang giúp người dùng:

- Hiểu rõ các gói dịch vụ.
- So sánh quyền lợi.
- Chọn gói phù hợp.
- Thanh toán nhanh.
- Gia hạn Membership.

---

# 3. User Roles

- Guest
- Student
- Teacher
- Admin

---

# 4. Route

```
/pricing
```

---

# 5. Layout

Public Layout

---

# 6. Navigation

Home

↓

Pricing

---

# 7. Objectives

Người dùng có thể:

- Mua Membership.
- Mua khóa học.
- Gia hạn gói.
- So sánh giá.

---

# 8. User Stories

Guest

"Tôi muốn biết học ở đây tốn bao nhiêu tiền."

Student

"Tôi muốn nâng cấp lên Premium."

Teacher

"Tôi muốn xem chính sách dành cho giáo viên."

---

# 9. Entry Points

Người dùng có thể đến từ:

- Home
- Course Detail
- Dashboard
- AI Module
- Pop-up Upgrade
- Google Search

---

# 10. Exit Points

- Checkout
- Dashboard
- Course Detail
- Register
- Login

---

# 11. Page Structure

1. Hero Banner
2. Membership Plans
3. Feature Comparison Table
4. Individual Course Pricing
5. AI Membership
6. Student Benefits
7. FAQ
8. Payment Methods
9. Refund Policy
10. CTA Section
11. Footer

---

# 12. Section Details

## 12.1 Hero Banner

Hiển thị:

- Tiêu đề
- Mô tả
- CTA:
  - Start Learning
  - Compare Plans

---

## 12.2 Membership Plans

Hiển thị các gói:

### Free

- Một số bài học miễn phí
- Tra từ điển
- AI giới hạn
- Video miễn phí

---

### Premium Monthly

- Toàn bộ khóa học
- AI không giới hạn
- Homework
- Mock Test
- Flashcards
- Certificate

---

### Premium Yearly

Bao gồm tất cả quyền lợi Premium.

Giảm giá so với trả theo tháng.

Hiển thị:

Best Value

---

### Lifetime

Thanh toán một lần.

Sở hữu vĩnh viễn.

---

## 12.3 Feature Comparison

Bảng so sánh:

| Feature | Free | Premium | Lifetime |
| ------- | ---- | ------- | -------- |

Ví dụ:

Course Access

AI Chat

Speaking

Writing

Grammar

Dictionary

Mock Exam

Certificate

Priority Support

Download Materials

---

## 12.4 Individual Course Pricing

Danh sách các khóa học có thể mua riêng.

Hiển thị:

- Thumbnail
- Giá
- Discount
- Buy Now

---

## 12.5 AI Membership

Các gói AI:

Basic

Pro

Unlimited

Hiển thị:

- Số lượt Chat
- Speaking
- Writing
- Voice Analysis

---

## 12.6 Student Benefits

Hiển thị:

- Lifetime Access
- Study Anywhere
- AI Teacher
- Homework
- Certificates
- Community
- Progress Tracking

---

## 12.7 FAQ

Accordion.

Ví dụ:

Có hoàn tiền không?

Có thể hủy không?

Có học trên điện thoại được không?

---

## 12.8 Payment Methods

Hiển thị:

- Visa
- MasterCard
- PayPal
- VNPay
- MoMo
- ZaloPay
- Chuyển khoản ngân hàng

---

## 12.9 Refund Policy

Hiển thị chính sách hoàn tiền.

Ví dụ:

- Hoàn tiền trong 7 ngày nếu chưa học quá 10% khóa học.
- Không hoàn tiền với các trường hợp vi phạm điều khoản.

---

## 12.10 CTA Section

Tiêu đề:

"Bắt đầu hành trình học tiếng Trung ngay hôm nay"

Button

- Join Now
- Browse Courses

---

# 13. Components

- Pricing Cards
- Comparison Table
- FAQ Accordion
- Buttons
- Badges
- Countdown Timer
- Coupon Input
- Payment Icons

---

# 14. Data Display

Hiển thị:

- Plan Name
- Price
- Discount
- Features
- Popular Badge
- Savings
- Payment Cycle

---

# 15. User Actions

Người dùng có thể:

- Chọn gói.
- So sánh.
- Nhập Coupon.
- Thanh toán.
- Chia sẻ.
- Liên hệ tư vấn.

---

# 16. Business Rules

- Chỉ một Membership hoạt động tại một thời điểm.
- Membership sẽ tự động gia hạn nếu bật Auto Renewal.
- Coupon phải còn hiệu lực.
- Khóa học mua riêng không phụ thuộc Membership.

---

# 17. Validation Rules

- Coupon hợp lệ.
- Không thanh toán hai lần cùng một đơn hàng.
- Không mua lại Membership đang còn hiệu lực nếu không phải gia hạn hoặc nâng cấp.

---

# 18. API Endpoints

- GET /api/plans
- GET /api/pricing
- GET /api/coupons
- POST /api/checkout
- POST /api/coupon/verify

---

# 19. Database Tables

- membership_plans
- memberships
- coupons
- payments
- orders
- subscriptions

---

# 20. Permissions

Guest

- Xem bảng giá.

Student

- Mua.
- Gia hạn.
- Hủy tự động gia hạn.

Teacher

- Xem quyền lợi giáo viên.

Admin

- Quản lý toàn bộ.

---

# 21. Page States

Loading

Skeleton.

Empty

"Hiện chưa có gói dịch vụ."

Error

"Không thể tải bảng giá."

---

# 22. Notifications

- Coupon hợp lệ.
- Thanh toán thành công.
- Gia hạn thành công.
- Thanh toán thất bại.

---

# 23. Responsive Design

Desktop

3–4 Pricing Cards.

Tablet

2 Cards.

Mobile

1 Card.

Sticky Buy Button.

---

# 24. Accessibility

- Keyboard Navigation
- Screen Reader
- Focus States
- ARIA Labels

---

# 25. Security

- Thanh toán qua HTTPS.
- Kiểm tra trạng thái giao dịch.
- Chống thanh toán trùng.
- Xác minh Coupon phía Server.

---

# 26. Performance

- Cache bảng giá.
- Lazy Load FAQ.
- CDN cho hình ảnh.
- Tải nhanh dưới 2 giây.

---

# 27. SEO

- Dynamic Meta Title
- Meta Description
- Open Graph
- Canonical URL
- Structured Data

---

# 28. Analytics Events

- Pricing Viewed
- Plan Selected
- Coupon Applied
- Checkout Started
- Purchase Completed
- Upgrade Membership

---

# 29. Acceptance Criteria

- Hiển thị đúng các gói dịch vụ.
- So sánh quyền lợi chính xác.
- Coupon hoạt động đúng.
- Thanh toán thành công mở đúng quyền.
- Responsive trên Desktop, Tablet và Mobile.

---

# 30. Future Improvements

- Family Plan.
- Team Plan.
- Student Discount.
- Referral Rewards.
- Gift Membership.
- Flash Sale.
- Subscription Pause.
- Multi-Currency.

---

# Related Documents

- PUB-003_Courses.md
- PUB-004_Course_Detail.md
- Payment Module
- User_Flow.md
- API Specifications

---

# Notes

Pricing & Membership là trang có ảnh hưởng trực tiếp đến doanh thu của nền tảng. Thiết kế cần rõ ràng, minh bạch, dễ so sánh và tối ưu tỷ lệ chuyển đổi, đồng thời cho phép mở rộng linh hoạt khi bổ sung các gói dịch vụ mới trong tương lai.
