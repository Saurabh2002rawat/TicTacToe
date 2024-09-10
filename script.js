let boxes = document.getElementsByClassName ("box") ; 
let newgame = document.getElementById("newgame") ;
let reset = document.getElementById("reset2") ;
let i = 0 ;

let playerX = true ;
const winSet = [ [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]] ;

for ( let child of boxes ) {
    child.addEventListener("click" , () => {
        i ++ ;
        if ( playerX == true ){
            child.innerText = 'X' ;
            playerX = false ;
        }
        else{ 
            child.innerText = '0';
            playerX = true ;
        }
        child.disabled = true ;
        if ( i == 9 )   tie() ;
        check() ;
    })
}

function check () { 
    for ( let i of winSet ) {
        let p1 = boxes [ i[0] ].innerText ;
        let p2 = boxes [ i[1] ].innerText ;
        let p3 = boxes [ i[2] ].innerText ;
        if ( p1 != '' && p1 == p2 && p2 == p3 ){
            winner ( p1 ) ;
        }
    }
}

const winner = ( p1 ) => {
    // for ( let box of boxes ) {
    //     box.style.pointerEvents = "none" ;
    //     box.style.opacity = "0.5" ;
    // }
    document.getElementById("grid").style.visibility = "hidden" ;
    document.getElementById("reset2").style.visibility = "hidden" ;

    document.getElementById("result").style.display = "block" ;
    document.getElementById("win").innerText= "Congrats! Winner is "+ p1;
    // document.getElementById("newgame").style.display = "block" ;
}

const tie = () => {
    document.getElementById("grid").style.visibility = "hidden" ;
    document.getElementById("reset2").style.visibility = "hidden" ;
    document.getElementById("result").style.display = "block" ;
    document.getElementById("win").innerText= "OOPS! The game is tied " ;
}

reset.addEventListener("click" , () => {
    location.reload();
})
newgame.addEventListener("click" , () => {
    location.reload();
})

