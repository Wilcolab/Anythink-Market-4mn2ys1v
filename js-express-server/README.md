# js-express-server

This project sets up a simple Express server that listens on port 8001. It uses Nodemon for live reloading during development and can be run inside a Docker container.

## Project Structure

```
js-express-server
├── src
│   └── index.js        # Entry point of the application
├── package.json        # Configuration file for Yarn
├── yarn.lock           # Dependency lock file
├── Dockerfile          # Docker configuration
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Ensure you have Docker installed on your machine.
- Install Yarn globally if you haven't already:

```bash
npm install --global yarn
```

### Running the Server

#### Using Docker

1. Build the Docker image:

```bash
docker build -t js-express-server .
```

2. Run the Docker container:

```bash
docker run -p 8001:8001 js-express-server
```

#### Using Yarn

1. Install dependencies:

```bash
yarn install
```

2. Start the server with Nodemon:

```bash
yarn start
```

The server will be running on `http://localhost:8001`.

## License

This project is licensed under the MIT License.