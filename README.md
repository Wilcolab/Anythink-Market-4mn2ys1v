# Python Server

This project contains a FastAPI server implemented in Python. It provides two routes for managing a task list.

## Project Structure

The project has the following files and directories:

- `python-server/src/main.py`: This file contains the implementation of the FastAPI server with two routes. It handles adding a task to a list and retrieving the list.

- `python-server/src/__init__.py`: This file is an empty file that marks the `src` directory as a Python package.

- `python-server/requirements.txt`: This file lists the dependencies required for the FastAPI server and other dependencies.

- `python-server/Dockerfile`: This file is used to build a Docker image for the FastAPI server. It specifies the base image, copies the source code into the image, installs the dependencies, and sets the command to run the server.

- `docker-compose.yml`: This file is used to define and run multi-container Docker applications. It specifies the services to run, their configurations, and any dependencies between them.

## Getting Started

To run the FastAPI server using Docker, follow these steps:

- Build and start the Docker containers by running the following command:

  ```shell
  docker compose up
  ```

  This command will build the Docker image for the FastAPI server and start the containers defined in the `docker-compose.yml` file.

- The FastAPI server should now be running. You can access at port `8000`.

## API Routes

The FastAPI server provides the following API routes:

- `POST /tasks`: Adds a task to the task list. The request body should contain the task details.

- `GET /tasks`: Retrieves the task list.

A simple Node.js + Express server that listens on port 8001. Includes Nodemon for live reload during development and a Dockerfile for containerized runs.

## Project Structure

```
js-express-server
├── src
│   └── index.js        # Entry point of the application
├── package.json        # Project configuration and scripts
├── yarn.lock / package-lock.json
├── Dockerfile          # Docker configuration
└── README.md           # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (LTS recommended) and npm installed.
- Docker (optional, for containerized runs).
- Yarn (optional) if you prefer Yarn over npm.

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

The app will be available at http://localhost:8001.

#### Locally (npm)

1. Install dependencies:

```bash
npm install
```

2. Start the server (production):

```bash
npm start
```

Start in development with Nodemon (if a `dev` script exists):

```bash
npm run dev
```

#### Locally (Yarn)

1. Install dependencies:

```bash
yarn install
```

2. Start the server:

```bash
yarn start
```

Start in development with Nodemon:

```bash
yarn dev
```

## Notes

- Ensure your package.json contains appropriate scripts, for example:
    - "start": "node src/index.js"
    - "dev": "nodemon src/index.js"
- The server should read the port from an environment variable, e.g.:
    - `const PORT = process.env.PORT || 8001`
- Adjust the default port or Docker port mapping if needed.

## License

This project is licensed under the MIT License.

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