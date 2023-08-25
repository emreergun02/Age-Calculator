function ageCalculator() {
    var dayInput = document.querySelector("#day").value;
    console.log(dayInput);
    var monthInput = document.querySelector("#month").value;
    console.log(monthInput);
    var yearInput = document.querySelector("#year").value;
    console.log(yearInput);
    console.log("Your Birthday is " + dayInput + "." + monthInput + "." + yearInput);
    var date = new Date();
    var dayOutput = date.getDate();
    var monthOutput = 1 + date.getMonth();
    var yearOutput = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (dayInput > dayOutput) {
        dayOutput = dayOutput + month[monthOutput - 1];
        monthOutput = monthOutput - 1;
    }
    
    if (monthInput > monthOutput) {
        monthOutput = monthOutput + 12;
        yearOutput = yearOutput - 1;
    }

    if (yearInput > yearOutput || monthInput < 1 || monthInput > 12 || dayInput < 1 || dayInput > 31) {
        document.querySelector("#age").style.display = "none";
        document.querySelector("#wrong").style.display = "block";
        document.querySelector("#wrong").innerHTML = "You entered wrong date ! Please try again.";
        console.log(document.querySelector("#wrong").innerHTML);
    }

    else {
        var day = dayOutput - dayInput;
        var month = monthOutput - monthInput;
        var year = yearOutput - yearInput;
        document.querySelector("#age").style.display = "block";
        document.querySelector("#wrong").style.display = "none";
        document.querySelector("#age").innerHTML = "Your Age is " + year + " Years " + month + " Months " + day + " Days ";
        console.log(document.querySelector("#age").innerHTML);
    }
}