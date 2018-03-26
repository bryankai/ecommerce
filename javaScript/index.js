document.addEventListener('DOMContentLoaded', function(){

  const productsGrid = document.querySelector('.products-grid')

  const grid = document.createElement('div')
  grid.classList.add('grid')
  productsGrid.appendChild(grid)

  for (var numOfGridItems = 0; numOfGridItems < 8; numOfGridItems++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    const gridInner = document.createElement('div')
    gridInner.classList.add('grid-inner')
    const gridInnerText = document.createElement('div')
    const gridInnerImg = document.createElement('div')
    gridInner.appendChild(gridInnerText)
    gridInner.appendChild(gridInnerText)
    gridItem.appendChild(gridInner)
    grid.appendChild(gridItem)
  }



})
