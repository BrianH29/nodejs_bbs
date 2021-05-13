const express = require('express'); 
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path'); 

const app = express();

app.set('views',path.join(__dirname, 'views'));
app.set('view engine','pug');
app.set('port', process.env.PORT || 3000);

app.use(logger('dev'));
app.use(express.static(path.join(__dirname,'public'))); 
app.use(express.json()); 
app.use(express.urlencoded({extended:false}));
app.use(cookieParser()); 

app.use((req,res,next) => {
    const error = new Error(`${req.metho} ${req.url} No router to Connect`);
    error.status = 404;
    next(error); 
})

app.use((err,req,res,next) => {
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

app.listen(app.get('port'), () => console.log(`waiting on port`, app.get('port')));

module.exports = app; 