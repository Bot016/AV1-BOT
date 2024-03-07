setTimeout(() => {
    document.getElementById('base-page').classList.add('visible');
}, 1100);

function comecar() {
    var nome = document.getElementById("name-order").value;
    show(nome);
}

function show(nome) {
    document.getElementById("label-name").textContent = nome;
    // var div = document.getElementById("selects-div")
    // if (nome && nome.trim !== "") {
    //     div.style.display = "flex"
    //     document.getElementById("exampleFormControlInput1").style.background = "none"
    // } else {
    //     document.getElementById("error").style.display = "block"
    // }

}

function fechar() {
    document, getElementById("error").style.display = "none"
    document.getElementById("exampleFormControlInput1").style.display = "lightpink";
}

function calcularTotal() {
    var selectPratos = document.getElementById("selectPrato");
    var selectBebidas = document.getElementById("selectBebida");
    var selectSobremesas = document.getElementById("selectSobremesa");
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