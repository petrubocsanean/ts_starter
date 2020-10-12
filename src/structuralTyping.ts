type User = { id: string };
type Product = { id: string };

let user: User = { id: 'user12345' };
let product: Product = { id: 'productid12324' };

/* 
The structure of the User type and Product type is the same
Typescript doesn't care about the names of the types
this means that the User and the Product has the same type compatibility
this means that we can assign a user to a Product and a Product to User because they have the same structure
*/


type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };

let point2D: Point2D = { x: 0, y: 10 };
let point3D: Point3D = { x: 0, y: 0, z: 0 };

/* extra info is ok */
point2D = point3D;

/* We can assign point3D to a point2D because point3D have the members that 
are required by point2D which is x and y
 */
