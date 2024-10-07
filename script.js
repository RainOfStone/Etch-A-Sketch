const grid = document.querySelector('#grid'), 
red = document.querySelector('#red'), 
orange = document.querySelector('#orange'),
yellow = document.querySelector('#yellow'),
green = document.querySelector('#green'),
blue = document.querySelector('#blue'),
purple = document.querySelector('#purple'),
GridSizeBtn = document.querySelector('#GridSize'),
fragment = document.createDocumentFragment()
let height = 100, width = 100, LW = height * width, i = 0,
Box = 300, GridNum = 100, DivItem //changes based on whats input
let DivSize = Box/GridNum
while (i < LW ) {
    const Div = document.createElement('div') //parent = grid
    Div.className = 'GridDiv'// min-height: 3px; min-width: 10px; max-height: 30.75px; max-width: 300.75px;
    Div.style.backgroundColor = 'red'
    Div.style.height = `${DivSize}px`
    Div.style.width = `${DivSize}px`
    Div.style.flexGrow = '1'
    Div.style.flexShrink = '1'
    grid.appendChild(Div)
    //const GridDiv = document.querySelector('#GridDiv')
    i++
        ChangeBackgroundColor(Div)
}
function ChangeBackgroundColor(x) {
    x.addEventListener('mouseenter', () => {
        x.style.backgroundColor = 'black'
    })
} 