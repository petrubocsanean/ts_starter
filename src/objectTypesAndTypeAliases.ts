type Point = {x: number, y: number };

let center: Point = {
    x: 0,
    y: 1,
};

let unit: Point = {
    x: 1,
    y: 2,
};

/**
 * Point is a type alias.
 * A type alias has 2 advantages:
 * 1 - It allows us to name our intent, our intent in this case is to represent a point in space.
 * 2 - It allows us to remove code duplication resulted in great code maintability in the long run. 
 */