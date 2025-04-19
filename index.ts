let myName:string="drisya";
let age:Number=20;
let myArray:number[]=[20,30,40];
let myObject:{name:string;age:number}={name:'drisya',age:10};
type Details={
    name:string;
    age:number;
    salary?:number|string;
}
const myDetails:Details={
    name:"drisya",
    age:30,
    salary:3000000

}
//define function with type
function anualSalary(values:Details):number|String{
   return values.salary?values.salary:0*12;
}

const salary=anualSalary(myDetails)
console.log(salary);

//function with no type

function anualSalary1({name,salary},{name:string,salary:number}):number
{
    return salary*12;
}

//function overloading
function getName(value:number):number;
function getName(value:string):string;
function getName(value){
    return  value+value;
}

const value=getName("novalue");
const value1=getName(10)
console.log(value,value1)

//generic
function getValue<T>(value:T):T{
    return value;
}
getValue<string>("hello");
getValue<number>(10);

//extends in type

type userDetails={
    name:string;
    age:number;
}

type AdminDetails=userDetails &{
    roll:string
}

const admin1:AdminDetails={
name:'dr',
age:10,
roll:'admin'


}


//key of type of

const status1={
    COMPLETED:0,
    FAIL:1
}as const;

type StatusType=keyof typeof status1;

function getStatus(obj:typeof status1,key: StatusType)
{
    console.log(obj[key]);
}
getStatus(status1,"COMPLETED")

//--------------------utility types

type User={
    name:string;
    age:number;
}
const partialUser:Partial<User>={
    name:'manu'
}

type usertype=Partial<User>;

const nem:usertype={
age:10
}
//using interface utility types

interface User1{
    name:string,
    age:number
}

const partialUser1:Partial<User1>={
    name:'anu'
}

//---------require

type UserReq={
 name?:string;
 age?:number
}

const UserReq1:Required<UserReq>={
age:10,
 name:'drisya'
}
 
//readOnly
const readonly1:Readonly<UserReq>={
name:"manu"
}

//readonly1.name="anu"//erroe
//--pick

const pick1:Pick<UserReq,'age'>={
age:10
}

//function type;

type MyFunction={
    getName: (name:string)=> string;
    displayName(name:string):void;
}

const nameDisplay:MyFunction={
    getName:(name)=>{
        return name;
    },
    displayName(name)
    {
        console.log(name);
    }
}

const myname:string=nameDisplay.getName("drisya");
nameDisplay.displayName(myname);


