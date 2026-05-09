# Food Delivery Website

A full-stack food delivery web application that allows users to browse restaurants, explore food items, add items to cart, and place orders online through a responsive and user-friendly interface.

---

## Features

### User Features

* User Registration & Login
* Browse Restaurants & Food Items
* Search Functionality
* Add to Cart
* Place Orders
* Order Summary
* Responsive Design for Mobile & Desktop

### Admin Features

* Add/Edit/Delete Food Items
* Manage Restaurant Listings
* Order Management
* User Management

---

## Tech Stack

### Frontend

* HTML
* CSS
* JavaScript
* Bootstrap

### Backend

* Node.js
* Express.js

### Database

* MongoDB

---

## Project Structure

```text
food-delivery-website/
│
├── frontend/
├── backend/
├── database/
├── assets/
└── README.md
```

---

## Architecture Overview

The application follows a client-server architecture:

* Frontend handles user interaction and UI rendering
* Backend exposes REST APIs for application functionality
* Database stores users, restaurants, food items, and orders

### Workflow

1. User browses food items
2. Frontend sends API requests to backend
3. Backend processes requests and interacts with database
4. Response is sent back to frontend and displayed to user

---

## Installation & Setup

### Clone Repository

```bash
git clone https://github.com/abhaykr2001/Food_Delivery_website.git
```

### Install Dependencies

```bash
npm install
```

### Run the Application

```bash
npm start
```

---

## API Endpoints

### User APIs

* POST `/api/register`
* POST `/api/login`

### Food APIs

* GET `/api/foods`
* GET `/api/foods/:id`

### Order APIs

* POST `/api/orders`
* GET `/api/orders/:id`

---

## Future Improvements

* JWT Authentication
* Online Payment Gateway Integration
* Real-time Order Tracking
* Docker Deployment
* Cloud Hosting
* Admin Analytics Dashboard
* Recommendation System

---

## Learning Outcomes

Through this project, I learned:

* Frontend & Backend Integration
* REST API Development
* Database Management
* Responsive Web Design
* Client-Server Architecture
* CRUD Operations

----

## Author

### Abhay Kumar Kushwaha

* GitHub: [https://github.com/abhaykr2001](https://github.com/abhaykr2001)
* LinkedIn: https://www.linkedin.com/in/abhay-kumar-kushwaha/
