# Team Project

Welcome to our Team Project! This guide is designed to help you get started with setting up the project on your local machine. If you encounter any issues along the way, remember that it's all part of the learning process. Let's get started.

## ✅ Prerequisites

Before you begin, make sure you have the following installed on your system:

- [NodeJS](https://nodejs.org/en)

## 🛠️ Installation

Our project consists of two (2) main parts: the **frontend** and the **backend**. You'll need to set up both parts to run the application successfully. Follow these steps to install the necessary dependencies for both parts.

1. Install the dependencies of the project by running:

```sh
npm install
```

2. Install dependencies for all projects by running:

```sh
npm run install:all
```

## ⚙️ Setting up the Environment

To run properly, our application might need certain environment variables. These can include database URLs, API keys, or other sensitive information that shouldn't be hard-coded into your project's files.

```sh
npm run env
```

## 🐾 Husky Setup

Husky is used to manage Git hooks and enforce code consistency automatically.

```sh
npm run prepare
```

2. Husky will automatically set up the Git hooks for you. The hooks will run linting and formatting checks before commits and pushes.

## 🏃‍♂️ Run the App

With the dependencies installed for both frontend and backend, you're now ready to run the application.

```sh
npm run dev
```

> 💡 This will run the frontend and backend simultaneously. Thanks to [concurrently](https://www.npmjs.com/package/concurrently)

## 🎯 Branching Strategy

Our project uses a specific branching strategy to streamline development and ensure that our main codebase remains stable. Understanding and following this strategy is crucial for all contributors to facilitate smooth collaboration and integration processes.

### Main Branches

- **main** - This is the primary branch of the repository representing the source of truth for production-ready code. All development code is eventually merged into this branch after thorough testing and review.

- **develop** - This branch serves as an integration branch for features, bug fixes, and other development efforts. It's a staging area before changes are merged into **main** branch.

### Supporting Branches

To support our development workflow, we use the following types of branches:

- **Feature Branches (`feature/*`)** - Branch off from `develop` and merge back into `develop`. Each feature branch is dedicated to the development of a specific feature or enhancement. Name these branches in a way that reflects the feature being developed (e.g., `feature/add-login`).
- **Bugfix Branches (`bugfix/*`)** - Branch off from `develop` and merge back into `develop`. Use these branches for fixing bugs in the development version of the project. Prefix branch names with `bugfix/` followed by a brief description of the fix (e.g., `bugfix/login-error`).

### How to Do It

1. When you're ready to start, you'll make a new branch from `develop` if you're adding a feature or fixing something that's not urgent. If something big is broken in the `main` branch, you might need to make a hotfix branch directly from `main`
2. As you write your code, you keep it on your branch. You can make changes and try things out without affecting anyone else.
3. When you're done, you'll ask the team to look at your code with something called a "Pull Request". The team will look at your code, maybe suggest some changes, and then your code gets added to the project once everything looks good.

### Tips for Success

- **Keep it short** - Don't keep your branch going for too long. It's easier to work with smaller changes that big ones all at once.
- **Stay up to date** - Sometimes, other people's code will get added to `develop` while you're working. Make sure to update your branch with these changes so your code fits in smoothly.
- **Name clearly** - Use names for your branches that makes it easy for everyone to know what you're working on.

## Code Consistency

To ensure our code is consitent and well-formatted.

### Linting

Linting helps identify and fix errors or warnings in the code. To run the linting process and automatically apply fixes.

```bash
npm run lint
```

### Code Formatting

Prettier is used to automatically format the code. To format your code, run:

```bash
npm run prettier
```

> 💡 Note that these steps will automatically run when you commit code, thanks to [Husky](#-husky-setup)

## 🚀 Congrats

You've set up the project on your local machine. You're now ready to start exploring and contributing to the project. If you have any questions or run into issues, do not hesitate to ask for help from your team or search online for solutions. Happy coding!
