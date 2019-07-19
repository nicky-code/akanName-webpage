    function akanName() {
        var MM = parseFloat(document.getElementById('month').value);
        var DD = parseFloat(document.getElementById('day').value);
        var YY = parseFloat(document.getElementById('year').value);
        var CC = (YY - 1) / 100 + 1;
        var dayoftheweek = (CC / 4 - 2 * CC - 1 + 5 * YY / 4 + (26 * (MM + 1) / 10) + DD) % 7;
        console.log(dayoftheweek);


        var men = ["Kwasi", "Kwaduo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
        var women = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
        var selection = document.getElementById('selector').value;
        if (((DD < 0) || (DD >= 31)) && ((MM <= 1) || (MM >= 12))) {
            alert("Please enter a valid date");
        } else {

            if (selection === "male") {
                console.log(men[Math.round(dayoftheweek)]);

                document.getElementById('ghanian').innerHTML = men[Math.round(dayoftheweek)];
            } else if (selection === "female") {
                console.log(women[Math.round(dayoftheweek)]);

                document.getElementById('ghanian').innerHTML = women[Math.round(dayoftheweek)];

            } else {
                console.log("invalid output");
            }

        }




    }