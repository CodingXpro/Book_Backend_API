# Book Review API

## Setup Instructions
```bash
npm install
cp .env.example .env
npm run dev
```

## API Endpoints
### Auth
- `POST /api/signup`
- `POST /api/login`

### Books
- `POST /api/books` (auth)
- `GET /api/books`
- `GET /api/books/:id`
- `GET /api/books/search?query=...`

### Reviews
- `POST /api/books/:id/reviews` (auth)
- `PUT /api/reviews/:id` (auth)
- `DELETE /api/reviews/:id` (auth)

## Database Schema
- **User**: username, email, password
- **Book**: title, author, genre, description
- **Review**: book, user, rating, comment

## Design Notes
- JWT-based user authentication
- One review per user per book enforced