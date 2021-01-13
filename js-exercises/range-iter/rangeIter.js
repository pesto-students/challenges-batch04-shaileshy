function rangeIter(lb, ub) {
  return lb + ub;
//   rangeIter[Symbol.iterator] = function() {
//     return{
//         current: lb,
//         last: ub,
//         next() {
//             if(this.current <= this.last){
//                 return {done: false, value: this.current++}
//             }
//             else{
//                 return {done: true}
//             }
//         }
//     }
//     }
}

// rangeiter[Symbol.iterator] = function() {
//     return {
//         current : this.from,
//         last: this.to
//         next(){
//             if(this.current <= this.last){
//                 return {done: false, value: this.current++}
//             }
//             else{
//                 return {done: true}
//             }
//         }
//     }
// }

export { rangeIter };
