# ⚡️🔋 XJournal

## 📜 Table of Contents

1. [Quick start](#-1-quick-start)
2. [Application running](#-2-application-running)
3. [Application features & approache](#-3-application-features--approache)
4. [Stack & Technologies](#-4-stack--technologies-)
5. [Tests](#-5-tests)
6. [Planned Features](#-6-planned-features)

## 🔥 1. Quick start

### Live: [https://nodejs.org/en](https://nodejs.org/en)

### Repository: [https://github.com/Arafal21/XJournal](https://github.com/Arafal21/XJournal)

### Figma project: [https://nodejs.org/en](https://nodejs.org/en)

### Login:

``` bash
## student & parent (80 accounts):
1st Class: 
Student Ethan Miller - email: ethanmiller@xjournal.com / password: 123ethan456
Parent Michael Miller - email: michaelmiller@xjournal.com / password: 234michael567


# You can log in using a parent or student account. 
# For security reasons, teacher and principal credentials aren’t publicly shared in this demo.
# If you’re a recruiter and would like to explore these roles, please get in touch —
# I’ll reply promptly and provide all necessary passwords. Contact: rafaland21@protonmail.com

## principal (1 account)
Principal Jason Carter: e-mail: jasoncarter@xjournal.com / password: BLANK

## teacher (8 accounts)
OOP John Smith: e-mail: johnsmith@xjournal.com / password: BLANK
...


```

For all user data, please open the allLoginData.txt file. or click: https://github.com/Arafal21/XJournal/blob/main/allLoginData.txt

<br/>
<br/>
<br/>
<br/>

## 🔥 2. Application running

For run this application on your computer:

1. You need to have installed [node.js](https://nodejs.org/en) on your computer.

2. Type commands in the main folder:

```bash
npm i
# then
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:5173](http://localhost:5173) with your browser to see the result.

The application now works as if the school year were now taking place normally.

<br/>
<br/>
<br/>
<br/>

## 🔥 3. Application features & approache:
<!-- postimg.cc + markdown -->

### ✅ Application Description:
   A School Electronic Journal application streamlines communication and organization in schools by providing a centralized platform for managing announcements, student records (including grades, attendance, schedule, and exam calendar), and secure login access. Only the principal has the ability to add new members to the school community, while all users can access their account information via the profiles tab. The application enables teachers to manage students' progress in real-time, keeping both students and parents well-informed about their performance.

   The application is optimized for large screens (992px and above, such as laptops and desktops) and mobile devices (320px to 400px), while tablets are excluded due to their low usage (MVP).

   The application has been aligned with the principles of accesibility. 

   During the development of XJournal, an online gradebook system, I concentrated on delivering a minimum viable product by including only the essential features, which allowed us to efficiently work within the limited time available as our designer and backend developer balanced their primary work commitments. I collaborated closely with a skilled designer and backend developer to deliver a robust and scalable product, and I am excited about the prospect of further expanding its capabilities in future iterations.


#### ✅ Login page:
   The login page provides a secure authentication form where users can enter their username and password. It ensures proper role-based access control, allowing only authorized users to proceed to the main application based on session. 
   The form implements robust input validation, displaying clear error messages for missing or invalid credentials. Token-based authentication is employed, with tokens securely stored in cookies or localStorage depending on the execution context, ensuring safe session management.
   This comprehensive approach guarantees that only users with the appropriate permissions can access protected areas of the application.

  [login-gif.gif](https://postimg.cc/jw49yc5z)



#### ✅ Admin page: 
   Accessible only to the principal, the Admin Panel provides complete oversight of all users. You can add teachers, students, or parents by specifying their details (e.g., name, email, phone, role) and assign subjects to teachers. The panel also offers a filtered user list (teachers, students, etc.).

   MVP version - includes a cap on mobile with a request to open on a computer.

   -----> GIF <--------


#### ✅ Announcements page: 
   Authorized users - teacher and director: have the right to create, edit and delete announcements (and reading)
   Recipients: Parents and students have read-only access to announcements, keeping them up-to-date on events and news.
   Date format: All dates are displayed in US format (MM/DD/YYYY), which is implemented in the formatAnnouncementDate function, among others.

  [announcements-gif.gif](https://postimg.cc/HjVWT8P6)




#### ✅ Grades page:
   Grades: European system (1-6 instead of A-F)
   The Grades section organizes student performance by subject, semester (e.g., Fall/Winter, Spring/Summer), and class. Teachers and the principal can add, update, or remove grades, while parents and students have read-only access, ensuring transparency and real-time monitoring of academic progress.

   -----> GIF <--------


#### ✅ Schedule page: 
   The Schedule feature offers a clear, organized timetable for each class, detailing subjects, days, and times. Teachers and the principal can add, modify, or remove lessons, while parents and students can view the schedule to stay informed and plan their routines.

   -----> GIF <--------


#### ✅ Calendar page: 
   The Calendar centralizes all upcoming tests, quizzes, and important dates. Teachers and the principal can schedule, modify, or remove these events, while parents and students have read-only access, ensuring everyone stays informed and prepared.

   -----> GIF <--------


#### ✅ Profile page: 
   The Profile section displays essential account information, including your role, full name, class details, enrolled subjects, and the date of your last login. For example, a student’s profile might show: "You’re: Student, Name and Surname: Dianne Russell, Class: 1st Programming Class in Poland, Subjects, Last Login: 05/30/2025." This clear layout quickly summarizes your account information.

   -----> GIF <--------


#### ✅ Presence page (in progress): 
   The Presence section allows teachers and the principal to manipulate attendance, marking students as present, absent. Parents and students to monitor these records.

   MVP version - includes a cap on mobile with a request to open on a computer.

   -----> GIF <--------



### ✅ Why this approach and not another:
   - In the calendar application, I implemented two separate components—CalendarDesktopComponent and CalendarMobileComponent—to clearly distinguish between desktop and mobile views. This separation ensures a clean and maintainable codebase by isolating platform-specific functionality and layouts.
   
   - In the Announcements feature, I deliberately chose not to implement useOptimistic updates (React19). Consider the following analogy: on Facebook, when a user clicks "like" on a post, the UI immediately reflects that change—even if the backend hasn't fully confirmed it yet. For a social interaction like a "like," this slight is acceptable.
   However, think about a bank transfer: if the transaction were marked as complete on the user's screen before the backend actually processed it, and the user closed the page, it could lead to serious issues. Similarly, in our school application, if a principal were to see an announcement optimistically added and assume it's been saved, only to have it fail on the backend, it could result in critical miscommunications—like missing an urgent meeting or failing to broadcast important information.
   By avoiding optimistic updates for announcements, we ensure that when the UI indicates a new announcement, it has been fully verified by the backend, maintaining the integrity and reliability of this crucial functionality.






<br/>
<br/>
<br/>
<br/>

## 🔥 4. Stack & Technologies :

### ✅ Frontend - my stack:

-   Frontend [me - Rafal Andrzejkiewicz](https://nextjs.org/docs): React 19 + TypeScript + Next 15 + SCSS

### ✅ Colleagues:

Thanks for your cooperation:

-   Backend: [Bartosz Mielcarek](https://github.com/l4npl): Node.js + TypeScript + Express.js + MongoDB + Redis
-   Designer: [Tomasz Łuczak](https://uxfol.io/de179750): Figma

<br/>
<br/>
<br/>
<br/>

## 🔥 5. Tests
/front-end/tests

All tests running: `npx playwright test --ui`

To test functions (such as editing announcements), provide login data.


<br/>
<br/>
<br/>
<br/>

## 🔥 6. Planned features:

1. Real time chat with socket.io or/and video chat
2. AI feature


## Contributing

If you have any ideas for improving this project or have found a bug, please feel free to contact me or submit a pull request. This project is licensed under the MIT License.
