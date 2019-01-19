# Debugging

## Auto - Attach Debugging

The debugger will automatically kick in and attach.

Set the`auto-attach` in the settings, then run node server with the inpsector protocol, and run ng serve

1 - time setup for auto - attach:

1. `CMD+,`
2. type`auto attach`
3. set`auto-attach` to`on`

Now just run your scripts

```bash
npm run local-proxy-debug
```

## npm Debugging

Launch your app and the debugger

1. Go to the debugger panel
2. Run`Launch via NPM`

## Docker Debugging

Attach the debugger to a running docker container

1. Go to the debugger panel
2. `Docker: Attach to Node`

## Relative File Debugging

Debug whichever file you have open and in focus.

1. open`meta/create-vikings-cosmos-sdk.js`
2. Go to the debugger panel
3. `Launch Relative File`

## Debugging Angular in VS Code

1. Run the app, without debugging node
   `npm run local-proxy`
2. Go to the debugger panel
3. `Launch Angular in Chrome`
