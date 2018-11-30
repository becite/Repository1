let Fb = [...Array(100).keys()]//'count:' + i

const result = Fb.map(function(value){
    
    let ret = value++
    if (!(value % 3)) {
        ret = 'Fizz'
    }
    if (!(value % 5)) {
        ret = 'Buzz'
    }
    if (!(value % 15)) {
        ret = 'FizzBuzz'
    }
    return ret
})

console.log(result)