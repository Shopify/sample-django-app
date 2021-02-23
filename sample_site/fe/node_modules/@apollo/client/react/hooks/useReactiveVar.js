import { useState, useEffect } from 'react';
export function useReactiveVar(rv) {
    var value = rv();
    var _a = useState(value), setValue = _a[1];
    useEffect(function () { return rv.onNextChange(setValue); }, [value]);
    useEffect(function () {
        setValue(rv());
    }, []);
    return value;
}
//# sourceMappingURL=useReactiveVar.js.map