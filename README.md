# DeploymentChamp

This project uses a CI/CD pipeline powered by **GitHub Actions** to automate testing and deployment workflows. The pipeline ensures code quality and safe deployment to production environments.

---

## 🚀 Features

- **Automated Testing** for every pull request to `develop` and `main`
- **Production Deployment** on merges to `main`
- **CI/CD with GitHub Actions**
- Cypress component testing
- Build steps for both `client` and `server` directories

---

## 🧪 Testing Workflow

Tests are automatically run when a pull request is created or updated, targeting the `develop` or `main` branches.

### ✅ Triggered on:
- `pull_request` to `develop`
- `pull_request` to `main`

### 📋 Steps:
1. Checkout the repository
2. Set up Node.js
3. Install dependencies
4. Build client and server
5. Run Cypress component tests

> Pull requests must pass all tests before they can be merged.

---

## 🚢 Deployment Workflow

Deployment is triggered **only** when code is merged into the `main` branch. This ensures that only reviewed and tested code reaches production.

### ✅ Triggered on:
- `push` to `main`

### 📋 Steps:
1. Checkout the code
2. Set up environment
3. Install and build dependencies
4. Deploy to the hosting provider (e.g., Vercel, Netlify, AWS)

> Deployment specifics depend on the platform used.

---

## 🛠 Tech Stack

- React (Client)
- Node.js (Server)
- Cypress (Testing)
- GitHub Actions (CI/CD)

---

## 📄 Example Workflow Trigger Configuration

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

## 🌍 Live Application

You can view the deployed application here:

🔗 Live App
[DeploymentChamp](https://cdci-champion.onrender.com)
 
---

## 🤝 Contributing

Contributions are welcome! Please ensure your code passes all tests before submitting a pull request.

⸻

## 📜 License

This project is licensed under the MIT License.

### MIT License

Copyright (c) [2025] [Sergio Aguilar]

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
