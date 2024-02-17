let x=0;
let y=0;
let z=0;
let ans=null;

// function submit(){
//     let x = document.getElementById("txt01").value;
//     let y = Number(document.getElementById("txt02").value);

//     console.log(typeof x);
//     console.log(typeof y);
// }

function calculate(){

}

function printToDisplay(a){
    if(a==13){
        a=".";
        // getElementById("btn.").disabled=true;
    }
    document.getElementById("display").value+=a;
    
}

function op(b){
    if(b==14){
        y=document.getElementById("display").value;
        y=parseFloat(y);
        
        clearDisplay();
        if(z==10){ans=x+y;}
        if(z==11){ans=x-y;}
        if(z==12){ans=x*y;}
        if(z==15){ans=x/y;}
    }if(b==10){
        x=document.getElementById("display").value;
        clearDisplay();
        x=parseFloat(x);
        z=b;
    }if(b==11){
        x=document.getElementById("display").value;
        x=parseFloat(x);
        clearDisplay();
        z=b;
    }if(b==12){
        x=document.getElementById("display").value;
        x=parseFloat(x);
        clearDisplay();
        z=b;
    }if(b==15){
        x=document.getElementById("display").value;
        x=parseFloat(x);
        clearDisplay();
        z=b;
    }
    document.getElementById("display").value=ans;
    ans=null;

}
function clearDisplay(){
    document.getElementById("display").value=null;
    // getElementById("btn.").disabled=false;
}