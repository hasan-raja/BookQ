//Book Quote Shorts class
class BookQuoteShorts {
    constructor() {
        this.totalQuotes = 0;
        this.currentIndex = 0;
        this.likes = new Map();
        this.isPlaying = false;
        this.autoPlayInterval = null;
        this.autoPlayDelay = 4000; // 4 seconds for shorts
        this.pausedProgress = 0;
        this.progressAnimation = null;
        this.progressStartTime = null;
        this.ANIMATION_DURATION = 200; // Heart animation duration in ms
        this.FRAME_RATE = 16; // 60fps (1000ms / 60fps = 16.67ms per frame)
        this.PROGRESS_ANIMATION_DELAY = 100; // Progress bar reset transition delay
        this.HEART_SCALE_NORMAL = 1; // Normal heart scale
        this.HEART_SCALE_ANIMATED = 1.3; // Heart scale during animation
        this.PROGRESS_MAX = 100; // Maximum progress percentage

        // Set total quotes count
        if (typeof quotes !== 'undefined' && quotes) {
            this.totalQuotes = quotes.length;
        }

        this.initializeElements();
        this.bindEvents();
        this.loadLikesFromStorage();

        // Check URL parameters and navigate to specific quote if found
        this.handleURLParams();

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
        this.shareBtn = document.getElementById('shareBtn');
        this.playPauseBtn = document.getElementById('playPauseBtn');
        this.playIcon = this.playPauseBtn.querySelector('.play-icon');
        this.pauseIcon = this.playPauseBtn.querySelector('.pause-icon');
        this.progressBar = document.getElementById('progressBar');

    }

    loadLikesFromStorage() {
        try {
            const storedLikes = localStorage.getItem('bookQuoteLikes');
            if (storedLikes) {
                const likesData = JSON.parse(storedLikes);
                this.likes = new Map(Object.entries(likesData));
            }
        } catch (error) {
            console.error('Error loading likes from storage:', error);
        }
    }

    saveLikesToStorage() {
        try {
            const likesObject = Object.fromEntries(this.likes);
            localStorage.setItem('bookQuoteLikes', JSON.stringify(likesObject));
        } catch (error) {
            console.error('Error saving likes to storage:', error);
        }
    }


    handleURLParams() {
        const urlParams = new URLSearchParams(window.location.search);
        const quoteId = urlParams.get('quote');
        
        //Ensure quote ID is valid and quotes are loaded
        if (quoteId && typeof quotes !== 'undefined' && quotes) {
            const quoteIndex = quotes.findIndex(quote => quote.id === quoteId);
            
            //Ensure quote is found and set the current index
            if (quoteIndex !== -1) {
                this.currentIndex = quoteIndex;
                return true; 
            }
        } 
        return false; 
    }

    updateURL(quoteId) {
        const url = new URL(window.location);
        url.searchParams.set('quote', quoteId);
        window.history.replaceState({}, '', url);
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
        this.shareBtn.addEventListener('click', () => this.shareQuote());
        this.playPauseBtn.addEventListener('click', () => this.toggleAutoPlay());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            switch(e.key) {
                // Next quote
                case 'ArrowUp':
                case 'ArrowRight':
                    e.preventDefault();
                    this.nextQuote();
                    break;
                // Previous quote
                case 'ArrowDown':
                case 'ArrowLeft':
                    e.preventDefault();
                    this.previousQuote();
                    break;
                // Toggle auto play
                case ' ':
                    e.preventDefault();
                    this.toggleAutoPlay();
                    break;
            }
        });

        // Mouse wheel support
        this.shortsContainer.addEventListener('wheel', (e) => {
            e.preventDefault();
            if (e.deltaY > 0) {
                // Next quote
                this.nextQuote();
            } else {
                // Previous quote
                this.previousQuote();
            }
        });

        // Touch/swipe support for vertical navigation
        this.addVerticalTouchSupport();
    }


    addVerticalTouchSupport() {
        let startY = 0;
        let startX = 0;
        let isScrolling = false;
        
        // Add touch events to the swipe area specifically
        const swipeArea = document.getElementById('swipeArea');
        
        // Touch event start
        this.shortsContainer.addEventListener('touchstart', (e) => {
            startY = e.touches[0].clientY;
            startX = e.touches[0].clientX;
            isScrolling = false;
        });

        this.shortsContainer.addEventListener('touchmove', (e) => {
            if (!startY || !startX) return;
            
            const currentY = e.touches[0].clientY;
            const currentX = e.touches[0].clientX;
            
            const diffY = startY - currentY;
            const diffX = startX - currentX;
            
            // Determine if this is a vertical scroll
            if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 10) {
                isScrolling = true;
                e.preventDefault();
            }
        });

        // Touch event end
        this.shortsContainer.addEventListener('touchend', (e) => {
            if (!startY || !isScrolling) {
                startY = 0;
                startX = 0;
                return;
            }
            
            const endY = e.changedTouches[0].clientY;
            const diffY = startY - endY;
            
            // Swipe threshold
            if (Math.abs(diffY) > 50) {
                if (diffY > 0) {
                    this.nextQuote();
                } else {
                    this.previousQuote();
                }
            }
            
            startY = 0;
            startX = 0;
            isScrolling = false;
        });
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

        // Update URL with quote ID
        this.updateURL(quote.id);

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

        // Reset paused progress for new quote
        this.pausedProgress = 0;

        // Reset progress bar for new quote
        this.resetProgressBar();

         // Start progress animation if auto-playing
         if (this.isPlaying) {
            this.startProgressAnimation();
        }
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
        this.saveLikesToStorage();
        this.updateLikeButton();

        //Add like animation
        if(!isLiked) {
            this.animateLike();
        }
    }

    animateLike() {
        const heart = this.likeBtn.querySelector('svg');
        heart.style.transform = `scale(${this.HEART_SCALE_ANIMATED})`;
        heart.style.color = '#000';

        setTimeout(() => {
            heart.style.transform = `scale(${this.HEART_SCALE_NORMAL})`;
            heart.style.color = '';
        }, this.ANIMATION_DURATION);
    }

    updateLikeButton() {
        const quote = quotes[this.currentIndex];
        const quoteId = quote.id;
        const isLiked = this.likes.get(quoteId) || false;
        
        // Show current quote's like status, not total likes
        this.likeBtn.classList.toggle('liked', isLiked);
        this.likeCount.textContent = isLiked ? '1' : '0';
        
    }

    shareQuote() {
        const quote = quotes[this.currentIndex];
        const shareText = `"${quote.text}" - ${quote.author}, ${quote.book}`;
        const shareUrl = `${window.location.origin}${window.location.pathname}?quote=${quote.id}`;
        
        if (navigator.share) {
            navigator.share({
                title: 'Book Quote Shorts',
                text: shareText,
                url: shareUrl
            });
        } else {
            // Fallback: copy to clipboard with URL
            const fullShareText = `${shareText}\n\nView this quote: ${shareUrl}`;
            navigator.clipboard.writeText(fullShareText).then(() => {
                this.showNotification('Quote and link copied to clipboard!');
            }).catch(() => {
                // Fallback for older browsers
                const textArea = document.createElement('textarea');
                textArea.value = fullShareText;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                this.showNotification('Quote and link copied to clipboard!');
            });
        }
    }

    toggleAutoPlay() {
        if (this.isPlaying) {
            this.stopAutoPlay();
        } else {
            this.startAutoPlay();
        }
    }

    stopAutoPlay() {
        this.isPlaying = false;
        this.playIcon.style.display = 'block';
        this.pauseIcon.style.display = 'none';
        
        if (this.autoPlayInterval) {
            clearTimeout(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
        
        // Save current progress before stopping
        if (this.progressAnimation) {
            const currentProgress = parseFloat(this.progressBar.style.width) || 0;
            this.pausedProgress = currentProgress;
            clearInterval(this.progressAnimation);
            this.progressAnimation = null;
        }
        
    }

    startAutoPlay() {
        this.isPlaying = true;
        this.playIcon.style.display = 'none';
        this.pauseIcon.style.display = 'block';
        
        // Start the auto-play loop
        this.scheduleNextQuote();
        this.startProgressAnimation();

    }

    scheduleNextQuote() {
        if (!this.isPlaying) return;
        
        // Calculate remaining time based on paused progress
        const remainingTime = this.autoPlayDelay - (this.pausedProgress * this.autoPlayDelay / 100);
        
        // Set timeout for next quote based on remaining time
        this.autoPlayInterval = setTimeout(() => {
            if (this.isPlaying) {
                this.nextQuote();
                // Schedule the next quote after this one
                this.scheduleNextQuote();
            }
        }, remainingTime);
    }

    startProgressAnimation() {
        // Clear any existing progress animation
        if (this.progressAnimation) {
            clearInterval(this.progressAnimation);
        }
        
        // Calculate remaining time based on paused progress
        const remainingTime = this.autoPlayDelay - (this.pausedProgress * this.autoPlayDelay / 100);
        const startProgress = this.pausedProgress;
        
        // Set initial progress
        this.progressBar.style.width = startProgress + '%';
        this.progressBar.style.transition = 'none';
        
        // Start smooth progress animation from current position
        let progress = startProgress;
        const totalFrames = Math.ceil(remainingTime / this.FRAME_RATE); // 60fps
        const increment = (this.PROGRESS_MAX - startProgress) / totalFrames;
        
        this.progressStartTime = Date.now();
        let frameCount = 0;
        
        this.progressAnimation = setInterval(() => {
            frameCount++;
            progress = startProgress + (increment * frameCount);
            
            if (progress >= this.PROGRESS_MAX || frameCount >= totalFrames) {
                progress = this.PROGRESS_MAX;
                clearInterval(this.progressAnimation);
                this.pausedProgress = 0; // Reset for next quote
            }
            this.progressBar.style.width = progress + '%';
        }, this.FRAME_RATE); 
    }

    resetProgressBar() {
        // Clear any existing progress animation
        if (this.progressAnimation) {
            clearInterval(this.progressAnimation);
        }
        this.progressBar.style.width = '0%';
        this.progressBar.style.transition = `width ${this.PROGRESS_ANIMATION_DELAY}ms linear`;
        this.pausedProgress = 0; // Reset paused progress for new quote
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
