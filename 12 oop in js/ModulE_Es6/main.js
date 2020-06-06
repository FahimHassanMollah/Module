// var a='fahim';
// var b=' hassan';
// var c=a.concat(b);
// console.log(c);
// var d=c.substring(2);
// console.log(d);
// var f=a.charAt(0);
// console.log(f);
// console.log(a.startsWith('fai'));
// var y='    fahim hassan is a software engineer    ';
// console.log(y.trim());
// console.log(y.split(' '));


// Es6 String
// var name= `fahim hassan`;
// var age=23;
// var str=`i am a gd boy and my name is ${name} and i am ${age} years old .I am ${age>=18?'Adult':'under 18' } result is ${fun()}`;
// console.log(str);
// function fun() {
//         return 10;
// }
//
// console.log(name.padStart(30));
//
// const a=10;


// Arrow  function


// let fun=(a,b)=>{
//         return a+b;
// }
// console.log(fun(1,1));

// let f=(a)=>a+1;
// console.log(f(2));


// Arrow Function this issue

// let myobj={
//     work:function () {
//         setTimeout( ()=> {
//             console.log(this);
//         },3000)
//     }
// }
// myobj.work();
// let myobj2={
//     walk:function () {
//         console.log(this);
//         function test(){
//             console.log(this);
//             let run=()=>{
//                 console.log(this)
//             };
//             run();
//         }
//         test.call(this);
//
//     }
// };
// let abc=()=>{
//     console.log(this);
// }
// abc();


// optional parameter
// let fun=(name='fahim')=>{
//     console.log(name);
//     // console.log(name.length);
// }
// fun();



// Reast and sapeard opreator
// let fun=(a,...rest)=>{
//     return rest.reduce((acc, cur) => {
//         return acc + cur;
//     });
// }
// let res=fun(1,1,2,3,4,5);
// console.log(res);
// let arr=[0,1,2,3,4,5];
//
// console.log(...arr);
// console.log('-------------------');
// let obj1={
//   name:'fahim',
//   age:25
// };
//
// let obj2={
//     ...obj1
// }


//Object in Es6
//for object literal only
// let a=10,b=20;
// let obj={
//     a,
//     b,
//     print() {
//         console.log(this);
//     }
// }
// obj.print();

//Destructing of object an Array


// let object1={
//     name:'fahim',
//     age:23,
//     object2:{
//         city:'dhaka',
//         country:'bangladesh'
//     }
// }
// let {name,age,object2:{city }}=object1
// console.log(name,city);


//Array to object && Object to array

// let array=[
//     ['a',2],['b',4]
// ]
// console.log(array);
// console.log(Object.fromEntries(array));
// let array2=[[1],[2]]
// console.log(Object.fromEntries(array2));
// let obj1={
//     name:'fahim',
//     age:20
// }
// console.log(Object.entries(obj1));



//Closure in javascript

//closure
// function fun(){
//     let name='fahim is a dev';
//     return function(){
//         console.log(name);
//     }
// }
// let store=fun();
// store();


// for (let i = 0; i <5 ; i++) {
//     setTimeout(function () {
//         console.log(i);
//     },1000*i)
// }


//Iterator function making
// let arr=[1,2,3,4,5,6];
// function iterator(iteratable) {
//     let i=0;
//     return {
//         next(){
//             return {
//                 done:i>=iteratable.length,
//                 value:iteratable[i],
//                 plus:++i
//             }
//         }
//     }
// }
// let res=iterator(arr);
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log('=============');
//
// let res2=iterator(arr);
// console.log(res2.next().plus);
// console.log(res2.next().plus);



// console.log(iterator(arr).next());
// console.log(iterator(arr).next());
// console.log(iterator(arr).next());


// Iterate using js itself function

//for array
// let arr=[0,1,2,3,4,5];
// let result=arr[Symbol.iterator]();
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log(result.next());
// console.log('-----------------')
// //for string
// let name='fahim';
// let strRes=name[Symbol.iterator]();
// console.log(strRes.next());
// console.log(strRes.next());
// console.log(strRes.next());
// console.log(strRes.next());
// console.log(strRes.next());
// console.log(strRes.next());
// console.log(strRes.next());





//for of loop
// let arr=[1,2,3,4,5];
// for (let number of arr) {
//     console.log(number);
// }
// for (let number of 'fahim hassan is a dev') {
//     console.log(number);
// }
// let obj1={
//     name:'dev',
//     age:23
// }
// for (let obj1Element of obj1) {
//     console.log(obj1Element);
// }

// let obj2={
//   start:1,
//   end:5,
//   [Symbol.iterator]:function () {
//     let ob=this;
//     let index=this.start;
//       return{
//
//         next(){
//           return {
//             done:index>ob.end,
//             value:index>ob.end?undefined:index++
//           }
//         }
//
//       }
//   }
// };
//
// let res=obj2[Symbol.iterator]();
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
//
// for (let number of obj2) {
//  console.log(number);
// }



//Generator to Create ITERATOR[AlterNative solution]
// let obj={
//   start:1,
//   end:5,
//   [Symbol.iterator]:function* () {
//       let index=this.start;
//       while (index<=this.end)
//       {
//         yield index++;
//       }
//   }
// }
// let res=obj[Symbol.iterator]();
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
//
// for (let number of obj) {
//   console.log(number);
// }


//simple Iterator making using Generator function

// let array=[1,2,3,4,5];
// function* generator(collection) {
//   for (let i = 0; i <collection.length ; i++) {
//     yield collection[i];
//   }
// }
// let res=generator('fahi is a soft dev');
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());
// console.log(res.next());

// let set =new Set();
// let myobj={
//     name:'fahim is a soft dev'
// }
// set.add([1]);
// set.add(myobj);
// set.add(NaN);
// set.add(NaN);
// // set.clear();
// set.delete([1]);
// console.log(set);
// for (let setElement of set) {
//     console.log(setElement);
// }
// let it=set.keys();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log('============================');
// let itrator=set[Symbol.iterator]();
// console.log(itrator.next());
// console.log(itrator.next());
// console.log(itrator.next());
// console.log(itrator.next());
// console.log(itrator.next());
// console.log(itrator.next());
// console.log(itrator.next());
// console.log('================================');
// set.forEach((v)=>{
//     console.log(v);
// })
//
// // Array to set conversation
// let numberArray=[0,1,2,3,4,5];
// let setArray=new Set(numberArray);
// console.log(setArray);


//Maps in javascript

// let map=new Map([
//     ['name','fahim hassan'],['age',23],[{position:'dev'},30]
// ]);
// console.log(map);
// map.set('country','bangladesh');
// console.log(map);
// console.log(map.size);
// let mapIterator=map[Symbol.iterator]();
// console.log(mapIterator.next());
// console.log(mapIterator.next());
// console.log(mapIterator.next());
// console.log(mapIterator.next());
// console.log(mapIterator.next());
// console.log(mapIterator.next());
// let checkIterator=map.keys();
// console.log(checkIterator.next());
// console.log(checkIterator.next());
// console.log(checkIterator.next());
// console.log(checkIterator.next());
// console.log(checkIterator.next());
// console.log(map.entries());
// console.log('=============================');
// map.forEach((v,k)=>{
//     console.log(v+' '+k);
// })
// console.log('=================');
// for (let mapElement of map) {
//     console.log(mapElement);
// }

// let set =new Set();
// let myobj={
//     name:'fahim is a soft dev'
// }
// set.add([1]);
// set.add(myobj);
// set.add(NaN);
// set.add(NaN);
// // set.clear();
// set.delete([1]);
// console.log(set);




// Weak set
// let set=new Set();
// let ar1=[1,23,45];
// set.add(ar1);
// ar1=null;
// let obj1={
//     name:'fahim is a soft dev'
// };
// set.add(obj1)
// obj1=null;
//
// console.log(obj1);
// console.log(set);
// let test=[...set];
// console.log('test');
// console.log(test);
// for (let setElement of set) {
//     console.log(setElement);
// }
// console.log('weak set');
// let obj2={
//     age:23
// }
// let weakSet=new WeakSet([obj2]);
//
//
//
// obj2=null;
// console.log(weakSet);




// weak map
// let map=new WeakMap();
// map.set({name:'fahim'},45);
// let obj2={
//     age:45
// }
// map.set(obj2,'age')
// obj2=null;
//
// console.log(map);

// class in Es6
//  class Person {
//      constructor(name,age) {
//          this.name=name;
//          this.age=age;
//          this.eat=function () {
//              console.log('i can walk');
//          }
//      }
//      country='bangladesh'
//      fun=function(){
//          console.log(this.age+' is  old');
//      }.bind(this)
//
//
//      walk(){
//          console.log(this.name);
//      }
//  }
// let fahim=new Person('fahim',23);
//
// fahim.walk();



//Static method Es6

// class Person {
//     constructor(name,position) {
//         this.name=name;
//         this.position=position;
//     }
//
//     who(){
//         console.log(`my name is ${this.name} and i am a ${this.position}`);
//     }
//     static create(str){
//
//         let person=JSON.parse(str);
//         console.log(person);
//         return new Person(person.name,person.position)
//     }
//     static name(firstName){
//         console.log(firstName+' is my first name');
//     }
// }
//
// let fahim=Person.create('{"name":"fahim","position":"soft dev"}');
// fahim.who();
// Person.name('Fahiiiiii');




//this keyword in Es6
// if this statement use then code will execute in its own area 'use strict'
// function Fun(name,age) {
//     this.name=name;
//     this.age=age;
//     this.details=function(){
//         console.log(this);
//         console.log(this.name + ' and he is ' + this.age + ' years old');
//     }
// }
// let fun=new Fun('fahim hassan',23);
// let detsils=fun.details;
// detsils()


//in class 'use strict' is used by default
// class Person {
//     constructor(name,age) {
//         this.name=name;
//         this.age=age;
//     }
//     details=function () {
//         console.log(this);
//         console.log(this.name);
//         console.log(this.age);
//     }
// }
// let fhaim=new Person('fahim hassan',23);
// let info=fhaim.details;
// info()



//hide object property and method in javascript using symbol
// const _eat=Symbol('name');
// const _ages=Symbol('age');
// class Person {
//     constructor(name,age) {
//         this.name=name;
//         this[_ages]=age;
//     }
//     [_eat]=function () {
//         console.log(this.name + ' is eating');
//     }
// }
// let p=new Person('fahim',23);
// console.log(p.name);
// let res=Object.getOwnPropertySymbols(p);
// console.log(res[1]);
// console.log(p[res[0]]());

//using weak map amke property hidden/private
// const _name=new WeakMap();
// const _age=new WeakMap();
// const _print=new WeakMap();
// class Person {
//     constructor(name,age) {
//         _name.set(this,name);
//         _age.set(this,age);
//         _print.set(this,()=>{
//
//            return 'i am from hidden print funtion';
//         })
//     }
//     show(){
//        let res= _print.get(this);
//         console.log(_name.get(this));
//         console.log(res());
//     }
//
//
// }
// let fahim=new Person('fahim',23)




//getter and setter

// const _name=new WeakMap();
// const _age=new WeakMap();
// const _print=new WeakMap();
// class Person {
//     constructor(name,age) {
//         _name.set(this,name);
//         _age.set(this,age);
//         _print.set(this,()=>{
//
//            return 'i am from hidden print funtion';
//         })
//     }
//     show(){
//        let res= _print.get(this);
//         console.log(_name.get(this));
//         console.log(_age.get(this));
//         console.log(res());
//     }
//     get print(){
//
//         return _print.get(this);
//     }
//     set age(age){
//         _age.set(this,age);
//     }
//
//
//
// }
// let fahim=new Person('fahim',23)


//Inheritance in javaScript
// class Shape {
//     constructor(height,width) {
//         this.height=height;
//         this.width=width;
//     }
//     draw(){
//         console.log('this is draw method and result is '+this.height * this.width);
//     }
// }
// class Rectangle extends Shape{
//
//
// }
// let r1=new Rectangle(2,2);



// class Shape {
//     constructor(height,width) {
//         _info.set(this,()=>{
//             console.log(this.height + ' is the height value and ' + this.width + ' is the width value');
//         });
//         this.height=height;
//         this.width=width;
//     }
//     draw(){
//         _info.get(this)();
//         console.log('this is draw method and result is '+this.height * this.width);
//     }
// }
// class Rectangle extends Shape{
//     constructor(name,height,width) {
//         super(height,width);
//         this.name=name;
//     }
//     draw() {
//         console.log('overridden');
//     }
//
//     getName=function () {
//         console.log(this.name+' ');
//     }
//
// }
import Rectangle from "./Rectangle.js";
const r1 = new Rectangle('fahim hassan is a soft dev', 2, 2);

























































































































































































































































































