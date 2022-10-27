# kodify-chat-application

This is the result of the coding challenge. In total I coding arroung 4 and a half hours. The proyect have a simple node backend with socket io server and in the frontend I use webpack with React in typescript.

## Getting Started

Clone the repository
```sh
git clone git@github.com:mikelgarciaurbina/kodify-chat-application.git

cd kodify-chat-application
```

## Start the Backend

This app needs the backend to be running so that the chat can work across multiple tabs.

```sh
cd /server

npm install

npm start
```

## Start the Frontend

For run the chat in the browser continue this simple steps:

```sh
npm install

npm start
```

Open a new tab browser with the address http://localhost:8080/

## Test

The tests are running in the CI on every push. But you can run in local with the following command:

```sh
npm test
```

## Linter

The linter is running in the CI on every push. But you can run in local with the following command:

```sh
npm run lint
```
