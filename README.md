# Dev Stack Builder Website

A responsive React website where users can explore modern development technologies and build their own personalized technology stack.

## Technologies Used

- React
- JavaScript
- Tailwind CSS
- React Toastify
- Vite

## Key Features

1. Browse technologies loaded dynamically from JSON data.
2. Add and remove technologies from a personal stack without duplicates.
3. Responsive design for desktop, tablet, and mobile devices.

## React Questions & Answers

### 1. What is JSX, and why is it used?

JSX hoise javascript er ekta syntax extension, jar maddhome JS er vitore html er moto code lekha jai. react e ui sohoje r readable kore bananor jonno jxs use kori.

### 2. What is the difference between props and state?

Props use kori parent component theke child component e data pathanor jonno, ar State use kori component er nijer change gular data save r manage korar jonno.

### 3. What is useState, and where did you use it?

useState hoise React er ekta hook, jeta component er state gula banate r manage korte use kori. ei project e technology list, selected stack, loading r error state korte useState use korsi.

### 4. What is useEffect, and why is it needed for JSON data?

useEffect o react er ekta hook, jeta side effect korar jonno use kore. ei project e website load howar somoi json file theke technology data fetch korar jonno useEffect usek korsi. egula bujhte kothin lagse.

### 5. Why is a unique key required when using map()?

Eta react er sob list item ke alada alada kore identify kore ar kono item change kora lagle oitai update korte pare, ejonno unique key use kora hoi.

### 6. What is conditional rendering?

condition er upor depend kore alada alada ui render kora conditional rendering. ei project e technolody add r remove e use hoise eta

### 7. How does data move from parent to child, and how can a child communicate with the parent?

parent theke child e props use kore dara ba function pathano hoi r child theke parent e jogajog korar jonno parent e deya function ke call kore.

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── StackSidebar.jsx
│   └── TechnologyCard.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx

public/
└── data/
    └── technologies.json
```
