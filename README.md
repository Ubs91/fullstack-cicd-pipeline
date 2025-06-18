# Continuous Integration & Deployment Pipeline

This repository implements an automated build and deployment system using **GitHub Actions** to streamline code validation and production releases. The workflow maintains code integrity while enabling seamless delivery to live environments.

---

## ⚡ Key Capabilities

- **Continuous Integration** validates all pull requests targeting `develop` and `main` branches
- **Automated Production Releases** execute when changes merge to `main`
- **GitHub Actions Integration** orchestrates the entire pipeline
- End-to-end component validation with Cypress
- Multi-directory build processes covering both frontend and backend components

---

## 🔍 Integration Workflow

Code validation occurs automatically whenever pull requests are opened or modified against protected branches.

### 🎯 Activation Triggers:
- Pull requests targeting `develop` branch
- Pull requests targeting `main` branch

### 🔧 Execution Pipeline:
1. Repository code retrieval
2. Node.js environment configuration
3. Package dependency installation
4. Frontend and backend compilation
5. Cypress component test execution

> All validation checks must succeed before pull request approval is possible.

---

## 📦 Production Release Process

Live deployment initiates exclusively when validated code merges into the primary branch, ensuring only vetted changes reach end users.

### 🎯 Activation Triggers:
- Direct commits to `main` branch

### 🔧 Release Pipeline:
1. Source code acquisition
2. Runtime environment preparation
3. Dependency resolution and compilation
4. Production environment deployment (via platforms like Vercel, Netlify, or AWS)

> Specific deployment procedures vary based on chosen hosting infrastructure.

---

## 🏗 Technology Foundation

- React (Frontend Application)
- Node.js (Backend Services)
- Cypress (Quality Assurance)
- GitHub Actions (Pipeline Orchestration)

---

## ⚙️ Pipeline Configuration Reference

```yaml
on:
  pull_request:
    branches:
      - main
      - develop
  push:
    branches:
      - main
```

---

## 🌐 Production Environment

Access the live application deployment:
🔗 Production Instance
[DeploymentChamp](https://cdci-champion.onrender.com)

---

## 🤲 Collaboration Guidelines

Community contributions are encouraged! Please verify all quality checks pass before submitting pull requests.

---

## 📋 Legal Information

This codebase operates under the MIT License framework.

### MIT License

Copyright (c) [2025] [Luis Ubidia]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
