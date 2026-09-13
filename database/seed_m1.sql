

-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS pgcrypto;


INSERT INTO employee
(employee_id, first_name, last_name, department, email, designation, role)
VALUES
    (
        gen_random_uuid(),
        'John',
        'Smith',
        'Engineering',
        'john.smith@skillsphere.com',
        'Software Developer',
        'DEVELOPER'
    ),
    (
        gen_random_uuid(),
        'Sarah',
        'Johnson',
        'Engineering',
        'sarah.johnson@skillsphere.com',
        'Tech Lead',
        'TECH_LEAD'
    ),
    (
        gen_random_uuid(),
        'Michael',
        'Brown',
        'Human Resources',
        'michael.brown@skillsphere.com',
        'HR Manager',
        'HR'
    ),
    (
        gen_random_uuid(),
        'David',
        'Wilson',
        'Engineering',
        'david.wilson@skillsphere.com',
        'Software Developer',
        'DEVELOPER'
    );


-- ============================================
-- SKILLS
-- ============================================

INSERT INTO skills
(skill_name, level, description)
VALUES
    (
        'Java',
        'ADVANCED',
        'Java programming and object-oriented development'
    ),
    (
        'Spring Boot',
        'ADVANCED',
        'Building REST APIs and backend applications using Spring Boot'
    ),
    (
        'Angular',
        'INTERMEDIATE',
        'Frontend application development using Angular'
    ),
    (
        'SQL',
        'INTERMEDIATE',
        'Relational database and SQL query development'
    ),
    (
        'PostgreSQL',
        'INTERMEDIATE',
        'PostgreSQL database development and management'
    ),
    (
        'Docker',
        'BEGINNER',
        'Containerization and Docker Compose'
    );




SELECT * FROM employee;

SELECT * FROM skills;