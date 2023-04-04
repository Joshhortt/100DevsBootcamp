//Create a stopwatch object that has four properties and three methods

let stopwatch = {}

stopwatch.brand = 'Nike'
stopwatch.color = 'black'
stopwatch.shape = 'round'
stopwatch.size = 'shmmmedium'

stopwatch.start = function(){
    console.log('STARTTTINNNNGGGG')
}
stopwatch.stop = function(){
    console.log('STOPPPINNGGG')
}
stopwatch.sayBrand = function(){
    console.log( stopwatch.brand  )
}