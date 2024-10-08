const grid = document.querySelector('#grid'), 
btn = document.querySelector('#buttons'),
clear = document.querySelector('#clear'), 
GridSizeBtn = document.querySelector('#GridSize'),
fragment = document.createDocumentFragment()
let height = 16, width = 16, LW = height * width, i = 0,
Box = 300, GridNum = 16, DivItem //changes based on whats input
let DivSize = Box/GridNum, GridSizePrompt = prompt('type a number between 2 and 100:')
while (i < LW ) {
    const Div = document.createElement('div') //parent = grid
    Div.className = 'GridDiv'// min-height: 3px; min-width: 10px; max-height: 30.75px; max-width: 300.75px;
    Div.style.backgroundColor = 'white'
    Div.style.height = `${DivSize}px`
    Div.style.width = `${DivSize}px`
    Div.style.flexGrow = '1'
    Div.style.flexShrink = '1'
    grid.appendChild(Div)
    //const GridDiv = document.querySelector('#GridDiv')
    i++
    btn.addEventListener('click', (event) => {
        let target = event.target
        switch(target.id) {
            case 'clear':
                BGC = 'white'
                ClearBackgroundColor(Div)
                break
        }
    })
        ChangeBackgroundColor(Div)
}
function ChangeBackgroundColor(x) {
    x.addEventListener('mouseenter', () => {
        x.style.backgroundColor = 'black'
    })
} 
function ClearBackgroundColor(x) {
    x.style.backgroundColor = 'white'
}
function ChangeGridSize (x) {
    if (GridSizePrompt > 1 && GridSizePrompt < 101)
}