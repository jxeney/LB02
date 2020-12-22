/*
Info on express: http://expressjs.com/en/starter/hello-world.html
 */
import express from 'express';
const app = express();
import { registerRoutes } from "./routes";
import { setEnvironment } from "./config/env";

setEnvironment(app);
registerRoutes(app);

const port = 3000;
//Only for test purposes used and now replaced by routes.js.
//app.get('/', (req, res) => res.send('Hallo geschätzte Mediamatiker/-innen!'));
//app.listen(port, () => console.log(`Application listening on port ${port}!`));


// All non-API requests made to the server, for example, http://www.homepage.com/,
// will hit this request, which just returns the main layout, html file
app.get('*', (req, res) => {
    if (!process.env.NODE_ENV || process.env.NODE_ENV.toString().trim() !== 'production') {
        return res.send(
            'Running server in development mode.'
        );
    } else {
        // Returns the main index file in production environment
        return res.sendFile('index.html', { root: __dirname + '/../dist/' });
    }
});

// Starts the server on the given port
app.listen(port, () => {
    console.log(`Application listening on port ${port} in ${process.env.NODE_ENV} mode!`);
});
