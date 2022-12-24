/* This projects codes completely belongs to me. I found an api, fetched, mutated it and make usable for turkish users, 
fixed some bugs.*/

let compareWithTurkishLiraForm = document.querySelector(".get-value-relative-turkish-lira");
let turkishLiraInput = document.querySelector(".turkish-lira-input");
let typeOfCurrency = document.querySelector(".type-of-currency");
let firstDynamicValue = document.querySelector(".first-dynamic-value");


let exchangingMoneysform = document.querySelector(".exchange-rates-form");
let firstMoneyInput = document.querySelector(".exchange-rates-form input:first-of-type");
let secondMoneyInput = document.querySelector(".exchange-rates-form input:nth-of-type(2)");
let secondDynamicValue = document.querySelector(".second-dynamic-value");

let comparableMoneys = document.querySelector(".comparable-moneys");

async function getAllMoneysInformation(){
    let allCurrencies = "http://hasanadiguzel.com.tr/api/kurgetir";

    let acceptData = await fetch(allCurrencies, {
        "method": "GET",
        "content-type": "application/json",
    })

    let showData = await acceptData.json();

    return showData;

}

getAllMoneysInformation().then(function(parameter){
    let bugFixingArray = parameter.TCMB_AnlikKurBilgileri;

    console.log("here is the bug fixing array: ", bugFixingArray)

    bugFixingArray.forEach(function(parameter){
        return parameter.Isim.toLowerCase();
    })

    let newBugFixingArray = bugFixingArray.map(function(parameter){
        return {Isim: parameter.Isim.toLowerCase().trim(), 
            CurrencyName: parameter.CurrencyName, 
            BanknoteBuying: parameter.BanknoteBuying === "" ? "bilgi yok" : parameter.BanknoteBuying, 
            BanknoteSelling: parameter.BanknoteSelling === "" ? "bilgi yok" : parameter.BanknoteSelling,
            ForexBuying: parameter.ForexBuying,
            ForexSelling: parameter.ForexSelling,
            CrossRateSelling: parameter.CrossRateSelling,
            CrossRateOther: parameter.CrossRateOther
            }
    });

    localStorage.setItem("bug fixing array", JSON.stringify(newBugFixingArray));


})

let getDataArray = localStorage.getItem("bug fixing array");

let parseDataArray = JSON.parse(getDataArray);

console.log(parseDataArray[0].Isim.replace("ari", "arı"));

let fix1 = parseDataArray[0].Isim.replace("ari", "arı");
let fix2 = parseDataArray[1].Isim.replace("ari", "arı");
let fix3 = parseDataArray[5].Isim.replace("angi", "angı");
let fix4 = parseDataArray[7].Isim.replace("ari", "arı");
let fix5 = parseDataArray[8].Isim.replace("ari", "arı");
let fix6 = parseDataArray[12].Isim.replace("asi", "ası");
let fix7 = parseDataArray[16].Isim.replace("ani", "anı");
let fix8 = parseDataArray[20].Isim.replace("ati", "atı");


parseDataArray[0].Isim = fix1;
parseDataArray[1].Isim = fix2;
parseDataArray[5].Isim = fix3;
parseDataArray[7].Isim = fix4;
parseDataArray[8].Isim = fix5;
parseDataArray[12].Isim = fix6;
parseDataArray[16].Isim = fix7;
parseDataArray[20].Isim = fix8;
parseDataArray.pop();

console.log("latest data array:", parseDataArray);

parseDataArray.forEach(function(parameter){
    comparableMoneys.textContent += `${parameter.Isim}, `;
})

comparableMoneys.textContent = comparableMoneys.textContent.slice(0, comparableMoneys.textContent.length - 2)

comparableMoneys.textContent += ".";

compareWithTurkishLiraForm.addEventListener("submit", function(parameter){
    parameter.preventDefault();

    parseDataArray.forEach(function(parameter){
        if(parameter.Isim.includes(turkishLiraInput.value.trim())){
            typeOfCurrency.textContent = `1 ${parameter.Isim}`;
            firstDynamicValue.textContent = `${parameter.ForexBuying} tl eder.`;
        }
    });

    if(turkishLiraInput.value.trim() === "pakistan rupisi"){
        typeOfCurrency.textContent = `1 ${parseDataArray[17].Isim}`;
        firstDynamicValue.textContent = `${parseDataArray[17].ForexBuying} tl eder.`;
    };

    if(turkishLiraInput.value.trim() === "ingiliz sterlini"){
        typeOfCurrency.textContent = `1 ${parseDataArray[4].Isim}`;
        firstDynamicValue.textContent = `${parseDataArray[4].ForexBuying} tl eder.`;
    };

    if(turkishLiraInput.value.trim() === "danimarka kronu"){
        typeOfCurrency.textContent = `1 ${parseDataArray[2].Isim}`;
        firstDynamicValue.textContent = `${parseDataArray[2].ForexBuying} tl eder.`;
    };

    if(turkishLiraInput.value.trim() === "isviçre frangı"){
        typeOfCurrency.textContent = `1 ${parseDataArray[5].Isim}`;
        firstDynamicValue.textContent = `${parseDataArray[5].ForexBuying} tl eder.`;
    };

    if(turkishLiraInput.value.trim() === "isveç kronu"){
        typeOfCurrency.textContent = `1 ${parseDataArray[6].Isim}`;
        firstDynamicValue.textContent = `${parseDataArray[6].ForexBuying} tl eder.`;
    };

    if(turkishLiraInput.value.trim() === "kuveyt dinarı"){
        typeOfCurrency.textContent = `1 ${parseDataArray[8].Isim}`;
        firstDynamicValue.textContent = `${parseDataArray[8].ForexBuying} tl eder.`;
    };

    if(turkishLiraInput.value.trim() === "iran riyali"){
        typeOfCurrency.textContent = `1 ${parseDataArray[15].Isim}`;
        firstDynamicValue.textContent = `${parseDataArray[15].ForexBuying} tl eder.`;
    };

    if(turkishLiraInput.value.trim() === "çin yuanı"){
        typeOfCurrency.textContent = `1 ${parseDataArray[16].Isim}`;
        firstDynamicValue.textContent = `${parseDataArray[16].ForexBuying} tl eder.`;
    };

    if(turkishLiraInput.value.trim() === "katar riyali"){
        typeOfCurrency.textContent = `1 ${parseDataArray[18].Isim}`;
        firstDynamicValue.textContent = `${parseDataArray[18].ForexBuying} tl eder.`;
    };

    if(turkishLiraInput.value.trim() === "azerbaycan yeni manatı"){
        typeOfCurrency.textContent = `1 ${parseDataArray[20].Isim}`;
        firstDynamicValue.textContent = `${parseDataArray[20].ForexBuying} tl eder.`;
    };

    if(turkishLiraInput.value.trim() === "birleşik arap emirlikleri dirhemi"){
        typeOfCurrency.textContent = `1 ${parseDataArray[21].Isim}`;
        firstDynamicValue.textContent = `${parseDataArray[21].ForexBuying} tl eder.`;
    };
});


exchangingMoneysform.addEventListener("submit", function(parameter){
    parameter.preventDefault();

    let exchangingMoneys = []

    parseDataArray.forEach(function(parameter){
        if(parameter.Isim.includes(firstMoneyInput.value.trim())){
            exchangingMoneys.push({Isim: parameter.Isim, Deger: parameter.ForexBuying});
        }

        if(parameter.Isim.includes(secondMoneyInput.value.trim())){ 
            exchangingMoneys.push({Isim: parameter.Isim, Deger: parameter.ForexBuying});
        };
    });

    if(firstMoneyInput.value.trim() === "pakistan rupisi"){
        exchangingMoneys.push({Isim: parseDataArray[17].Isim, Deger: parseDataArray[17].ForexBuying})
    } else if(firstMoneyInput.value.trim() === "ingiliz sterlini"){
        exchangingMoneys.push({Isim: parseDataArray[4].Isim, Deger: parseDataArray[4].ForexBuying})
    } else if(firstMoneyInput.value.trim() === "danimarka kronu"){
        exchangingMoneys.push({Isim: parseDataArray[2].Isim, Deger: parseDataArray[2].ForexBuying})
    } else if(firstMoneyInput.value.trim() === "isviçre frangı"){
        exchangingMoneys.push({Isim: parseDataArray[5].Isim, Deger: parseDataArray[5].ForexBuying})
    } else if(firstMoneyInput.value.trim() === "isveç kronu"){
        exchangingMoneys.push({Isim: parseDataArray[6].Isim, Deger: parseDataArray[6].ForexBuying})
    } else if(firstMoneyInput.value.trim() === "kuveyt dinarı"){
        exchangingMoneys.push({Isim: parseDataArray[8].Isim, Deger: parseDataArray[8].ForexBuying})
    } else if(firstMoneyInput.value.trim() === "iran riyali"){
        exchangingMoneys.push({Isim: parseDataArray[15].Isim, Deger: parseDataArray[15].ForexBuying})
    } else if(firstMoneyInput.value.trim() === "çin yuanı"){
        exchangingMoneys.push({Isim: parseDataArray[16].Isim, Deger: parseDataArray[16].ForexBuying})
    } else if(firstMoneyInput.value.trim() === "katar riyali"){
        exchangingMoneys.push({Isim: parseDataArray[18].Isim, Deger: parseDataArray[18].ForexBuying})
    } else if(firstMoneyInput.value.trim() === "azerbaycan yeni manatı"){
        exchangingMoneys.push({Isim: parseDataArray[20].Isim, Deger: parseDataArray[20].ForexBuying})
    } else if(firstMoneyInput.value.trim() === "birleşik arap emirlikleri dirhemi"){
        exchangingMoneys.push({Isim: parseDataArray[21].Isim, Deger: parseDataArray[21].ForexBuying})
    }

    if(secondMoneyInput.value.trim() === "pakistan rupisi"){
        exchangingMoneys.push({Isim: parseDataArray[17].Isim, Deger: parseDataArray[17].ForexBuying})
    } else if(secondMoneyInput.value.trim() === "ingiliz sterlini"){
        exchangingMoneys.push({Isim: parseDataArray[4].Isim, Deger: parseDataArray[4].ForexBuying})
    } else if(secondMoneyInput.value.trim() === "danimarka kronu"){
        exchangingMoneys.push({Isim: parseDataArray[2].Isim, Deger: parseDataArray[2].ForexBuying})
    } else if(secondMoneyInput.value.trim() === "isviçre frangı"){
        exchangingMoneys.push({Isim: parseDataArray[5].Isim, Deger: parseDataArray[5].ForexBuying})
    } else if(secondMoneyInput.value.trim() === "isveç kronu"){
        exchangingMoneys.push({Isim: parseDataArray[6].Isim, Deger: parseDataArray[6].ForexBuying})
    } else if(secondMoneyInput.value.trim() === "kuveyt dinarı"){
        exchangingMoneys.push({Isim: parseDataArray[8].Isim, Deger: parseDataArray[8].ForexBuying})
    } else if(secondMoneyInput.value.trim() === "iran riyali"){
        exchangingMoneys.push({Isim: parseDataArray[15].Isim, Deger: parseDataArray[15].ForexBuying})
    } else if(secondMoneyInput.value.trim() === "çin yuanı"){
        exchangingMoneys.push({Isim: parseDataArray[16].Isim, Deger: parseDataArray[16].ForexBuying})
    } else if(secondMoneyInput.value.trim() === "katar riyali"){
        exchangingMoneys.push({Isim: parseDataArray[18].Isim, Deger: parseDataArray[18].ForexBuying})
    } else if(secondMoneyInput.value.trim() === "azerbaycan yeni manatı"){
        exchangingMoneys.push({Isim: parameter[20].Isim, Deger: parseDataArray[20].ForexBuying})
    } else if(secondMoneyInput.value.trim() === "birleşik arap emirlikleri dirhemi"){
        exchangingMoneys.push({Isim: parseDataArray[21].Isim, Deger: parseDataArray[21].ForexBuying})
    }

    console.log(exchangingMoneys);

    let exchangingMoneysRate = [exchangingMoneys[0].Deger, exchangingMoneys[1].Deger];

    console.log(exchangingMoneysRate);

    let calculateMoneyRates = exchangingMoneysRate.reduce(function(parameterOne, parameterTwo){
        return parameterOne / parameterTwo;
    });

    secondDynamicValue.textContent = `1 ${exchangingMoneys[0].Isim} şu an takribî ${calculateMoneyRates.toPrecision(3)} ${exchangingMoneys[1].Isim} eder.`;
});