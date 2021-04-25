// Add your functions here
function map(sourceArray, callback){
  const newArray = []
  for (let element of sourceArray){
    newArray.push(callback(element))
  } 
  return newArray
}

function reduce(sourceArray, callback, startingPoint){
  let total
  if (startingPoint){
    total = startingPoint
    for (let element of sourceArray){
      total = callback(element, total)
    }
    return total
  } else {
    total = sourceArray[0]
    for (let i = 1; i < sourceArray.length; i++) {
      total = callback(sourceArray[i], total)
    }
  return total
  }
}