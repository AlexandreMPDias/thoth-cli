export type Foo = (...args: any[]) => any;

export type Callback<Args extends any[], Ret = void> = (...args: Args) => Ret;

export type PipeFn<Args extends any> = (arg: Args) => Args;

/**
 * Declaration of a Select function
 * (Exact same behaviour as react-native.Platform.select)
 */
export interface Select<K extends keyof any> {
	/**
	 * All properties are set.
	 * Return may not be undefined (assuming T may not be undefined as well)
	 */
	<T>(select: Record<K, T>): T;

	/**
	 * Some properties are set, and default is not set
	 * Return may be undefined
	 */
	<T>(select: Partial<Record<K, T>>): T | undefined;

	/**
	 * Some properties are set, but default value is set
	 * Return may not be undefined (assuming T may not be undefined as well)
	 */
	<T>(select: Partial<Record<K, T>> & { default: T }): T;
}
