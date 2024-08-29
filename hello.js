const a = "hello world"
 
const b = Math.pow(2,3)
const c = Math.sqrt(Math.sqrt(256))

const d = Math.ceil(16.2345)
const e = Math.floor(16.2345)

const f = "Oxford University"
const g = `My friend said, "He was ill"`

const age = 22

const print_age = `My age is ${age} years old and I'm studying in ${f}`

let h = "hello world"

//console.log(h.length)
//console.log(h.includes('or'))
//console.log(h.startsWith("de"))

let i = "insta"
i = i.replace("a","agram")
//console.log(i)

const num1 = "10.23"
const num2 = 10

//console.log(num1 == num2)

const num1int = parseInt(num2)
//console.log(num1int)

const num2float = parseFloat(num1)
// console.log(num2float)

// console.log(.3 -.2)
// console.log(.3-.2 == .1)

const array = [1,2,3,[0,9,0],'five']
//console.log(array[4])

const myObj = {
    name: 'yaskin',
    age: 200,
    email: "supremeyaskin@villain.com",
    tag: "villain",
    id: {
        "fsdw": 100,
        "ai/ml": 200,
        "sql": 300
    }
}

// console.log(myObj.id)

const myObj2 = {
    name : "abc",
    age : 10,
    email: "abc@gmail.com",
    courses: ["FSWD", "AI/ML", "SQL"],
    id: {
        "fswd": 100,
        "ai/ml": 200,
        "sql": 300
    }
}

console.log("tag" in myObj2) 

const array2 = [1,2,3]

console.log(1 in array2)

console.log(1<3 && 8<6)

console.log(7>3 || 8<6)

const true_case = "variable p is greater"
const false_case = "variable q is greater"

const p = 2
const q = 6

console.log( p > q ? true_case : false_case)