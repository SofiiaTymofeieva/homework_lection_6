let rectangle = {
    height:20,
    width:50,
    getArea: function() {return this.height * this.width},
    getPerimeter: function() {return this.height * 2 + this.width * 2},
}
console.log(`Area -`, rectangle.getArea())
console.log(`Perimeter -`, rectangle.getPerimeter())
