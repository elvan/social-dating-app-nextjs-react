# NextMatch

## Description

NextMatch is a web application designed to connect individuals through an engaging and dynamic platform. It features real-time notifications, user profile management, social login, messaging, and a robust photo moderation system. This project leverages modern technologies to provide a seamless user experience.

## Features

- **Real-Time Notifications and Presence Tracking**

  - Implement Pusher for real-time notifications and presence tracking.
  - Add presence indicators to MemberCard and MemberSidebar.
  - Enhance messageActions and likeActions with real-time notifications.
  - Use usePresenceChannel and useNotificationChannel hooks.

- **Messaging and Chat Functionality**

  - Develop a comprehensive messaging feature with chat functionality.
  - Create ChatForm for sending messages and MessageBox for displaying messages.
  - Implement MessageTable and MessageSidebar for managing user messages.

- **Profile Management and Photo Upload**

  - Enable profile editing and photo upload functionality.
  - Integrate Cloudinary for image upload and transformation.
  - Implement EditForm for member profile editing and MemberPhotoUpload for uploading photos.

- **Authentication and Authorization**

  - Set up authentication with NextAuth and Prisma.
  - Add social login with Google and GitHub providers.
  - Implement email verification and password reset processes.
  - Create middleware to handle profile completion and authentication status.

- **Photo Moderation**

  - Implement an admin role for photo moderation.
  - Create adminActions for approving and rejecting photos.
  - Add moderation page to display unapproved photos for admin review.

- **Member Filtering and Pagination**

  - Implement member filtering by age, gender, and photo presence.
  - Add pagination controls for member list navigation.
  - Enhance the members page to show loading indicators and empty states.

- **User Interaction and Like Functionality**

  - Implement like functionality with toggleLikeMember and fetchLikedMembers actions.
  - Add LikeButton component to enable liking and unliking members.
  - Enhance MemberCard with like functionality and ListsTab to display liked members.

#### Technology Stack

- **Frontend:** Next.js, React, NextUI, TailwindCSS
- **Backend:** Node.js, Prisma, Pusher
- **Authentication:** NextAuth, bcryptjs
- **Database:** PostgreSQL
- **Cloud Services:** Cloudinary for image storage
- **Other Libraries:** date-fns, React Hook Form, Zod, React Toastify, Framer Motion

## Installation

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- Cloudinary account
- Pusher account

### Environment Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/elvan/social-dating-app-nextjs-react.git
   cd nextmatch
   ```

2. Create a `.env` file based on `.env.example` and fill in the required values:

   ```env
   DATABASE_URL="your_database_url"
   NEXTAUTH_URL="your_nextauth_url"
   NEXTAUTH_SECRET="your_nextauth_secret"
   CLOUDINARY_URL="your_cloudinary_url"
   PUSHER_APP_ID="your_pusher_app_id"
   PUSHER_KEY="your_pusher_key"
   PUSHER_SECRET="your_pusher_secret"
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up the database:

   ```bash
   npx prisma migrate deploy
   npx prisma db seed
   ```

### Installation Commands

1. Start the development server:

   ```bash
   npm run dev
   ```

2. Build for production:

   ```bash
   npm run build
   ```

3. Start the production server:

   ```bash
   npm start
   ```

## Usage

### Running the Application

1. Ensure the development server is running:

   ```bash
   npm run dev
   ```

2. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

### Using the Project

- **Sign Up and Log In:** Use the registration and login forms to create and access your account. Social login options are available for Google and GitHub.
- **Profile Management:** Edit your profile and upload photos using the profile editing features.
- **Messaging:** Send and receive messages in real-time using the chat functionality.
- **Photo Moderation:** Admin users can approve or reject photos in the moderation page.
- **Explore Members:** Filter, like, and interact with other members through the members page.

For further details and updates, visit the [GitHub repository](https://github.com/elvan/social-dating-app-nextjs-react).
