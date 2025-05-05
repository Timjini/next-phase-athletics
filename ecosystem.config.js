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
        script: 'tsx worker.ts',
        watch: false,
      },
    ],
  };
  