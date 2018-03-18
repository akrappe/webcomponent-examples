(function () {
    'use strict';

    let store = {
        counter: 0
    };

    const reducer = (state, action) => {
        switch (action.type) {
            case 'COUNT_UP':
                return Object.assign({}, state, {
                    counter: state.counter + 1
                });

            default:
                return state;
        }
    };

    const dispatchStateEvent = () => {
        document.dispatchEvent(new CustomEvent('state', { detail: store }));
    };

    document.addEventListener('action', (e) => {
        store = reducer(store, e.detail);
        dispatchStateEvent();
    }, false);

    document.addEventListener('trigger.state', () => {
        dispatchStateEvent();
    }, false);
})();