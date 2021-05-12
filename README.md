# ReactToDo

## LAB - Components

To Do List Manager Phase 1: Begin the build of an application designed for creating and organizing a "To Do" list in your browser.

In this initial phase, we're going to build out an initial design using React Bootstrap.

## Phase 1 Requirements

Today, we begin the first of a 4-phase build of the To Do List Manager, a web-based task manager application, written in React. In this first phase, our goal is to build an initial design that we can build upon in later phases, adding databases, logins, and more advanced features.

The following user/developer stories detail the major functionality for this phase of the project.

* As a user, I would like an easy way to add a new to do item using an online interface
* As a user, I would like my to do items to have an assignee, due date, difficulty meter, status and the task itself
* As a user, I would like to delete to do items that are no longer needed
* As a user, I would like to easily mark to do items as completed
* As a user, I would like to edit an existing to do item

## Technical Requirements / Notes

* Use Routing to provide navigation to the following pages:
  * Home (/) shows todo list
  * About (/about) shows information about the project/developer
* Apply styling and layout using React Bootstrap Components
* Use react-bootstrap components and theming
* Match the provided mockup for the design

![MockUp](public/Lab36.todo.png)

## LAB 37 - Events & State

### To Do List Manager Phase 2: Manage local state for the To Do Application

In this phase, we’ll add interactivity, adding/updating/removing items on the page.

### Phase 2 Requirements

* As a user, I would like an easy way to add a new to do item using an online interface
* As a user, I would like my to do items to have an assignee, due date, difficulty meter, status and the task itself
* As a user, I would like to delete to do items that are no longer needed
* As a user, I would like to easily mark to do items as completed. <br>
*Note that the display of each To Do item has changed slightly.*

## Technical Requirements / Notes
Technical requirements for the core application are unchanged from Phase 1, with the following exceptions and notes:

* Manage state using the useState() hook
* Match the provided mockup for the design
* Use react-bootstrap components and theming
* Some interactivity notes:
  * Each item in list should show the text of the item as well as the assignee
  * When clicked, toggle the “complete” status of the item.
  * Items should be styled differently when complete/incomplete making their status visually obvious.