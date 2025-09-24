//Book Quote Shorts class
class BookQuoteShorts {
    constructor() {
        this.totalQuotes = 0;
        this.currentIndex = 0;
        this.likes = new Map();

        // Set total quotes count
        if (typeof quotes !== 'undefined' && quotes) {
            this.totalQuotes = quotes.length;
        }

        this.initializeElements();
        this.bindEvents();

        //Show the first quote
        this.showQuote(this.currentIndex);
    }
    
    initializeElements() {
        this.shortsContainer = document.getElementById('shortsContainer');
        this.shortItem = document.getElementById('shortItem');
        this.quoteText = document.getElementById('quoteText');
        this.quoteMeta = document.getElementById('quoteMeta');
        this.authorName = document.getElementById('authorName');
        this.bookTitle = document.getElementById('bookTitle');
        this.likeBtn = document.getElementById('likeBtn');
        this.likeCount = document.getElementById('likeCount');
    }

    bindEvents() {
        // Arrow buttons
        const upArrow = document.getElementById('upArrow');
        const downArrow = document.getElementById('downArrow');
        
        // Click events with visual feedback
        upArrow.addEventListener('click', () => {
            this.nextQuote();
        });
        
        downArrow.addEventListener('click', () => {
            this.previousQuote();
        });
        
        // Touch events for better mobile responsiveness
        upArrow.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.nextQuote();
        });
        
        downArrow.addEventListener('touchstart', (e) => {
            e.preventDefault();
            this.previousQuote();
        });

        // Action buttons
        this.likeBtn.addEventListener('click', () => this.toggleLike());
    }

    showQuote(index, direction = 'fade') {

        //Ensure quotes data is loaded
        if (typeof quotes === 'undefined' || !quotes || quotes.length === 0) {
            return;
        }

        //Ensure index is valid
        if (isNaN(index) || index < 0 || index >= quotes.length) {
            // Reset to first quote if index is invalid
            index = 0;
            this.currentIndex = 0;
        }
        
        this.currentIndex = index;
        const quote = quotes[index];

        //Ensure quote is valid
        if(!quote) {
            return;
        }

        // Update content first
        this.quoteText.textContent = quote.text;
        this.authorName.textContent = quote.author;
        this.bookTitle.textContent = quote.book;

        //Remove all existing animations
        this.shortItem.className = 'short-item';

        //Force a reflow to ensure the reset is applied
        this.shortItem.offsetHeight;

        //Apply base classes
        this.shortItem.classList.add('active');

        // Apply animation class after a small delay to ensure reset
        requestAnimationFrame(() => {
            this.shortItem.classList.add(direction);
        });

        //Update like button
        this.updateLikeButton();
    }

    nextQuote() {
        //Ensure there are quotes to show
        if(this.totalQuotes === 0) {
            return;
        }

        //Calculate the next index 
        const nextIndex = this.currentIndex + 1 % this.totalQuotes;
        this.showQuote(nextIndex, 'slide-up-in');
    }

    previousQuote() {
        //Ensure there are quotes to show
        if(this.totalQuotes === 0) {
            return;
        }

        //Calculate the previous index
        const prevIndex = this.currentIndex === 0 ? this.totalQuotes - 1 : this.currentIndex - 1;
        this.showQuote(prevIndex, 'slide-down-in');
    }

    toggleLike() {
        const quote = quotes[this.currentIndex];
        const quoteId = quote.id;
        const isLiked = this.likes.get(quoteId) || false;

        this.likes.set(quoteId, !isLiked);

        this.updateLikeButton();

        //Add like animation
        if(!isLiked) {
            this.animateLike();
        }
    }

    animateLike() {
        const heart = this.likeBtn.querySelector('svg');
        heart.style.transform = 'scale(1.3)';
        heart.style.color = '#000';

        setTimeout(() => {
            heart.style.transform = 'scale(1)';
            heart.style.color = '';
        }, 200);
    }

    updateLikeButton() {
        const quote = quotes[this.currentIndex];
        const quoteId = quote.id;
        const isLiked = this.likes.get(quoteId) || false;
        
        // Show current quote's like status, not total likes
        this.likeBtn.classList.toggle('liked', isLiked);
        this.likeCount.textContent = isLiked ? '1' : '0';
        
    }
         
}

//Initialize the app when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
    //Small delay to ensure the DOM is loaded
    setTimeout(() => {
        const bookQuoteShorts = new BookQuoteShorts();
        console.log(quotes.length);
    }, 100);
});
