# Burger Eater

## Description
Burger Eater is a restaurant app that allows users to input names of burgers they would like to eat. It allows users to keep track of the burgers they have eaten. Once their burger is added to the "to eat" list, they can click the "eat" button and devour the burger. Once a burger is eaten, it moves to a "eaten" list on the right. Every burger is stored in a database. The webpage dynamically updates based on requests and responses to and from the database.

## Features
* Handlebars is used to dynamically create HTML to render the page view
    * Each time the page is refreshed by a request or the user, HTML is dynamically rendered based on a response from the database/server
* Object-relational Mapping (ORM) technique is used to make queries to a database
    * A unique burger ORM was created for this page to SELECT, INSERT, and UPDATE the MySQL database
* Model View Controller(MVC) design pattern is used to organize code 
    * Model - contains a model for the burger ORM
    * View - contains HTML files that utlize Handlebars
    * Controller - contains routes for GET, POST, and PUT requests to get data from the database, add data to the database, and update the database respectively

## Built With
* [Handlebars](https://handlebarsjs.com/) - a semantic templating framework for JavaScript and HTML
* [Express](https://expressjs.com/) - a back-end web application framework for Node.js
* [MySQL](https://www.mysql.com/) - a relational database management system
* [Node.js](https://nodejs.org/en/) - a JavaScript runtime environment that allows JavaScript to be run in command line
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - code that creates the logic and structure of the program
* [Bootstrap](https://getbootstrap.com/) - a CSS framework for building responsive web pages
* [Heroku](https://heroku.com) - a cloud platform for deploying web applications
* [Git](https://git-scm.com/) - version control system to track changes in source code
* [GitHub](https://github.com/) - hosts repository and deploys page on GitHub

# Deployed Link
[Burger Eater](https://gentle-ravine-75501.herokuapp.com/) - Burger Eater App

## Code
The below code demonstrates how the burger ORM is used to create API routes to send requests to the MySQL database

    <!-- Burger ORM from the model-->
        updateOne: function (id, cb) {
        orm.updateOne("burgers", "devoured", true, id, function (res) {
            cb(res);
        });
    }

    <!-- Route from the controller -->
        router.put("/api/burgers/:id", function (req, res) {
            var burgerId = req.params.id;
            var isDevoured = req.body.burgerEaten;

            console.log(burgerId);
            console.log(isDevoured);

            burger.updateOne(burgerId, function (result) {
                if (result.changedRows == 0) {
                    // If no rows were changed, then the ID must not exist, so 404
                    return res.status(404).end();
                } else {
                    res.status(200).end();
                }
            });
        });

![Burger Eater](public/assets/img/Burger_Eater.png)

## License
This project is licensed under the MIT license.

## Credits
* [Font Awesome](https://fontawesome.com/icons/hamburger?style=solid) - the burger logo

## Author
* Rebecca Eng
* [GitHub](https://github.com/engrebecca)
* [LinkedIn](https://www.linkedin.com/in/engrebecca/)
