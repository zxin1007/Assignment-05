
const grids = document.querySelector(".grids")
const gridRow = document.querySelector(".grid-row")
const gridColumn = document.getElementsByClassName("grid-column")
let color
let boxes
let click = false

function addRow(){
    if (grids.children.length===0){
        const newRow = document.createElement("div")
        newRow.classList.add("grid-row")
        grids.appendChild(gridRow)
    }
    const row = document.createElement("div")
    row.classList.add("box")
    gridRow.appendChild(row)

    if(gridColumn.length>0){
        for (let column of gridColumn){
            const c = document.createElement("div")
            c.classList.add("box")
            column.appendChild(c)
        }
    }
}

function addColumn(){
    if (gridRow.children.length===0){
        addRow()
    } else{
        const newColoumn = document.createElement("div")
        newColoumn.classList.add("grid-column")

        let index = 0
        while (index<gridRow.children.length){
            const c = document.createElement("div")
            c.classList.add("box")
            newColoumn.appendChild(c)
            index+=1
        }

        grids.appendChild(newColoumn)
    }
}

function removeRow(){

    if (gridRow.children.length===1){

        let count =gridColumn.length-1
        while(count>=0){
            grids.removeChild(gridColumn[count])
            count =gridColumn.length-1
        }
        gridRow.removeChild(gridRow.children[0])
        grids.removeChild(gridRow)
    } else if (gridRow.children.length>1){
        const row = document.querySelectorAll(".grid-row .box")
        gridRow.removeChild(row[row.length-1])
    
        for (let r of gridColumn){
            r.removeChild(r.children[r.children.length-1])
        }
    }
}

function removeColumn(){
    if (gridColumn.length===0 && grids.children.length!=0){

        let count = gridRow.children.length-1
        while(count>=0){
            gridRow.removeChild(gridRow.children[count])
            count = gridRow.children.length-1
        }
        grids.removeChild(gridRow)
    }else if(gridColumn.length>0){
        grids.removeChild(gridColumn[0])
    }
}

function getBox(){
    boxes = document.getElementsByClassName("box")
    for (let box of boxes){
        box.addEventListener('click', function(){
            box.style.backgroundColor = document.querySelector("#colors").value
        })

        box.addEventListener("mouseup", function(){
            click = false
        });
		box.addEventListener("mousedown", function(){
            click = true
            box.style.backgroundColor =  document.querySelector("#colors").value
        });
		box.addEventListener("mouseover", function(){
            if (click){
                box.style.backgroundColor =  document.querySelector("#colors").value
            }
        });
    }
}


setInterval(getBox,1000) //check for new box and click and mouseover

function fillAllUncolored(){
    color = document.querySelector("#colors").value
    for (let box of boxes){
        if (!box.style.backgroundColor){
            box.style.backgroundColor = color
        }
    }
}

function fillAllColor(){
    color = document.querySelector("#colors").value
    for (let box of boxes){
        box.style.backgroundColor = color
    }
}

function clearAllColors(){
    for (let box of boxes){
        box.style.backgroundColor = ""
    }
}