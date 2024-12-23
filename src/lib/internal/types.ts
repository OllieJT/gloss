// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type UnknownProps = Record<string, any>;

export type Prettify<T> = {
	[K in keyof T]: T[K];
} & {};
