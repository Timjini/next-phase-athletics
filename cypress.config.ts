import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'qnmyfu',
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'cypress/support/e2e.ts',
    specPattern: 'cypress/e2e/*.cy.ts',
  },
})
