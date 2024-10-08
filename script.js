const grid = document.querySelector('#grid'), 
items = document.querySelector('#items'),
clear = document.querySelector('#clear'), 
GridSizeBtn = document.querySelector('#GridSize'),
fragment = document.createDocumentFragment(),
DivGrid = document.querySelector('#GridDiv'),
btn = document.querySelector('#buttons')
let height = 16, width = 16, LW = height * width, i = 0,
the = 0,
Box = 300, GridNum = 16 //changes based on whats input
let DivSize = Box/GridNum
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
function ChangeGridSize1() {
    let GridPrompt = prompt('type a number from 2 and 100'),
    GridPromptNum = Number(GridPrompt),
    i = 0
    DivSize = Box/GridPromptNum
    height = GridPromptNum
    width = GridPromptNum
    GridNum = GridPromptNum
    LW = GridPromptNum * GridPromptNum
    console.log(i, height, width, GridNum)
    if (i == 0 && GridPromptNum > 1 && GridPromptNum < 101){
        while (grid.firstChild) {
            grid.removeChild(grid.firstChild)
            i--
        }
        ChangeGridSize2 ()
    }
 }

btn.addEventListener('click', (event) => {
    let target = event.target
    switch(target.id) {
        case 'GridSize':
            ChangeGridSize1()
    }
})
function ChangeGridSize2 () {
        while (i > 0) {
            const Div = document.createElement('div')
            Div.className = 'GridDiv'
            i--
            grid.appendChild(Div)
        }
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
                        ClearBackgroundColor(Div)
                        break
                }
        })
            ChangeBackgroundColor(Div)
        }
}
