<a name="readme-top"></a>

<div align="center">

![MovieZone Logo](/images/logoInvertido.png)

## 🍿Your world of movies and series one click away🍿

![Badge in progress](https://img.shields.io/badge/STATUS-DONE-green)

</div>

This repository is the backend of MoviZone repo and this repository was generated with Node JS, express 4.19 and T-SQL

<details>
<summary>Table of contents</summary>

- [Description of project](#description-of-project)
- [Functional Requirements](#functional-requirements)
  - [ 🛠️ Technical requirements](#technical-requirements)
- [How to Install and Run the Project](#how-to-install-and-run-the-project)
- [Process to create the project](#process-to-create-the-project)
- [Sprint Review](#sprint-review)
- [Credits](#credits)

</details>

## Description of project

This project creates a RESTful API to manage a list of movie and series favorites. The API allows user authentication, storage of favorites and retrieval of information about movies and series.

## Functional requirements

User authentication: Login with credentials and obtain a JWT token to access protected functionalities.
User management: Registration of new users (optional).
Favorites management: Add, delete and consult favorite movies or series.
Movie and series information: Get basic details about movies and series (optional, depending on the data source).

## ⚒️ Technical requirements

Backend: Node.js and Express.js
Database: SQL Server (MSSQL)
Tools:
mssql: Node.js connector for SQL Server.
jsonwebtoken: Library to generate and verify JWT tokens.

## How to Install and Run the Project

1. The first and most important step is to clone the remote repository to run it locally.

```
git clone [repository URL]
```

2. Then, the next step will be to install dependencies and modules required by the project to run correctly.

```
npm install or npm i
```

3. Configuration:

Create an .env file in the root of the project and add the environment variables for the database connection and the secret for the JWT tokens.
(Optional) Configure the external data source if you use it.

4. Start the server:

```
ng start
```

The server should start by default on port 3000. You can access the API using tools such as Postman or Insomnia to test the functionality.

## ER-Diagram

![Diagrama ER](/images/ER-DATABASE.png)

![QUERIES-SQL](/images/sql.png)

## Process to create the project

## Sprint Review

| What did I do right?              | what I didn't do well                      | What can i do differently?                           |
| --------------------------------- | ------------------------------------------ | ---------------------------------------------------- |
| Create all the tables and request | Problems with the conect with the database | Spend more time to understand how sql works properly |

## Credits

[<img src="https://avatars.githubusercontent.com/u/116055107?v=4" width=115><br><sub>Montserrat Aguilar Valle</sub>](https://github.com/montsegv-2)
| :---: |

<p align="right">(<a href="#readme-top">back to top</a>)</p>

[typescript-url]: https://www.typescriptlang.org/
[typescript-badge]: https://img.shields.io/badge/Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white&color=blue
[tailwind-url]: https://tailwindcss.com/
[tailwind-badge]: https://img.shields.io/badge/Tailwind-ffffff?style=for-the-badge&logo=tailwindcss&logoColor=38bdf8
[angular-url]: https://angular.dev/
[angular-badge]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
