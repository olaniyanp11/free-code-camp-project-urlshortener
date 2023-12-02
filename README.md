# URL Shortener Microservice

This is a simple URL shortener microservice built using Node.js, Express, and DNS lookup for validation.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Features

- Shorten long URLs into 4-digit random short URLs.
- Validate URLs using DNS lookup.
- Redirect users to the original URL.

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/url-shortener.git
```

2. Navigate to the project directory:

```bash
cd url-shortener
```

3. Install dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
npm start
```

2. Visit [http://localhost:3000](http://localhost:3000) in your web browser to access the URL shortener.

## Endpoints

### 1. Shorten a URL

- **Endpoint:** `/api/shorturl`
- **Method:** `POST`
- **Request Body:**
  ```json
  {
    "url": "https://example.com"
  }
  ```
- **Response:**
  ```json
  {
    "original_url": "https://example.com",
    "short_url": 1234
  }
  ```

### 2. Redirect to Original URL

- **Endpoint:** `/api/shorturl/:short_url`
- **Method:** `GET`
- **Response:** Redirects to the original URL.

### 3. Hello API

- **Endpoint:** `/api/hello`
- **Method:** `GET`
- **Response:**
  ```json
  {
    "greeting": "hello API"
  }
  ```

## Contributing

1. Fork the project.
2. Create a new branch: `git checkout -b feature/new-feature`.
3. Commit your changes: `git commit -m 'Add a new feature'`.
4. Push to the branch: `git push origin feature/new-feature`.
5. Submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
[livedemo](https://free-code-camp-project-urlshortener.onrender.com)
```
Remember to customize the README with specific details about your project, such as installation steps, usage instructions, and any additional features or configurations specific to your URL shortener implementation.
