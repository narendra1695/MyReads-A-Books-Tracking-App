# MyReads: A Book Tracking App

## Table of Contents

* [Instructions](#instructions)
* [Introduction](#introduction)
* [Working](#working)

## Instructions

In order to start using this project, one must have to do the following:
1. Clone the project, where you want to locally keep the files.
2. Once cloned, start the project using the following steps:
* Using npm install, install all the dependencies and packages
* Using npm start, start the project
3. Running the project requires internet (to fetch data and various fonts).

## Introduction

This project is demonstration on how powerful React can be. Project has various components which all together contributes to the complete functionality of the project.
We have a BooksAPI.js file which acts as server to fetch the data. The project has various small but useful component files which constitutes the complete functionality of the project as well as the power of React.

## Working

The user initially, is presented with the main page (/) which has three shelves (categories), namely:
* Currently Reading,
* Want to Read,
* Read

Each shelf has book in them. User can move the books around (if they want) by clicking on the bottom right button on each book and selecting book category that they want to move the book into.

User can also add more books in the shelves (categories), by clicking on the extreme bottom right button (+). Clicking on the button will move the user to new URL (/search). Here, user can type to search for the desired book. Then, the book's title matching to the input field value will be show. From here user can directly change the books to the desired shelf (category).

Their is also a Service Worker functionality added in the project. In order to make sure that the project works, even if their is no internet connection, user have to run the project in production mode. To make sure that the applciation runs in the production mode, follow the steps below:
* Using npm run build, which will run the build mode for React,
* Using serve -s build, which will save the project files in caches,
* Using localhost:5000 to visit the application.

Color scheme used in this project is from [Flat UI Colors](https://flatuicolors.com/).