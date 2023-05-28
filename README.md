DO the following steps to run the applications:
1. clone the repository
2. cd to backend folder and run npm intall
3. create .env file in backend
4. create a local postgresql database and add the details to .env 
5. here is a preview of env file:
PORT=5000
JWT_SECRET="knvnknseknvc"
USER="postgres"
HOST="localhost"
DATABASE="assignment"
PASSWORD="abhi"

6. create the tables as present in migrations.sql file either by running migrations or manually pasting the code in the database
7. run the server by running node index.js  .  No need to run frontend seperately as it has been built and integrated with the server itself
8. run the following POST call to add historical price to the database: http://localhost:3000/api/v1/prices/addPriceFromCsv  (no need for a body)
9. run the following POST call to add holding data with the data in the body of call : http://localhost:3000/api/v1/holdings/addHoldings
10. open localhost 5000 on your brower to view the application

Here is a link for exported postman file for ypur reference:  https://drive.google.com/file/d/1zuSZfuzBUzgXu90bObGf3UMy6HciRAyk/view?usp=sharing

Deployed Link: https://assignment-5q2u.onrender.com

