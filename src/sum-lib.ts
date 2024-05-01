const sum = (params: number[]) => {
    return params.reduce((prev: number, curr: number) => curr + prev, 0);
}

export const Sum_ArrowFunction = (...params: number[]) => { return sum(params)};
export const Sum_ArrowFunctionAsync = async (...params: number[]) => { return Promise.resolve(sum(params))};
export function Sum_Function (...params: number[]) { return sum(params)}
export async function Sum_FunctionAsync (...params: number[]) { return Promise.resolve(sum(params))}

export class Sum_Class {
    private readonly _initialValue: number;
    constructor(initialValue: number) {
        this._initialValue = initialValue;
    }

    sum(...params: number[]) {
        return sum([this._initialValue, ...params]);
    }

    sumAsync(...params: number[]) {
        return Promise.resolve(sum([this._initialValue, ...params]));
    }
}

export const Sum_Namespace = {
    Sum_Class,
    Sum_ArrowFunction,
    Sum_ArrowFunctionAsync,
    Sum_Function,
    Sum_FunctionAsync
};