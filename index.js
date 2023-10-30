const convertButton = document.querySelector(".convert-button")
const secondSelect = document.querySelector(".second-select")
const firstSelect = document.querySelector(".first-select")

function convertValues() {

    const inputCurrencyValue = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    const dolarToday = 5
    const euroToday = 5.27
    const libraToday = 6.05
    const francoToday = 5.55


    if (firstSelect.value == "real" && secondSelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)

    }

    if (firstSelect.value == "euro" && secondSelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarToday)

    }

    if (firstSelect.value == "libra" && secondSelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarToday)

    }

    if (firstSelect.value == "franco" && secondSelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue * dolarToday)

    }

    if (firstSelect.value == "dolar" && secondSelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * dolarToday)
    }

    if (firstSelect.value == "euro" && secondSelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * euroToday)
    }

    if (firstSelect.value == "libra" && secondSelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * libraToday)
    }

    if (firstSelect.value == "franco" && secondSelect.value == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue * francoToday)
    }

    if (firstSelect.value == "real" && secondSelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (firstSelect.value == "dolar" && secondSelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroToday)
    }

    if (firstSelect.value == "libra" && secondSelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroToday)
    }

    if (firstSelect.value == "franco" && secondSelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue * euroToday)
    }

    if (firstSelect.value == "real" && secondSelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday)
    }

    if (firstSelect.value == "dolar" && secondSelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraToday)
    }

    if (firstSelect.value == "euro" && secondSelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraToday)
    }

    if (firstSelect.value == "franco" && secondSelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue * libraToday)
    }

    if (firstSelect.value == "real" && secondSelect.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue / francoToday)
    }

    if (firstSelect.value == "dolar" && secondSelect.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * francoToday)
    }

    if (firstSelect.value == "euro" && secondSelect.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * francoToday)
    }

    if (firstSelect.value == "libra" && secondSelect.value == "franco") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-CH", {
            style: "currency",
            currency: "CHF"
        }).format(inputCurrencyValue * francoToday)
    }

    /*function formatCurrency() {

        if(firstSelect.value == "dolar") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(inputCurrencyValue)
        } else if(firstSelect.value == "real") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue)
        } else if(firstSelect.value == "euro") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(inputCurrencyValue)
        } else if(firstSelect.value == "libra") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-UK", {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue)
        } else if(firstSelect.value == "franco") {
            currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-CH", {
                style: "currency",
                currency: "CHF"
            }).format(inputCurrencyValue)
        }
    }

    formatCurrency()*/
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const imageCurrency = document.querySelector(".image-currency")
    const imageMoney = document.querySelector(".image-money")
    const currencyMoney = document.querySelector("currency-money")

    if(secondSelect.value == "real") {
        currencyName.innerHTML = "Real Brasileiro"
        imageCurrency.src = "./Assets/real.png"
    }

    if(firstSelect.value == "real") {
        currencyMoney.innerHTML = "Real Brasileiro"
        imageMoney.src = "./Assets/real.png"
    }

    if (secondSelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        imageCurrency.src = "./Assets/dolar.png"
    }

    if(firstSelect.value == "dolar") {
        currencyMoney.innerHTML = "Dólar Americano"
        imageMoney.src = "./Assets/dolar.png"
    }

    if (secondSelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        imageCurrency.src = "./Assets/euro.png"
    }

    if (secondSelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        imageCurrency.src = "./Assets/libra.png"
    }

    if (secondSelect.value == "franco") {
        currencyName.innerHTML = "Franco Suíço"
        imageCurrency.src = "./Assets/franco.png"
    }

    convertValues()
}


firstSelect.addEventListener("change", changeCurrency)
secondSelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)