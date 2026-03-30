GoIT Advanced JS - Homework 01
This repository contains the completion of the first homework assignment for the Advanced JavaScript course. The project focuses on code modularity, using npm packages, and working with local storage.

Project Structure
1-gallery.html / 1-gallery.js: A dynamic image gallery powered by the SimpleLightbox library.

2-form.html / 2-form.js: A feedback form that persists user input in local storage to prevent data loss on page refresh.

Installation & Setup
Clone the repository.

Install dependencies:

Bash
npm install
Start the development server:

Bash
npm run dev
Tasks Overview
Task 1: Image Gallery
A responsive image gallery generated dynamically from a data array.

Library: simplelightbox

Features:

Automatic modal window handling.

Keyboard navigation (left/right arrows, escape).

Image captions derived from the alt attribute, appearing after a 250ms delay.

CSS styles imported directly into the JavaScript module.

Task 2: Feedback Form
A form that tracks user input and saves it to the browser's local storage.

Key: feedback-form-state

Features:

Persistence: If the user refreshes the page, the form fields are automatically repopulated with the saved data.

Validation: Prevents submission if any field is empty (checked via .trim()).

Cleanup: Upon successful submission, the local storage is cleared, the state object is reset, and the form fields are emptied.
