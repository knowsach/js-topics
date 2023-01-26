
// call**************************************

let name = {
    first: 'sachin',
    second: 'singh',
}

function printFullName(homeTown) {
    console.log(`${this.first} ${this.second} from ${homeTown}}`)
}

let name2 = {
    first: 'first',
    second: 'second'
}


printFullName.call(name, 'howrah');   //call method accepts object reference, which will be used in the function printFullName here.
printFullName.call(name2, 'mumbai');    //here we are using the same function for different objects for similiear purpose i.e priting full name.



// apply ***************************************

let name3 = {
    first: 'rahul',
    second: 'roy'
}

printFullName.apply(name3, ['banglore'])  // in apply method parameters are passed in form of array except first one that is the object reference.


// bind*****************************************

let bindCall = printFullName.bind(name, 'hyderabad');    //bind returns an function instance that can be stored and called later , bind invocation is simmilar to call invocation.
bindCall();  //bind instance invoked.




// polyfill for bind (creating a flalback for bind method)
function myBind(...args) {
    let params = args.slice(1);
    let callFunction = this;
return function(...args2){ 
    callFunction.apply(args[0],  [...params, ...args2]);
}
}

Function.prototype.myBind = myBind;

var myBind = printFullName.myBind(name, 'howrah');
myBind();