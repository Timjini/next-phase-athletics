import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'qnmyfu',
  e2e: {
    baseUrl: 'http://localhost:1234',
  },
})
