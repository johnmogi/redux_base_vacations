$ docker run --detach --name=jspmysql --env="MYSQL_ROOT_PASSWORD=jsppassword" --publish 6703:3306 mysql


 mysqladmin -u root -p create jsptutorial
 mysql -u root -p jsptutorial < jsp_backup.sql


https://hub.docker.com/_/adminer/
docker-compose -f stack.yml up



https://medium.com/@etiennerouzeaud/play-databases-with-adminer-and-docker-53dc7789f35f

docker run --name vacationsdb -e MYSQL_ROOT_PASSWORD='YpM88sT3bA5W'-d mysql:8.0.3
docker run -it --network some-network --rm mysql mysql -hsome-mysql -uexample-user -p

docker build -t server:1.0 . 

docker run --name tourist server:1.0 -p 3000:3000

docker run --name touristdb -e MYSQL_ROOT_PASSWORD='YpM88sT3bA5W' -d mysql:8.0.3 -p 3000:3000
