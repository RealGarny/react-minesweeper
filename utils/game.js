export function sCreateGrid(gRows, gCols, gMines)
{
  let tempCells = [];
  //generating grid
  for(let rows = 0; rows < gRows; rows++)
  {
    tempCells.push([]);//create an array for every row
    for(let cols = 0; cols < gCols; cols++)
    {
      tempCells[rows].push({x: rows, y: cols, hasBomb: false, value: 0, isRevealed:false, flag:0});//create an object for every cell in the column
    }
  }

  //generating mines
  for(let i = 0; i < gMines; i++)
  {
    const randomRow = Math.floor(Math.random() * gRows);
    const randomCol = Math.floor(Math.random() * gCols);

    const cell = tempCells[randomRow][randomCol];

    if(cell.hasBomb)
    {
      i--;
    }else
    {
      cell.hasBomb = true;
      //generate numbers
      //linear
      if(randomRow-1 >= 0) {tempCells[randomRow-1][randomCol].value += 1;}
      if(randomRow + 1 < tempCells.length) {tempCells[randomRow+1][randomCol].value += 1;}
      if(randomCol-1 >= 0) {tempCells[randomRow][randomCol-1].value += 1;}
      if(randomCol + 1 < tempCells[randomRow].length) {tempCells[randomRow][randomCol+1].value += 1;}
      //diagonal
      //top left
      if(randomRow-1 >=0 && randomCol-1 >=0){tempCells[randomRow-1][randomCol-1].value+=1}
      //top right
      if(randomRow+1 < tempCells.length && randomCol-1 >= 0){tempCells[randomRow+1][randomCol-1].value+=1}
      //bottom right
      if(randomRow+1 < tempCells.length && randomCol+1 < tempCells[randomRow+1].length){tempCells[randomRow+1][randomCol+1].value+=1}
      //bottom left
      if(randomRow-1 >=0 && randomCol+1 < tempCells[randomRow-1].length){tempCells[randomRow-1][randomCol+1].value+=1}
    }
  }
  return(tempCells)
}

export function openNearbyCells(cell, open, table)
{
    let nearbyCells = [];
    //linear
    if(cell.x-1 >= 0) {nearbyCells.push(gGrid[cell.x-1][cell.y])}
    if(cell.x + 1 < gGrid.length) {nearbyCells.push(gGrid[cell.x+1][cell.y])}
    if(cell.y-1 >= 0) {nearbyCells.push(gGrid[cell.x][cell.y-1])}
    if(cell.y + 1 < gGrid[cell.x].length) {nearbyCells.push(gGrid[cell.x][cell.y+1])}
    //diagonal
    //top left
    if(cell.x-1 >=0 && cell.y-1 >=0){nearbyCells.push(gGrid[cell.x-1][cell.y-1])}
    //top right
    if(cell.x+1 < gGrid.length && cell.y-1 >= 0){nearbyCells.push(gGrid[cell.x+1][cell.y-1])}
    //bottom right
    if(cell.x+1 < gGrid.length && cell.y+1 < gGrid[cell.x+1].length){nearbyCells.push(gGrid[cell.x+1][cell.y+1])}
    //bottom left
    if(cell.x-1 >=0 && cell.y+1 < gGrid[cell.x-1].length){nearbyCells.push(gGrid[cell.x-1][cell.y+1])}

    return nearbyCells;
}