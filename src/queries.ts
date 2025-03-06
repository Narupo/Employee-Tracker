import pool from './connection';
import inquirer from 'inquirer';
import { QueryResult } from 'pg';

// View all departments
export async function viewDepartments() {
    try {
        const result: QueryResult = await pool.query('SELECT * FROM department');
        console.table(result.rows);
    } catch (error) {
        console.error('Error fetching departments:', error);
    }
}

// View all roles
export async function viewRoles() {
    try {
        const query = `
            SELECT role.id, role.title, department.name AS department, role.salary 
            FROM role 
            JOIN department ON role.department_id = department.id`;
        const result: QueryResult = await pool.query(query);
        console.table(result.rows);
    } catch (error) {
        console.error('Error fetching roles:', error);
    }
}

// View all employees
export async function viewEmployees() {
    try {
        const query = `
            SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, 
            CONCAT(manager.first_name, ' ', manager.last_name) AS manager
            FROM employee 
            JOIN role ON employee.role_id = role.id
            JOIN department ON role.department_id = department.id
            LEFT JOIN employee AS manager ON employee.manager_id = manager.id`;
        const result: QueryResult = await pool.query(query);
        console.table(result.rows);
    } catch (error) {
        console.error('Error fetching employees:', error);
    }
}

// Add a department
export async function addDepartment() {
    const { name } = await inquirer.prompt([
        { type: 'input', name: 'name', message: 'Enter the department name:' }
    ]);
    try {
        await pool.query('INSERT INTO department (name) VALUES ($1)', [name]);
        console.log(`Department '${name}' added successfully.`);
    } catch (error) {
        console.error('Error adding department:', error);
    }
}

// Add a role
export async function addRole() {
    const { title, salary, department_id } = await inquirer.prompt([
        { type: 'input', name: 'title', message: 'Enter the role title:' },
        { type: 'input', name: 'salary', message: 'Enter the salary:' },
        { type: 'input', name: 'department_id', message: 'Enter the department ID:' }
    ]);
    try {
        await pool.query('INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)', [title, salary, department_id]);
        console.log(`Role '${title}' added successfully.`);
    } catch (error) {
        console.error('Error adding role:', error);
    }
}

// Add an employee
export async function addEmployee() {
    const { first_name, last_name, role_id, manager_id } = await inquirer.prompt([
        { type: 'input', name: 'first_name', message: 'Enter the first name:' },
        { type: 'input', name: 'last_name', message: 'Enter the last name:' },
        { type: 'input', name: 'role_id', message: 'Enter the role ID:' },
        { type: 'input', name: 'manager_id', message: 'Enter the manager ID (leave blank if none):' }
    ]);
    try {
        await pool.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)', [
            first_name, last_name, role_id, manager_id || null
        ]);
        console.log(`Employee '${first_name} ${last_name}' added successfully.`);
    } catch (error) {
        console.error('Error adding employee:', error);
    }
}

// Update an employee role
export async function updateEmployeeRole() {
    const { employee_id, new_role_id } = await inquirer.prompt([
        { type: 'input', name: 'employee_id', message: 'Enter the employee ID to update:' },
        { type: 'input', name: 'new_role_id', message: 'Enter the new role ID:' }
    ]);
    try {
        await pool.query('UPDATE employee SET role_id = $1 WHERE id = $2', [new_role_id, employee_id]);
        console.log(`Employee ID ${employee_id} updated successfully.`);
    } catch (error) {
        console.error('Error updating employee role:', error);
    }
}
