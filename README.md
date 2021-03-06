# Ask I.T.
Mock application of an internal-ticketing-system built to support a community of company employees and the IT personnel that can resolve their issues. Composed of posts and comments, this website allows employees to create inquiries in the form of a ticket that can be resolved by any of the aforementioned personnel

**Subject:**
- login, registration
- client data storage
- Peer-to-peer interaction
- Agile scrum practices

**Live Demo:** http://s3-internal-ticketing-system.s3.us-west-1.amazonaws.com/index.html

**Project Preview:**
[![Demo](https://github.com/chriscastaneda/rev-p2-internal-ticketing-system/blob/master/assests/img/demo_snip.PNG)](https://drive.google.com/file/d/10OXxnCC41nw44Z3nhHYRkfyc8cxjXH23/view)

## Features
- Documentation (all methods have basic documentation)
- Server Unit testing (> 80% coverage)
- Client Unit testing (> 30% coverage)
- SQL Data Persistance (3 tables; all 3NF)
- Filter by ticket category
- Admin/Employee dashboard (ID'd on login)

### Tech Stack:
- [x] PostgreSQL
- [x] Node-Postgre (AWS-RDS)
- [x] AWS-EC2
- [x] Java: Spring Boot
- [x] Spring Data
- [x] Spring Security + JWT
- [x] Hibernate
- [x] Bcrypt
- [x] JUnit
- [x] TypeScript
- [x] CSS Bootstrap
- [x] React
- [x] Jest/Enzyme
- [x] Git SCM (on GitHub)

## Login Instructions
1. Refer to video above for website features. 
2. Enter any default account options below to sign-in to live demo.

<div id="anchor">

####  Default accounts:

</div> 

```diff
- Employee:
    username: EmployeeUser
    password: 1234

-Administrator: 
    username: AdminUser
    password: 5678
```

## Init Instructions

### Server - SpringBoot
- Update Maven Project
- Run as springboot app: _Application.java_

### Client - React JS
- install node 6.14.4 or higher
- _cd client/_ npm install
- npm start
