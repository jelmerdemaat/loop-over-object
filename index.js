const loopOverObject = (object) => {
  if (!object || typeof object !== 'object') {
      throw Error('loopOverObject expects an object as a first parameter');
  }

  return new Promise((resolve, reject) => {
      Object.keys(object)
          .filter(item => object.hasOwnProperty(item))
          .forEach((item, key) => {
              resolve(item, key);
          });
  });
};

export default loopOverObject;
