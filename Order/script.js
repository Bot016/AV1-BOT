setTimeout(() => {
    document.getElementById('base-page').classList.add('visible');
}, 1100);

function comecar() {
    var nome = document.getElementById("name-order").value;
    show(nome);
}

function show(nome) {
    document.getElementById("label-name").textContent = nome;
    var div = document.getElementById("models-wrap")
    if (nome && nome.trim !== "") {
        div.style.display = "flex"
        window.location.href = "#button-wrap"
    } else {
        div.style.display = "none"
        window.location.href = "#base-page"
        alert("Insira um nome para continuar!");
    }

}

function calcularTotal() {
    var selectInternational = document.getElementById("international");
    var selectRegioal = document.getElementById("regional");
    var selectCargueiros = document.getElementById("cargueiros");
    var selectExecutivo = document.getElementById("executive");
    var selectMilitary = document.getElementById("military");
    var resultadoSpan = document.getElementById("resultado");
    
    var total = 0;
    var prato = 0;
    var bebida = 0;
    var sobremesa = 0;

    switch (selectPratos.value) {
        case "Pf":
            total = total + 25.90;
            prato = 25.90;
            break;
        case "Strogonoff":
            total = total + 24.90;
            prato = 24.90;
            break;
        case "Lasanha":
            total = total + 31.90;
            prato = 31.90;
            break;

    }

    switch (selectBebidas.value) {
        case "Suco":
            total = total + 6.90;
            bebida = 6.90;
            break;
        case "Refrigerante":
            total = total + 8.90;
            bebida = 8.90;
            break;
        case "Agua":
            total = total + 6.90;
            bebida = 6.90;
            break;

    }

    switch (selectSobremesas.value) {
        case "Bananasplit":
            total = total + 19.90;
            sobremesa = 19.90;
            break;
        case "Sorbet":
            total = total + 7.90;
            sobremesa = 7.90;
            break;
        case "Petit":
            total = total + 15.90;
            sobremesa = 15.90;
            break;

    }
    document.getElementById("pedido-pronto").style.display = "block"
    document.getElementById("sobremesa-pronto").textContent = selectSobremesas.value + " R$ " + sobremesa.toFixed(2);
    document.getElementById("bebida-pronto").textContent = selectBebidas.value + " R$ " + bebida.toFixed(2);
    document.getElementById("prato-pronto").textContent = selectPratos.value + " R$ " + prato.toFixed(2);
    resultadoSpan.textContent = "R$" + total.toFixed(2);
}

function limpar() {
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectBebida").value = "Selecione sua bebida";
    document.getElementById("selectPrato").value = "Selecione seu Prato";
    document.getElementById("selectSobremesa").value = "Selecione sua sobremesa";
}