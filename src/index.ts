import * as express from 'express';
import * as session from 'express-session';
import { Request, Response } from 'express';
import * as path from 'path';
import * as favicon from 'serve-favicon';
import * as bodyParser from 'body-parser';
import { fileRouter } from "./routes/";
import { userRouter } from "./routes/";

// Create a new Express application.
const app = express();
const { PORT = 3000 } = process.env;

// Configure view engine to render EJS templates.
app.set("view engine","ejs");
app.set("views", "src/views");

// public folder for assets i.e (.js / .css/ images) files
// favicon
app.use(express.static('src/public'));
app.use(favicon(path.join('src','public','images','favicon.ico')));

// Use application-level middleware for common functionality, including
// logging, parsing, and session handling.
app.use(bodyParser.urlencoded({ extended: true })); // handle post bodies

// Define session
const uuidv1 = require('uuid/v1');
let sess = {
  genid: function(req) {
    return uuidv1();
  },
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: {}
};
// For using secure cookies in production, but allowing for testing in development,
// the following is required.
if (app.get('env') === 'production') {
  app.set('trust proxy', 1); // trust first proxy
  sess.cookie['secure'] = true // serve secure cookies
}

app.use(session(sess));
// Cache handle. In case user uses browser back button
// if user is not authenticated we will redirect to unauthorised page
app.use(function(req, res, next) {
  res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
  next();
});

// Authentication and Authorization Middleware
let auth = function(req, res, next) {
  if (req.session && req.session.user === "admin" && req.session.admin) {
    return next();
  } else {
    // return res.sendStatus(401);
    return res.render('pages/unauthorised.ejs');
  }
};


// Define Route
app.use('/myFiles', auth, fileRouter);
app.use('/login', userRouter);

app.get('/my-drive', auth,  (req: Request, res: Response) => {
  res.render('pages/myDrive.ejs');
});

app.get('/', (req: Request, res: Response) => {
  res.render('pages/index.ejs');
});

app.get('/logout', (req: any, res: Response) => {
  req.session.destroy();
  res.redirect('/');
});


if (require.main === module) {
  app.listen(PORT, () => {
    console.log('server started at http://localhost:'+PORT);
  });
}

export default app;
