//Email validation
function IsValidEmail(email) {
    if (email.indexOf("@") == -1)//Condition to check @ if present it returns positive value else returns -1
        return false;

    var parts = email.split("@");//Here string is spited and stored in array 
    var dot = parts[1].indexOf(".");//1 index is for right side of @.
    var len = parts[1].length;
    var dotSplits = parts[1].split(".");//Here string splitted as per the dot position. 

    //Check whether Dot is present, and that too minimum 1 character after @.
    if (dot == -1 || dot < 2) {
        return false;
    }

    //Check whether Dot is not the last character and dots are not repeated.
    for (var i = 0; i < dotSplits.length; i++) {
        if (dotSplits[i].length == 0) {
            return false;
        }
    }
    return true;
};



//Mobile validation
function isValidateMobileNo() {
    var mobile = document.getElementById("mobile").value;
    mobile = mobile.replace(/\D/g, '');
    var isOperatorValid=false;
    var operatorDigits = mobile.substring(0, 3);
    if (operatorDigits >= 621 && operatorDigits <= 799) {
        isOperatorValid=true;
    } else if (operatorDigits >= 801 && operatorDigits <= 999) {
        isOperatorValid=true;
    } else {
        isOperatorValid=false;
    }

    var stateCode = mobile.substring(3, 6);
    var isStateCodeValid=false;
    if (stateCode >= 401 && stateCode <= 436) {
        isStateCodeValid=true;
    }else
    {
        isStateCodeValid=false;
    }

    return isOperatorValid && isStateCodeValid;
}
// function for mobile formating.
function mobileFormat(input) {
    //Array containing states
    var states = {
        401: "Maharashtra", 402: "Gujrat", 403: "Andhra Pradesh", 404: "Tamil Nadu", 405: "Panjab",
        406: "Arunachal Pradesh", 407: "Kerala", 408: "Karnatak", 409: "Manipur", 410: "Mizoram",
        411: "Madhya Pradesh", 412: "Haryana", 413: "Bihar", 414: "Chhatisgarh", 415: "Goa",
        416: "Rajasthan", 417: "West Bengal", 418: "Uttrakhand", 419: "Uttar Pradesh", 420: "Tripura",
        421: "Odisha", 422: "Telangana", 423: "Nagaland", 424: "Sikkim", 425: "Meghalaya", 426: "Assam",
        427: "Jharkhand", 428: "Himachal Pradesh", 429: "Andman and Nicobar Island",
        430: "Chandigarh", 431: "Dadar and Haveli and Daman and Diu",
        432: "Delhi", 433: "Jammu and Kashmir", 434: "Ladakh", 435: "Lakshdweep", 436: "Puducherry"
    };

    // Replace nondigit character by '' 
    input = input.replace(/\D/g, '');// \D A character is not a digit
    console.log(input);
    //Condition for check and print the service oprator according to range.
    //First 3 digit shows the service oprator
    var operatorDigits = input.substring(0, 3);
    console.log("operatorDigits:" + operatorDigits);

    if (operatorDigits >= 621 && operatorDigits <= 799) {
        document.getElementById("operator").innerHTML = "Reliance JIO";
    } else if (operatorDigits >= 801 && operatorDigits <= 920) {
        document.getElementById("operator").innerHTML = "Idea";
    } else if (operatorDigits >= 921 && operatorDigits <= 999) {
        document.getElementById("operator").innerHTML = "Vodafone";
    } else {

    }

    // Place the remaining input to ten characters, to show the phone number format
    input = input.substring(0, 10);
    console.log(input);

    var size = input.length;
    console.log("size:" + size)
    if (size == 0) {
        input = input;
    } else if (size < 4) {
        input = '(' + input;
    } else if (size < 7) {
        //Next 3 digit shows the States
        var stateCode = input.substring(3, 6);
        console.log("stateCode" + stateCode);
        document.getElementById("state").innerHTML = states[stateCode];
        input = '(' + input.substring(0, 3) + ') - ' + stateCode;
    } else {
        input = '(' + input.substring(0, 3) + ') - ' + input.substring(3, 6) + ' - ' + input.substring(6, 10);
        console.log("else" + input);
    }
    return input;
}
//Event Listener on keyup 
document.getElementById('mobile').addEventListener('keyup', function (evt) {
    var phoneNumber = document.getElementById('mobile');
    phoneNumber.value = mobileFormat(phoneNumber.value);
});
