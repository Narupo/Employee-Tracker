# Employee Tracker

## Description
The **Employee Tracker** is a command-line interface (CLI) application designed for business owners and HR professionals to efficiently manage company employee data. Built using **Node.js, Inquirer, and PostgreSQL**, this application allows users to **view, add, and update** departments, roles, and employees within a company. The structured database ensures accurate record-keeping and streamlined personnel management.

## Features
- View all **departments**, **roles**, and **employees**.
- Add **new departments**, **roles**, and **employees**.
- Update an **employee’s role**.
- Built-in PostgreSQL integration for efficient data storage.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Walkthrough Video](#walkthrough-video)
- [Technologies Used](#technologies-used)
- [Schema Design](#schema-design)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)

## Installation
To use this application, follow these steps:

1. **Clone the repository**
   ```sh
   git clone <repository-url>
   cd Employee-Tracker
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Set up the PostgreSQL database**
   - Open PostgreSQL and create the database by running:
     ```sh
     psql -U postgres -f db/schema.sql
     ```
   - Seed the database (optional but recommended):
     ```sh
     psql -U postgres -d business_db -f db/seeds.sql
     ```
4. **Configure environment variables**
   - Create a `.env` file in the root directory and add:
     ```sh
     DB_HOST=localhost
     DB_PORT=5432
     DB_USER=postgres
     DB_PASSWORD=your_password
     DB_NAME=business_db
     ```

## Usage
Run the application with:
```sh
npm start
```
Once started, a **menu-driven interface** will appear, allowing you to interact with the database. Choose options to view, add, or update employees, roles, and departments.

## Walkthrough Video

https://github.com/user-attachments/assets/8ed24c35-6ab7-46f5-8cfb-05265a742f07

## Technologies Used
- **Node.js** - JavaScript runtime for backend execution.
- **Inquirer.js** - Interactive CLI user prompts.
- **PostgreSQL** - Relational database for structured data storage.
- **pg** - PostgreSQL client for Node.js.
- **dotenv** - Environment variable management.

## Schema Design
The database consists of three primary tables:

### **1. `department`**
| Column | Type | Constraints |
|--------|------|-------------|
| `id` | SERIAL | PRIMARY KEY |
| `name` | VARCHAR(30) | UNIQUE, NOT NULL |

### **2. `role`**
| Column | Type | Constraints |
|--------|------|-------------|
| `id` | SERIAL | PRIMARY KEY |
| `title` | VARCHAR(30) | UNIQUE, NOT NULL |
| `salary` | DECIMAL | NOT NULL |
| `department_id` | INTEGER | REFERENCES `department(id)`, NOT NULL |

### **3. `employee`**
| Column | Type | Constraints |
|--------|------|-------------|
| `id` | SERIAL | PRIMARY KEY |
| `first_name` | VARCHAR(30) | NOT NULL |
| `last_name` | VARCHAR(30) | NOT NULL |
| `role_id` | INTEGER | REFERENCES `role(id)`, NOT NULL |
| `manager_id` | INTEGER | REFERENCES `employee(id)`, NULL |

## License
This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Contributing
No Contributions currently accepted on this project

## Questions
For questions, feel free to reach out via GitHub or email.

- **GitHub:** [Narupo](https://github.com/Narupo)
- **Email:** pouzumaki@gmail.com