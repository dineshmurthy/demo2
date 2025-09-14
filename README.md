# Message Board Application

A full-stack web application built with React frontend, Flask backend, and MongoDB database for storing and managing messages.

## Features

- **Post Messages**: Users can post messages with their name
- **View Messages**: Display all messages in chronological order
- **Delete Messages**: Remove messages from the board
- **Real-time Updates**: Messages are fetched and displayed in real-time
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend
- React 18
- Axios for API calls
- CSS3 with modern styling
- Responsive design

### Backend
- Python Flask
- Flask-CORS for cross-origin requests
- PyMongo for MongoDB integration
- Gunicorn for production deployment

### Database
- MongoDB for data storage
- Message schema with text, author, and timestamp

## Project Structure

```
message-board-app/
├── frontend/                 # React frontend application
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js           # Main React component
│   │   ├── App.css          # Styling
│   │   ├── index.js         # React entry point
│   │   └── index.css        # Global styles
│   └── package.json         # Frontend dependencies
├── backend/                  # Flask backend application
│   ├── app.py               # Main Flask application
│   ├── requirements.txt     # Python dependencies
│   └── env.example          # Environment variables template
└── README.md                # This file
```

## API Endpoints

- `GET /api/messages` - Retrieve all messages
- `POST /api/messages` - Create a new message
- `DELETE /api/messages/<id>` - Delete a message by ID
- `GET /api/health` - Health check endpoint

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- Python 3.8+
- MongoDB (local or cloud instance)

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The frontend will be available at `http://localhost:3000`

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Create a `.env` file based on `env.example`:
   ```bash
   cp env.example .env
   ```

5. Update the `.env` file with your MongoDB connection string:
   ```
   MONGODB_URI=mongodb://localhost:27017/
   DB_NAME=messageboard
   ```

6. Start the Flask server:
   ```bash
   python app.py
   ```

The backend will be available at `http://localhost:5000`

## Usage

1. Open your browser and navigate to `http://localhost:3000`
2. Enter your name and write a message
3. Click "Post Message" to add it to the board
4. View all messages in the messages section
5. Delete messages by clicking the "×" button

## Deployment

This application is designed to be deployed on cloud platforms like DigitalOcean App Platform, Heroku, or similar services.

### Environment Variables

For production deployment, set these environment variables:

- `MONGODB_URI`: Your MongoDB connection string
- `DB_NAME`: Database name (default: messageboard)
- `PORT`: Port for the Flask application (default: 5000)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the MIT License.
