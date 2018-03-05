# loopOverObject
[GitHub](https://github.com/jelmerdemaat/loop-over-object) | [NPM](https://www.npmjs.com/package/loop-over-object) | [@jelmerdemaat](https://twitter.com/jelmerdemaat)

Small, safe JavaScript function that correctly loops over an object.

* ES6 ready.
* Promise based, resolves for each item.
* Filters array on `object.hasOwnProperty` to check if the property really exists.

## Usage
Add to your dependencies:

```sh
  npm install --save loop-over-object
  # or shorter:
  npm i -S loop-over-object
```

Use in your JS:

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
