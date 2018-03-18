import {bind} from 'hyperhtml/esm';

export default (elem) => bind(elem)`

<button onclick=${elem.countUp}>Count Up</button>
<span>${elem.counter}</span>

`;