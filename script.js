window.addEventListener('scroll',function(){
    let nav=document.getElementById('nav-bar');
    if(window.scrollY > 50){
            nav.classList.add('scrolled');
    }else{
        nav.classList.remove('scrolled');
    }
});
