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
			<input type="text" {...email} />
			<p>Displayed Value: {email.displayValue}</p>
		</div>
	);
}

export default MyComponent;
```

# API

## `useVModel(initialValue, preProcess, postProcess, displayTransformer)`

-   **initialValue:** The initial value for the state.
-   **preProcess:** A function to run before updating the state. Receives the current value and an `updateState` callback.
-   **postProcess:** A function to run after updating the state.
-   **displayTransformer:** A function to transform the displayed value.

## Returns

An object with the following properties:

-   **value:** The current state value.
-   **displayValue:** The transformed value for display.
-   **onChange:** The function to handle the change event.
