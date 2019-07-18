    function akanName() {
        var MM = parseFloat(document.getElementById('month').value);
        var DD = parseFloat(document.getElementById('day').value);
        var YY = parseFloat(document.getElementById('year').value);
        var CC = (YY - 1) / 100 + 1;
        var dayOftheweek = (CC / 4) - 2 * CC - 1 + 5 * YY / 4 + 26 * (MM + 1) / 10 + DD) % 7;
    console.log(dayOftheweek);
    document.getElementById('result').innerHTML = Math.round(dayOftheweek);

    var men = ["Kwasi", "Kwaduo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var women = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var selection = document.getElementById('selector').value;

    if (selection === "male") {
        console.log(men[Math.round(dayOftheweek)]);

        document.getElementById('ghanian').innerHTML = men[Math.round(dayOftheweek)];

    } else if (selection === "female") {
        console.log(women[Math.round(dayOftheweek)]);

        document.getElementById('ghanian').innerHTML = women[Math.round(dayOftheweek)];

    } else {
        console.log("invalid output");
    }


    }