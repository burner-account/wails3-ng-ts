# Wails3 angular zoneless template

This is a template for a wails3 app utilizing angular 20+ zoneless.

## Getting Started
1. [Have go, node/npm and wails3 installed.](https://wails.io/docs/next/gettingstarted/installation)
https://wails.io/docs/next/gettingstarted/installation

2. Navigate to the folder which shall contain your project directory in the terminal.

3. To create a new wails3 app from this template, run the command:

   ```
   wails3 init -n YOUR_PROJECT_NAME -t https://github.com/burner-account/wails3-ng-ts
   ```

## Develop your app

Change into the YOUR_PROJECT_NAME directory.

1. To run your application in development mode, use the following command:

   ```
   wails3 dev
   ```

   This will start your application and enable hot-reloading for both frontend and backend changes.

2. To build your application for production, use:

   ```
   wails3 build
   ```

   This will create a production-ready executable in the `bin` directory.

## Bad template design choice

To get the ng-cli part to work with the wails3 tasks, the frontend/package.json scripts currently contains something fishy: A call to node in order to read the WAILS_VITE_PORT variable. This will be gone as soon as a way presents itself to properly configure FRONTEND_DEVSERVER_URL without pitfalls.


## Exploring Wails3 Features

Now that you have your project set up, it's time to explore the features that Wails3 offers:

1. **Check out the examples**: The best way to learn is by example. Visit the `examples` directory in the `v3/examples` directory to see various sample applications.

2. **Run an example**: To run any of the examples, navigate to the example's directory and use:

   ```
   go run .
   ```

   Note: Some examples may be under development during the alpha phase.

3. **Explore the documentation**: Visit the [Wails3 documentation](https://v3.wails.io/) for in-depth guides and API references.

4. **Join the community**: Have questions or want to share your progress? Join the [Wails Discord](https://discord.gg/JDdSxwjhGf) or visit the [Wails discussions on GitHub](https://github.com/wailsapp/wails/discussions).

## Project Structure

Take a moment to familiarize yourself with your project structure:

- `frontend/`: Contains your frontend code (HTML, CSS, JavaScript/TypeScript)
- `main.go`: The entry point of your Go backend

## Next Steps

1. Modify the frontend in the `frontend/` directory to create your desired UI.
2. Add backend functionality in `main.go`.
3. Use `wails3 dev` to see your changes in real-time.
4. When ready, build your application with `wails3 build`.

Happy coding with Wails3! If you encounter any issues or have questions, don't hesitate to consult the documentation or reach out to the Wails community.
