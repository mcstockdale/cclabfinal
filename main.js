document.addEventListener("DOMContentLoaded", function(){

    document.querySelector("#classname").addEventListener("keyup", function(){

        localStorage.setItem("classname", this.value)
    })

    document.querySelector("#classroom").addEventListener("keyup", function(){

        localStorage.setItem("classroom", this.value)
    })

    document.querySelector("#profName").addEventListener("keyup", function(){

        localStorage.setItem("profName", this.value)
    })
})
