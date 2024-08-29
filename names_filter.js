const names = [ 
    'shalu',
    'sandy',
    'rubab',
    'tasfia'
]

// names.filter(function (n) {
//     if(n[0] === 'i') {
//         return true
//     }
//     return false
// })

const filteredNames = names.filter(n => n[0] !== 'a')

console.log(names)