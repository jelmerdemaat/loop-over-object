# loopOverObject
Small, safe JavaScript function that correctly loops over an object.

* ES6 ready.
* Promise based, resolves for each item.
* Filters array on `object.hasOwnProperty` to check if the property really exists.

## Usage
```js
import loopOverObject from 'loop-over-object';

const object = {
  name: 'Jelmer',
  color: 'red',
  cape: false
};

loopOverObject(object).then((item, key) => {
  console.log(item, key);
  // 👆 Logs:
  //    name Jelmer
  //    color red
  //    cape false
});
```
