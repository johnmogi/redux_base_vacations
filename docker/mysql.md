docker run --name tourist -e MYSQL_ROOT_PASSWORD= -d mysql:tag
docker run -it --network some-network --rm mysql mysql -hsome-mysql -uexample-user -p

docker build -t server:1.0 . 
docker build -it server:1.0 -p 3000:3000 .