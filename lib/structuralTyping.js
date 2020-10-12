"use strict";
let user = { id: 'user12345' };
let product = { id: 'productid12324' };
let point2D = { x: 0, y: 10 };
let point3D = { x: 0, y: 0, z: 0 };
/* extra info is ok */
point2D = point3D;
/* We can assign point3D to a point2D because point3D have the members that
are required by point2D which is x and y
 */
