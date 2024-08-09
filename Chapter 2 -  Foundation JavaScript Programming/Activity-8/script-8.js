function printObjectProperties(obj) {
  for (let key in obj) {
      if (obj.hasOwnProperty(key)) { // Check if the property is directly on the object, not inherited
          console.log(key + ": " + obj[key]);
      }
  }
}

// Example usage:
const exampleObject = {
  name: "Alice",
  age: 30,
  city: "Wonderland"
};

printObjectProperties(exampleObject);
