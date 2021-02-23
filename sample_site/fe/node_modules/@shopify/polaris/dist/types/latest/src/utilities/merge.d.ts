export declare function merge<TSource1, TSource2>(source1: TSource1, source2: TSource2): TSource1 & TSource2;
export declare function merge<TSource1, TSource2, TSource3>(source1: TSource1, source2: TSource2, source3: TSource3): TSource1 & TSource2 & TSource3;
export declare function merge<TSource1, TSource2, TSource3, TSource4>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4): TSource1 & TSource2 & TSource3 & TSource4;
export declare function merge<TSource1, TSource2, TSource3, TSource4, TSource5>(source1: TSource1, source2: TSource2, source3: TSource3, source4: TSource4, source5: TSource5): TSource1 & TSource2 & TSource3 & TSource4 & TSource5;
export declare function merge<TResult>(...objs: any[]): TResult;
