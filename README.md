# WorkAroundExplorer

WorkAroundExplorer is a web project designed to demonstrate the use of JavaScript modules, dynamic rendering of containers, and data manipulation from an external JavaScript object.

## Features

- **Modular JavaScript**: The project is structured using ES6 modules to promote code reusability and maintainability.
- **Dynamic Rendering**: Containers and elements are dynamically rendered using JavaScript to create an interactive user experience.
- **Data Handling**: Utilizes data from the `salaryData.js` object to display relevant information.

## Project Structure

```
/e:/Web Projects/WorkAroundExplorer/
│
├── index.html
├── README.md
├── scripts/
│   ├── main.js
│   ├── render.js
│   └── salaryData.js
└── styles/
    └── styles.css
```

## Usage

1. **Modules**: The project uses ES6 modules to separate concerns. For example, `render.js` handles all DOM manipulations, while `salaryData.js` contains the data.
2. **Rendered Container**: The `render.js` module dynamically creates and appends HTML elements to the DOM based on the data provided.
3. **Data Source**: The `salaryData.js` object contains salary data that is used to populate the rendered containers.

## Example

```javascript
// salaryData.js
export const salaryData = [
  { role: 'Software Engineer', salary: 120000 },
  { role: 'Project Manager', salary: 90000 },
  // more data...
];

// render.js
import { salaryData } from './salaryData.js';

export function renderSalaries() {
  const container = document.getElementById('salary-container');
  salaryData.forEach(data => {
    const div = document.createElement('div');
    div.textContent = `${data.role}: $${data.salary}`;
    container.appendChild(div);
  });
}

// main.js
import { renderSalaries } from './render.js';

document.addEventListener('DOMContentLoaded', () => {
  renderSalaries();
});
```

## Conclusion

WorkAroundExplorer is a simple yet effective project to understand the basics of JavaScript modules, dynamic rendering, and data manipulation. Feel free to explore and modify the code to suit your learning needs.
