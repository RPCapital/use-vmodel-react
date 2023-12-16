"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
function useVModel(initialValue, { preProcess = (value, updateState) => updateState(value), postProcess = (value) => value, displayTransformer = (value) => value, } = {}) {
    const [value, setValue] = react_1.default.useState(initialValue);
    const handleChange = (e) => {
        const newValue = e.target.value;
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
exports.default = useVModel;
