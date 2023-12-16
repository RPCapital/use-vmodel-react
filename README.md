# useVModel React Hook

`useVModel` is a React hook that provides a simple way to implement two-way binding in your React components. It allows you to easily manage the state of an input field or any other value with customizable pre and post-processing.

## Installation

```bash
npm install use-vmodel-react
```

## Usage

```jsx
import React from "react";
import useVModel from "use-vmodel-react";

function MyComponent() {
	const email = useVModel("default@email.com");

	return (
		<div>
			<label>Email:</label>
			<input type="text" {...email.model} />
			<p>Displayed Value: {email.displayValue}</p>
		</div>
	);
}

export default MyComponent;
```

# API

## `useVModel(initialValue, {preProcess, postProcess, displayTransformer})`

-   **initialValue:** The initial value for the state.
-   **preProcess:** A function to run before updating the state. Receives the current value and an `updateState` callback. ex. (value, update) => update(value.toUppercase())
-   **postProcess:** A function to run after updating the state.
-   **displayTransformer:** A function to transform the displayed value.

# Example

```js
const email = useVModel("default@email.com", {
	preProcess: (val, callback) => {
		console.log("preProcess", val);
		if (val.includes("$")) {
			return;
		}
		callback(val.toLowerCase());
	},
	postProcess: (val) => {
		if (val.includes("!")) {
			console.error("Invalid email");
		}
	},
	displayTransformer: (val) => {
		return val.toUpperCase() + "!";
	},
});
```

## Returns

An object with the following properties:

-   **model:** An Object {value, onChange}
-   **value:** The current state value.
