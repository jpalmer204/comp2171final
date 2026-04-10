/**
 * main.js
 * Application entry point - initializes the DashcamApp
 */

// Wait for DOM to be fully loaded before initializing
document.addEventListener('DOMContentLoaded', () => {
    const app = new DashcamApp();
    app.init();
});