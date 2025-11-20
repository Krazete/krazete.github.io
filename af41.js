(function () {
    var kzn = document.createElement("div");
    kzn.innerHTML = "Join KZN";
    kzn.style.position = "fixed";
    kzn.style.left = "0";
    kzn.style.bottom = "0";
    kzn.style.textTransform = "none";
    kzn.style.fontFamily = "monospace";
    kzn.style.background = "black";
    kzn.style.color = "pink";
    kzn.style.opacity = 0.67;
    kzn.style.padding = "1px 3px";
    kzn.style.borderRadius = "0 4px 0 0";
    kzn.style.fontSize = "10px";
    kzn.style.zIndex = "630";
    kzn.style.pointerEvents = "none";
    document.body.appendChild(kzn);
    
    var dt = new Date;
    var month = dt.getMonth() + 1;
    var day = dt.getDate();
    var afstyle, outer41;

    function endJoke() {
        outer41.remove();
        afstyle.remove();
    }

    function closeSite(note) {
        afstyle = document.createElement("style");
        afstyle.innerHTML = `#af41 {
    background-color: rgba(0, 0, 0, 0.5);
    text-transform: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 1;
}
#af41 h1 {
    text-shadow: none;
}
#square41 {
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 700;
    color: #000;
    background-image: radial-gradient(rgba(255, 255, 255, 0.5) 50%,transparent);
    position: relative;
    width: 90%;
    margin: auto;
    text-align: center;
    text-shadow: none;
    padding: 5px 0;
    border-radius: 0 0 15vmin 15vmin;
    overflow: hidden;
    box-shadow: 0 0 200px #000, 0 0 400px #000, 0 0 600px #000;
}
#swapper41:before {
    content: '';
    background-image: url(https://i.imgur.com/yjJpwZS.png);
    background-size: cover;
    background-position: center 57%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    pointer-events: none;
    opacity: 0.5;
}
#swapper41:hover:before {
    background-image: url(https://i.imgur.com/UKDCcz0.png);
}
#swapper41 .x41,
#swapper41:hover .y41 {
    display: initial;
}
#swapper41 .y41,
#swapper41:hover .x41 {
    display: none;
}
#swapper41 .x41 .im41,
#swapper41 .y41 .im41 {
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 47vw;
}
@media all and (orientation:portrait) {
    #swapper41 .x41 .im41 {
        background-image: url(https://i.imgur.com/VHrx9dt.png);
    }
    #swapper41 .y41 .im41 {
        background-image: url(https://i.imgur.com/564Q09s.png);
    }
}
@media all and (orientation:landscape) {
    #swapper41 .x41 .im41 {
        background-image: url(https://i.imgur.com/bEDoTFD.png);
        height: 29vw;
    }
    #swapper41 .y41 .im41 {
        background-image: url(https://i.imgur.com/6Pahxgq.png);
        height:29vw;
    }
}
#note41 {
    font-size: small;
}
#close41 {
    background-color: rgba(255, 255, 255, 0.3);
    padding: 5px 0;
    margin-top: 10px;
    cursor: pointer;
}`;
        document.body.appendChild(afstyle);

        outer41 = document.createElement("div");
        outer41.id = "af41";
        var inner41 = document.createElement("div");
        inner41.id = "square41";
        inner41.innerHTML = `<h1>SITE CLOSED</h1>
<p>This website will remain closed until a Kizuna AI variant is added to SGM.</p>
<div id="swapper41">
    <div class="x41">
        Take your pick, devs.
        <div class="im41"></div>
    </div>
    <div class="y41">
        I'll accept Black AI too.
        <div class="im41"></div>
    </div>
</div>`;
        var note41 = document.createElement("div");
        note41.id = "note41";
        note41.innerHTML = note || "";
        inner41.appendChild(note41);
        var close41 = document.createElement("div");
        close41.id = "close41";
        close41.innerHTML = "[OK] / [Cancel]";
        close41.addEventListener("click", endJoke);
        inner41.appendChild(close41);
        outer41.appendChild(inner41);
        document.body.appendChild(outer41);
    }

    if (month == 4 && day == 1) {
        closeSite();
    }
    else if ("Intl" in window) {
        var tzs = [
            "Pacific/Kiritimati",
            "Pacific/Kanton",
            "Pacific/Fiji",
            "Pacific/Bougainville",
            "Australia/Brisbane",
            "Asia/Tokyo",
            "Asia/Manila",
            "Asia/Jakarta",
            "Asia/Dhaka",
            "Asia/Tashkent",
            "Asia/Dubai",
            "Europe/Moscow",
            "Africa/Tripoli",
            "Africa/Algiers",
            "Etc/GMT",
            "Atlantic/Cape_Verde",
            "Atlantic/South_Georgia",
            "America/Sao_Paulo",
            "America/Puerto_Rico",
            "America/Jamaica",
            "America/Guatemala",
            "America/Whitehorse",
            "Pacific/Pitcairn",
            "Pacific/Gambier",
            "Pacific/Honolulu",
            "Pacific/Pago_Pago",
            "Etc/GMT+12"
        ];

        function formatTz(tz) {
            return tz.split("/").pop().replace(/_/g, " ").replace("GMT+12", "the International Date Line West").replace("GMT", "Greenwich");
        }

        if (month == 3 && day >= 30) {
            for (var i = tzs.length - 1; i >= 0; i--) {
                var tzdt = Intl.DateTimeFormat("en-US", {timeZone: tzs[i]}).format();
                if (tzdt.startsWith("4/1/")) {
                    closeSite("Note: It's already April in " + formatTz(tzs[i]) + ".");
                    break;
                }
            }
        }
        else if (month == 4 && day <= 3) {
            for (var i = 0; i < tzs.length; i++) {
                var tzdt = Intl.DateTimeFormat("en-US", {timeZone: tzs[i]}).format();
                if (tzdt.startsWith("4/1/")) {
                    closeSite("Note: It's still the 1st in " + formatTz(tzs[i]) + ".");
                    break;
                }
            }
        }
    }
})();
