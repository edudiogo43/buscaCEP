const botao = document.querySelector("#btnSubmit");
const wait = document.querySelector("#lblwait");
const cep = document.querySelector("#cep").value;

wait.style.display = "none";

botao.addEventListener("click", () => {
    
    wait.style.display = "block";

    fetch(`http://localhost:8081/buscacep/${cep}/`)
    .then( result => { result.json()
        .then(data => {
            showData(data)
        })
    })
    .catch(error => console.log("Ocorreu o erro:" + error))

})

const showData = (data) => {
    for(const campo in data) {
        if(document.querySelector("#"+campo)) {
            document.querySelector("#"+campo).value = data[campo];
        }
    }
    wait.style.display = "none";
}