module.exports = {
    apps: [
      {
        name: "web-app",
        script: "node_modules/next/dist/bin/next",
        args: "start",
      },
      {
        name: "worker",
        script: "worker.ts",
        interpreter: "node",
        interpreter_args: "-r tsx",
      },
    ],
  };
  