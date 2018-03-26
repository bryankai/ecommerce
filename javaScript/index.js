document.addEventListener('DOMContentLoaded', function(){

  const meat = document.querySelector('.meat')

  const grid = document.createElement('div')
  grid.classList.add('grid')
  meat.appendChild(grid)

  for (var numOfGridItems = 0; numOfGridItems < 8; numOfGridItems++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    const gridInner = document.createElement('div')
    gridInner.classList.add('grid-inner')
    gridInner.innerHTML = numOfGridItems + 1
    gridItem.appendChild(gridInner)
    grid.appendChild(gridItem)
  }



})
