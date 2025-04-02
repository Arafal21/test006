

#### ✅ Login page:
   The login page provides a secure authentication form where users can enter their username and password. It ensures proper role-based access control, allowing only authorized users to proceed to the main application based on session. 
   The form implements robust input validation, displaying clear error messages for missing or invalid credentials. Token-based authentication is employed, with tokens securely stored in cookies or localStorage depending on the execution context, ensuring safe session management.
   This comprehensive approach guarantees that only users with the appropriate permissions can access protected areas of the application.

   ![https://i.imgur.com/gR8MklE.gif](https://i.imgur.com/gR8MklE.gif)



#### ✅ Admin page: 
   Accessible only to the principal, the Admin Panel provides complete oversight of all users. You can add teachers, students, or parents by specifying their details (e.g., name, email, phone, role) and assign subjects to teachers. The panel also offers a filtered user list (teachers, students, etc.).

   MVP version - includes a cap on mobile with a request to open on a computer.

   -----> GIF <--------


#### ✅ Announcements page: 
   Authorized users - teacher and director: have the right to create, edit and delete announcements (and reading)
   Recipients: Parents and students have read-only access to announcements, keeping them up-to-date on events and news.
   Date format: All dates are displayed in US format (MM/DD/YYYY), which is implemented in the formatAnnouncementDate function, among others.

  ![https://i.imgur.com/1cYoRdI.gif](https://i.imgur.com/1cYoRdI.gif)

