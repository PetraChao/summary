// let oUl = document.getElementById('container');
// oUl.onclick = function(e){
//     alert(e.target.innerHTML);
    
// }

// let oUl = document.getElementById('container');
// let aLi = oUl.getElementsByTagName('li');
// for (let i = 0; i < aLi.length; i++){
//     aLi[i].onclick = (function(j){
//         return function (params) {
//             alert(j)
//         }
//     })(i);
// }

// let oUl = document.getElementById('container');
// let aLi = oUl.getElementsByTagName('li');
// for (let i = 0; i < aLi.length; i++){
//     (function(j){
//         aLi[j].onclick = function(){
//             alert(j);
//         }
//     })(i);
// }

let oUl = document.getElementById('container');
let aLi = oUl.getElementsByTagName('li');
for (let i = 0; i < aLi.length; i++) {
    aLi[i].onclick = function () {
        alert(this.innerHTML)
    }
}