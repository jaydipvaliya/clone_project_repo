var txt = document.querySelector(".txt");
var btn = document.querySelector(".btn");
var data1 = document.querySelector(".dataContain");

function loadApiKey() {
    fetch(`https://api.mfapi.in/mf/search?q=${txt.value}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data1.innerHTML = "";   

            for (let i = 0; i < 15 && i < data.length; i++) {
                let p1 = document.createElement("p");
                p1.textContent = "Code: " + data[i].schemeCode;
                p1.style.color = "green";

                let p2 = document.createElement("p");
                p2.textContent = "Name: " + data[i].schemeName;
                p2.style.color = "brown";

                let div = document.createElement("div");
                div.appendChild(p1);
                div.appendChild(p2);

                data1.appendChild(div);
            }
        })
        .catch(err => console.error("Error:", err));
}

btn.addEventListener("click", loadApiKey);
