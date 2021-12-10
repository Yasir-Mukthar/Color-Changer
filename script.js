function ColorChanger(x) {
    let clr = document.getElementsByClassName("clr");
    switch (x) {
        case '1': document.body.style.background = "black";

            for (let elm of clr) {
                elm.style.color = "white";
            }
            break;
        case '2':
            document.body.style.background = "white";

            for (let elm of clr) {
                elm.style.color = "black";
            }
            break;
        case '3': document.body.style.background = "red";

            for (let elm of clr) {
                elm.style.color = "yellow";
            }
            break;
        case '4': document.body.style.background = "green";

            for (let elm of clr) {
                elm.style.color = "white";
            }
            break;
    }

}