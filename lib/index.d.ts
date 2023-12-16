import { ChangeEvent } from "react";
type PreProcessFunction<T> = (value: T, updateState: (value: T) => void) => void;
type PostProcessFunction<T> = (value: T) => void;
type DisplayTransformerFunction<T> = (value: T) => any;
interface UseVModelOptions<T> {
    preProcess?: PreProcessFunction<T>;
    postProcess?: PostProcessFunction<T>;
    displayTransformer?: DisplayTransformerFunction<T>;
}
interface UseVModelResult<T> {
    value: T;
    displayValue: any;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
declare function useVModel<T>(initialValue: T, { preProcess, postProcess, displayTransformer, }?: UseVModelOptions<T>): UseVModelResult<T>;
export default useVModel;
