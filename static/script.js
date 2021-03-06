"use strict";

var monthsArr;

monthsArr = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

function selectMonth(){
    let strDate, dateArr, strMonth, strID;

    strID = "month";
    strDate = String(document.getElementById(strID).value);
    dateArr = strDate.split("-");
    strMonth = monthsArr[parseInt(dateArr[1]) - 1];
    strDate = strMonth.concat("/", dateArr[0]);
    document.getElementById("boxMesIterativo").style.display = "block";
    document.getElementById("mesIterativo").innerHTML = strDate;

    daysBoxes(parseInt(dateArr[1]), dateArr[0]);
    
    cleanValues(strID);
}

function cleanValues(pID){
    document.getElementById(pID).value = "";
}

function daysBoxes(pMonth, pYear){
    let intDays, boolBisiesto, strYear, intPrimerDiaMes;
    strYear = pYear;
    pYear = parseInt(pYear);

    boolBisiesto = (pYear % 4) == 0;

    switch(pMonth){
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            intDays = 31;
            break;
        case 4:
        case 6:
        case 9:
        case 11:
            intDays = 30;
            break; 
        case 2:
            intDays = (boolBisiesto) ? 29:28;
            break;       
    }



    
}