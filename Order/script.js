setTimeout(() => {
    document.getElementById('base-page').classList.add('visible');
    document.getElementById('header-text-wrap').classList.add('visible');
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

const categorias = ["showInternational", "showRegional", "showCargueiros", "showExecutive", "showMilitary"];
var globalTotal = 0

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

    var selectCategory = []
    var selectAirplane = []
    var airplanePrice = []
    const valueVetors = [valueInternatonal, valueRegioal, valueCargueiros, valueExecutivo, valueMilitary];

    for (let i = 0; i < selectVetors.length; i++) {
        var selectedOption = selectVetors[i].value;
        var CategorySlect = categorias[i];
        for (let x = 0; x < valueVetors[i].length; x++) {
            var aircraft = valueVetors[i][x];
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
    for (let a = 0; a < selectCategory.length; a++) {
        document.getElementById(selectCategory[a]).style.display = "flex";
        if (categorias.includes(selectCategory[a])) {
            document.getElementById(selectCategory[a] + "Price").textContent = aircraft[a] + ": " + price[a].toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        }
    }
    total = total.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
    document.getElementById("totalCompra").textContent = total
    globalTotal = total;

    var modal = new bootstrap.Modal(document.getElementById('reg-modal'));
    modal.show();
}

function cleanPrices() {
    for (let a = 0; a < categorias.length; a++) {
        document.getElementById(categorias[a] + "Price").textContent = "";
        document.getElementById(categorias[a]).style.display = "none";
    }
}

function cleanForms() {
    cleanPrices()
    const selectPlanes = ["international", "regional", "cargueiros", "executive", "military"]
    for (let a = 0; a < selectPlanes.length; a++) {
        document.getElementById(selectPlanes[a]).value = "Selecione o avião desejado"
    }
}

function getDate() {
    var date = new Date()
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const FortmatDay = day < 10 ? `0${day}` : day;
    const FormatMonth = month < 10 ? `0${month}` : month;

    return `${FortmatDay}/${FormatMonth}/${year}`;
}

function send() {
    if (globalTotal != "") {
        var numeroTelefone = "5541992216924";

        var linkWhatsApp = "https://wa.me/" + numeroTelefone + "?text=Total da Compra: " + globalTotal + " - " + "Dia da Compra: " + getDate()

        window.open(linkWhatsApp, "_blank")
    }
}



