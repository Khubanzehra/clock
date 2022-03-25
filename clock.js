var icon =document.getElementById("icon");



icon.addEventListener("click",function(){
    document.body.classList.toggle("lightdark");
    if(document.body.classList.contains("lightdark")){
        icon.src ="img/moon.png";
    }
    else{
        icon.src ="img/sun.png";
    }
})

setInterval(()=>{
    d = new Date();
    htime =d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation=30*htime + mtime/2;
    mrotation=6*mtime;
    srotation=6*stime;


    hour.style.transform=`rotate(${hrotation}deg)`;
    min.style.transform=`rotate(${mrotation}deg)`;
    second.style.transform=`rotate(${srotation}deg)`;
},1000)