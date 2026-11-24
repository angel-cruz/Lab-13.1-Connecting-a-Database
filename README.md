# Social Media API — MongoDB Atlas Starter

## Requirements
- Node.js (LTS recommended)
- A MongoDB Atlas cluster and database user

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Copy `.env.example` to `.env`.

   Windows PowerShell:

   ```powershell
   Copy-Item .env.example .env
   ```

   macOS/Linux:

   ```bash
   cp .env.example .env
   ```

3. Edit `.env` and replace the connection-string placeholders with your MongoDB Atlas connection string and database credentials. Do not commit `.env` to Git.

4. Start the server:

   ```bash
   npm start
   ```

5. Open `http://localhost:3001/` or send a GET request using Postman.

## Successful response

HTTP 200:

```json
{
  "message": "Successfully connected to the database!"
}
```

The server connects to MongoDB before it starts listening. If the database connection fails, the server logs the error and exits rather than accepting requests without a database connection.

## Security notes
- `.env` is excluded from Git by `.gitignore`.
- Never share or commit your real MongoDB connection string.
- `0.0.0.0/0` is acceptable only for the exercise; restrict Atlas network access to trusted IP addresses in production.
- Use a strong database password. URL-encode special characters in the password when placing it in a MongoDB URI.
