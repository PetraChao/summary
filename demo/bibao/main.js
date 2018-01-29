var oUl = document.getElementById('container');
var oLi = document.getElementsByTagName('li');
for(var i=0; i<oLi.length; i++){
    oLi[i].onclick = (function (j) {
        return function () {
            alert(j+1);
        }
    })(i);
}