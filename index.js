//1
function stringToArray(string){
	return string.split (" ");
}
//2
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U"); 
}
//3
var min = function(list){ 
    return Math.min(...list);
}
var max = function(list){   
    return Math.max(...list);
}
//4
function min(arr, toReturn) {
  if (toReturn==='value') return Math.min(...arr)
  return arr.indexOf(Math.min(...arr))
} 
//5
function warnTheSheep(queue) {
  let reversQueue = queue.reverse();
  for (let i = 0; i < queue.length; i++) {
    if (reversQueue[0] === "wolf")
      return "Pls go away and stop eating my sheep";
    else
      return `Oi! Sheep number ${reversQueue.indexOf("wolf")}! You are about to be eaten by a wolf!`;
  }
}
//6
function maps(x){
  return x.map (num => num * 2) 
}
//7
function firstNonConsecutive (arr) {
  for (let i = 0; i < arr.length; i++) {
  if (arr[i + 1] - arr[i] !== 1) {
    return arr[i + 1];
  }
}
  return null;
}