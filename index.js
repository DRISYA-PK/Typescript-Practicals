var myName = "drisya";
var age = 20;
var myArray = [20, 30, 40];
var myObject = { name: 'drisya', age: 10 };
var myDetails = {
    name: "drisya",
    age: 30,
    salary: 3000000
};
//define function with type
function anualSalary(values) {
    return values.salary ? values.salary : 0 * 12;
}
var salary = anualSalary(myDetails);
console.log(salary);
//function with no type
function anualSalary1(_a, _b) {
    var name = _a.name, salary = _a.salary;
    var string = _b.name, number = _b.salary;
    return salary * 12;
}
function getName(value) {
    return value + value;
}
var value = getName("novalue");
var value1 = getName(10);
console.log(value, value1);
//generic
function getValue(value) {
    return value;
}
getValue("hello");
getValue(10);
var admin1 = {
    name: 'dr',
    age: 10,
    roll: 'admin'
};
//key of type of
var status1 = {
    COMPLETED: 0,
    FAIL: 1
};
function getStatus(obj, key) {
    console.log(obj[key]);
}
getStatus(status1, "COMPLETED");
var partialUser = {
    name: 'manu'
};
var nem = {
    age: 10
};
var partialUser1 = {
    name: 'anu'
};
var UserReq1 = {
    age: 10,
    name: 'drisya'
};
//readOnly
var readonly1 = {
    name: "manu"
};
//readonly1.name="anu"//erroe
//--pick
var pick1 = {
    age: 10
};
var nameDisplay = {
    getName: function (name) {
        return name;
    },
    displayName: function (name) {
        console.log(name);
    }
};
var myname = nameDisplay.getName("drisya");
nameDisplay.displayName(myname);
