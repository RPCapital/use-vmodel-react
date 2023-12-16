function useVModel(
	initialValue,
	preProcess = (value, updateState) => updateState(value),
	postProcess = (value) => value,
	displayTransformer = (value) => value
) {
	const [value, setValue] = React.useState(initialValue);

	const handleChange = (newValue) => {
		preProcess(newValue, (processedValue) => {
			setValue(processedValue);
			postProcess(processedValue);
		});
	};

	const displayValue = displayTransformer(value);

	return {
		value,
		displayValue,
		onChange: handleChange,
	};
}

export default useVModel;
