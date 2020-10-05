type NewPoint = { x: number, y: number };
const point : NewPoint = { x: 0, y: 0 };

//point = { x: 1, y: 2} Error

/**
 * key difference between const declaration and let declaration in JS 
 * is that you cannot reasign a variable that has been declared with const.
 */

 //ALl other behaviours are the same as `let`
 point.x = 2;
 point.y = 4;
