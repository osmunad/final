function ready(){
    console.log("ready");

    go.onclick = function(){
    let yee = document.forms.choose;
    let fishing = yee.type.value;
    let fish = yee.species.value;
    let toy = yee.season.value;
    let tem = yee.temp.value;
    let final_lure = "";
    if(fishing == "ice" && fish == "trout" && (tem == "freezing" || tem == "cold")) {
        final_lure = "jig";
    }

    if(fishing == "ice" && fish == "trout" && (tem == "moderate" || tem == "hot")) {
        final_lure = "Sweedish Pimple";
    }

    if(fishing == "spin" && fish == "trout" && (tem == "Moderate" || tem == "hot")) {
        final_lure = "Crank-bait, spoon";    }

    if(fishing == "spin" && fish == "trout" && (tem == "freezing" || tem == "cold")) {
        final_lure = "Spinner, Kastmaster";
    }

    if(fishing == "fly" && fish == "trout" && toy == "spring" && (tem == "freezing" || tem == "cold" || tem == "moderate")) {
        final_lure = "midge, nymphs, streamers";
    }

    if(fishing == "fly" && fish == "trout" && ((toy == "summer") || ((toy == "spring")&& (tem == "hot")))) {
        final_lure = "caddis, green drake, parachute atoms";
    }

    if(fishing == "fly" && fish == "trout" && toy == "fall") {
        final_lure = "midge, nymphs, streamers";
    }

    if(fishing == "fly" && fish == "trout" && toy == "winter" && (tem == "freezing" || tem == "cold" || tem == "moderate")) {
        final_lure = "midge, nymphs, streamers";
    }
    
    if(fishing == "ice" && fish == "bass" && (tem == "freezing" || tem == "cold")) {
        final_lure = "Jig";
    }

    if(fishing == "ice" && fish == "bass" && (tem == "moderate" || tem == "hot")) {
        final_lure = "Sweedish Pimple";
    }

    if(fishing == "spin" && fish == "bass" && (toy == "spring" || toy == "summer")) {
        final_lure = "Senko, Topwater";
    }

    if(fishing == "spin" && fish == "bass" && (toy == "fall" || toy == "winter")) {
        final_lure = "Spinner-bait, Swim-jig";
    }

    if(fishing == "fly" && fish == "bass" && toy == "spring" && (tem == "freezing" || tem == "cold" || tem == "moderate")) {
        final_lure = "midge, nymphs, streamers";
    }

    if(fishing == "fly" && fish == "bass" && toy == "summer") {
        final_lure = "caddis, green drake, parachute atoms";
    }

    if(fishing == "fly" && fish == "bass" && toy == "fall") {
        final_lure = "midge, nymphs, streamers";
    }

    if(fishing == "fly" && fish == "bass" && toy == "winter") {
        final_lure = "midge, nymphs, streamers";
    }
    // I learned how to take a variable from a drop down menu, then output
    // an answer based on multiple variables. The code below takes the 
    // final_lure, and insets it into a paragraph with an id of final_lure.
    document.getElementById("final").textContent = final_lure;

    }
};
document.addEventListener("DOMContentLoaded", ready);
