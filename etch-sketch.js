makeGrid = (gridSize) => {
    let pageContainer = document.createElement("div");
    pageContainer.style.width = "100%";
    pageContainer.style.height = "960px";
    for (let i = 0; i < gridSize; i++) {
        let container = document.createElement("div");
        container.style.height = "10%";
        container.style.width = "100%";
        container.style.display = "flex";
        container.style.border = "solid";

        for (let j = 0; j < gridSize; j++) {
            let box = document.createElement("div");
            box.style.border = "solid";
            box.style.flexGrow = "5";
            box.addEventListener("mouseover", function (e) {
                if (box.style.backgroundColor != "black") {
                    box.style.backgroundColor = "gray";
                }
                if (e.buttons != 0) {
                    box.style.backgroundColor = "black";
                }
            });
            box.addEventListener("mouseleave", function () {
                if (box.style.backgroundColor != "black") {
                    box.style.backgroundColor = "white";
                }
            });
            box.addEventListener("click", function () {
                box.style.backgroundColor = "black";
            });
            container.appendChild(box);
        }
        pageContainer.appendChild(container);
    } 
    document.body.appendChild(pageContainer);
}

makeUI = (size) => {
    let clearButton = document.createElement("button");
    clearButton.innerHTML = "CLEAR";
    clearButton.style.height = "75px";
    clearButton.style.width = "200px";
    clearButton.addEventListener("click", function () {
        document.body.innerHTML = "";
        let newSize = -1;
        while (newSize >= 100 || newSize < 25 || newSize == NaN) {
            newSize = prompt("Enter new grid size from 25 - 100");
        }
        makeUI(newSize);
    });
    document.body.appendChild(clearButton);
    makeGrid(size);
}
    

makeUI(50);