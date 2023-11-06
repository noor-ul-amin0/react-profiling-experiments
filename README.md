# React, and Vite To-Do Application

A simple to-do application built using React, and Vite. The primary purpose of this project is to experiment with React's Profiler tool to identify components that cause unnecessary re-renders. This project has two branches: `main` and `feature/memoize-components`. The `main` branch contains the unoptimized code, and the `feature/memoize-components` branch contains a memoized version of the code.

## Table of Contents

- [Project Overview](#project-overview)
- [Branches](#branches)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Understanding Profiling](#understanding-profiling)
- [Memoizing Components](#memoizing-components)

## Project Overview

- **Tech Stack**: This project is built with the following technologies:
  - React: A JavaScript library for building user interfaces.
  - Vite: A fast build tool and development server for React and other JavaScript frameworks.

## Branches

- `main`: This branch contains the unoptimized version of the to-do application. It's used for experimenting with React's Profiler.
- `feature/memoize-components`: This branch contains the memoized version of the to-do application. It's optimized to reduce unnecessary re-renders.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- Basic knowledge of React.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. Clone the repository:

```bash
git clone git@github.com:noor-ul-amin0/react-profiling-experiments.git
```

2. Change your directory to the project's root:

```bash
cd react-profiling
```

3. Install the necessary dependencies:

```bash
npm install
```

## How to Use

To run the project locally, use the following commands:

- Development server:

```bash
npm run dev
```

- Production build:

```bash
npm run build
```

- Preview the production build:

```bash
npm run serve
```

## Understanding Profiling

This project incorporates React's Profiler tool to analyze and understand component re-renders. Profiling helps in identifying components that are re-rendered unnecessarily and consume resources. To get started with profiling:

1. Run the project in development mode:

```bash
npm run dev
```

2. Open the project in your web browser.

3. Open your browser's DevTools (usually by pressing F12).

4. Go to the "Profiler" tab in the React DevTools to start profiling.

5. Interact with the to-do application, and the Profiler will show you information about component rendering performance.

## Memoizing Components

The `feature/memoize-components` branch contains an optimized version of the application. Components that caused unnecessary re-renders have been memoized to reduce the re-rendering. Feel free to compare this branch with the `main` branch to understand how optimization was achieved.
