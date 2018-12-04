# GetMeData
A project using "AngularJs-MySQL-NodeJs". 


Docs: Generating view for Sale Representatives from “dbo.simple_sales_view”

Steps for running the web application:

Prerequisites:

1. Node.Js is required for running the web server. If you don’t have it installed on your system, follow this link:>  https://nodejs.org/en/
2. A database Server is required for running the SQL server. Follow this link to install SQL Server Express:>  https://www.microsoft.com/en-us/sql-server/sql-server-editions-express (for more information refer to Setting Up the SQL server section below).
3. Install SQL Server Management Studio to:
	a) Connect to the database server
	b) To restore the database (for more information on this refer to Setting Up the SQL server section below)
Follow this link for installation https://docs.microsoft.com/en-us/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017


Step 1.  Extract the .zip file on the desktop and open command prompt inside this directory.
Step 2.  Run “npm install” in cmd to load the require packages. The important ones are “mysql” and “express”.  Eg. To install manually run this in cmd:> “npm install express –save” 
Step 3.  Run “node server.js” from the cmd to connect to server.
Step 4.  Go to the browser and open http://localhost:3000/#/  		

If running into errors, please contact: balrajgill18@gmail.com or at 2269612087.


How To: 

Setting up the SQL Server:

1 Install SSMS and SQL Server Express 2017.
2. Initially, open SQL Server Management studio and connect to the server using SQLEXPRESS with Window's Authentication.
3. Under the object explorer, right-click on the database folder and select the “restore database”.
    Inside restore database tab: 
•	Choose device inside source section. 
•	Inside the select backup devices, click add
•	Choose the ".bak" file (a database backup format) that you would like to restore.

4. Now, go inside the properties of server and select security. Inside security choose SQL Server and window Authentication mode. 
5. Navigate to security tab inside object explorer. 
•	Right-click the login folder to create a new login. 
•	Add a name (balraj) and password (12345) and map this account to the required database by choosing “wf_retail” in Default Database option (at bottom of Login prompt). 
•	Go to server roles and grant all necessary access especially sysadmin, serveradmin, public etc.  
Please Note the default connection configuration att local host:
Configurations = {   
        user: "balraj",
        password: "12345",
        server: "localhost",
        database: "wf_retail"      
 };
5. Right-click the server and go to properties. Inside security choose "SQL server and window Authentication mode"
6. Go to SQL server configuration manager and make sure all SQL Server Services are running. Also, check the SQL Server Network Configuration are all enabled. If not, enable them.
