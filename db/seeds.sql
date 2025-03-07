-- Insert departments
INSERT INTO department (name) VALUES
('Engineering'),
('Finance'),
('Marketing'),
('Sales'),
('Human Resources');

-- Insert roles
INSERT INTO role (title, salary, department_id) VALUES
('Software Engineer', 90000, 1),
('Senior Software Engineer', 120000, 1),
('Accountant', 75000, 2),
('Financial Analyst', 85000, 2),
('Marketing Manager', 80000, 3),
('Content Strategist', 70000, 3),
('Sales Representative', 60000, 4),
('Sales Manager', 95000, 4),
('HR Coordinator', 65000, 5),
('HR Manager', 95000, 5);

-- Insert employees
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Alice', 'Johnson', 1, NULL),
('Bob', 'Smith', 2, 1),
('Charlie', 'Brown', 3, NULL),
('Dana', 'White', 4, 3),
('Evan', 'Miller', 5, NULL),
('Fiona', 'Taylor', 6, 5),
('George', 'Anderson', 7, NULL),
('Hannah', 'Martinez', 8, 7),
('Ian', 'Roberts', 9, NULL),
('Jasmine', 'Lee', 10, 9);

       
