let navMenuInfo=document.getElementById("infoContainer");
let navMenuInfoChildren=navMenuInfo.children;
let navbar=document.getElementById("navbar")
let activeElement=navMenuInfoChildren[0];

navbar.children[0].style.backgroundColor="rgb(111, 9, 206)";

for(let i=0;i<navbar.children.length;i++){
    navbar.children[i].addEventListener("click",(e)=>{
        if(activeElement!==navMenuInfoChildren[Array.from(navbar.children).indexOf(e.target)]){
            activeElement.style.display="none";
            navbar.children[Array.from(navMenuInfoChildren).indexOf(activeElement)].style.backgroundColor="rgb(86, 14, 153)";
            navbar.children[Array.from(navbar.children).indexOf(e.target)].style.backgroundColor="rgb(111, 9, 206)";
            activeElement=navMenuInfoChildren[Array.from(navbar.children).indexOf(e.target)];
        }

        navMenuInfoChildren[i].style.display="block";

    });
}

