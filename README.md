# 🚀 MiniLink - Modern URL Shortener

MiniLink is a modern full-stack URL shortener application built using:

- ⚙️ Spring Boot (Backend API)
- ⚛️ React + Vite (Frontend)
- 🎨 Tailwind CSS
- 🐘 PostgreSQL
- ☁️ Render (Backend Deployment)
- ▲ Vercel (Frontend Deployment)

MiniLink allows users to:

- Shorten long URLs
- Create custom aliases
- Track click analytics
- Manage recent links
- Generate permanent short links
- View analytics of shortened URLs

---

# 🌐 Live Demo

## Frontend

```bash
https://minilink-web-pi.vercel.app
```

## Backend API

```bash
https://minilink-twtn.onrender.com
```

---

# 📸 Preview

## Home Page

- Create short URLs
- Optional custom alias
- Optional expiration time
- Copy shortened URL

## Analytics Page

- Search analytics using short code
- View:
  - Original URL
  - Short URL
  - Click Count
  - Expiration Status

---

# 🛠️ Tech Stack

## Frontend

- React
- Vite
- Tailwind CSS
- Axios
- React Icons

## Backend

- Java 17
- Spring Boot
- Spring Web
- Spring Data JPA
- PostgreSQL
- Hibernate
- Maven

## Database

- PostgreSQL (Aiven Cloud)

## Deployment

- Render → Backend
- Vercel → Frontend

---

# 📂 Project Structure

# Backend Structure

```bash
minilink/
│
├── src/main/java/com/abdulmajid/minilink
│
├── controller
│   └── UrlController.java
│
├── service
│   ├── UrlService.java
│   └── impl
│       └── UrlServiceImpl.java
│
├── repository
│   └── ShortUrlRepository.java
│
├── entity
│   └── ShortUrl.java
│
├── dto
│   ├── request
│   └── response
│
├── config
│   └── WebConfig.java
│
├── exception
│
└── MiniLinkApplication.java
```

---

# Frontend Structure

```bash
minilink-web/
│
├── src
│
├── components
│
├── pages
│
├── services
│   └── api.js
│
├── App.jsx
│
├── main.jsx
│
└── index.css
```

---

# ✨ Features

## 🔗 URL Shortening

Convert long URLs into short shareable links.

Example:

```bash
https://github.com/helloabdulmajid/minilink-web
```

↓

```bash
https://minilink-twtn.onrender.com/git3
```

---

## 🏷️ Custom Alias

Users can create custom aliases.

Example:

```bash
Custom Alias: github
```

↓

```bash
https://minilink-twtn.onrender.com/github
```

---

## 📊 Analytics Tracking

Track:

- Click count
- Original URL
- Short URL
- Expiration status

---

## 📋 Copy Short URL

One-click copy functionality.

---

## 🕘 Expiration Support

Optional expiration date support.

(Currently under improvement)

---

## 💾 Recent Links Storage

Stores recently generated links in frontend local storage.

---

# ⚙️ Backend API Endpoints

## Base URL

```bash
https://minilink-twtn.onrender.com/api/v1/urls
```

---

# 🔹 Create Short URL

## POST

```bash
/api/v1/urls
```

## Request Body

```json
{
  "originalUrl": "https://github.com/helloabdulmajid/minilink-web",
  "customAlias": "git3",
  "expiresAt": null
}
```

## Response

```json
{
  "id": 1,
  "originalUrl": "https://github.com/helloabdulmajid/minilink-web",
  "shortCode": "git3",
  "shortUrl": "https://minilink-twtn.onrender.com/git3"
}
```

---

# 🔹 Redirect URL

## GET

```bash
/{shortCode}
```

Example:

```bash
https://minilink-twtn.onrender.com/git3
```

---

# 🔹 Get Analytics

## GET

```bash
/api/v1/urls/analytics/{shortCode}
```

Example:

```bash
/api/v1/urls/analytics/git3
```

---

# 🐘 Database Design

## Table: short_urls

| Column Name | Type |
|---|---|
| id | BIGINT |
| original_url | TEXT |
| short_code | VARCHAR |
| click_count | BIGINT |
| created_at | TIMESTAMP |
| expires_at | TIMESTAMP |

---

# 🔐 Environment Variables

## Backend (.env / Render Variables)

```env
DB_URL=your_database_url
DB_USERNAME=your_database_username
DB_PASSWORD=your_database_password
```

---

# ⚙️ application.properties

```properties
spring.datasource.url=${DB_URL}
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.format_sql=true
```

---

# 🌍 CORS Configuration

```java
@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {

        registry.addMapping("/**")
                .allowedOrigins(
                    "http://localhost:5173",
                    "https://minilink-web-pi.vercel.app"
                )
                .allowedMethods("*")
                .allowedHeaders("*");
    }
}
```

---

# 🐳 Docker Configuration

## Dockerfile

```dockerfile
FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY . .

RUN chmod +x mvnw

RUN ./mvnw clean package -DskipTests

EXPOSE 8080

CMD ["java", "-jar", "target/minilink-0.0.1-SNAPSHOT.jar"]
```

---

# ☁️ Backend Deployment (Render)

## Steps

1. Push backend code to GitHub
2. Create new Web Service in Render
3. Select Docker runtime
4. Add environment variables
5. Deploy service

---

# ▲ Frontend Deployment (Vercel)

## Steps

1. Push frontend code to GitHub
2. Import project into Vercel
3. Select Vite preset
4. Deploy

---

# 🧪 Local Development Setup

# Clone Repository

```bash
git clone https://github.com/helloabdulmajid/minilink.git
```

---

# Backend Setup

```bash
cd minilink
```

## Run Backend

```bash
./mvnw spring-boot:run
```

Backend runs on:

```bash
http://localhost:8080
```

---

# Frontend Setup

```bash
cd minilink-web
```

## Install Dependencies

```bash
npm install
```

## Start Frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🔥 Production API Configuration

## api.js

```javascript
const API_BASE_URL =
  "https://minilink-twtn.onrender.com/api/v1/urls";
```

---

# 📈 Future Improvements

- User authentication
- QR code generation
- Custom domains
- Advanced analytics dashboard
- Expiration countdown
- Link management dashboard
- Password protected links
- Rate limiting
- Redis caching
- Docker Compose support
- CI/CD pipeline
- Kubernetes deployment

---

# 🧠 Challenges Faced

## Render Deployment Issues

- JDBC connection issues
- Hibernate dialect issues
- PostgreSQL connection pool limits
- CORS errors
- Environment variable configuration

## Solutions

- Configured Hikari connection pool
- Fixed Render environment variables
- Added production CORS origin
- Updated API base URL
- Fixed Docker Java version mismatch

---

# 📚 What I Learned

- Full-stack deployment
- Spring Boot production setup
- PostgreSQL cloud integration
- Docker basics
- Render deployment
- Vercel deployment
- CORS handling
- REST API design
- Environment variable management

---

# 👨‍💻 Author

## Abdul Majid

Java Backend Developer

- Spring Boot
- React
- PostgreSQL
- Docker
- REST APIs

GitHub:

```bash
https://github.com/helloabdulmajid
```

---

# ⭐ Support

If you like this project:

- ⭐ Star the repository
- 🍴 Fork the project
- 🛠️ Contribute improvements

---

# 📜 License

This project is licensed under the MIT License.

---

# 🚀 MiniLink

Shorten Long Links, Share Everywhere 🚀