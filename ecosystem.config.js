module.exports = {
    apps: [
      {
        name: 'next-phase',
        script: 'npm',
        args: 'start',
        env: {
          PORT: 3000,
        },
      },
      {
        name: 'worker',
        script: 'worker.ts',
        interpreter: 'tsx',
        watch: false, // Optional: disable file watch in prod
      },
    ],
  };
  