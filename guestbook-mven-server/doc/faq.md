## Tools, helpers and quirks
#### Which IDE (integrated development environment) is suitable?
There are a lot of good IDE's. The following ide are widespread
* [WebStorm](https://www.jetbrains.com/webstorm/) from Jetbrains (my preference)
* [Visual Studio Code](https://code.visualstudio.com/download) from Microsoft 



#### How to debug a node app?
See for details [here](https://nodejs.org/en/docs/guides/debugging-getting-started/). The important 
options is
```
--inspect-brk=127.0.0.1:3000
```
Blow the image *Edit Configuration ...* in WebStorm

![](doc/webstorm-node-debug-option.png)

#### Start building production code including a watch 
```
node_modules/.bin/babel dev-server --out-dir prod-server --watch
```

#### Setting development or production mode in package.json -> scripts
Setting the running mode differs between MacOS and Windows.  
* for MacOS
```
...
"temp": "export NODE_ENV=production  && nodemon prod-server/index.js"
...
```

* for Windows
```
...
"temp": "set NODE_ENV=production  && nodemon prod-server/index.js"
...
```


### Remarks on the used npm-modules
#### Express
You need `express` (so called middleware) for routing in the backend.
The command below installs `express` for the application and saves the dependency.
```
npm install express --save
```
#### Nodemon
Optional let's install `nodemon` (a tool for monitoring backend code). This tool restarts the server automatically when a change in the code has been detected.
This replaces a manual restart of the server.
The command below installs `nodemon` globally for this and all future applications. No dependency is needed.
```
npm install nodemon -g
```
#### Module import according to ECMAScript 6
In order to use the `import`-statement (instead of require) according to new ES2015+ (ES6) JavaScript
language standard, babel as transpiler is needed.
```
npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
```
Create a config file named babel.config.js in the *root* of your project with this content:
```
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
    },
  ],
];

module.exports = { presets };
```

#### Concurrent execution of several npm modules
Execute more than one script at the same time (concurrent).
```
npm install concurrently --save-dev
```

#### Preventing CORS-error-messages
Install CORS (Cross-Origin Resource Sharing, see package info https://www.npmjs.com/package/cors, background see https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) and morgan (application logger, see package info https://www.npmjs.com/package/morgan) and save it to the *developer* dependencies.
```
npm install cors morgan --save-dev
```

#### Parsing requests and parameters
In order to parse (analysieren) incoming (HTTP) request bodies in a middleware before your handlers (available under the req.body property) we need to install body-parser (Body-parser in the http-request, see package info https://www.npmjs.com/package/body-parser) and save it to the *main* dependencies.
```
$ npm install body-parser --save
```
