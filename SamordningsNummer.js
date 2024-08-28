const samordningsnummer1 = "20000012-1234";
const samordningsnummer2 = "20001202-1234";

const PATTERN = /(\d{6}|\d{8})-?\d{4}/;
const DEFAULT_CENTURY = "19";
const VALID_CENTURIES = ["18", "19", "20"];
let extension = "";

// constructor
function SamordningsNummer(number){
    if(isValid(number)){
        extension = createExtension(number);

        console.log(`extension = ${extension}`);
    }
    else {
        console.log("ERROR: Invalid samordningsnummer" + number + ".");
    }
}

function isValid(number){
    if(number === null || !matchesPattern(number)){
        return false;
    }
    // todo: temporay: pre-check
    number = removeDashes(number);

    if(!samordningsNummerHasValidCentury(number) || !samordningsNummerHasValidDate(number) ){
        return false;
    }

    else return true;
}

function matchesPattern(number){
    return PATTERN.test(number);
}

function createExtension(number){
    number = removeDashes(number);
    return addDefaultCentury(number);
}

function addDefaultCentury(number){
    if(number.length === 10){
        number = DEFAULT_CENTURY + number;
    }
    return number;
}

function removeDashes(number){
    return number.replace("-", "");
}

function samordningsNummerHasValidCentury(number){
    if(number.length === 12){
        let century = number.substring(0, 2);

        // Ivo anm: konverterat till att passa JS, se rad 53 i SamordningsNummer.java
        return VALID_CENTURIES.indexOf(century) !== -1;
    }
}

function samordningsNummerHasValidDate(number){
    let date = "";
    if(number.length === 10) {
        date = DEFAULT_CENTURY + number.substring(0, 6);
    }
    else {
        date = number.substring(0, 8);
    }
    // månad: 01-12
    let month = date.substring(4, 6);
    if(!parseInt(month) > 0 || !parseInt(month) < 13)
        return false;

    // dag: 31-91; ingen kontroll om månad får ha 28, 29, 30 eller 31 dagar
    let date = new Date(Date.UTC(2020,11, ))

}


let result = new SamordningsNummer(samordningsnummer1);


