setTimeout(() => {
    document.getElementById('base-page').classList.add('visible');
    
    var modal = new bootstrap.Modal(document.getElementById('reg-modal'));
    modal.show();   
}, 1100);

function start() {
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

const idsShow = ["showPriceInternational","showPriceRegional", "showPriceCargueiro", "showPriceExecutive", "showPriceMilitary"]
const categorias = ["showInternational", "showRegional", "showCargueiros", "showExecutive", "showMilitary"];


function calculateTotal() {
    cleanPrices()
    var selectInternational = document.getElementById("international");
    var selectRegioal = document.getElementById("regional");
    var selectCargueiros = document.getElementById("cargueiros");
    var selectExecutivo = document.getElementById("executive");
    var selectMilitary = document.getElementById("military");

    var total = 0;

    const selectVetors = [selectInternational, selectRegioal, selectCargueiros, selectExecutivo, selectMilitary];

    const valueInternatonal = [
        ["AIRBUS A350", 355700000],
        ["BOEING 777", 339600000],
        ["BOEING 787", 264600000],
        ["AIRBUS A380", 445600000],
        ["BOEING 747", 386000000]
    ];
    const valueRegioal = [
        ["AIRBUS A320", 110600000],
        ["BOEING 737", 112600000],
        ["ATR 42", 18000000],
        ["ATR 72", 20000000],
        ["EMBRAER E190-E2", 53000000]
    ];
    const valueCargueiros = [
        ["ANTONOV AN-225", 350000000],
        ["ANTONOV AN-124", 100000000],
        ["ILYUSHIN Il-76", 12000000],
        ["LOCKHEED C-5 GALAXY", 45000000],
        ["A300-600ST Beluga", 44000000]
    ];
    const valueExecutivo = [
        ["FALCON 8X", 58000000],
        ["PILATUS PC-24", 63300000],
        ["GULFSTREAM G650", 66000000],
        ["EMBRAER PHRNOM 300", 67200000],
        ["BOMBARDIER GLOBAL 7500", 73000000]
    ];
    const valueMilitary = [
        ["C-130 HERCULES", 355700000],
        ["EMBRAER 314 SUPER TUCANO", 3500000],
        ["EMBRAER KC 390", 50000000],
        ["BOEING C-17 GLOBMASTER III", 200000000],
        ["B-2 SPIRIT", 2000000000]
    ];
    
    const selectCategory = []
    const selectAirplane = []
    const airplanePrice = []
    const valueVetors = [valueInternatonal, valueRegioal, valueCargueiros, valueExecutivo, valueMilitary];

    for (let i = 0; i < selectVetors.length; i++) {
        const selectedOption = selectVetors[i].value;
        const CategorySlect = categorias[i];
        for (let x = 0; x < valueVetors[i].length; x++) {
            const aircraft = valueVetors[i][x];
            if (selectedOption === aircraft[0]) {
                total += aircraft[1];
                selectCategory.push(CategorySlect)
                selectAirplane.push(selectedOption)
                airplanePrice.push(aircraft[1])
                break;
            }
        }
    }

    showPrice(total, selectCategory, selectAirplane, airplanePrice)
}

function showPrice(total, selectCategory, aircraft, price) {
    const matrizIdsClass = [
        ["showPriceInternational", "showInternational"],
        ["showPriceRegional", "showRegional"],
        ["showPriceCargueiro", "showCargueiros"],
        ["showPriceExecutive", "showExecutive"],
        ["showPriceMilitary", "showMilitary"]
    ]

    for (let a = 0; a < selectCategory.length; a++){
        document.getElementById(matrizIdsClass[a][0]).style.display = "flex";
        document.getElementById(matrizIdsClass[a][a]).textContent = aircraft[a] +": "+ price[a].toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    }
    document.getElementById("totalCompra").textContent = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })

    var modal = new bootstrap.Modal(document.getElementById('reg-modal'));
    modal.show();
}

function cleanPrices() {
    for (let a = 0; a < idsShow.length; a++){
        document.getElementById(idsShow[a]).textContent = "";
        document.getElementById(categorias[a]).style.display = "none";
    }
}
    document.getElementById("pedido-pronto").style.display = "block"
    document.getElementById("sobremesa-pronto").textContent = selectSobremesas.value + " R$ " + sobremesa.toFixed(2);
    document.getElementById("bebida-pronto").textContent = selectBebidas.value + " R$ " + bebida.toFixed(2);
    document.getElementById("prato-pronto").textContent = selectPratos.value + " R$ " + prato.toFixed(2);
    resultadoSpan.textContent = "R$" + total.toFixed(2);


function limpar() {
    document.getElementById("pedido-pronto").style.display = "none";
    document.getElementById("selects-div").style.display = "none";
    document.getElementById("exampleFormControlInput1").value = "";
    document.getElementById("resultado").value = "";
    document.getElementById("selectBebida").value = "Selecione sua bebida";
    document.getElementById("selectPrato").value = "Selecione seu Prato";
    document.getElementById("selectSobremesa").value = "Selecione sua sobremesa";
}