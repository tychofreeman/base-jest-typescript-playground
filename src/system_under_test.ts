import {
    Sum_ArrowFunction,
    Sum_ArrowFunctionAsync,
    Sum_Class,
    Sum_Function,
    Sum_FunctionAsync,
    Sum_Namespace
} from "./sum-lib";

const copyTimes = (x: any, y: number): number[] => {
    const list = [];
    for (let z = 0; z < y; z++) {
        list.push(x);
    }
    return list;
}

export const multiply_sum_arrow_function = (x: number, y: number) => {
    return Sum_ArrowFunction(...copyTimes(x, y));
};

export const multiply_sum_arrow_function_async = async (x: number, y: number) => {
    return Sum_ArrowFunctionAsync(...copyTimes(x, y));
};

export const multiply_sum_function = (x: number, y: number) => {
    return Sum_Function(...copyTimes(x, y));
};

export const multiply_sum_function_async = (x: number, y: number) => {
    return Sum_FunctionAsync(...copyTimes(x, y));
};

export const multiply_sum_class = (x: number, y: number) => {
    return new Sum_Class(0).sum(...copyTimes(x, y));
};

export const multiply_sum_class_async = async (x: number, y: number) => {
    return new Sum_Class(0).sumAsync(...copyTimes(x, y));
};

export const multiply_namespace_sum_arrow_function = (x: number, y: number) => {
    return Sum_Namespace.Sum_ArrowFunction(...copyTimes(x, y));
};

export const multiply_namespace_sum_arrow_function_async = async (x: number, y: number) => {
    return Sum_Namespace.Sum_ArrowFunctionAsync(...copyTimes(x, y));
};

export const multiply_namespace_sum_function = (x: number, y: number) => {
    return Sum_Namespace.Sum_Function(...copyTimes(x, y));
};

export const multiply_namespace_sum_function_async = (x: number, y: number) => {
    return Sum_Namespace.Sum_FunctionAsync(...copyTimes(x, y));
};

export const multiply_namespace_sum_class = (x: number, y: number) => {
    return new Sum_Namespace.Sum_Class(0).sum(...copyTimes(x, y));
};

export const multiply_namespace_sum_class_async = async (x: number, y: number) => {
    return new Sum_Namespace.Sum_Class(0).sumAsync(...copyTimes(x, y));
};


