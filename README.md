# 🏕️ WanderLust: Your Adventure Awaits! 🌍

![WanderLust Banner](https://via.placeholder.com/1200x300.png?text=WanderLust+Adventure)  
*Explore unique stays, share your home, and leave reviews with WanderLust!*

⚠️ **Disclaimer**: WanderLust is a 🚀 demo project built for learning — not a real travel site!<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🧪 Listings, images, and reviews may be random or silly (yes, even “cxcxcccvvdfdf”) — they’re just for &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;testing!<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;🔍 Don’t rely on anything here — always double-check in the real world!<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;**Visit the project at 🌍 [WanderLust](https://wanderlust-d6vl.onrender.com/listings).** ⚠️

---

## 📖 Project Overview

WanderLust is a full-stack web application inspired by Airbnb, built to showcase creating, managing, and reviewing rental listings. Hosted on **Render** and powered by **MongoDB Atlas** for cloud database storage, it features user authentication, image uploads, geocoded maps, and a star rating system. It’s a hands-on example of modern web development! 🚀

- **Tech Stack**: Node.js, Express, MongoDB (via MongoDB Atlas), EJS, Bootstrap, Cloudinary, MapLibre, Passport, Joi, Render
- **Features**:
  - 🔒 User signup, login, and logout with Passport authentication
  - 🏠 Create, edit, and delete listings with image uploads to Cloudinary
  - ⭐ Add and delete reviews with a 1–5 star rating system
  - 🗺️ Interactive maps showing listing locations using MapLibre
  - 📢 Flash messages for user feedback
  - ✅ Form validation with Joi and Bootstrap
  - 📱 Responsive design with custom styling

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account for cloud database hosting
- Cloudinary account for image storage
- MapTiler API key for maps
- Render account for deployment
- Environment variables (see `.env` example below)

### Installation
1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/wanderlust.git
   cd wanderlust
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:
   ```env
   NODE_ENV=development
   ATLASDB_URL=your_mongodb_atlas_url
   SECRET=your_session_secret
   CLOUD_NAME=your_cloudinary_cloud_name
   CLOUD_API_KEY=your_cloudinary_api_key
   CLOUD_API_SECRET=your_cloudinary_api_secret
   MAP_TOKEN=your_maptiler_api_key
   Email_Id=your_email_for_nominatim
   ```

4. **Run the application locally**:
   ```bash
   npm start
   ```
   Open `http://localhost:3000` in your browser.

5. **Deploy to Render**:
   - Push the repository to GitHub.
   - Create a new web service on Render, linking to your GitHub repo.
   - Set the environment variables in Render’s dashboard (same as `.env`).
   - Deploy and access the app at https://<Project_Name>.onrender.com.

---

## 📂 Project Structure

```plaintext
wanderlust/
├── controllers/       # Route handlers
│   ├── listings.js
│   ├── reviews.js
│   ├── users.js
├── models/            # MongoDB schemas
│   ├── listing.js
│   ├── review.js
│   ├── user.js
├── public/            # Static assets
│   ├── css/           # CSS files
│   │   ├── style.css
│   │   ├── rating.css
│   ├── js/            # JavaScript files
│   │   ├── script.js
├── routes/            # Express routers
│   ├── listing.js
│   ├── review.js
│   ├── user.js
├── utils/             # Utilities
│   ├── ExpressError.js # Custom error class
│   ├── wrapAsync.js   # Async error handling
├── views/             # EJS templates
│   ├── layouts/       # Layout templates
│   │   ├── boilerplate.ejs
│   ├── includes/      # Reusable components
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   ├── flash.ejs
│   ├── listings/      # Main ejs Codes
│   │   ├── edit.ejs
│   │   ├── index.ejs
│   │   ├── new.ejs
|   |   ├── show.ejs
│   ├── users/      # Login/Signup
│   │   ├── login.ejs
│   │   ├── signup.ej
│   ├── error.ejs      # Error page
├── app.js             # Main Express app
├── cloudConfig.js     # Cloudinary configuration
├── middleware.js      # Custom middleware
├── schema.js          # Joi validation schemas
├── .env               # Environment variables
```

---

## ✨ Features

### 🧑‍💻 User Authentication
- Sign up with a username, email, and password.
- Log in/out securely with Passport’s local strategy.
- Flash messages for success (`Welcome to WanderLust!`) or errors.

### 🏡 Listings
- Create listings with a title, description, price, location, country, and image.
- Edit or delete listings (owner-only).
- Geocode locations using OpenStreetMap’s Nominatim API.
- Upload images to Cloudinary.
- Display listings in a responsive grid with a tax toggle (+18% GST).

### ⭐ Reviews
- Add 1–5 star ratings and comments to listings (authenticated users only).
- Delete reviews (author-only).
- Star ratings styled with a custom CSS system.

### 🗺️ Maps
- Show listing locations on an interactive MapLibre map with a custom marker and popup.

### ✅ Validation
- Client-side form validation with Bootstrap.
- Server-side validation with Joi (`schema.js`) for listings and reviews.
- Error handling with custom `ExpressError` class.

---

## 🛠️ Key Technologies

- **Node.js & Express**: Backend framework for routing and logic.
- **MongoDB & MongoDB Atlas**: Cloud database for storing users, listings, and reviews.
- **Render**: Platform for deploying and hosting the application.
- **EJS & ejs-mate**: Templating engine for dynamic HTML.
- **Passport**: Authentication with local strategy.
- **Cloudinary**: Image storage for listings.
- **MapLibre**: Interactive maps for location display.
- **Joi**: Schema validation for data integrity.
- **Bootstrap**: Responsive UI with form validation.
- **connect-flash & connect-mongo**: Flash messages and session storage.

---

## 📸 Screenshots

*(Replace with actual screenshots)*  
![Home Page](https://via.placeholder.com/600x300.png?text=Home+Page)  
*Browse listings with filters and tax toggle.*

![Listing Show Page](https://via.placeholder.com/600x300.png?text=Listing+Show+Page)  
*View listing details, reviews, and a map.*

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourFeature`).
3. Commit changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

---

## 🙌 Acknowledgments

- [Node.js](https://nodejs.org/) for the runtime environment.
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud database hosting.
- [Render](https://render.com/) for deployment and hosting.
- [Cloudinary](https://cloudinary.com/) for image management.
- [MapTiler](https://www.maptiler.com/) for map APIs.
- [Bootstrap](https://getbootstrap.com/) for responsive design.
- [Font Awesome](https://fontawesome.com/) for icons.

🌟 **Explore WanderLust’s features at 🌍 [WanderLust](https://wanderlust-d6vl.onrender.com/listings) (it’s a demo with potential random content)!** 🌟
