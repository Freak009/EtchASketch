function getRandomColor()
{
    const hex="0123456789ABCDEF";
    color="#";
    for(let i=0;i<6;i++)
    {
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
}

function updateGrid()
{
    const gridcontainer=document.getElementById("grid-container");
    const rows=document.getElementById("rows").value;
    const cols=document.getElementById("columns").value;
    gridcontainer.innerHTML='';

    gridcontainer.style.gridTemplateColumns=`repeat(${cols},1fr)`;
    gridcontainer.style.gridTemplateRows=`repeat(${rows},1fr)`;

        for (let i = 0; i < rows*cols; i++) 
        {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.addEventListener("mouseover",()=>handleGridItemHover(gridItem));
            gridcontainer.appendChild(gridItem);
        }
        
}
function eraseOrDraw(mode)
{
    currentmode=mode;
    const drawbtn=document.getElementById("drawbtn");
    const erasebtn=document.getElementById("erasebtn");
    if(mode === 'draw')
    {
        drawbtn.style.backgroundColor="#ccc";
        erasebtn.style.backgroundColor="";
    }
    else if(mode==='erase')
    {
        drawbtn.style.backgroundColor="";
        erasebtn.style.backgroundColor="#ccc";
    }
}
function handleGridItemHover(gridItem)
{
    if(currentmode ==='draw')
    {
        gridItem.style.backgroundColor=getRandomColor();
    }
    else
    {
        gridItem.style.backgroundColor="#ffffffb1"
    }
}
function resetGrid()
{
    const gridItems=document.querySelectorAll(".grid-item");
    gridItems.forEach(item => {item.style.backgroundColor='#ffffffb1';});

}
window.onload=updateGrid;