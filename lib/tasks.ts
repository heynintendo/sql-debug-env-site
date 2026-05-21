export type Difficulty = "easy" | "medium" | "hard";

export type DemoTask = {
  id: string;
  difficulty: Difficulty;
  title: string;
  problem: string;
  symptom: string;
  buggyQuery: string;
  schemaPreview: string;
};

export const DEMO_TASKS: DemoTask[] = [
  {
    id: "easy_01_typo",
    difficulty: "easy",
    title: "Highest-paid in engineering",
    problem:
      "Return every employee in department 1 with their full name and salary, sorted from highest paid to lowest.",
    symptom: "The query won't run.",
    buggyQuery: `SELCT full_name, salary
FROM employees
WHERE dept_id = 1
ORDER BY salary DESC;`,
    schemaPreview: `CREATE TABLE employees (
    emp_id     INTEGER PRIMARY KEY,
    username   TEXT NOT NULL,
    full_name  TEXT NOT NULL,
    dept_id    INTEGER,
    salary     REAL,
    hired_on   TEXT,
    manager_id INTEGER,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);`,
  },
  {
    id: "medium_02_missing_group_by",
    difficulty: "medium",
    title: "Customers per country",
    problem:
      "Return the number of customers in each country, sorted alphabetically by country.",
    symptom: "The output has way fewer rows than expected.",
    buggyQuery: `SELECT country, COUNT(*) AS num_customers
FROM customers
ORDER BY country;`,
    schemaPreview: `CREATE TABLE customers (
    customer_id INTEGER PRIMARY KEY,
    name        TEXT NOT NULL,
    country     TEXT NOT NULL,
    signup_date TEXT
);`,
  },
  {
    id: "hard_01_null_equality",
    difficulty: "hard",
    title: "Top-level employees",
    problem:
      "Return the full names of employees who have no manager, ordered by employee id.",
    symptom: "The query returns nothing even though matching rows exist.",
    buggyQuery: `SELECT full_name
FROM employees
WHERE manager_id = NULL
ORDER BY emp_id;`,
    schemaPreview: `CREATE TABLE employees (
    emp_id     INTEGER PRIMARY KEY,
    username   TEXT NOT NULL,
    full_name  TEXT NOT NULL,
    dept_id    INTEGER,
    salary     REAL,
    hired_on   TEXT,
    manager_id INTEGER,
    FOREIGN KEY (dept_id) REFERENCES departments(dept_id)
);`,
  },
];
