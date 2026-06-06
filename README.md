#  CID APP

<p align="left">
  <img src="https://skillicons.dev/icons?i=java" height="60" />
  &nbsp;&nbsp;

  <img src="https://skillicons.dev/icons?i=spring" height="60" />
  &nbsp;&nbsp;

  <img src="https://skillicons.dev/icons?i=postgres" height="60" />
  &nbsp;&nbsp;

  <img src="https://skillicons.dev/icons?i=react" height="60" />
  &nbsp;&nbsp;

  <img src="https://skillicons.dev/icons?i=vite" height="60" />
  &nbsp;&nbsp;

  <img src="https://skillicons.dev/icons?i=bootstrap" height="60" />
  &nbsp;&nbsp;

  <img src="https://jwt.io/img/pic_logo.svg" height="45" />
</p>

A full-stack municipal service management platform built with Java, Spring Boot, React, PostgreSQL, and JWT authentication.

The system enables citizens to submit and track public service requests, while public employees and administrators manage workflows, update request statuses, and monitor service performance through dedicated dashboards.

### Features

* User registration and authentication
* JWT token authentication
* Role-based authorization (Citizen, Public Employee, Manager)
* Protected routes with Spring Security
* Public service request management
* Civic issue and complaint reporting
* Protocol-based request tracking
* Request status updates
* Administrative dashboard
* User management
* PostgreSQL database integration
* RESTful API architecture

### Access Control

The application implements a hierarchical permission model to ensure secure access and proper responsibility separation:

#### Manager

* Full system access
* User management
* Request management
* Administrative dashboard
* Protocol tracking

#### Public Employee

* Request management
* Request status updates
* Protocol tracking

#### Citizen

* Submit requests and complaints
* Track requests by protocol
* View request status

### Tech Stack

#### Backend

* Java 21
* Spring Boot
* Spring Security
* JWT Authentication
* Spring Data JPA
* Hibernate
* PostgreSQL
* Lombok

#### Frontend

* React
* Vite
* React Router
* Axios
* Bootstrap

### Architecture

```text
Frontend (React)
        │
        ▼
REST API (Spring Boot)
        │
        ▼
Spring Security + JWT
        │
        ▼
PostgreSQL
```
