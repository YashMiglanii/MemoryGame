const cardArray = [
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    },
    {
      name: 'fries',
      img: 'images/fries.png'
    },
    {
      name: 'cheeseburger',
      img: 'images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      img: 'images/ice-cream.png'
    },
    {
      name: 'pizza',
      img: 'images/pizza.png'
    },
    {
      name: 'milkshake',
      img: 'images/milkshake.png'
    },
    {
      name: 'hotdog',
      img: 'images/hotdog.png'
    }
  ]  // har img 2 baar aani h. 

  cardArray.sort(() => 0.5 - Math.random())
  // sort everything in the array randomly 
 
  // console.log(cardArray);

  const grid = document.querySelector('#grid'); // searching by id 
console.log(grid)

function createBoard(){
    for(let i=0; i<cardArray.length ;i++){
       const card = document.createElement('img');

       card.setAttribute('src',"/blank.png");
       card.setAttribute('data-id',"i");
       card.addEventListener("click",flipcard);
      // console.log(card,i);

      grid.appendChild(card); // here u can use both append or appendchild 

    }

}

function flipcard(){
   const cardId =  this.getAttribute("data-id"); // "this" is helping us interact with whatever element we click
   console.log(cardId);
}

createBoard();