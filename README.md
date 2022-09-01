# E-Commerce Back End - [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
## Description

A simple backend server for managing an E-Commerce Database through an API.
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Technology](#technology)
- [Questions](#questions)

## Installation

1. Clone the repository files to your computer
2. Using a CLI navigate to the folder where you have copied the application files
3. Run command `npm install` to install dependencies required for server usage
4. Add a new  `.env` file in the folder where the server is installed
5. In a text editor of your choice edit the contents of the `.env` file to contain the following code with `'password'` replaced with your mysql root password:
```
DB_NAME='ecommerce_db'
DB_USER='root'
DB_PASSWORD='password'
```
6. Open the mySQL Shell in the directory where you installed this application and run `SOURCE db/schema.sql` to initialize the employee Database.

Note: Only source the `schema.sql` file once when setting up the database for the first time. Running the schema file again after interacting with the database will irreversibly erase all records contained in the Database.
## Usage

[Click here for a Walkthrough Video](https://youtu.be/LTbpBKgdtjc)

1. Using a CLI navigate to the folder where you have saved the server.
2. Run command `npm run start` to start the server.
3. The server has the following API routes for interacting with the database:

    ### Tags

    GET `/api/tags` - Returns all tags

    GET `/api/tag/:id` - Returns a tag by id

    POST `/api/tags` - Create new tag

    The body object must have the following properties:

    - `tag_name` - Tag Name ( String )
    <br><br>

    PUT `/api/tag/:id` - Updates existing tag

    The body object must have the following properties:

    - `tag_name` - New Tag Name ( String )
    <br>
    ---
    ### Category

    GET `/api/categories` - Returns all Categories

    GET `/api/categories/:id` - Returns a Category by id

    POST `/api/categories` - Create new Category
    
    The body object must have the following properties:

    - `category_name` - Category Name ( String )
    <br><br>

    PUT `/api/categories/:id` - Update existing Category

    The body object must have the following properties:

    - `category_name` - New Category Name ( String )
    <br>
    ---
    ### Product

    GET `/api/products` - Returns all Products

    GET `/api/products/:id` - Returns a Product by id

    POST `/api/products` - Create New Product

    The body object must have the following properties:

    - `product_name` - Product Name ( String )
    - `price` - Price ( Decimal Number )
    - `stock` - Stock Level ( Integer )
    - `category_id` - Category Id ( Integer )
    - `tagIds` - Tag Id's ( Array of Integers )
    <br><br>

    PUT `/api/products/:id` - Updates existing Product

    The body object must have the following properties:

    - `product_name` - New Product Name ( String )
    - `price` - New Price ( Decimal Number )
    - `stock` - New Stock Level ( Integer )
    - `category_id` - New Category Id ( Integer )
    - `tagIds` - New Tag Id's ( Array of Integers )
    <br>
    ---
## License

<p>
MIT License

Copyright 2022 &copy; Daniel Stewart

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
</p>

## Technology

### Languages

- [![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](https://www.javascript.com/)

### Runtime

- [![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/en/)

### Packages

- [![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/)
- [![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com/)
- [![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)](https://sequelize.org/)
- [![MySQL2](https://img.shields.io/badge/MySQL2-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/mysql2)
- [![dotENV](https://img.shields.io/badge/dotenv-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/dotenv)



## Database

- [![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)

## Questions 

If you have any questions or feedback you can contact me through one of the links below <br>
GitHub Profile - [danielstewart914](https://github.com/danielstewart914)<br>
Email - [danielstewart914@outlook.com](mailto:danielstewart914@outlook.com)
