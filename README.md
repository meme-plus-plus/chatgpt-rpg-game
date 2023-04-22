# Text-Based RPG Game
This is a simple text-based RPG game built using AngularJS, MaterializeCSS, and the YouTube API. The game features a story-driven experience where the user makes choices, and the narrative progresses based on those choices. In some cases, an embedded YouTube video may play based on the user's choice.

## Getting Started
These instructions will guide you on how to run the project locally and make it accessible to others on the same network.

## Prerequisites
You'll need the following tools installed on your computer:

* Node.js (version 14.x or higher)
* npm (version 6.x or higher, usually bundled with Node.js)

## Installing Dependencies
First, navigate to the project directory in your terminal and run the following command to install the required dependencies:

```bash
npm install
```

This command will install AngularJS and other dependencies listed in the `package.json` file.

## Running the Application
To run the application locally, you can use a simple HTTP server. One option is to use the `http-server` package from npm. Install it globally by running:

```bash
npm install -g http-server
```

Next, start the server in the project directory:

```bash
http-server -c-1
```
The -c-1 flag disables caching, which can be helpful during development.

By default, the server will be accessible at http://localhost:8080. To make the game accessible to others on the same network, find your computer's local IP address (usually starts with `192.168.x.x` or `10.x.x.x`). Users on the same network can access the game by navigating to `http://your-local-ip-address:8080`.

## Troubleshooting
If you encounter issues running the server, make sure the specified port (8080 by default) is not already in use. You can change the port by passing the -p flag followed by the desired port number, e.g., `http-server -c-1 -p 3000`.

