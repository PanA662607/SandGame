import { sand }  from "elements/sand.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d")

var elements = [];
elements.push(new sand(50, 25))
//loop
function draw()
{
    for(i = 0; i < elements.length; i++)
    {
        ctx.fillRect(elements[i].x, elements[i].y, elements[i].x + 1, elements[i].y + 1);
    }
}