document.addEventListener("DOMContentLoaded", function(){

    let classname = localStorage.getItem("classname")
    let classroom = localStorage.getItem("classroom")
    let profName = localStorage.getItem("profName")
    
    document.querySelector("#classname").innerHTML = classname
    document.querySelector("#classroom").innerHTML = classroom
    document.querySelector("#profName").innerHTML = profName


    let question1 = document.getElementsByName('quest1');
    let question2 = document.getElementsByName('quest2');
    let question3 = document.getElementsByName('quest3');
    let question4 = document.getElementsByName('quest4');
    let question5 = document.getElementsByName('quest5');
    let question6 = document.getElementsByName('quest6');
    let question7 = document.getElementsByName('quest7');
    let question8 = document.getElementsByName('quest8');
    

    for(var i = 0; i < question1.length; i++)
    question1[i].addEventListener("click", function(){
localStorage.setItem("color1", this.value)
document.querySelector("#one").style.background = localStorage.getItem("color1");
    })
    for(var i = 0; i < question2.length; i++)
    question2[i].addEventListener("click", function(){
localStorage.setItem("color2", this.value)
document.querySelector("#two").style.background = localStorage.getItem("color2");
    })
    for(var i = 0; i < question3.length; i++)
    question3[i].addEventListener("click", function(){
localStorage.setItem("color3", this.value)
document.querySelector("#three").style.background = localStorage.getItem("color3");
    })

    for(var i = 0; i < question5.length; i++)
    question5[i].addEventListener("click", function(){
localStorage.setItem("color5", this.value)
document.querySelector("#five").style.background = localStorage.getItem("color5");
    })
    for(var i = 0; i < question6.length; i++)
    question6[i].addEventListener("click", function(){
localStorage.setItem("color6", this.value)
document.querySelector("#six").style.background = localStorage.getItem("color6");
    })
    for(var i = 0; i < question7.length; i++)
    question7[i].addEventListener("click", function(){
localStorage.setItem("color7", this.value)
document.querySelector("#seven").style.background = localStorage.getItem("color7");
    })
})