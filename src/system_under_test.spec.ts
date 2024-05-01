import {
    multiply_namespace_sum_arrow_function,
    multiply_namespace_sum_arrow_function_async,
    multiply_namespace_sum_class,
    multiply_namespace_sum_class_async,
    multiply_namespace_sum_function,
    multiply_namespace_sum_function_async,
    multiply_sum_arrow_function,
    multiply_sum_arrow_function_async,
    multiply_sum_class,
    multiply_sum_class_async,
    multiply_sum_function,
    multiply_sum_function_async
} from "./system_under_test";
import {
    Sum_ArrowFunction,
    Sum_ArrowFunctionAsync,
    Sum_Class,
    Sum_Function,
    Sum_FunctionAsync,
    Sum_Namespace
} from "./sum-lib";

jest.mock('./sum-lib');

beforeEach(() => {
    jest.resetAllMocks();
})

describe('sum', () => {
    it('multiply_sum_arrow_function uses Sum_ArrowFunction', () => {
        jest.mocked(Sum_ArrowFunction).mockReturnValue(10);

        expect(multiply_sum_arrow_function(5, 5)).toBe(10);
        expect(jest.mocked(Sum_ArrowFunction)).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });

    it('multiply_sum_arrow_function_async uses Sum_ArrowFunctionAsync', async () => {
        jest.mocked(Sum_ArrowFunctionAsync).mockResolvedValue(10);

        await expect(multiply_sum_arrow_function_async(5, 5)).resolves.toBe(10);
        expect(jest.mocked(Sum_ArrowFunctionAsync)).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });

    it('multiply_sum_function uses Sum_Function', () => {
        jest.mocked(Sum_Function).mockReturnValue(10);

        expect(multiply_sum_function(5, 5)).toBe(10);
        expect(jest.mocked(Sum_Function)).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });

    it('multiply_sum_function_async uses Sum_FunctionAsync', async () => {
        jest.mocked(Sum_FunctionAsync).mockResolvedValue(10);

        await expect(multiply_sum_function_async(5, 5)).resolves.toBe(10);
        expect(jest.mocked(Sum_FunctionAsync)).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });

    it('multiply_sum_class uses Sum_Class', () => {
        const mockedSumClass = jest.mocked(Sum_Class);
        let mockedSumFunction = jest.fn().mockReturnValue(9);
        mockedSumClass.mockImplementation((_initialValue: number) => {
            return {
                sum: mockedSumFunction,
                // Could use the following, but then we can't assert on it.
                // sum: (...params: number[]) => { return 9; }
                // Could also use the following, but the intermediate cast
                // to unknown would still be necessary, so we're not gaining
                // much in this case.
                // sum: jest.fn((...params: number[]) => { return 9; })
            } as unknown as Sum_Class;
        });

        expect(multiply_sum_class(5, 5)).toBe(9);
        expect(mockedSumFunction).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });

    it('multiply_sum_class_async uses Sum_Class_SumAsync', async () => {
        const mockedSumClass = jest.mocked(Sum_Class);
        let mockedSumAsyncFunction = jest.fn().mockResolvedValue(9);
        mockedSumClass.mockImplementation((_initialValue: number) => {
            return {
                sumAsync: mockedSumAsyncFunction,
                // Could use the following, but then we can't assert on it.
                // sum: (...params: number[]) => { return 9; }
                // Could also use the following, but the intermediate cast
                // to unknown would still be necessary, so we're not gaining
                // much in this case.
                // sum: jest.fn((...params: number[]) => { return 9; })
            } as unknown as Sum_Class;
        });

        await expect(multiply_sum_class_async(5, 5)).resolves.toBe(9);
        expect(mockedSumAsyncFunction).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });
});
describe('sum "namespace"', () => {
    it('multiply_namespace_sum_arrow_function uses Sum_ArrowFunction', () => {
        jest.mocked(Sum_Namespace.Sum_ArrowFunction).mockReturnValue(10);

        expect(multiply_namespace_sum_arrow_function(5, 5)).toBe(10);
        expect(jest.mocked(Sum_Namespace.Sum_ArrowFunction)).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });

    it('multiply_namespace_sum_arrow_function_async uses Sum_ArrowFunctionAsync', async () => {
        jest.mocked(Sum_Namespace.Sum_ArrowFunctionAsync).mockResolvedValue(10);

        await expect(multiply_namespace_sum_arrow_function_async(5, 5)).resolves.toBe(10);
        expect(jest.mocked(Sum_Namespace.Sum_ArrowFunctionAsync)).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });

    it('multiply_namespace_sum_function uses Sum_Function', () => {
        jest.mocked(Sum_Namespace.Sum_Function).mockReturnValue(10);

        expect(multiply_namespace_sum_function(5, 5)).toBe(10);
        expect(jest.mocked(Sum_Namespace.Sum_Function)).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });

    it('multiply_namespace_sum_function_async uses Sum_FunctionAsync', async () => {
        jest.mocked(Sum_Namespace.Sum_FunctionAsync).mockResolvedValue(10);

        await expect(multiply_namespace_sum_function_async(5, 5)).resolves.toBe(10);
        expect(jest.mocked(Sum_Namespace.Sum_FunctionAsync)).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });

    it('multiply_namespace_sum_class uses Sum_Class', () => {
        const mockedSumClass = jest.mocked(Sum_Namespace.Sum_Class);
        let mockedSumFunction = jest.fn().mockReturnValue(9);
        mockedSumClass.mockImplementation((_initialValue: number) => {
            return {
                sum: mockedSumFunction,
                // Could use the following, but then we can't assert on it.
                // sum: (...params: number[]) => { return 9; }
                // Could also use the following, but the intermediate cast
                // to unknown would still be necessary, so we're not gaining
                // much in this case.
                // sum: jest.fn((...params: number[]) => { return 9; })
            } as unknown as Sum_Class;
        });

        expect(multiply_namespace_sum_class(5, 5)).toBe(9);
        expect(mockedSumFunction).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });

    it('multiply_namespace_sum_class_async uses Sum_Class_SumAsync', async () => {
        const mockedSumClass = jest.mocked(Sum_Namespace.Sum_Class);
        let mockedSumAsyncFunction = jest.fn().mockResolvedValue(9);
        mockedSumClass.mockImplementation((_initialValue: number) => {
            return {
                sumAsync: mockedSumAsyncFunction,
                // Could use the following, but then we can't assert on it.
                // sum: (...params: number[]) => { return 9; }
                // Could also use the following, but the intermediate cast
                // to unknown would still be necessary, so we're not gaining
                // much in this case.
                // sum: jest.fn((...params: number[]) => { return 9; })
            } as unknown as Sum_Class;
        });

        await expect(multiply_namespace_sum_class_async(5, 5)).resolves.toBe(9);
        expect(mockedSumAsyncFunction).toHaveBeenCalledWith(5, 5, 5, 5, 5);
    });
});