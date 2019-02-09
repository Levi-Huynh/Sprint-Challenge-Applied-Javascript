class Carousel {
    //constructor
    constructor(carouselC) {
        this.carouselC=carouselC;
        //binds left button
        this.leftB= this.carouselC.querySelector('.left-button');
        //binds right button
        this.rightB = this.carouselC.querySelector('.right-button');
        //binds images
        this.img= this.carouselC.querySelectorAll('img');
        console.log(this.img);
        //When carousel class is passed through Parent Carousel, sets all Default page refresh/ 
        //starting image to be at index at zero (first image in HTML), with display of block/visible (ability to control starting point)
        //sets start image element passed through Carousel class to be visible (as default CSS for .carousel img is display none)
        this.index = 0;
        //this.img[0] below
        this.img[this.index].style.display='block';
        //click event for toggleLeft method
        this.leftB.addEventListener("click", () => this.toggleLeft());
        //click event for toggleRight method
        this.rightB.addEventListener("click", () => this.toggleRight());
        
    }
    
    toggleRight(){
    
        //default image display through this method of this.index is first set back to display none.  Then the image index is looped through
        //IF statement to determine what the new index Image array should be set on, afterwhich Image is then set back to display block:
        //assumes image index no longer at 0 & eventListener maybe have been clicked x times (this is the old image[index] we are setting to display none)
        this.img[this.index].style.display='none';
        //Because button moves slideshow to the right, want create loop that goes forward & cycles. If the Index is at max index/ array length-1, loop starts index back to zero
    
        if(this.index === this.img.length-1){
            this.index =0;
    
            //Or else because index is moving right, increment index by increasing/adding by 1 (if index is not at at the last array index, other wise sets index=zero)
        } else {
            this.index++
        }
        //sets image at NEW index (after running IF statement loop) to display block. 
        this.img[this.index].style.display='block';
    }
    
    toggleLeft() {
       //default image display through this method of this.index is first set back to display none.  Then the image index is looped through
        //IF statement to determine what the new index Image array should be set on, afterwhich Image is then set back to display block:
        //assumes image index no longer at 0 & eventListener maybe have been clicked x times (this is the old image[index] we are setting to display none)
        this.img[this.index].style.display= "none";
    //b/c the button moves the slideshow left, we want to create a loop that goes backwards & also cycles. If index has decreased to index= 0, then make index start at index array length -1, and continue to increment backwards. 
    
        if (this.index === 0) {
            this.index= this.img.length-1
    
            //else if index has not reached zero, after incrementing backwards, then keep incrementing backwards
        } else {
            this.index--
        }
    
        //sets image age new index (after running IF statement loop) back to display block.
        this.img[this.index].style.display='block';
    }
    
    }
    
    // let carousel = document.querySelector();
    //grabs all  .carousel classes and gives them the attributes of the same Carousel Parent constructor
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach(carousel => new Carousel(carousel));
    

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/