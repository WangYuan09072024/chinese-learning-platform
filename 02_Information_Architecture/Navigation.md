Navigation.md

Chinese Learning Platform

Document Type: Information Architecture - Navigation

Version: 1.0

Status: Draft

1. Purpose

Tài liệu này mô tả toàn bộ hệ thống điều hướng (Navigation System) của website.

Mục tiêu:

Giúp người dùng di chuyển dễ dàng.

Thống nhất menu trên toàn hệ thống.

Hỗ trợ Responsive cho Desktop và Mobile.

Làm cơ sở để Claude Code xây dựng Layout và Routing.

2. Navigation Structure

Website sử dụng 3 cấp điều hướng chính:

Top Navigation (Header)

Sidebar Navigation (Dashboard)

Context Navigation (Bên trong từng module)

3. Public Website Navigation
   Header Menu

Menu

Destination

Trang chủ

/

Khóa học

/courses

Giáo viên

/teachers

Từ điển

/dictionary

Blog

/blog

Học phí

/pricing

Liên hệ

/contact

Đăng nhập

/login

Đăng ký

/register

4. Student Portal Navigation
   Student Sidebar

Dashboard

Learning Center

Khóa học của tôi

Tiếp tục học

Luyện nghe

Luyện nói

Luyện đọc

Luyện viết

Luyện nét chữ

Bài tập

Quiz

Thi thử HSK

AI Teacher

AI Chat

AI Dịch

AI Viết

AI Phát âm

Từ điển

Flashcards

Sổ tay

Lịch học

Tin nhắn

Thông báo

Thành tích

Chứng chỉ

Thanh toán

Hồ sơ

Cài đặt

5. Teacher Portal Navigation
   Teacher Sidebar

Dashboard

Teaching Workspace

Lớp học

Học viên

Bài giảng

Bài tập

Điểm danh

Chấm điểm

Tin nhắn

Lịch dạy

Báo cáo

Tài nguyên

AI Assistant

Hồ sơ

Cài đặt

6. Admin Portal Navigation
   Admin Sidebar

Dashboard

CRM & Leads

Người dùng

Giáo viên

Học viên

Khóa học

Bài học

Lớp học

Đăng ký học

Tài chính

AI

Từ điển

Nội dung

Thông báo

Báo cáo

Phân quyền

Tệp

Tích hợp

Hệ thống

7. Mobile Navigation
   Bottom Tab Bar (Student)
   Home
   Courses
   AI
   Dictionary
   Profile
8. Breadcrumb Navigation

Ví dụ:

Dashboard

Khóa học của tôi

HSK 3

Bài 5

9. Navigation Rules

Sidebar có thể Collapse / Expand.

Menu hiện tại phải được Highlight.

Hỗ trợ Keyboard Navigation.

Responsive trên Desktop, Tablet, Mobile.

Menu hiển thị theo Role.

Không hiển thị menu người dùng không có quyền truy cập.

10. Related Documents

Sitemap.md

Permission_Matrix.md

User_Flow.md

Page_List.md

11. Notes

Navigation phải được xây dựng theo cấu trúc động (Dynamic Navigation).

Menu được tạo dựa trên Role và Permission của người dùng.

Hệ thống phải hỗ trợ thêm menu mới trong tương lai mà không cần sửa kiến trúc điều hướng hiện tại.
