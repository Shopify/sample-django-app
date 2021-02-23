import Observable from 'zen-observable';
import 'symbol-observable';
export declare type ObservableSubscription = ZenObservable.Subscription;
export declare type Observer<T> = ZenObservable.Observer<T>;
export declare type Subscriber<T> = ZenObservable.Subscriber<T>;
declare global {
    interface Observable<T> {
        ['@@observable'](): Observable<T>;
    }
}
export { Observable };
//# sourceMappingURL=Observable.d.ts.map