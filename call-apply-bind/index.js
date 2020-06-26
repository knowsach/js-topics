
// call**************************************

let name = {
    first: 'sachin',
    second: 'singh',
}

function printFUllName(homeTown) {
    console.log(`${this.first} ${this.second} from ${homeTown}`)
}

let name2 = {
    first: 'first',
    second: 'second'
}

printFUllName.call(name, 'howrah');   //call method accepts object reference, which will be used in the function printFUllName here.

printFUllName.call(name2, 'mumbai');    //here we are using the same function for different objects for similiear purpose i.e priting full name.



// apply ***************************************

let name3 = {
    first: 'rahul',
    second: 'roy'
}

printFUllName.apply(name3, ['banglore'])  //in bind method parameters are passed in form of array except first one that is the object reference.


// bind*****************************************

let bindCall = printFUllName.bind(name, 'hyderabad');    //bind returns an function instance that can be stored and called later , bind invocation is simmilar to call invocation.
bindCall();  //bind instance invoked.
