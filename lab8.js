// 1.
String.prototype.filter = function(str) {
    var strs = this.split(" ");
    var arr = [];
    strs.map(val=>{if(val !== str) arr.push(val);});
    return arr.join(" ");
}

console.log("This house is not nice!".filter('not'));

// 2.
Array.prototype.bubbleSort = function() {
    for (let i = 0; i < this.length-1; i++) {
        for (let j = i + 1; j < this.length; j++) {
            if (this[i] > this[j]) {
                var temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}

console.log([6,4,0,3,-2,1].bubbleSort());

// 3.
// function constructor
// const Person = function(name) {
//     this.name = name;
// }

// const Teacher = function(name) {
//     Person.call(this, name);
// }

// Teacher.prototype.teach = function(subject) {
//     console.log(this.name + ' is now teaching ' + subject);
// }

// const tina = new Teacher("Tina");
// tina.teach('WAP');

// factory function
function Teacher(teacherName) {
    var People = {
        name : teacherName,
    };
    People.teach = function(subject) {
        console.log(this.name + ' is now teaching ' + subject);
    }
    return People;
};

const tina = Teacher('Tina');
tina.teach('WAP');

// 4.
const Person = {
    name = 'default',
    age = '18',
    greeting : function() {
        console.log("“Greetings, my name is " + this.name + " and I am " + this.age + " years old.”");
    },
    salute : function() {
        console.log("“Good morning!, and in case I dont see you, good afternoon, good evening and good night!”");
    }
};

const Student = Object.create(Person);
