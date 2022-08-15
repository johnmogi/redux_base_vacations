installed dbeaver - try to fix and connect locally before deploy prep.
https://computingforgeeks.com/install-and-configure-dbeaver-on-ubuntu-debian/

run mysql locally and connect to int using dbeaver
docker run -d mysql:8.0.3 --name vacationsdb -e MYSQL_ROOT_PASSWORD='YpM88sT3bA5W' MYSQL_DATABASE='vacations' MYSQL_USER='root'  -p 3306:3360

docker run mysql // will complain for db and pass
docker run --rm -it mysql /bin/bash


#upload client to git - renamed to frontend
update dependencies see if it still working.

adminer?


INSERT INTO vacationsdb (description, destination, picFileName, startDate, endDate, price) VALUES('vac.description','vac.destination','vac.picFileName','10.10.2010','10.10.2010','500'










// const server = express();
// const expressSession = require("express-session");
// var cookieParser = require("cookie-parser");

// server.use(
//   expressSession({
//     name: "userlog",
//     secret: "let-me-in",
//     resave: true,
//     saveUninitialized: false
//   })
// );
// server.use(cookieParser()); // Support Cookies