class TabLink {
  constructor(tabElement){
    // assign this.tabElement to the tabElement DOM reference
    // this.tabElement;
    this.tabElement =tabElement;
    //emphassis below is the actual data tab value
    // Get the `data-tab` value from this.tabElement and store it here
    // this.tabData = ; 
    // this.tabData = document.querySelectorAll(`.tab[data-tab='${tabElement.dataset.tab}']`);
    this.tabData = tabElement.dataset.tab;
    console.log(this.tabData);
    // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
    
    // Delete this comment block when you work on the if statement
    // Check to see if this.tabData is equal to 'all'
    
    if(this.tabData === 'all'){


      // If `all` is true, select all cards regardless of their data attribute values
       this.cards = document.querySelectorAll('.card');
    } else {
      // else if `all` is false, only select the cards with matching this.tabData values
       this.cards = document.querySelectorAll(`.card[data-tab='${this.tabData}']`);
    }
    
    // Delete this comment block when you work on the if statement

     // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new 
     //instance of the TabCard class. Pass in a card object to the TabCard class. 
     this.cards = Array.from(this.cards).map(card => new TabCard(card));
     //After creating a way to capture the dataset from tabs data tab (this.tabData) and matching
     //it up to the corresponding card data tab (IF statement)
     //All the corresponding cards selected from IF statement above will run through the newTabCard module 
     //as well as the selectCard method which changes the display style

    // Add a click event that invokes this.selectTab
    //this click event links tabElement to selectTab method which is within the TabLink Module
       this.tabElement.addEventListener('click', () => this.selectTab());
  }

  selectTab(){

    // Select all elements with the .tab class on them
     const tabs = document.querySelectorAll('.tab');
console.log(tabs);
    
    // Iterate through the NodeList removing the .active-tab class from each element
    //this deselects the '.active-tab' class for any tabs that are not supposed to be '.active-tab'/active
     tabs.forEach(tab => tab.classList.remove('active-tab'));

    // Select all of the elements with the .card class on them
    const cards =document.querySelectorAll('.card');
    console.log(cards);

    // Iterate through the NodeList setting the display style each one to 'none'
    //this takes all the '.card' class and puts them on display none as default (when the active-tabs are choosen)
     cards.forEach(card => card.style.display='none');
    
    // Add a class of ".active-tab" to this.tabElement
    // this.tabElement;
    //all the new instances of the tabElement choosen will have an active-tab (selectCard method changes display to visible/flex)
    this.tabElement.classList.add('active-tab');

    // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. 
    //Just un-comment the code and study what is happening here.
    //The TabCard Module creates what happens to corresponding cards, when the associated SelectTab is formed.
    //All the corresponding cards selected from IF statement above will run through the newTabCard module 
    //(creating a new instance of TabCard as well as the the TabCard method: selectCard)
    this.cards.forEach(card => card.selectCard());
  }
}

class TabCard {
  constructor(cardElement){
    // Assign this.cardElement to the cardElement DOM reference
     this.cardElement = cardElement;
  }
  selectCard(){
    // Update the style of this.cardElement to display = "flex"
    // this.cardElement;
    //all the cards of new instance TabCard will be visible
    this.cardElement.style.display="flex";

  }

}

/* START HERE: 

- Select all classes named ".tab" and assign that value to the tabs variable

- With your selection in place, now chain a .forEach() 
method onto the tabs variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter

*/
let tabs = document.querySelectorAll('.tab');
//for every tab that is created/exists, they will all be passed through the TabLink module to have these specific attributes
tabs.forEach(tab => new TabLink(tab));