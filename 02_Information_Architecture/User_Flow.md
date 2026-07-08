# User Flow

## Overview

User Flow mô tả hành trình (Journey) của từng loại người dùng trong Chinese Learning Platform.

Tài liệu này giúp lập trình viên và AI hiểu chính xác cách người dùng tương tác với hệ thống từ lúc truy cập website cho đến khi hoàn thành mục tiêu.

Mọi tính năng trong hệ thống phải tuân theo các User Flow được mô tả trong tài liệu này.

---

# User Roles

Website bao gồm các nhóm người dùng:

- Guest
- Student
- Teacher
- Teaching Assistant
- Admin
- Super Admin

---

# Flow List

1.  Guest Registration

2.  Student Login

3.  Purchase Course

4.  Start Learning

5.  Complete Lesson

6.  Submit Homework

7.  Take Quiz

8.  Take HSK Mock Test

9.  AI Learning

10. Dictionary Search

11. Flashcards Learning

12. Speaking Practice

13. Writing Practice

14. Teacher Teaching Flow

15. Homework Grading

16. Student Management

17. Course Management

18. Payment Flow

19. Admin Management

20. Certificate Generation

21. Notification Flow

22. Logout

---

# Flow 01 — Guest Registration

Guest

↓

Home Page

↓

Browse Website

↓

Click Register

↓

Choose Register Method

• Email

• Phone

↓

Fill Information

↓

Verify Email / OTP

↓

Create Account

↓

Complete Profile

↓

Become Student

---

# Flow 02 — Student Login

Student

↓

Login

↓

Authentication

↓

Dashboard

↓

Continue Learning

OR

Browse Courses

---

# Flow 03 — Purchase Course

Student

↓

Course Detail

↓

Preview Lessons

↓

Click Buy Course

↓

Checkout

↓

Choose Payment Method

↓

Complete Payment

↓

Payment Success

↓

Unlock Course

↓

My Courses

---

# Flow 04 — Start Learning

Student

↓

My Courses

↓

Choose Course

↓

Choose Lesson

↓

Watch Video

↓

Read Lesson

↓

Practice

↓

Save Progress

↓

Next Lesson

---

# Flow 05 — Complete Lesson

Lesson

↓

Video

↓

Vocabulary

↓

Grammar

↓

Examples

↓

Mini Quiz

↓

Pass

↓

Unlock Next Lesson

---

# Flow 06 — Submit Homework

Student

↓

Homework

↓

Read Instructions

↓

Complete Homework

↓

Upload Files

↓

Submit

↓

Teacher Review

↓

Score

↓

Feedback

---

# Flow 07 — Take Quiz

Student

↓

Quiz

↓

Answer Questions

↓

Submit

↓

Auto Grading

↓

Score

↓

Review Answers

---

# Flow 08 — Take HSK Mock Test

Student

↓

Choose HSK Level

↓

Start Exam

↓

Timer

↓

Submit

↓

Score

↓

Detailed Analysis

↓

Weak Points

↓

Recommended Lessons

---

# Flow 09 — AI Learning

Student

↓

Open AI

↓

Choose Function

• AI Teacher

• AI Chat

• AI Writing

• AI Speaking

↓

Interact with AI

↓

Receive Feedback

↓

Save Learning Record

---

# Flow 10 — Dictionary Search

Student

↓

Open Dictionary

↓

Search Word

↓

View Meaning

↓

Stroke Order

↓

Examples

↓

Grammar

↓

Save Word

↓

Flashcards

---

# Flow 11 — Flashcards Learning

Student

↓

Open Flashcards

↓

Choose Deck

↓

Review

↓

Remember / Forget

↓

Spaced Repetition

↓

Statistics

---

# Flow 12 — Speaking Practice

Student

↓

Choose Topic

↓

Listen

↓

Speak

↓

AI Evaluation

↓

Pronunciation Score

↓

Retry

↓

Complete

---

# Flow 13 — Writing Practice

Student

↓

Choose Exercise

↓

Write Chinese

↓

Submit

↓

AI Review

↓

Teacher Review (Optional)

↓

Final Score

---

# Flow 14 — Teacher Teaching Flow

Teacher

↓

Dashboard

↓

Today's Classes

↓

Open Class

↓

Attendance

↓

Teach

↓

Assign Homework

↓

Notify Students

↓

Finish Class

---

# Flow 15 — Homework Grading

Teacher

↓

Homework List

↓

Open Submission

↓

Review

↓

Comment

↓

Score

↓

Publish Result

↓

Student Notification

---

# Flow 16 — Student Management

Teacher

↓

Student List

↓

Student Profile

↓

Learning Progress

↓

Attendance

↓

Homework

↓

Grades

↓

Message Student

---

# Flow 17 — Course Management

Admin

↓

Course List

↓

Create Course

↓

Create Chapters

↓

Create Lessons

↓

Upload Videos

↓

Publish

↓

Students Can Purchase

---

# Flow 18 — Payment Flow

Student

↓

Checkout

↓

Payment Gateway

↓

Success

↓

Invoice

↓

Unlock Course

↓

Payment History

---

# Flow 19 — Admin Management

Admin

↓

Dashboard

↓

Manage Users

↓

Manage Courses

↓

Manage Teachers

↓

Manage Payments

↓

Reports

↓

System Settings

---

# Flow 20 — Certificate Generation

Student

↓

Complete Course

↓

Pass Final Exam

↓

Generate Certificate

↓

Download PDF

↓

Share Certificate

---

# Flow 21 — Notification Flow

System Event

↓

Notification Service

↓

Choose Channel

• Website

• Email

• Push

• SMS

↓

Deliver

↓

Read

↓

Archive

---

# Flow 22 — Logout

User

↓

Logout

↓

Clear Session

↓

Redirect Home

---

# Flow Rules

- Mỗi Flow phải có điểm bắt đầu và kết thúc rõ ràng.
- Hệ thống phải lưu trạng thái khi người dùng đang học.
- Người dùng có thể tiếp tục học từ bài gần nhất.
- Sau mỗi hành động thành công, hệ thống phải hiển thị phản hồi phù hợp.
- Khi xảy ra lỗi, người dùng phải nhận được thông báo rõ ràng và có hướng dẫn xử lý.

---

# Related Documents

Sitemap.md

Navigation.md

Permission_Matrix.md

Student_Portal.md

Teacher_Portal.md

Admin_Portal.md

Page_Specifications.md
