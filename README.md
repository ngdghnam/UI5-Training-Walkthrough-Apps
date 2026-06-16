# SAP UI5 Training Walkthrough

Welcome to the SAP UI5 training walkthrough project. This repository contains step-by-step practice source code to build a complete SAP UI5 application from scratch, connecting to the **Northwind OData Service**.

## Overview

The goal of this project is to provide a sample application to help beginners get familiar with the core concepts of SAP UI5, including:
- Standard UI5 application folder structure (Component, Manifest).
- Routing and Navigation mechanisms.
- Working with XML Views and Controllers.
- Data Binding concepts (One-way, Two-way, Expression Binding).
- Integrating and fetching data from a Backend via **OData Model** (using the public Northwind service).
- Using standard controls from the SAP Fiori library.
- Data Formatting, Filtering, and Sorting.

## Repository Structure

This repository includes different versions of the walkthrough, allowing you to choose the programming language that best fits your needs:

- `training-js-ui5-project/`: UI5 application source code using traditional **JavaScript**.
- `training-ts-ui5-project/`: UI5 application source code using **TypeScript** (suitable for modern projects requiring strict typing and better IDE support).

## Backend Data (Northwind OData Service)

This sample application uses the [Northwind OData Service](https://services.odata.org/V2/Northwind/Northwind.svc/) as a backend to provide realistic mock data (such as Products, Employees, Invoices, etc.).

By connecting to Northwind, you will learn how to:
- Configure data sources and OData Models inside the `manifest.json` file.
- Bind lists of data from the backend to UI components (e.g., `sap.m.List` or `sap.m.Table`).

## Installation and Setup

To run the project locally on your machine, make sure you have [Node.js](https://nodejs.org/) installed.

1. **Clone the repository:**
   ```bash
   git clone <YOUR_REPO_URL>
   cd training-ui5
   ```

2. **Navigate to the project directory you want to run (JS or TS):**
   ```bash
   cd training-js-ui5-project
   # or
   cd training-ts-ui5-project
   ```

3. **Install the dependencies:**
   ```bash
   npm install
   ```

4. **Start the application:**
   ```bash
   npm start
   ```

After running the start command, your browser will automatically open the application (usually at `http://localhost:8080/index.html`).

## Useful References

- [Official SAPUI5 Walkthrough Tutorial](https://sapui5.hana.ondemand.com/#/topic/3da5f4be63264db99f2e5b04c5e853db)
- [UI5 Tooling Documentation](https://sap.github.io/ui5-tooling/)
- [OData Northwind Service Reference](https://services.odata.org/)
