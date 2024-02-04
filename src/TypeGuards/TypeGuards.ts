/**
 Type guards are a way to narrow down the type of a variable within a conditional block. They are typically used with typeof, instanceof, or custom checks to refine the type of a variable based on runtime conditions.

 There are several built-in type guards in TypeScript:

 - typeof: Used to check the type of primitive values like string, number, boolean, etc.

 - instanceof: Used to check if an object is an instance of a particular class.

 - in: Used to check if a property exists in an object.

 - Custom type guards: These are user-defined functions that return a boolean indicating whether the passed-in value satisfies a certain condition.
 */

function isCar(vehicle: any): vehicle is Car {
  return (
    typeof vehicle === 'object' && vehicle !== null && 'brand' in vehicle && 'model' in vehicle && 'year' in vehicle
  );
}

interface Car {
  brand: string;
  model: string;
  year: number;
}

function inspectVehicle(vehicle: any) {
  if (isCar(vehicle)) {
    // Inside this block, TypeScript knows that 'vehicle' is of type 'Car'
    console.log('Brand:', vehicle.brand);
    console.log('Model:', vehicle.model);
    console.log('Year:', vehicle.year);
  } else {
    console.log('Not a valid car object.');
  }
}

export {};
