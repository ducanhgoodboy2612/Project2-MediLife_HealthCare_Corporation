document.addEventListener('DOMContentLoaded',function(){

    var loadSPkm1 = document.querySelector('.AnhDiVao1');
    var loadSPkm2 = document.querySelector('.AnhDiVao2');
    var loadSPkm3 = document.querySelector('.AnhDiVao3');
    var loadSPkm4 = document.querySelector('.AnhDiVao4');

    window.addEventListener('scroll',function(){
        if(window.pageYOffset > 1000 ){
            console.log(this.window.pageYOffset);
            loadSPkm1.classList.add('Left1');
            loadSPkm2.classList.add('Left2');
        }
        if(window.pageYOffset > 1500 ){
            loadSPkm3.classList.add('Right3');
            loadSPkm4.classList.add('Right4');
        }
    },false)
},false)