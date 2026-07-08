# Sitemap.md

# Chinese Learning Platform

Document Type: Information Architecture - Sitemap

Version: 1.0

Status: Draft

---

# 1. Purpose

Tài liệu Sitemap xác định toàn bộ cấu trúc của Chinese Learning Platform.

Đây là bản đồ tổng thể của hệ thống, mô tả tất cả các module, khu vực chức năng và các trang sẽ được xây dựng trong website.

Sitemap không mô tả chi tiết giao diện hoặc chức năng của từng trang. Mục tiêu của tài liệu này là xác định phạm vi của toàn bộ hệ thống và mối quan hệ giữa các khu vực trong website.

Mọi trang mới được bổ sung vào dự án đều phải được cập nhật trong Sitemap trước khi tiến hành thiết kế hoặc lập trình.

Sitemap là tài liệu nền tảng để xây dựng:

- Navigation
- User Flow
- Permission Matrix
- Database
- API
- Page Specifications

Toàn bộ đội ngũ phát triển, bao gồm Designer, Frontend Developer, Backend Developer và AI Coding Assistant phải sử dụng Sitemap như tài liệu tham chiếu chính khi xây dựng website.

---

# 2. Overall Website Structure

Chinese Learning Platform được chia thành các module chính sau:

1. Public Website

Khu vực dành cho khách truy cập chưa đăng nhập.

Bao gồm:

- Trang chủ
- Giới thiệu
- Khóa học
- Giáo viên
- Bảng giá
- Blog
- Tin tức
- Liên hệ
- Câu hỏi thường gặp
- Chính sách
- Điều khoản sử dụng

---

2. Authentication

Khu vực xác thực người dùng.

Bao gồm:

- Đăng ký
- Đăng nhập
- Quên mật khẩu
- Đặt lại mật khẩu
- Xác minh Email
- Xác minh số điện thoại
- Đăng nhập bằng Google
- Đăng nhập bằng Facebook
- Đăng nhập bằng Apple (tương lai)

---

3. Student Portal

Khu vực dành riêng cho học viên.

Bao gồm toàn bộ chức năng phục vụ việc học, luyện tập, theo dõi tiến độ và quản lý tài khoản.

---

4. Teacher Portal

Khu vực dành cho giáo viên.

Bao gồm toàn bộ chức năng quản lý lớp học, học viên, bài tập, chấm điểm và lịch giảng dạy.

---

5. Admin Portal

Khu vực dành cho Super Admin.

Quản lý toàn bộ nền tảng, người dùng, khóa học, giáo viên, doanh thu, AI và cấu hình hệ thống.

---

6. Learning System

Module học tập.

Bao gồm:

- Khóa học
- Giáo trình
- Bài học
- Video
- Từ vựng
- Ngữ pháp
- Luyện nghe
- Luyện nói
- Luyện đọc
- Luyện viết
- Flashcards
- Quiz
- Homework
- Mock Test
- Chứng chỉ

---

7. Dictionary Module

Module từ điển tiếng Trung.

Bao gồm:

- Tra từ
- Chi tiết từ
- Phát âm
- Pinyin
- Âm thanh
- Thứ tự nét
- Bộ thủ
- Ví dụ
- Thành ngữ
- Collocations
- Lưu từ
- Flashcards
- AI giải thích

---

8. AI Learning Module

Module AI hỗ trợ học tập.

Bao gồm:

- AI Chat
- AI Teacher
- AI Speaking
- AI Writing
- AI Grammar
- AI Translation
- AI Pronunciation
- AI Learning Assistant

---

9. Community Module

Module cộng đồng.

Bao gồm:

- Thảo luận
- Hỏi đáp
- Nhóm học
- Chia sẻ tài liệu
- Bảng xếp hạng

Module này sẽ được triển khai ở các phiên bản sau.

---

10. Payment Module

Module thanh toán.

Bao gồm:

- Đăng ký khóa học
- Thanh toán
- Lịch sử giao dịch
- Hóa đơn
- Mã giảm giá
- Membership
- Gia hạn khóa học

---

11. Notification Module

Module thông báo.

Bao gồm:

- Thông báo hệ thống
- Thông báo bài tập
- Thông báo lớp học
- Thông báo thanh toán
- Email
- SMS
- Push Notification

---

12. System Module

Module quản trị hệ thống.

Bao gồm:

- Cấu hình website
- Phân quyền
- Nhật ký hệ thống
- Backup
- Báo cáo
- Dashboard
- Phân tích dữ liệu

# 3. Public Website

Public Website là khu vực dành cho tất cả người dùng chưa đăng nhập.

Đây là khu vực giới thiệu thương hiệu, quảng bá khóa học và chuyển đổi khách truy cập thành học viên.

Người dùng không cần đăng nhập để truy cập các trang trong module này.

---

## 3.1 Home

Trang chủ của website.

Chức năng:

- Giới thiệu nền tảng.
- Banner chính.
- Giới thiệu các khóa học nổi bật.
- Hiển thị giáo viên.
- Đánh giá của học viên.
- Lộ trình học tiếng Trung.
- Video giới thiệu.
- Tin tức mới.
- Blog mới.
- Nút đăng ký học.
- Nút dùng thử miễn phí.
- Footer.

---

## 3.2 About Us

Giới thiệu về trung tâm.

Bao gồm:

- Câu chuyện thành lập.
- Sứ mệnh.
- Tầm nhìn.
- Giá trị cốt lõi.
- Đội ngũ giáo viên.
- Thành tựu.
- Hình ảnh trung tâm.

---

## 3.3 Courses

Danh sách toàn bộ khóa học.

Bao gồm:

- HSK 1
- HSK 2
- HSK 3
- HSK 4
- HSK 5
- HSK 6
- HSK Speaking
- Giao tiếp
- Tiếng Trung thương mại
- Khóa học miễn phí

---

## 3.4 Course Detail

Thông tin chi tiết một khóa học.

Bao gồm:

- Giới thiệu khóa học.
- Đối tượng phù hợp.
- Lộ trình.
- Nội dung học.
- Danh sách bài học.
- Học phí.
- Giá ưu đãi.
- Giáo viên.
- Đánh giá.
- FAQ.
- Đăng ký học.

---

## 3.5 Teachers

Danh sách giáo viên.

Bao gồm:

- Ảnh đại diện.
- Hồ sơ.
- Chứng chỉ.
- Kinh nghiệm.
- Video giới thiệu.
- Các khóa học đang giảng dạy.

---

## 3.6 Pricing

Trang học phí.

Bao gồm:

- Các gói học.
- Membership.
- Premium.
- AI Premium.
- Chính sách hoàn tiền.

---

## 3.7 Blog

Danh sách bài viết.

Danh mục:

- Học tiếng Trung.
- HSK.
- Văn hóa Trung Quốc.
- Kinh nghiệm học.
- Mẹo ghi nhớ từ vựng.
- Tin tức.

---

## 3.8 Blog Detail

Trang đọc bài viết.

Bao gồm:

- Nội dung.
- Hình ảnh.
- Video.
- Bình luận.
- Bài liên quan.

---

## 3.9 Dictionary

Trang từ điển công khai.

Khách chưa đăng nhập vẫn có thể:

- Tra từ.
- Xem Pinyin.
- Nghe phát âm.
- Xem nghĩa.
- Xem ví dụ.

Một số tính năng nâng cao sẽ yêu cầu đăng nhập.

---

## 3.10 Contact

Liên hệ trung tâm.

Bao gồm:

- Form liên hệ.
- Hotline.
- Email.
- Facebook.
- YouTube.
- TikTok.
- Xiaohongshu.
- Douyin.
- Địa chỉ.
- Google Maps.

---

## 3.11 FAQ

Các câu hỏi thường gặp.

Danh mục:

- Đăng ký học.
- Thanh toán.
- Học online.
- Chính sách.
- AI.
- Chứng chỉ.

---

## 3.12 Student Reviews

Đánh giá của học viên.

Bao gồm:

- Video review.
- Hình ảnh.
- Bình luận.
- Điểm đánh giá.

---

## 3.13 Career

Tuyển dụng giáo viên.

Bao gồm:

- Vị trí tuyển dụng.
- Quy trình ứng tuyển.
- Form nộp hồ sơ.

---

## 3.14 Policies

Bao gồm:

- Chính sách bảo mật.
- Điều khoản sử dụng.
- Chính sách thanh toán.
- Chính sách hoàn tiền.
- Chính sách khóa học.

---

## 3.15 Download App (Future)

Trang giới thiệu ứng dụng.

Bao gồm:

- Android.
- iOS.
- QR Code.

# 4. Authentication

Authentication Module chịu trách nhiệm xác thực danh tính người dùng và quản lý toàn bộ quá trình đăng ký, đăng nhập, bảo mật tài khoản và khôi phục tài khoản.

Mọi người dùng muốn sử dụng các chức năng yêu cầu quyền truy cập đều phải trải qua Authentication Module.

Module này phải đảm bảo:

- Đơn giản, dễ sử dụng.
- Bảo mật cao.
- Hỗ trợ nhiều phương thức đăng nhập.
- Có khả năng mở rộng thêm các phương thức xác thực trong tương lai.

---

## Estimated Pages

10 Pages

---

## 4.1 Register

Trang đăng ký tài khoản mới.

Mục đích:

Cho phép người dùng tạo tài khoản học viên.

Chức năng:

- Nhập họ và tên.
- Nhập Email.
- Nhập số điện thoại.
- Đặt mật khẩu.
- Xác nhận mật khẩu.
- Đồng ý Điều khoản sử dụng.
- Đồng ý Chính sách bảo mật.
- Đăng ký.

Sau khi đăng ký thành công:

- Gửi Email xác minh.
- Gửi mã OTP nếu đăng ký bằng số điện thoại.
- Chuyển sang Verify Account.

---

## 4.2 Login

Trang đăng nhập.

Chức năng:

- Đăng nhập bằng Email.
- Đăng nhập bằng số điện thoại.
- Đăng nhập bằng Username (Future).
- Ghi nhớ đăng nhập.
- Hiện / Ẩn mật khẩu.
- Quên mật khẩu.
- Chuyển sang Đăng ký.

Sau khi đăng nhập:

Hệ thống tự động chuyển hướng theo quyền:

- Student Dashboard
- Teacher Dashboard
- Admin Dashboard

---

## 4.3 Verify Account

Trang xác minh tài khoản.

Bao gồm:

- Xác minh Email.
- Xác minh số điện thoại.
- Nhập mã OTP.
- Gửi lại mã.
- Thông báo thành công.

Chỉ khi xác minh thành công tài khoản mới được kích hoạt.

---

## 4.4 Forgot Password

Trang yêu cầu đặt lại mật khẩu.

Người dùng có thể nhập:

- Email.
- Hoặc số điện thoại.

Hệ thống sẽ gửi:

- Email Reset Link.
- Hoặc mã OTP.

---

## 4.5 Reset Password

Trang đặt mật khẩu mới.

Bao gồm:

- Nhập mật khẩu mới.
- Xác nhận mật khẩu.
- Kiểm tra độ mạnh mật khẩu.
- Thông báo thành công.

Sau khi đổi mật khẩu:

- Đăng xuất khỏi tất cả thiết bị (tùy chọn).
- Yêu cầu đăng nhập lại.

---

## 4.6 Social Login

Hỗ trợ đăng nhập nhanh.

Phiên bản đầu:

- Google

Phiên bản tương lai:

- Facebook
- Apple ID
- Microsoft
- WeChat
- QQ

---

## 4.7 Two-Factor Authentication (Future)

Bảo mật hai lớp.

Hỗ trợ:

- Email OTP.
- SMS OTP.
- Authenticator App.

Cho phép người dùng bật hoặc tắt trong phần Settings.

---

## 4.8 Session Management

Quản lý phiên đăng nhập.

Bao gồm:

- Danh sách thiết bị đang đăng nhập.
- Đăng xuất từng thiết bị.
- Đăng xuất tất cả thiết bị.
- Hiển thị thời gian đăng nhập.
- Hiển thị địa chỉ IP gần nhất.
- Hiển thị vị trí đăng nhập gần nhất (nếu có).

---

## 4.9 Security Center

Trung tâm bảo mật tài khoản.

Bao gồm:

- Đổi mật khẩu.
- Đổi Email.
- Đổi số điện thoại.
- Kiểm tra lịch sử đăng nhập.
- Kiểm tra hoạt động bất thường.
- Quản lý Two-Factor Authentication.

---

## 4.10 Access Rules

Guest được phép:

- Register.
- Login.
- Forgot Password.

Student:

- Đổi mật khẩu.
- Quản lý thiết bị.
- Quản lý bảo mật.

Teacher:

- Đổi mật khẩu.
- Quản lý thiết bị.
- Quản lý bảo mật.

Super Admin:

- Đổi mật khẩu.
- Quản lý thiết bị.
- Quản lý bảo mật.
- Quản lý chính sách xác thực của toàn hệ thống.

---

## Related Documents

Target_Users.md

Permission_Matrix.md

Student_Dashboard.md

Teacher_Dashboard.md

Admin_Dashboard.md

Settings.md

---

## Notes

Authentication Module phải được thiết kế độc lập với các module khác để dễ dàng thay đổi hoặc bổ sung phương thức xác thực trong tương lai.

Toàn bộ dữ liệu xác thực phải được mã hóa và tuân thủ các tiêu chuẩn bảo mật hiện đại.

Không lưu mật khẩu dưới dạng văn bản thuần (Plain Text).

Các API xác thực phải được tách riêng khỏi các API nghiệp vụ của hệ thống.

# 5. Student Portal

Student Portal là không gian học tập cá nhân của mỗi học viên sau khi đăng nhập.

Đây là module quan trọng nhất của toàn bộ Chinese Learning Platform, nơi học viên thực hiện hầu hết mọi hoạt động học tập, tương tác với giáo viên, sử dụng AI và quản lý tài khoản.

Mục tiêu của Student Portal không chỉ là cung cấp bài học mà còn xây dựng một hệ sinh thái học tập hoàn chỉnh, giúp học viên có thể học tập, luyện tập, theo dõi tiến độ và phát triển kỹ năng trong một nền tảng duy nhất.

Student Portal phải được thiết kế theo các nguyên tắc sau:

- Đơn giản và dễ sử dụng.
- Giao diện thống nhất trên toàn hệ thống.
- Có thể truy cập mọi chức năng trong tối đa 3 lần nhấp chuột.
- Ưu tiên trải nghiệm học tập trên cả máy tính và điện thoại.
- Dễ dàng mở rộng trong tương lai.

---

## Estimated Pages

30 - 40 Pages

---

# Module Structure

Student Portal bao gồm các nhóm chức năng sau:

1. Dashboard

2. Learning Center

3. My Courses

4. Lesson System

5. Practice Center

6. Homework & Exams

7. AI Learning

8. Dictionary

9. Flashcards & Notebook

10. Calendar

11. Communication

12. Achievements

13. Payment

14. Personal Account

15. Settings

---

# 5.1 Dashboard

Trang chủ sau khi học viên đăng nhập.

Dashboard hiển thị toàn bộ thông tin quan trọng trong ngày.

Bao gồm:

- Avatar
- Thông tin học viên
- Cấp độ HSK
- Điểm kinh nghiệm (XP)
- Learning Streak
- Khóa học đang học
- Bài học tiếp theo
- Bài tập chưa làm
- Lịch học hôm nay
- Thông báo mới
- Tin nhắn mới
- Tiến độ học
- Thành tích
- Chứng chỉ
- AI Recommendation

Dashboard phải trả lời được câu hỏi:

"Hôm nay học viên cần làm gì?"

---

# 5.2 Learning Center

Đây là trung tâm học tập cá nhân.

Bao gồm:

- Today's Plan
- Weekly Plan
- Monthly Goal
- Learning Roadmap
- AI Study Plan
- Learning Statistics
- XP
- Level
- Streak
- Daily Challenge
- Weekly Challenge
- Recommended Lesson

Đây sẽ là nơi AI hướng dẫn học viên học mỗi ngày.

---

# 5.3 My Courses

Danh sách toàn bộ khóa học.

Phân loại:

- Current Courses
- Completed Courses
- Purchased Courses
- Expired Courses
- Wishlist

Mỗi khóa học hiển thị:

- Ảnh bìa
- Giáo viên
- Tiến độ
- Bài học tiếp theo
- Thời gian còn lại
- Continue Learning

---

# 5.4 Lesson System

Đây là nơi học bài.

Bao gồm:

Lesson

Vocabulary

Grammar

Examples

Dialogue

Culture Notes

Video

Audio

PDF

Download Materials

Bookmark

Lesson Notes

Lesson Discussion

Related Lessons

Locked Lessons

Premium Lessons

---

# 5.5 Practice Center

Khu vực luyện tập.

Bao gồm:

Listening Practice

Speaking Practice

Reading Practice

Writing Practice

Typing Chinese

Stroke Order Practice

Shadowing Practice

Pronunciation Evaluation

AI Speaking Partner

Mini Games

Vocabulary Review

Grammar Practice

Sentence Building

---

# 5.6 Homework & Exams

Bao gồm:

Homework

Assignments

Quiz

Unit Test

Midterm Test

Final Test

Mock HSK

Exam History

Teacher Feedback

Scores

Ranking

---

# 5.7 AI Learning

Toàn bộ tính năng AI.

Bao gồm:

AI Chat

AI Chinese Teacher

AI Grammar Checker

AI Writing Assistant

AI Speaking Coach

AI Pronunciation

AI Translation

AI Vocabulary Explanation

AI Lesson Summary

AI Learning Recommendation

---

# 5.8 Dictionary

Từ điển tích hợp.

Bao gồm:

Chinese Dictionary

Word Details

Pinyin

Audio

Stroke Order

Radicals

Examples

Synonyms

Antonyms

Collocations

Idioms

Save Word

Create Flashcard

AI Explain

AI Example Sentence

---

# 5.9 Flashcards & Notebook

Kho học tập cá nhân.

Bao gồm:

My Flashcards

Auto Flashcards

Notebook

Saved Grammar

Saved Vocabulary

Favorite Lessons

Review History

Spaced Repetition

---

# 5.10 Calendar

Lịch học.

Bao gồm:

Today's Schedule

Upcoming Classes

Homework Deadline

Exam Schedule

Events

Reminder

Attendance History

---

# 5.11 Communication

Giao tiếp.

Bao gồm:

Teacher Chat

Center Messages

Announcements

Community Notifications

Support Ticket

Live Chat

---

# 5.12 Achievements

Hệ thống thành tích.

Bao gồm:

Certificates

Achievements

Badges

XP

Leaderboard

Learning Streak

Monthly Report

Yearly Report

---

# 5.13 Payment

Quản lý mua khóa học.

Bao gồm:

Orders

Invoices

Payment History

Membership

Premium

Coupons

Renew Course

Refund Request

---

# 5.14 Personal Account

Thông tin cá nhân.

Bao gồm:

Profile

Avatar

Personal Information

Learning Goal

Language Preference

Security

Login Devices

Privacy

---

# 5.15 Settings

Cài đặt.

Bao gồm:

Theme

Language

Notifications

Privacy

Security

Connected Accounts

Accessibility

AI Preferences

Learning Preferences

---

# Related Documents

Lesson.md

Homework.md

Dictionary.md

AI_Chat.md

Calendar.md

Profile.md

Payment.md

Permission_Matrix.md

User_Flow.md

---

# Notes

Student Portal là module trung tâm của toàn bộ hệ thống.

Khoảng 80% thời gian sử dụng website của học viên sẽ diễn ra trong Student Portal.

Tất cả các tính năng mới dành cho học viên phải được bổ sung vào Student Portal trước khi tiến hành thiết kế giao diện, cơ sở dữ liệu hoặc lập trình.

Student Portal phải được thiết kế theo hướng module hóa, đảm bảo khả năng mở rộng để bổ sung các khóa học mới, ngôn ngữ mới và các công nghệ AI trong tương lai mà không cần thay đổi kiến trúc tổng thể của hệ thống.

# 6. Teacher Portal

Teacher Portal là không gian làm việc dành riêng cho giáo viên.

Module này cho phép giáo viên quản lý lớp học, học viên, bài giảng, bài tập, điểm số, lịch dạy và tương tác với học viên.

Giáo viên chỉ có quyền truy cập vào các lớp học và học viên được Super Admin phân công.

Teacher Portal phải giúp giáo viên giảm tối đa các công việc thủ công, tập trung vào việc giảng dạy và hỗ trợ học viên.

---

## Estimated Pages

25 - 35 Pages

---

# Module Structure

Teacher Portal bao gồm các nhóm chức năng sau:

1. Dashboard

2. Class Management

3. Student Management

4. Lesson Management

5. Assignment Management

6. Attendance

7. Grading Center

8. Communication

9. Calendar

10. Reports & Analytics

11. Teaching Resources

12. Profile

13. Settings

---

# 6.1 Teacher Dashboard

Trang làm việc chính của giáo viên.

Hiển thị:

- Lời chào.
- Avatar.
- Thông tin giáo viên.
- Lịch dạy hôm nay.
- Các lớp đang phụ trách.
- Tổng số học viên.
- Bài tập chờ chấm.
- Tin nhắn mới.
- Thông báo mới.
- Công việc cần làm hôm nay.
- Tiến độ các lớp.
- Báo cáo nhanh.

Dashboard phải giúp giáo viên biết ngay những việc cần xử lý.

---

# 6.2 Class Management

Quản lý lớp học.

Bao gồm:

- Danh sách lớp.
- Thông tin lớp.
- Danh sách học viên.
- Trạng thái lớp.
- Thời khóa biểu.
- Giáo trình đang sử dụng.
- Tỷ lệ hoàn thành chương trình.
- Ghi chú lớp học.

Giáo viên chỉ nhìn thấy các lớp được phân công.

---

# 6.3 Student Management

Quản lý học viên.

Bao gồm:

- Danh sách học viên.
- Hồ sơ học viên.
- Tiến độ học tập.
- Điểm số.
- Điểm chuyên cần.
- Ghi chú riêng.
- Mức độ hoàn thành bài tập.
- Mục tiêu học tập.
- Cảnh báo học viên học kém.
- Nhật ký học tập.

Giáo viên không được chỉnh sửa thông tin tài khoản của học viên.

---

# 6.4 Lesson Management

Quản lý bài giảng.

Bao gồm:

- Danh sách bài học.
- Mở khóa bài học.
- Khóa bài học.
- Đăng tài liệu.
- Đăng video.
- Đăng file PDF.
- Đăng file nghe.
- Ghi chú cho bài học.
- Đính kèm tài liệu bổ sung.

Giáo viên không được sửa giáo trình gốc của hệ thống.

---

# 6.5 Assignment Management

Quản lý bài tập.

Bao gồm:

- Tạo bài tập.
- Giao bài tập.
- Đặt hạn nộp.
- Đính kèm tài liệu.
- Xem trạng thái nộp bài.
- Gia hạn bài tập.
- Hủy bài tập.

---

# 6.6 Attendance

Điểm danh.

Bao gồm:

- Điểm danh từng buổi học.
- Trạng thái:
  - Có mặt.
  - Vắng.
  - Đi muộn.
  - Có phép.
- Ghi chú.
- Thống kê chuyên cần.

---

# 6.7 Grading Center

Trung tâm chấm bài.

Bao gồm:

- Danh sách bài nộp.
- Chấm điểm.
- Nhận xét.
- Chấm lại.
- Trả bài.
- Lịch sử chấm bài.
- Thống kê điểm.
- Export điểm.

---

# 6.8 Communication

Trao đổi với học viên.

Bao gồm:

- Chat cá nhân.
- Chat theo lớp.
- Gửi thông báo.
- Email học viên.
- Thông báo khẩn.
- Livestream (Future).

---

# 6.9 Calendar

Lịch giảng dạy.

Bao gồm:

- Lịch dạy.
- Lịch họp.
- Lịch thi.
- Lịch chấm bài.
- Nhắc việc.
- Đồng bộ Google Calendar (Future).

---

# 6.10 Reports & Analytics

Báo cáo.

Bao gồm:

- Tiến độ từng lớp.
- Tiến độ từng học viên.
- Điểm trung bình.
- Tỷ lệ hoàn thành.
- Chuyên cần.
- Thời lượng học.
- Báo cáo cuối tháng.
- Báo cáo cuối khóa.

---

# 6.11 Teaching Resources

Kho tài nguyên giảng dạy.

Bao gồm:

- Giáo trình.
- Slide.
- PDF.
- Video.
- Audio.
- Đề thi.
- Đáp án.
- File mẫu.
- Bộ hình ảnh.

Chỉ giáo viên được phân quyền mới có thể tải lên tài liệu.

---

# 6.12 Profile

Thông tin giáo viên.

Bao gồm:

- Avatar.
- Họ tên.
- Email.
- Số điện thoại.
- Chuyên môn.
- Chứng chỉ.
- Kinh nghiệm.
- Giới thiệu bản thân.

---

# 6.13 Settings

Cài đặt.

Bao gồm:

- Đổi mật khẩu.
- Thông báo.
- Bảo mật.
- Ngôn ngữ.
- Thiết bị đăng nhập.
- Giao diện.

---

## Related Documents

Permission_Matrix.md

Teacher_Dashboard.md

Class_Management.md

Assignment.md

Grading.md

Attendance.md

Calendar.md

Profile.md

---

## Notes

Teacher Portal phải được thiết kế theo hướng tối ưu quy trình giảng dạy.

Giáo viên chỉ được phép thao tác trên các lớp học và học viên được phân công.

Các thay đổi ảnh hưởng đến giáo trình gốc, cấu hình hệ thống hoặc dữ liệu toàn cục phải do Super Admin thực hiện.

Hệ thống cần hỗ trợ mở rộng để nhiều giáo viên có thể cùng giảng dạy một khóa học nhưng vẫn đảm bảo phân quyền rõ ràng và không làm ảnh hưởng đến dữ liệu của nhau.

# 7. Admin Portal

Admin Portal là trung tâm điều hành cao nhất của Chinese Learning Platform.

Đây là khu vực chỉ dành cho Super Admin và các tài khoản quản trị được phân quyền.

Admin Portal cho phép quản lý toàn bộ hoạt động của nền tảng, từ học viên, giáo viên, khóa học, tài chính, AI, marketing đến cấu hình hệ thống.

Admin Portal được thiết kế theo mô hình "Business Operating System", nghĩa là toàn bộ trung tâm có thể được vận hành trên một nền tảng duy nhất.

---

## Estimated Pages

60 - 80 Pages

---

# Module Structure

Admin Portal bao gồm các nhóm chức năng sau:

1. Dashboard

2. CRM & Lead Management

3. User Management

4. Teacher Management

5. Student Management

6. Course Management

7. Lesson Management

8. Class Management

9. Enrollment Management

10. Homework & Exam Management

11. Dictionary Management

12. AI Management

13. Payment & Finance

14. Coupon & Membership

15. Certificate Management

16. Content Management

17. Marketing Center

18. Communication Center

19. Notification Center

20. Reports & Analytics

21. Role & Permission Management

22. File Management

23. Integration Center

24. Recruitment Center

25. Mobile App Management

26. Audit Logs

27. System Health

28. Backup & Security

29. System Settings

---

# 7.1 Dashboard

Trang tổng quan của toàn bộ hệ thống.

Hiển thị:

- Tổng học viên
- Tổng giáo viên
- Tổng lớp học
- Tổng khóa học
- Doanh thu hôm nay
- Doanh thu tháng
- Doanh thu năm
- Người dùng đang online
- Đơn đăng ký mới
- Học viên mới
- AI Usage
- Server Status
- Công việc cần xử lý
- Thông báo hệ thống
- AI Insights
- Business KPIs

---

# 7.2 CRM & Lead Management

Quản lý toàn bộ khách hàng tiềm năng.

Bao gồm:

- Danh sách Leads
- Khách quan tâm
- Đăng ký thử học
- Form Website
- Facebook Leads
- TikTok Leads
- Zalo Leads
- Xiaohongshu Leads
- Douyin Leads
- Nguồn khách hàng
- Giai đoạn tư vấn
- Lịch sử tư vấn
- Ghi chú
- Lịch hẹn
- Nhắc gọi lại
- Chuyển đổi thành học viên
- Phân công nhân viên phụ trách
- Thống kê tỷ lệ chuyển đổi

---

# 7.3 User Management

Bao gồm:

- Danh sách người dùng
- Tạo tài khoản
- Khóa tài khoản
- Mở khóa
- Reset Password
- Login History
- Activity Logs
- Export dữ liệu

---

# 7.4 Teacher Management

Bao gồm:

- Hồ sơ giáo viên
- Phân công lớp
- Chuyên môn
- Chứng chỉ
- Kinh nghiệm
- Hiệu suất giảng dạy
- Đánh giá
- KPI
- Hợp đồng (Future)

---

# 7.5 Student Management

Bao gồm:

- Hồ sơ học viên
- Tiến độ học
- Lịch sử học
- Thanh toán
- Chứng chỉ
- Điểm
- Chuyên cần
- Learning Timeline
- Ghi chú nội bộ

---

# 7.6 Course Management

Bao gồm:

- Tạo khóa học
- Danh mục
- Giá bán
- Giá khuyến mãi
- Premium
- Free Course
- Teacher Assignment
- Published / Draft

---

# 7.7 Lesson Management

Bao gồm:

- Lesson
- Video
- Audio
- PDF
- Quiz
- Homework
- Flashcards
- Vocabulary
- Grammar
- Khóa / Mở khóa bài học

---

# 7.8 Class Management

Bao gồm:

- Tạo lớp
- Lịch học
- Giáo viên
- Học viên
- Sĩ số
- Trạng thái
- Chuyển lớp
- Đóng lớp

---

# 7.9 Enrollment Management

Bao gồm:

- Đăng ký khóa học
- Danh sách chờ
- Chuyển lớp
- Gia hạn
- Hủy đăng ký

---

# 7.10 Homework & Exam Management

Bao gồm:

- Homework
- Quiz
- Mock HSK
- Midterm
- Final Exam
- Đáp án
- Chấm điểm
- AI Grading (Future)

---

# 7.11 Dictionary Management

Bao gồm:

- Từ mới
- Bộ thủ
- Pinyin
- Audio
- Ví dụ
- Thành ngữ
- Đồng bộ dữ liệu

---

# 7.12 AI Management

Bao gồm:

- AI Teacher
- AI Chat
- AI Speaking
- AI Writing
- AI Grammar
- AI Translation
- AI Usage
- AI Prompt Library
- AI Cost Statistics

---

# 7.13 Payment & Finance

Bao gồm:

- Orders
- Payments
- Refunds
- Invoices
- Revenue
- Financial Reports

---

# 7.14 Coupon & Membership

Bao gồm:

- Coupon
- Voucher
- Membership
- Premium Plans
- Gift Codes
- Referral Rewards (Future)

---

# 7.15 Certificate Management

Bao gồm:

- Certificate Templates
- Completion Certificates
- HSK Mock Certificates
- QR Verification
- Download History

---

# 7.16 Content Management

Bao gồm:

- Homepage
- Banner
- Blog
- FAQ
- Landing Pages
- News
- SEO Pages

---

# 7.17 Marketing Center

Bao gồm:

- Email Campaign
- Push Campaign
- Landing Pages
- Affiliate (Future)
- Referral Program
- UTM Tracking
- Conversion Statistics

---

# 7.18 Communication Center

Bao gồm:

- Chat
- Email
- Broadcast
- Livestream
- Announcement
- Support Tickets

---

# 7.19 Notification Center

Bao gồm:

- System Notifications
- Class Notifications
- Homework Notifications
- Payment Notifications
- Push Notifications
- SMS
- Email

---

# 7.20 Reports & Analytics

Bao gồm:

- Revenue
- Students
- Teachers
- Courses
- AI Usage
- Learning Statistics
- Retention Rate
- Conversion Rate
- Export Excel
- Export PDF

---

# 7.21 Role & Permission Management

Bao gồm:

- Roles
- Permissions
- User Groups
- Custom Roles
- Permission Matrix

---

# 7.22 File Management

Bao gồm:

- Images
- Videos
- Audio
- PDF
- Documents
- Storage Statistics

---

# 7.23 Integration Center

Bao gồm:

- Google Login
- Facebook Login
- Apple Login
- VNPay
- MoMo
- Stripe
- PayPal
- Google Analytics
- Google Drive
- OpenAI
- Gemini
- DeepSeek

---

# 7.24 Recruitment Center

Bao gồm:

- Tuyển giáo viên
- Hồ sơ ứng viên
- Phỏng vấn
- Kết quả
- Hợp đồng

---

# 7.25 Mobile App Management

Bao gồm:

- App Version
- App Update
- Push Config
- Feature Flags
- Crash Reports

---

# 7.26 Audit Logs

Bao gồm:

- Login Logs
- Payment Logs
- AI Logs
- Security Logs
- User Activity
- Admin Activity

---

# 7.27 System Health

Bao gồm:

- Server Status
- Database Status
- Storage Usage
- API Status
- Queue Status
- Error Logs

---

# 7.28 Backup & Security

Bao gồm:

- Backup
- Restore
- SSL
- API Keys
- Session Management
- Device Management
- Firewall
- Security Policies

---

# 7.29 System Settings

Bao gồm:

- Website Settings
- Branding
- Domain
- Email
- Languages
- Timezone
- SEO
- Theme
- Feature Toggles
- Maintenance Mode

---

## Related Documents

Permission_Matrix.md

User_Management.md

Teacher_Management.md

Student_Management.md

CRM.md

Marketing.md

Payment.md

Reports.md

System_Settings.md

Audit_Logs.md

Integration_Center.md

---

## Notes

Admin Portal là trung tâm điều hành cao nhất của nền tảng.

Mọi thao tác quan trọng phải được ghi vào Audit Logs và có cơ chế xác nhận trước khi thực hiện.

Kiến trúc phải hỗ trợ mở rộng để quản lý nhiều trung tâm, nhiều chi nhánh, nhiều giáo viên, hàng trăm nghìn học viên và nhiều ngôn ngữ trong tương lai mà không cần thay đổi cấu trúc hệ thống.

# 9. Dictionary Module

Dictionary Module là hệ thống từ điển thông minh được tích hợp trực tiếp trong Chinese Learning Platform.

Đây không chỉ là công cụ tra cứu từ vựng mà còn là trung tâm hỗ trợ học tiếng Trung, giúp học viên hiểu sâu về từ, cách sử dụng, ngữ pháp và ngữ cảnh thực tế.

Dictionary Module phải hoạt động độc lập nhưng có thể được truy cập từ mọi nơi trong hệ thống như Lesson, Homework, AI Chat, Reading Practice và Writing Practice.

---

## Estimated Pages

15 - 20 Pages

---

# Module Structure

Dictionary Module bao gồm các nhóm chức năng sau:

1. Dictionary Home

2. Search

3. Word Details

4. Stroke Order

5. Radicals

6. Examples

7. Grammar

8. Synonyms & Antonyms

9. Idioms & Expressions

10. Collections

11. Flashcards

12. AI Dictionary Assistant

13. Search History

14. Favorites

15. Daily Vocabulary

---

# 9.1 Dictionary Home

Trang chính của từ điển.

Bao gồm:

- Thanh tìm kiếm
- Từ được tra nhiều nhất
- Từ mới hôm nay
- Thành ngữ hôm nay
- Từ vựng theo HSK
- Chủ đề phổ biến
- Bộ thủ phổ biến
- Gợi ý tìm kiếm
- Daily Vocabulary

---

# 9.2 Search

Cho phép tra cứu bằng nhiều cách khác nhau.

Hỗ trợ:

- Chữ Hán
- Pinyin
- Tiếng Việt
- Tiếng Anh (Future)
- Bộ thủ
- Số nét
- Viết tay
- Giọng nói
- OCR từ hình ảnh (Future)

Kết quả tìm kiếm phải trả về gần như tức thì.

---

# 9.3 Word Details

Trang chi tiết của một từ.

Bao gồm:

- Chữ Hán
- Giản thể
- Phồn thể
- Pinyin
- Phiên âm có thanh điệu
- Âm thanh
- Nghĩa tiếng Việt
- Nghĩa tiếng Anh (Future)
- Loại từ
- Độ khó HSK
- Tần suất sử dụng
- Bộ thủ
- Số nét
- Cấu tạo chữ
- Từ liên quan

---

# 9.4 Stroke Order

Trang hướng dẫn viết chữ.

Bao gồm:

- Thứ tự nét
- Animation từng nét
- GIF viết
- Canvas luyện viết
- AI nhận diện chữ viết (Future)
- Chấm điểm nét viết (Future)

---

# 9.5 Radicals

Thông tin bộ thủ.

Bao gồm:

- Bộ thủ
- Ý nghĩa
- Cách ghi nhớ
- Các chữ cùng bộ
- Danh sách từ liên quan

---

# 9.6 Examples

Ví dụ sử dụng.

Bao gồm:

- Câu ví dụ
- Phiên âm
- Dịch nghĩa
- Audio
- Hội thoại
- Ví dụ theo HSK
- Ví dụ đời sống

---

# 9.7 Grammar

Giải thích ngữ pháp liên quan.

Bao gồm:

- Cấu trúc
- Cách dùng
- Ví dụ
- Lỗi thường gặp
- So sánh với cấu trúc tương tự
- Liên kết đến bài học liên quan

---

# 9.8 Synonyms & Antonyms

Hiển thị:

- Từ đồng nghĩa
- Từ trái nghĩa
- Phân biệt cách dùng
- Ví dụ

---

# 9.9 Idioms & Expressions

Bao gồm:

- Thành ngữ
- Tục ngữ
- Quán ngữ
- Cụm từ cố định
- Ví dụ
- Giải thích

---

# 9.10 Collections

Các bộ từ vựng.

Ví dụ:

- HSK 1
- HSK 2
- HSK 3
- HSK 4
- HSK 5
- HSK 6
- HSKK
- Giao tiếp
- Du lịch
- Công việc
- Kinh doanh
- Ẩm thực
- Gia đình
- Trường học
- Y tế
- Công nghệ

---

# 9.11 Flashcards

Flashcards được tạo từ từ điển.

Bao gồm:

- Tạo Flashcard
- Lưu Flashcard
- Ôn tập
- Spaced Repetition
- Đánh dấu đã nhớ
- Thống kê ghi nhớ

---

# 9.12 AI Dictionary Assistant

AI hỗ trợ học từ.

Bao gồm:

- Giải thích từ
- Giải thích cách dùng
- Tạo câu ví dụ
- Tạo đoạn hội thoại
- So sánh các từ gần nghĩa
- Giải thích ngữ pháp
- Đặt câu
- Dịch câu
- Kiểm tra cách dùng của học viên

---

# 9.13 Search History

Lưu lịch sử tra cứu.

Bao gồm:

- Từ đã tra
- Thời gian
- Tra gần đây
- Xóa lịch sử
- Tìm kiếm lại

---

# 9.14 Favorites

Danh sách từ yêu thích.

Bao gồm:

- Lưu từ
- Xóa từ
- Nhóm từ
- Xuất danh sách
- Tạo Flashcards từ danh sách

---

# 9.15 Daily Vocabulary

Từ vựng mỗi ngày.

Bao gồm:

- Word of the Day
- Thành ngữ hôm nay
- Bộ thủ hôm nay
- Mini Quiz
- AI giải thích
- Thống kê số ngày học liên tiếp

# 9.16 Smart Dictionary Popup

Chỉ cần bôi đen một từ tiếng Trung.
Một cửa sổ nhỏ hiện ra ngay lập tức với:
Chữ Hán.
Pinyin.
Nghĩa.
Phát âm.
Thứ tự nét.
Ví dụ.
Nút "Lưu vào Flashcards".
Nút "Hỏi AI".

---

## Related Documents

Lesson.md

Vocabulary.md

Flashcards.md

AI_Chat.md

Writing_Practice.md

Reading_Practice.md

Grammar.md

---

## Notes

Dictionary Module phải hoạt động như một hệ thống độc lập và có thể được truy cập từ bất kỳ khu vực nào trong nền tảng.

Mọi từ vựng đều cần được liên kết với bài học, Flashcards, AI Learning và các bài luyện tập để tạo thành một hệ sinh thái học tập thống nhất.

Dictionary Module phải hỗ trợ mở rộng thêm nhiều ngôn ngữ, nhiều bộ từ điển và nhiều nguồn dữ liệu trong tương lai mà không làm thay đổi kiến trúc của hệ thống.

# 10. AI Module

AI Module là hệ thống trí tuệ nhân tạo được tích hợp xuyên suốt toàn bộ Chinese Learning Platform.

AI không chỉ là một chatbot mà đóng vai trò như một giáo viên, trợ giảng và trợ lý học tập cá nhân, hỗ trợ học viên, giáo viên và quản trị viên trong mọi hoạt động của hệ thống.

AI Module phải được thiết kế theo hướng mở để có thể thay đổi hoặc tích hợp nhiều mô hình AI khác nhau trong tương lai.

---

## Estimated Pages

20 - 30 Pages

---

# Module Structure

AI Module bao gồm các nhóm chức năng sau:

1. AI Chat

2. AI Chinese Teacher

3. AI Speaking Coach

4. AI Pronunciation Evaluation

5. AI Writing Assistant

6. AI Grammar Assistant

7. AI Vocabulary Assistant

8. AI Reading Assistant

9. AI Listening Assistant

10. AI Translation

11. AI Study Planner

12. AI Homework Assistant

13. AI Exam Assistant

14. AI Learning Analytics

15. AI Prompt Center

16. AI Settings

---

# 10.1 AI Chat

Trợ lý AI tổng quát.

Cho phép học viên trò chuyện tự nhiên bằng:

- Tiếng Trung
- Tiếng Việt
- Tiếng Anh

Bao gồm:

- Đặt câu hỏi
- Giải thích bài học
- Hỏi từ vựng
- Hỏi ngữ pháp
- Hỏi văn hóa Trung Quốc
- Luyện hội thoại

AI phải ghi nhớ ngữ cảnh của cuộc trò chuyện.

---

# 10.2 AI Chinese Teacher

Giáo viên AI.

Có khả năng:

- Giảng bài
- Giải thích bài học
- Giải thích cấu trúc ngữ pháp
- Giải thích từ mới
- Đặt câu hỏi
- Kiểm tra kiến thức
- Gợi ý bài học tiếp theo

AI phải ưu tiên giải thích theo chương trình học của website.

---

# 10.3 AI Speaking Coach

Huấn luyện nói.

Bao gồm:

- Hội thoại theo chủ đề
- Hội thoại HSK
- Đóng vai
- Hội thoại đời sống
- Hội thoại công việc
- Hội thoại du lịch

AI phản hồi ngay sau mỗi câu trả lời.

---

# 10.4 AI Pronunciation Evaluation

Đánh giá phát âm.

Bao gồm:

- Chấm điểm phát âm
- Chấm thanh điệu
- Chấm ngữ điệu
- Chấm tốc độ nói
- Phát hiện lỗi
- Gợi ý sửa

Hiển thị điểm theo từng câu và từng từ.

---

# 10.5 AI Writing Assistant

Trợ lý viết.

Bao gồm:

- Sửa lỗi chính tả
- Sửa lỗi ngữ pháp
- Đề xuất cách diễn đạt
- Chấm bài viết
- Đánh giá theo HSK
- Giải thích lỗi

AI không chỉ sửa mà còn giải thích lý do.

---

# 10.6 AI Grammar Assistant

Giải thích ngữ pháp.

Bao gồm:

- Giải thích cấu trúc
- So sánh các cấu trúc
- Ví dụ
- Lỗi thường gặp
- Bài tập luyện tập

---

# 10.7 AI Vocabulary Assistant

Hỗ trợ học từ vựng.

Bao gồm:

- Giải thích từ
- Phân tích sắc thái
- Ví dụ
- Từ đồng nghĩa
- Từ trái nghĩa
- Tạo Flashcards
- Đặt câu

---

# 10.8 AI Reading Assistant

Hỗ trợ đọc hiểu.

Bao gồm:

- Giải thích đoạn văn
- Dịch từng câu
- Phân tích ngữ pháp
- Giải thích thành ngữ
- Trả lời câu hỏi

---

# 10.9 AI Listening Assistant

Hỗ trợ luyện nghe.

Bao gồm:

- Giải thích nội dung
- Tạo Transcript
- Phân tích từ khó
- Điều chỉnh tốc độ
- Kiểm tra nghe hiểu

---

# 10.10 AI Translation

Dịch thuật.

Hỗ trợ:

- Trung ⇄ Việt
- Trung ⇄ Anh
- Việt ⇄ Trung
- Anh ⇄ Trung

Có thể:

- Dịch từ
- Dịch câu
- Dịch đoạn văn

AI phải giữ đúng ngữ cảnh.

---

# 10.11 AI Study Planner

Lập kế hoạch học tập.

Bao gồm:

- Xác định mục tiêu
- Đề xuất lộ trình
- Kế hoạch hàng ngày
- Kế hoạch hàng tuần
- Điều chỉnh theo tiến độ
- Nhắc nhở học

---

# 10.12 AI Homework Assistant

Hỗ trợ làm bài tập.

Bao gồm:

- Gợi ý
- Giải thích yêu cầu
- Kiểm tra đáp án
- Phân tích lỗi
- Gợi ý cách sửa

Không được đưa đáp án ngay khi học viên chưa cố gắng.

---

# 10.13 AI Exam Assistant

Hỗ trợ ôn thi.

Bao gồm:

- Phân tích điểm yếu
- Đề xuất nội dung ôn tập
- Sinh đề luyện tập
- Mô phỏng kỳ thi HSK
- Thống kê tiến bộ

Trong bài thi chính thức, AI phải bị vô hiệu hóa.

---

# 10.14 AI Learning Analytics

AI phân tích quá trình học.

Bao gồm:

- Điểm mạnh
- Điểm yếu
- Từ vựng cần ôn
- Kỹ năng yếu
- Tiến bộ
- Dự đoán khả năng đạt HSK
- Gợi ý bài học tiếp theo

---

# 10.15 AI Prompt Center

Quản lý Prompt.

Bao gồm:

- Prompt Templates
- Prompt Library
- Prompt Version
- Prompt Testing
- Prompt Logs

Chỉ Admin mới có quyền chỉnh sửa.

---

# 10.16 AI Settings

Cài đặt AI.

Bao gồm:

- Chọn ngôn ngữ phản hồi
- Mức độ chi tiết
- Giọng điệu
- Lưu lịch sử chat
- Xóa lịch sử
- Quản lý quyền riêng tư

# 10. 17 AI Chinese Companion

Đây không phải chatbot hỏi đáp.

Nó là bạn đồng hành học tiếng Trung.

Ví dụ AI sẽ chủ động nói:

"Priti, hôm nay cậu đã học liên tục 12 ngày rồi. Chỉ còn 8 từ nữa là hoàn thành mục tiêu hôm nay."

Hoặc:

"Ba ngày gần đây cậu luyện nghe ít hơn bình thường. Hôm nay mình luyện 10 phút nhé?"

Hay:

"Cậu thường nhầm 把 và 被. Mình vừa chuẩn bị 5 câu luyện tập riêng cho cậu."

Đây là AI chủ động hỗ trợ, chứ không phải đợi người dùng đặt câu hỏi. Theo tớ, nếu sau này xây được tính năng này thì website của cậu sẽ có cảm giác như có một gia sư thật luôn đồng hành cùng học viên. Đây cũng là điểm khác biệt rất lớn so với các nền tảng học trực tuyến hiện nay.

---

## Related Documents

Lesson.md

Dictionary.md

Homework.md

Writing_Practice.md

Speaking_Practice.md

Student_Portal.md

Teacher_Portal.md

Admin_Portal.md

---

## Notes

AI Module là một lớp dịch vụ dùng chung cho toàn bộ hệ thống.

Các chức năng AI phải được thiết kế độc lập với giao diện để có thể thay thế mô hình AI hoặc nhà cung cấp dịch vụ trong tương lai mà không cần thay đổi kiến trúc hệ thống.

Hệ thống cần hỗ trợ tích hợp nhiều mô hình AI khác nhau (ví dụ OpenAI, Gemini, DeepSeek...) và cho phép lựa chọn mô hình phù hợp với từng tính năng.

# 11. Community Module

Community Module là khu vực giúp học viên kết nối, trao đổi và học tập cùng nhau.

Module này không thuộc phạm vi phát triển của Version 1 nhưng hệ thống phải được thiết kế để dễ dàng bổ sung trong tương lai.

---

## 11.1 Community Home

Trang chủ cộng đồng.

Bao gồm:

- Bài viết mới.
- Chủ đề nổi bật.
- Người dùng nổi bật.
- Nhóm học tập.

---

## 11.2 Discussion Forum

Diễn đàn thảo luận.

Danh mục:

- HSK.
- Ngữ pháp.
- Từ vựng.
- Luyện nói.
- Văn hóa Trung Quốc.
- Hỏi đáp.

---

## 11.3 Study Groups

Nhóm học tập.

Chức năng:

- Tạo nhóm.
- Tham gia nhóm.
- Quản lý nhóm.
- Chia sẻ tài liệu.
- Chat nhóm.

---

## 11.4 Q&A

Khu vực hỏi đáp.

Người dùng có thể:

- Đặt câu hỏi.
- Trả lời.
- Bình chọn câu trả lời.
- Đánh dấu câu trả lời đúng.

---

## 11.5 Resource Sharing

Chia sẻ tài liệu học tập.

Bao gồm:

- PDF.
- Flashcards.
- Ghi chú.
- File nghe.
- Bài tập.

---

## 11.6 Ranking

Bảng xếp hạng.

Bao gồm:

- Học viên chăm chỉ.
- Chuỗi học liên tục.
- Điểm cao nhất.
- Thành viên tích cực.

---

## 11.7 Events

Sự kiện.

Bao gồm:

- Workshop.
- Livestream.
- Thi thử HSK.
- Cuộc thi.
- Minigame.

---

## 11.8 Community Profile

Trang cá nhân trong cộng đồng.

Hiển thị:

- Hồ sơ.
- Huy hiệu.
- Thành tích.
- Bài viết.
- Bình luận.
- Điểm kinh nghiệm.

---

## 11.9 Notifications

Thông báo hoạt động cộng đồng.

Bao gồm:

- Có người trả lời bài viết.
- Có người nhắc đến bạn.
- Lời mời tham gia nhóm.
- Thông báo sự kiện.

---

## 11.10 Community Chat (Future)

Hệ thống nhắn tin giữa các học viên.

Chức năng:

- Chat cá nhân.
- Chat nhóm.
- Gửi hình ảnh.
- Gửi file.
- Emoji.
- Sticker.

# 12. Payment Module

Payment Module là hệ thống quản lý thanh toán và thương mại điện tử của Chinese Learning Platform.

Module này chịu trách nhiệm xử lý toàn bộ quy trình mua khóa học, thanh toán, hóa đơn, mã giảm giá, hoàn tiền, gia hạn khóa học và quản lý các gói thành viên.

Payment Module phải đảm bảo:

- Bảo mật.
- Chính xác.
- Dễ sử dụng.
- Hỗ trợ mở rộng nhiều phương thức thanh toán trong tương lai.

---

## Estimated Pages

18 - 25 Pages

---

# Module Structure

Payment Module bao gồm các nhóm chức năng sau:

1. Pricing Plans

2. Course Purchase

3. Shopping Cart

4. Checkout

5. Payment Gateway

6. Order Management

7. Invoice Management

8. Membership

9. Coupon & Voucher

10. Refund Management

11. Payment History

12. Subscription Management

13. Gift Courses (Future)

14. Payment Settings

---

# 12.1 Pricing Plans

Hiển thị các gói học.

Bao gồm:

- Khóa học miễn phí
- Khóa học trả phí
- Premium Membership
- Combo khóa học
- Flash Sale
- Khuyến mãi

Mỗi gói hiển thị:

- Giá
- Giá khuyến mãi
- Quyền lợi
- Thời hạn
- Nội dung bao gồm

---

# 12.2 Course Purchase

Trang mua khóa học.

Bao gồm:

- Thông tin khóa học
- Giá
- Giảm giá
- Giá cuối cùng
- Danh sách quyền lợi
- Giáo viên
- Thời hạn sử dụng
- Chính sách hoàn tiền

Sau khi thanh toán thành công:

- Mở khóa khóa học
- Gửi Email xác nhận
- Hiển thị trong My Courses

---

# 12.3 Shopping Cart

Giỏ hàng.

Bao gồm:

- Danh sách khóa học
- Xóa khóa học
- Thêm khóa học
- Mã giảm giá
- Tổng tiền
- Tiếp tục mua

---

# 12.4 Checkout

Trang xác nhận thanh toán.

Bao gồm:

- Thông tin đơn hàng
- Phương thức thanh toán
- Mã giảm giá
- Thành tiền
- Điều khoản thanh toán
- Xác nhận thanh toán

---

# 12.5 Payment Gateway

Kết nối các cổng thanh toán.

Phiên bản đầu:

- VNPay
- MoMo
- Chuyển khoản ngân hàng

Phiên bản tương lai:

- Stripe
- PayPal
- Apple Pay
- Google Pay
- ZaloPay
- WeChat Pay
- Alipay

---

# 12.6 Order Management

Quản lý đơn hàng.

Bao gồm:

- Danh sách đơn hàng
- Trạng thái
- Chờ thanh toán
- Đã thanh toán
- Đã hủy
- Đã hoàn tiền
- Chi tiết đơn hàng

---

# 12.7 Invoice Management

Quản lý hóa đơn.

Bao gồm:

- Hóa đơn điện tử
- Tải PDF
- Mã hóa đơn
- Ngày thanh toán
- Thông tin người mua
- Chi tiết giao dịch

---

# 12.8 Membership

Quản lý gói thành viên.

Bao gồm:

- Free
- Premium
- Premium Plus (Future)

Hiển thị:

- Quyền lợi
- Thời hạn
- Ngày hết hạn
- Gia hạn

---

# 12.9 Coupon & Voucher

Quản lý ưu đãi.

Bao gồm:

- Coupon
- Voucher
- Gift Code
- Referral Code (Future)

Hỗ trợ:

- Giảm theo %
- Giảm theo số tiền
- Miễn phí khóa học

---

# 12.10 Refund Management

Quản lý hoàn tiền.

Bao gồm:

- Yêu cầu hoàn tiền
- Lý do
- Trạng thái
- Duyệt
- Từ chối
- Lịch sử hoàn tiền

---

# 12.11 Payment History

Lịch sử thanh toán.

Bao gồm:

- Đơn hàng
- Ngày thanh toán
- Phương thức thanh toán
- Trạng thái
- Hóa đơn
- Chi tiết giao dịch

---

# 12.12 Subscription Management

Quản lý gói đăng ký.

Bao gồm:

- Gói hiện tại
- Gia hạn
- Hủy gia hạn tự động (Future)
- Lịch sử đăng ký

---

# 12.13 Gift Courses (Future)

Tặng khóa học.

Bao gồm:

- Tặng bạn bè
- Gift Code
- Thiệp chúc mừng
- Lịch sử quà tặng

---

# 12.14 Payment Settings

Cài đặt thanh toán.

Bao gồm:

- Thông tin thanh toán
- Địa chỉ hóa đơn
- Tiền tệ
- Quốc gia
- Thuế (Future)

---

## Related Documents

Student_Portal.md

Admin_Portal.md

Course_Management.md

Membership.md

Coupon.md

Invoice.md

Order.md

---

## Notes

Payment Module phải hoạt động độc lập với các module khác và chỉ cung cấp quyền truy cập khóa học sau khi thanh toán được xác nhận.

Mọi giao dịch tài chính phải được ghi nhận đầy đủ để phục vụ đối soát, báo cáo và kiểm toán.

Hệ thống cần hỗ trợ mở rộng nhiều loại sản phẩm số (khóa học, tài liệu, ebook, gói thành viên...) mà không cần thay đổi kiến trúc tổng thể.

# 13. Notification Module

Notification Module là hệ thống quản lý toàn bộ thông báo của Chinese Learning Platform.

Module này chịu trách nhiệm gửi, quản lý và theo dõi tất cả các thông báo trong hệ thống đến học viên, giáo viên và quản trị viên.

Notification Module phải đảm bảo:

- Gửi đúng người.
- Gửi đúng thời điểm.
- Không gửi trùng lặp.
- Có thể mở rộng nhiều kênh gửi thông báo.
- Cho phép người dùng tùy chỉnh loại thông báo muốn nhận.

---

## Estimated Pages

15 - 20 Pages

---

# Module Structure

Notification Module bao gồm các nhóm chức năng sau:

1. Notification Center

2. Notification Types

3. In-App Notifications

4. Email Notifications

5. Push Notifications

6. SMS Notifications

7. Scheduled Notifications

8. Notification Templates

9. Notification History

10. User Preferences

11. Admin Broadcast

12. Delivery Reports

---

# 13.1 Notification Center

Trung tâm thông báo.

Bao gồm:

- Danh sách thông báo
- Chưa đọc
- Đã đọc
- Đánh dấu đã đọc
- Đánh dấu tất cả đã đọc
- Xóa thông báo
- Lọc theo loại
- Tìm kiếm

---

# 13.2 Notification Types

Các loại thông báo.

Bao gồm:

## Learning

- Bài học mới
- Bài học đã mở khóa
- Hoàn thành bài học
- Gợi ý bài học tiếp theo

---

## Homework

- Bài tập mới
- Sắp hết hạn
- Đã chấm điểm
- Giáo viên nhận xét

---

## Exam

- Lịch thi
- Kết quả thi
- Chứng chỉ mới
- Thi thử

---

## Calendar

- Lịch học hôm nay
- Lịch học ngày mai
- Thay đổi lịch học
- Hủy lớp
- Nhắc trước giờ học

---

## Payment

- Thanh toán thành công
- Thanh toán thất bại
- Hóa đơn
- Gia hạn
- Membership sắp hết hạn

---

## AI

- AI hoàn thành phân tích
- AI gợi ý kế hoạch học
- AI báo cáo tiến độ
- AI Daily Reminder

---

## System

- Bảo trì hệ thống
- Cập nhật phiên bản
- Thay đổi chính sách
- Thông báo bảo mật

---

## Community

- Có người trả lời bài viết
- Có người bình luận
- Có người thích bài viết
- Có người nhắc đến bạn

---

## Marketing

- Khóa học mới
- Flash Sale
- Coupon
- Livestream
- Webinar
- Workshop

---

# 13.3 In-App Notifications

Thông báo trong website.

Hiển thị:

- Chuông thông báo
- Popup
- Banner
- Toast Message
- Notification Badge

---

# 13.4 Email Notifications

Gửi Email tự động.

Bao gồm:

- Đăng ký thành công
- Đăng nhập bất thường
- Thanh toán
- Đặt lại mật khẩu
- Nhắc học
- Kết quả bài tập
- Kết quả thi
- Chứng chỉ

---

# 13.5 Push Notifications

Thông báo đẩy.

Bao gồm:

- Web Push
- Mobile Push (Future)

Ví dụ:

"Hôm nay bạn còn 15 phút để hoàn thành mục tiêu học."

---

# 13.6 SMS Notifications

Gửi tin nhắn SMS.

Áp dụng cho:

- OTP
- Xác minh tài khoản
- Lịch học quan trọng
- Thanh toán
- Thông báo khẩn

---

# 13.7 Scheduled Notifications

Lập lịch gửi.

Bao gồm:

- Gửi ngay
- Gửi theo thời gian
- Gửi định kỳ
- Gửi theo sự kiện
- Hủy lịch gửi

---

# 13.8 Notification Templates

Quản lý mẫu thông báo.

Bao gồm:

- Email Templates
- Push Templates
- SMS Templates
- In-App Templates

Hỗ trợ:

- Biến động dữ liệu (Variables)
- Đa ngôn ngữ
- Preview

---

# 13.9 Notification History

Lịch sử gửi.

Bao gồm:

- Nội dung
- Người nhận
- Thời gian
- Trạng thái
- Kênh gửi
- Kết quả gửi

---

# 13.10 User Preferences

Người dùng tự quản lý thông báo.

Bao gồm:

- Bật/Tắt Email
- Bật/Tắt Push
- Bật/Tắt SMS
- Chọn loại thông báo
- Giờ không làm phiền (Do Not Disturb)

---

# 13.11 Admin Broadcast

Gửi thông báo hàng loạt.

Admin có thể gửi theo:

- Toàn bộ hệ thống
- Theo vai trò
- Theo khóa học
- Theo lớp
- Theo giáo viên
- Theo học viên
- Theo Membership
- Theo điều kiện tùy chỉnh

---

# 13.12 Delivery Reports

Báo cáo gửi thông báo.

Bao gồm:

- Tổng số đã gửi
- Thành công
- Thất bại
- Đã mở
- Đã nhấp
- Tỷ lệ mở Email
- Tỷ lệ nhấp
- Thống kê theo thời gian

# 13.13 Notification Inbox

Thay vì chỉ hiện chuông thông báo, mỗi người dùng sẽ có một hộp thư thông báo riêng, có thể:

Lưu thông báo quan trọng.
Ghim thông báo.
Đánh dấu cần xử lý.
Tìm kiếm theo từ khóa.
Lọc theo loại (Học tập, Thanh toán, AI, Lịch học...).

Nó giống như một "email nội bộ" của nền tảng.

# 13.14 Smart Notifications

Đây là thông báo thông minh do AI quyết định thời điểm gửi.

Ví dụ:

Học viên thường học lúc 20:00 → AI gửi nhắc học lúc 19:50.
Học viên chưa học 5 ngày → AI gửi lời nhắc phù hợp.
Học viên vừa hoàn thành HSK2 → AI gợi ý đăng ký HSK3.
Học viên liên tục làm sai một chủ điểm → AI gợi ý bài ôn tập liên quan.

---

## Related Documents

Student_Portal.md

Teacher_Portal.md

Admin_Portal.md

Payment.md

Homework.md

Calendar.md

AI_Module.md

Communication.md

---

## Notes

Notification Module là dịch vụ dùng chung cho toàn bộ hệ thống.

Mọi module như Lesson, Homework, Calendar, Payment, AI và Community đều có thể tạo thông báo thông qua Notification Module thay vì tự gửi trực tiếp.

Hệ thống phải hỗ trợ cơ chế Queue để xử lý việc gửi thông báo số lượng lớn, đảm bảo hiệu năng và tránh gửi trùng lặp.

Notification Module cần hỗ trợ mở rộng thêm các kênh gửi mới (ví dụ Zalo OA, Telegram, WeChat, Discord...) mà không ảnh hưởng đến kiến trúc hiện tại.

# 14. System Module

## Overview

System Module là nền tảng vận hành của toàn bộ Chinese Learning Platform.

Đây là module chịu trách nhiệm quản lý cấu hình, bảo mật, hạ tầng, nhật ký hệ thống, tích hợp dịch vụ bên ngoài và các thiết lập cốt lõi của website.

System Module chỉ dành cho Super Admin hoặc Administrator được cấp quyền.

Người dùng thông thường không thể truy cập module này.

---

## Objectives

- Quản lý toàn bộ cấu hình hệ thống.
- Đảm bảo tính ổn định và bảo mật.
- Hỗ trợ mở rộng hệ thống trong tương lai.
- Theo dõi tình trạng hoạt động của website.
- Quản lý tích hợp với các dịch vụ bên ngoài.
- Sao lưu và khôi phục dữ liệu.
- Quản lý phiên bản và môi trường triển khai.

---

## Estimated Pages

20 - 30 Pages

---

# Module Structure

1. General Settings

2. Website Configuration

3. Localization

4. Branding

5. Authentication Settings

6. Security Center

7. Role & Permission

8. Email Service

9. Storage Management

10. File Management

11. Backup & Restore

12. API Center

13. Third-party Integrations

14. Queue & Scheduled Jobs

15. Cache Management

16. System Monitoring

17. Database Management

18. Audit Logs

19. Maintenance Mode

20. Environment Management

21. Version Management

22. Feature Flags

23. Health Dashboard

---

# 14.1 General Settings

Cấu hình chung của website.

Bao gồm:

- Website Name
- Website Description
- Website URL
- Logo
- Favicon
- Contact Email
- Hotline
- Company Information
- Copyright
- Default Homepage
- Timezone
- Date Format
- Time Format

---

# 14.2 Website Configuration

Quản lý các thiết lập vận hành.

Bao gồm:

- Session Timeout
- Upload Size Limit
- Default Avatar
- Default Language
- Pagination Size
- Auto Save
- File Upload Rules
- Password Expiration
- Login Attempts

---

# 14.3 Localization

Quản lý đa ngôn ngữ.

Bao gồm:

- Vietnamese
- Chinese
- English

Hỗ trợ:

- Thêm ngôn ngữ
- Chỉnh sửa bản dịch
- Import Translation
- Export Translation
- Currency
- Number Format
- Date Format

---

# 14.4 Branding

Quản lý thương hiệu.

Bao gồm:

- Logo
- Login Background
- Website Colors
- Font Family
- Email Branding
- Icons
- Loading Screen
- Social Preview Image

---

# 14.5 Authentication Settings

Quản lý đăng nhập.

Bao gồm:

- Email Login
- Phone Login
- Google Login
- Facebook Login
- Apple Login (Future)
- OTP Login
- Remember Login
- Password Rules

---

# 14.6 Security Center

Quản lý bảo mật.

Bao gồm:

- Two Factor Authentication (2FA)
- Session Management
- Device Management
- IP Whitelist
- IP Blacklist
- Rate Limiting
- Brute Force Protection
- Login History
- Security Alerts

---

# 14.7 Role & Permission

Quản lý phân quyền.

Bao gồm:

- Super Admin
- Admin
- Teacher
- Teaching Assistant
- Student
- Guest

Cho phép:

- Tạo Role
- Sửa Role
- Xóa Role
- Gán Permission
- Permission Matrix

---

# 14.8 Email Service

Quản lý Email.

Bao gồm:

- SMTP
- Sender Name
- Sender Email
- Reply Email
- Test Email
- Email Queue
- Email Templates

---

# 14.9 Storage Management

Quản lý lưu trữ.

Bao gồm:

- Images
- Videos
- Audio
- Documents
- Storage Statistics
- Upload Rules
- Storage Quota

---

# 14.10 File Management

Quản lý tệp.

Bao gồm:

- Upload Files
- Delete Files
- Rename Files
- Preview Files
- Folder Management
- Trash Bin

---

# 14.11 Backup & Restore

Quản lý sao lưu.

Bao gồm:

- Database Backup
- File Backup
- Automatic Backup
- Manual Backup
- Restore
- Backup Schedule
- Backup History

---

# 14.12 API Center

Quản lý API.

Bao gồm:

- API Keys
- API Tokens
- Webhooks
- API Logs
- API Usage
- Rate Limits

---

# 14.13 Third-party Integrations

Quản lý tích hợp.

Bao gồm:

Authentication

- Google
- Facebook
- Apple

AI

- OpenAI
- Gemini
- DeepSeek

Payment

- VNPay
- MoMo
- Stripe
- PayPal

Analytics

- Google Analytics
- Google Tag Manager

Storage

- Google Drive
- Amazon S3 (Future)

---

# 14.14 Queue & Scheduled Jobs

Quản lý tác vụ nền.

Bao gồm:

- Email Queue
- Notification Queue
- AI Queue
- Backup Jobs
- Import Jobs
- Export Jobs
- Scheduled Tasks

---

# 14.15 Cache Management

Quản lý Cache.

Bao gồm:

- View Cache
- Clear Cache
- Cache Statistics
- Cache Size
- Refresh Cache

---

# 14.16 System Monitoring

Theo dõi hệ thống.

Hiển thị:

- CPU Usage
- Memory Usage
- Disk Usage
- Active Users
- Running Jobs
- Database Status
- API Status
- Queue Status

---

# 14.17 Database Management

Quản lý cơ sở dữ liệu.

Bao gồm:

- Database Size
- Table Statistics
- Migration History
- Connection Status
- Index Information

Không cho phép chỉnh sửa dữ liệu trực tiếp trên giao diện.

---

# 14.18 Audit Logs

Lưu toàn bộ lịch sử hệ thống.

Bao gồm:

- Login Logs
- Logout Logs
- Admin Actions
- Teacher Actions
- Student Actions
- Payment Logs
- AI Logs
- Security Logs
- System Errors

Cho phép:

- Search
- Filter
- Export

---

# 14.19 Maintenance Mode

Chế độ bảo trì.

Bao gồm:

- Enable Maintenance
- Disable Maintenance
- Maintenance Message
- Allow Admin Access
- Scheduled Maintenance

---

# 14.20 Environment Management

Quản lý môi trường.

Bao gồm:

- Development
- Testing
- Staging
- Production

Hiển thị:

- Environment Name
- Deployment Time
- Current Build
- Git Commit Version

---

# 14.21 Version Management

Quản lý phiên bản.

Bao gồm:

- Current Version
- Release Notes
- Version History
- Deployment History
- Rollback History

---

# 14.22 Feature Flags

Quản lý tính năng.

Bao gồm:

- Enable Feature
- Disable Feature
- Beta Features
- Internal Testing
- User Group Testing

Cho phép bật/tắt từng tính năng mà không cần triển khai lại hệ thống.

---

# 14.23 Health Dashboard

Trang theo dõi sức khỏe hệ thống.

Hiển thị theo thời gian thực:

Infrastructure

- Server Status
- CPU
- RAM
- Disk

Database

- Connection
- Query Speed

Network

- API Response Time
- CDN Status

Services

- AI Service
- Payment Gateway
- Email Service
- Notification Service

Storage

- Storage Usage
- Backup Status

Security

- Failed Login Attempts
- Suspicious Activities
- SSL Certificate Status

Hiển thị trạng thái bằng màu:

🟢 Normal

🟡 Warning

🔴 Critical

---

## Related Documents

Authentication.md

Security_Policy.md

Permission_Matrix.md

API_Gateway.md

Notification_Module.md

Payment_Module.md

AI_Module.md

Admin_Portal.md

Infrastructure.md

Deployment.md

---

## Notes

- Mọi thay đổi cấu hình hệ thống phải được ghi vào Audit Logs.
- Chỉ Super Admin mới có quyền thay đổi các thiết lập quan trọng.
- Hệ thống phải hỗ trợ mở rộng theo mô hình Microservices hoặc Modular Monolith trong tương lai.
- Mọi cấu hình cần được tách khỏi mã nguồn để dễ dàng triển khai trên nhiều môi trường.
- System Module phải đảm bảo tính ổn định, khả năng mở rộng và dễ bảo trì trong suốt vòng đời của nền tảng.

# 15. Future Expansion Roadmap

## Overview

Future Expansion Roadmap mô tả các tính năng dự kiến sẽ được phát triển sau phiên bản đầu tiên (MVP).

Các tính năng trong tài liệu này không bắt buộc triển khai ngay, nhưng toàn bộ kiến trúc hệ thống phải được thiết kế để hỗ trợ mở rộng trong tương lai mà không cần thay đổi cấu trúc cốt lõi.

Mục tiêu là giúp Chinese Learning Platform có thể phát triển thành một hệ sinh thái học tiếng Trung toàn diện.

---

## Expansion Categories

1. Mobile Applications

2. Desktop Applications

3. AI Enhancements

4. Advanced Learning System

5. Community Expansion

6. Live Learning

7. Gamification

8. Marketplace

9. Enterprise & School Management

10. Internationalization

11. Open Platform

12. Business Intelligence

---

# 15.1 Mobile Applications

Phát triển ứng dụng:

- Android
- iOS
- Tablet

Bao gồm:

- Đồng bộ dữ liệu với website
- Học offline
- Push Notification
- Widget
- Dark Mode
- Voice Search

---

# 15.2 Desktop Applications

Ứng dụng:

- Windows
- macOS

Hỗ trợ:

- Offline Learning
- Download Lessons
- Desktop Notifications
- File Synchronization

---

# 15.3 AI Enhancements

Mở rộng AI.

Bao gồm:

- AI Teacher Avatar
- AI Voice Conversation
- AI Video Teacher
- AI Story Generator
- AI Vocabulary Generator
- AI Grammar Generator
- AI Quiz Generator
- AI Exam Generator
- AI Lesson Generator
- AI Personalized Learning

---

# 15.4 Advanced Learning System

Mở rộng hệ thống học.

Bao gồm:

- Adaptive Learning
- Smart Review
- Spaced Repetition
- Learning Path Recommendation
- AI Weakness Analysis
- Learning Habit Analysis

---

# 15.5 Community Expansion

Mở rộng cộng đồng.

Bao gồm:

- Learning Groups
- Clubs
- Events
- Challenges
- Student Rankings
- Teacher Community
- Study Partners

---

# 15.6 Live Learning

Học trực tiếp.

Bao gồm:

- Live Classroom
- Whiteboard
- Screen Sharing
- Live Quiz
- Attendance
- Recording
- Replay

---

# 15.7 Gamification

Hệ thống trò chơi hóa.

Bao gồm:

- Experience Points (XP)
- Levels
- Achievements
- Daily Missions
- Weekly Challenges
- Badges
- Leaderboards
- Learning Streak
- Rewards
- Virtual Coins
- Shop

---

# 15.8 Marketplace

Hệ thống bán sản phẩm số.

Bao gồm:

- Ebook
- Flashcards
- Templates
- Mock Exams
- Audio Courses
- Teacher Materials
- Digital Downloads

---

# 15.9 Enterprise & School Management

Hệ thống dành cho doanh nghiệp và trường học.

Bao gồm:

- Company Accounts
- School Accounts
- Department Management
- Student Management
- Employee Training
- Teacher Assignment
- Progress Reports

---

# 15.10 Internationalization

Quốc tế hóa hệ thống.

Hỗ trợ:

- Multi-language Interface
- Multi-currency
- Multi-region
- Timezone Support
- International Payments
- Country-specific Content

---

# 15.11 Open Platform

Mở rộng nền tảng.

Bao gồm:

- Public API
- Webhooks
- OAuth
- SDK
- Plugin System
- Third-party Extensions

---

# 15.12 Business Intelligence

Phân tích dữ liệu nâng cao.

Bao gồm:

- AI Business Reports
- Revenue Forecast
- Student Retention Prediction
- Teacher Performance Analysis
- Marketing Analytics
- Learning Analytics
- Custom Dashboards

---

## Long-term Vision

Chinese Learning Platform hướng tới trở thành một hệ sinh thái học tiếng Trung hiện đại, nơi học viên, giáo viên và quản trị viên có thể làm việc, học tập và tương tác trên cùng một nền tảng.

Hệ thống phải hỗ trợ mở rộng liên tục mà vẫn đảm bảo hiệu năng, bảo mật và trải nghiệm người dùng.

---

## Architecture Requirements

Để hỗ trợ các tính năng trong tương lai, hệ thống cần đáp ứng các yêu cầu sau:

- Modular Architecture
- Scalable Backend
- RESTful API / GraphQL Ready
- Cloud-native Deployment
- Multi-language Support
- Multi-tenant Ready (Future)
- API-first Design
- Responsive Design
- Security by Design

---

## Related Documents

System_Module.md

AI_Module.md

Admin_Portal.md

Payment_Module.md

Database_Design.md

API_Specifications.md

Page_Specifications.md

---

## Notes

Các tính năng trong tài liệu này không thuộc phạm vi triển khai của phiên bản đầu tiên (MVP).

Mọi module hiện tại cần được thiết kế theo nguyên tắc mở rộng, nhằm đảm bảo việc bổ sung tính năng trong tương lai không làm ảnh hưởng đến dữ liệu, kiến trúc hoặc trải nghiệm của người dùng.
