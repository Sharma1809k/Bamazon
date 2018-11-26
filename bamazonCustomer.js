// Dependencies
var mysql = require("mysql");
var inquirer = require("inquirer");

// Connection
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "password",
  database: "bamazon"
});
// Display Inventory
connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  readProducts();
});
function readProducts() {
  connection.query("SELECT * FROM products", function (err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log("Product Id    " + res[i].item_id + "\n" +
        "Name : " + res[i].product_name + "\n" +
        "Price : $ " + res[i].price + "\n" +
        "Qty : " + res[i].stock_quantity + "\n" +
        "--------------------------------------");
    }
    start();
  });
}
// Prompt Customers Input
function start() {

  inquirer.prompt([
    {
      name: "item_id",
      type: "input",
      message: "Please enter the ID of the product you would like to buy?",

    },
    {
      name: "quantity",
      type: "input",
      message: "How many units of the product you would like to buy?",

    }
  ]).then(function (answer) {
    connection.query("SELECT * FROM products WHERE ?", { item_id: answer.item_id }, function (err, res) {

      if (res[0].stock_quantity - answer.quantity >= 0) {
        var newQty = res[0].stock_quantity - answer.quantity;
        console.log("----------------------------------------" + "\n" +
          "----------------------------------------" + "\n" + "Ordered Qty : " + answer.quantity);
        console.log("Your oder has been placed! Your total is $" + (res[0].price * answer.quantity + "."));

        console.log("Thank you for shopping with us!" + "\n" +
          "----------------------------------------" + "\n" +
          "----------------------------------------");
        updateProduct();
        function updateProduct(err, res) {
          console.log("Updating the quantities...\n");
          var query = connection.query("UPDATE products SET ? WHERE ?", [{ stock_quantity: newQty }, {
            item_id: answer.item_id
          }
          ], function (err, res) {
            console.log(res.affectedRows + " product updated!\n" + "\n" +
              "----------------------------------------" + "\n" +
              "----------------------------------------");
          });
          console.log(query.sql);
        }
        connection.end();
      }
      else {
        console.log("Insufficient quantity! Please modify your order. Available qty for selected item is " +
          res[0].stock_quantity + ".");
        continueShopping();
      }
    })
  })
}

function continueShopping() {
  inquirer.prompt([
    {
      name: "continueShopping",
      type: "list",
      message: "Do you wanna continue shopping ?",
      choices: ["Yes", "No"]
    }
  ]).then(function (answer) {
    if (answer.continueShopping === "Yes") {
      start()
    }
    else {
      console.log("Thank You!!!")
      connection.end()
    }

  })
}
