# CleanMate - Cost Calculator

A modern web application for calculating cleaning service costs with an intuitive interface and comprehensive pricing options.

## 🧹 About

CleanMate is a cleaning service cost calculator that helps customers estimate the cost of professional cleaning services. The application provides an interactive interface where users can specify their home details, service preferences, and additional requirements to receive accurate pricing estimates.

## ✨ Features

- **Interactive Cost Calculator**: Real-time pricing based on room specifications
- **Comprehensive Room Options**: Support for bedrooms, bathrooms, living rooms, and kitchens
- **Size-based Pricing**: Different rates for small, medium, and large rooms
- **Pet Accommodation**: Additional pricing for pet-friendly cleaning
- **Extra Services**: Optional services including garden, garage, and gym cleaning
- **Frequency Discounts**: Pricing multipliers for recurring services
- **Invoice Generation**: Downloadable invoices with detailed cost breakdowns
- **Customer Contact Forms**: Integrated contact information collection
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠 Tech Stack

### Frontend
- **Next.js 15.2.3** - React framework with App Router
- **React 19** - User interface library
- **TypeScript** - Type-safe JavaScript
- **CSS3** - Custom styling with animations

### Backend
- **Express.js** - Node.js web application framework
- **MongoDB** - NoSQL database for data persistence
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## 💰 Pricing Structure

- **Bedrooms**: GHC 100 per room
- **Bathrooms**: GHC 95 per room
- **Living Rooms**: GHC 50 (small), GHC 70 (medium), GHC 90 (large)
- **Kitchens**: GHC 50 (small), GHC 70 (medium), GHC 90 (large)
- **Pet Services**: +GHC 100
- **Extra Services**: +GHC 50 each (garden, garage, gym)

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- MongoDB database

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/McAnnison/cost-check.git
   cd cost-check
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Environment Setup**
   
   Create a `.env.local` file in the backend directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   node server.mjs
   ```
   The backend will run on `http://localhost:5000`

2. **Start the frontend development server**
   ```bash
   npm run dev
   ```
   The frontend will run on `http://localhost:3000`

3. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to use the application.

## 📁 Project Structure

```
cost-check/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Calculator.tsx     # Main cost calculator
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Header component
│   └── InvoicePage.tsx    # Invoice generation
├── backend/               # Express.js backend
│   ├── config/           # Database configuration
│   ├── models/           # MongoDB schemas
│   ├── routes/           # API routes
│   └── server.mjs        # Server entry point
├── public/               # Static assets
│   └── style/           # CSS files
└── README.md            # Project documentation
```

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Backend
- `node server.mjs` - Start the backend server

## 🎨 Usage

1. **Enter Room Details**: Specify the number of bedrooms and bathrooms
2. **Select Room Sizes**: Choose sizes for living rooms and kitchens
3. **Add Extras**: Include pet services or additional areas (garden, garage, gym)
4. **Choose Frequency**: Select service frequency for applicable discounts
5. **Fill Contact Form**: Provide customer contact information
6. **Generate Invoice**: View and download detailed cost breakdown

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 📞 Contact

For support or inquiries about CleanMate services:

- **Location**: Accra Digital Center
- **Phone**: +233 206 837 999
- **Email**: info@cleanmate.com

---

© 2025 CleanMate. All rights reserved.
