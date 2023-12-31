import React, { ChangeEvent } from "react";

type PreProcessFunction<T> = (
	value: T,
	updateState: (value: T) => void
) => void;
type PostProcessFunction<T> = (value: T) => void;
type DisplayTransformerFunction<T> = (value: T) => any;

interface UseVModelOptions<T> {
	preProcess?: PreProcessFunction<T>;
	postProcess?: PostProcessFunction<T>;
	displayTransformer?: DisplayTransformerFunction<T>;
}

interface UseVModelResult<T> {
	model: {
		value: T;
		onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	};
	displayValue: any;
}

function useVModel<T>(
	initialValue: T,
	{
		preProcess = (value, updateState) => updateState(value),
		postProcess = (value) => value,
		displayTransformer = (value) => value,
	}: UseVModelOptions<T> = {}
): UseVModelResult<T> {
	const [value, setValue] = React.useState<T>(initialValue);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value as T;
		preProcess(newValue, (processedValue) => {
			setValue(processedValue);
			postProcess(processedValue);
		});
	};

	const displayValue = displayTransformer(value);

	return {
		model: {
			onChange: handleChange,
			value,
		},
		displayValue,
	};
}

export default useVModel;
