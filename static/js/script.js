let teacherForms = document.getElementsByClassName("teacher-contract")
for(let teacherForm of teacherForms) {
    teacherForm.addEventListener("submit", function(e) {
        e.preventDefault()

        let price = teacherForm.price.value
        let hours = teacherForm.hours.value
        let total = price * hours

        localStorage.setItem("total_valor", total)
        
        window.location.href = "file:///C:/Users/aldair/Downloads/projetos/react_python/iniciante/resultado.html"
    })
}

let resultado = document.getElementById("resultado")
total = localStorage.getItem("total_valor")
resultado.innerHTML = `Você terá que pagar ${total}R$`

let voltar = document.getElementById("voltar")
    voltar.addEventListener("click", function(e) {
        e.preventDefault()
        window.location.href = "file:///C:/Users/aldair/Downloads/projetos/react_python/iniciante/index.html"
})