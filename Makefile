db-start:
	echo "Running database on docker"
	docker-compose up -d;
	
server-start:
	echo "Running server"
	cd server; pwd; yarn; yarn start;

client-start:
	echo "Running client"
	cd client; pwd; yarn; yarn start; 
	