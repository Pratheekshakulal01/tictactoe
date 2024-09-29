let boxes = document.querySelectorAll(".box");
let rstbtn = document.querySelector("#rst");
const winner=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const checkWnner=()=>{
    for(let pat of winner){
        let pos1=boxes[pat[0]].innerText;
        let pos2=boxes[pat[1]].innerText;
        let pos3=boxes[pat[2]].innerText;

        if(pos1!=""&&pos2!=""&&pos3!=""){
            if(pos1===pos2&&pos2===pos3){
                console.log("winner");
                document.getElementById("res").innerText=" Congratulations!! The winner is " + pos1;
                
                return true;
                
                
            }
        }
    }

};

const disableButton=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}


let turn= "X";

boxes.forEach((box) => {
        box.addEventListener("click",()=>{
            console.log("button was clicked");
            document.getElementById("trn").innerText="The turn for X";
            
            if(turn==="X"){
                box.innerText="X";
                turn="O";
            }
            else{
                box.innerText="O";
                turn="X";

            }
            document.getElementById("trn").innerText="The turn for "+turn;
            box.disabled=true;
            if(checkWnner()){
                disableButton();
            }
        });
    
});

rstbtn.addEventListener("click",()=>{
    for(let nbox of boxes){
        nbox.innerText="";
        nbox.disabled=false;
        
    }
    turn="X";
        document.getElementById("res").innerText="";
        document.getElementById("trn").innerText=" ";
})
