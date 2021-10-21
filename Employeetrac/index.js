const inquirer = require("inquirer");
// const Connection = require("mysql2/typings/mysql/lib/Connection");
// const mysql = require('mysql2');



function questions() { 
    inquirer.prompt([
        {
            type: "list",
            name: "questions",
            message: "View all employees?",
            choices: ['View all employees', 'Add Employees', 'Update employees role','View all roles', 'Add Role', 'view all departments', 'Add departments' ],
    
        },
    ]).then(function(response) {
             switch(response.questions) {
          case 'View all employees':
              viewAllEmployees();
              break;
          case "Add Employees":
              addEmployees();
              break;
          case "Update Employees Role":
              updateRole();
              break;
          case "View All Roles":
              viewRoles();
              break;
          case "Add Roles":
              addRoles();
              break;
          case "View All Departments":
              viewDepartments();
              break;
          case "Add Departments":
              addDepartment();
              break;
          default:
              console.log("default");



       
             }   
    
    });

}
    questions();
function viewAllEmployees() {
    console.log("hi its working")
    // Connection.query(`
    // SELECT DISTINCT employees.first_name, employees.last_name, roles.title, roles.salary, roles.department_id , department.department_name
    // FROM roles
    //  JOIN employees
    //  JOIN department
    // ON department.department_name = department_name
    // ORDER BY department.id;`, function(err, results) {
    //     if(err) throw err;
    //     console.log(results);
        questions();
    // });
}

              