[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/PNypC7cf)
# Challenge 4 - The Interactive To-Do List

# Description

In this challenge, you'll build a command-line To-Do List application using JavaScript. This challenge is designed to reinforce your understanding of core JavaScript concepts including arrays, objects, functions, control flow, and user input handling.

You will be given a basic project structure with function stubs, and your task will be to implement the logic to create a fully functional to-do list manager.

# Folder Structure

You are provided with the following folder structure:
xq

```
root/
├── index.js
├── __test__/
│ └── index.spec.js
├── readme.md
├── package.json
├── package-lock.json
└── .gitignore
```

You will only need to modify the index.js file for this assignment.

# Assignment Objectives

## 1. Core Functionality Implementation

### `generateUniqueId()`

- Implement this function to return a unique string ID
- Combine timestamp and random string for uniqueness

### `addTodo()`

- Prompt user for todo text
- Validate input (non-empty)
- Create todo object with: id, text, isCompleted (false)
- Add to todos array
- Provide success feedback

### `markTodoCompleted()`

- Show current todos with `listTodos()`
- Prompt for todo number to mark complete
- Validate input (number within range)
- Update isCompleted status
- Handle already completed todos
- Provide feedback

### `deleteTodo()`

- Show current todos with `listTodos()`
- Prompt for todo number to delete
- Validate input (number within range)
- Remove todo from array
- Provide feedback

### `listTodos()`

- Display formatted list of all todos
- Show status ([ACTIVE]/[DONE])
- Handle empty list case
- Format output clearly

### `runTodoApp()`

- Main application loop
- Display command menu
- Process user commands
- Handle invalid commands
- Exit mechanism

## 2. Expected Output Examples

### Adding a Todo:

[ACTIVE] | Buy groceries

[ACTIVE] | Do laundry
Enter the NUMBER of the to-do to mark as completed: 1
To-do "Buy groceries" marked as completed.

### Deleting:

[DONE] | Buy groceries

[ACTIVE] | Do laundry
Enter the NUMBER of the to-do to delete: 2
To-do "Do laundry" deleted.

### Listing Todos:

--- YOUR TO-DO LIST ---
[DONE] | Buy groceries
[ACTIVE] | Study JavaScript

## 3. Testing Your Implementation

We've provided unit tests to verify your implementation. To run the tests:

```
npm run test
```

Your implementation is correct when you achieve 100% test coverage:

```
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |   98.38 |    96.96 |     100 |   98.38 |
 index.js |   98.38 |    96.96 |     100 |   98.38 | 116
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
```

the uncovered line should be the line when you call runTodoApp()

### 4. Getting Started

Install dependencies:

```
npm install
```

To run your to-do list application:

```
npm run dev
```

---

### 5. Grading Criteria

1. Requirement fulfillment
2. JavaScript usage
3. problem solving
4. code clarity

# How to Upload your Challenge

Check this module: [click this](https://orchid-clematis-3e4.notion.site/Panduan-Penggunaan-Git-Untuk-Upload-Assignment-e2d80a19b3684f5d8f1a4209dcf85445?pvs=73)

---

🎉 Congratulations on working on this assignment! Utilize the _playground_ feature in Figma to help you understand how the design should look on various devices. Keep experimenting and don't hesitate to look for references if you encounter difficulties. You can definitely produce great work! 🚀 Keep up the spirit, cheers! 🎈
