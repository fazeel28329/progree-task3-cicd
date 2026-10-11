# Progree Task 3 - Automated CI/CD Pipeline

## Project Overview
This project implements an automated Continuous Integration pipeline using GitHub Actions, Node.js, ESLint, unit testing, and Docker.

## Technologies Used
- Git and GitHub
- GitHub Actions
- Node.js 22
- ESLint
- Node.js Built-in Test Runner
- Docker

## CI/CD Pipeline Stages

### 1. Code Checkout
Automatically retrieves source code from GitHub.

### 2. Code Linting
Runs ESLint to detect JavaScript code issues.

### 3. Unit Testing
Executes three automated unit tests.

### 4. Docker Build
Builds a Docker image after successful linting and testing.

### 5. Pipeline Reporting
Displays execution status and logs in GitHub Actions.

## Run Locally

Install dependencies:
npm ci

Run linting:
npm run lint

Run tests:
npm test

Build Docker image:
docker build -t progree-task3-cicd:latest .

Run Docker container:
docker run --rm -p 3000:3000 progree-task3-cicd:latest

Access application:
http://localhost:3000

## Automation Triggers
The pipeline runs automatically on:
- Push to main
- Pull requests targeting main
- Manual workflow dispatch

## Pipeline Results
All three GitHub Actions jobs passed successfully.

## Internship
Organization: Progree
Task: 3 - Multi-Stage Automated CI/CD Deployment Pipeline

## Docker Hub Deployment

Docker Hub Repository:
https://hub.docker.com/r/fazeelmuhammad283/progree-task3-cicd

### Pull Docker Image

docker pull fazeelmuhammad283/progree-task3-cicd:latest

### Run Application

docker run -d --name progree-task3-app -p 3000:3000 --restart unless-stopped fazeelmuhammad283/progree-task3-cicd:latest

### Verify Deployment

docker ps
curl http://localhost:3000

Expected Response:
Progree Task 3 - CI/CD Pipeline Running!

## CI/CD Pipeline Results

1. Code Linting - Passed
2. Unit Testing - Passed
3. Docker Build - Passed
4. Docker Hub Publishing - Passed

## Deployment Architecture

GitHub Push -> GitHub Actions -> ESLint -> Unit Tests -> Docker Build -> Docker Hub -> Local Docker Deployment

## Deployment Notes

GitHub Actions automatically builds and publishes Docker images to Docker Hub.

The application runs locally using Docker Desktop.
New versions require pulling the updated image and recreating the container.
