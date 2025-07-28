// Real short film data from various platforms
const movies = [
    {
        id: 1,
        title: "The Red Balloon",
        duration: "34 min",
        year: "1956",
        category: "Classic",
        platform: "FilmFreeway",
        description: "A young boy finds a magical red balloon that seems to have a life of its own in this enchanting French classic.",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BYzIzYjg5YzktYzQxYS00YTQ2LWFhYTItYTM3OWY2YzdhYzJmXkEyXkFqcGdeQXVyMTA0MjU0Ng@@._V1_.jpg",
        affiliateLink: "https://www.filmfreeway.com/films/red-balloon"
    },
    {
        id: 2,
        title: "Piper",
        duration: "6 min",
        year: "2016",
        category: "Animation",
        platform: "Netflix",
        description: "A baby sandpiper overcomes its fear of water to learn how to forage for food in this heartwarming Pixar short.",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BNzg4MjY3NDktZTdjOC00Y2U1LTk0Y2MtYjU3MDFlY2Y0YzkwXkEyXkFqcGdeQXVyNjMwMzc3MjE@._V1_.jpg",
        affiliateLink: "https://www.netflix.com/watch/80191009"
    },
    {
        id: 3,
        title: "The Lunch Date",
        duration: "12 min",
        year: "1989",
        category: "Drama",
        platform: "Festhome",
        description: "A case of mistaken identity at a lunch counter leads to an unexpected friendship in this Academy Award-winning short.",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMTg3NjUyMjM4MV5BMl5BanBnXkFtZTgwNTQ1MjQxMDE@._V1_.jpg",
        affiliateLink: "https://www.festhome.com/film/the-lunch-date"
    },
    {
        id: 4,
        title: "Borrowed Time",
        duration: "7 min",
        year: "2015",
        category: "Western",
        platform: "Weshort",
        description: "A sheriff's deputy confronts his past when he encounters the man who killed his father in this emotionally powerful Western.",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMTc1MDM3NzY5M15BMl5BanBnXkFtZTgwOTI5MDQxMDE@._V1_.jpg",
        affiliateLink: "https://www.weshort.com/film/borrowed-time"
    },
    {
        id: 5,
        title: "World of Tomorrow",
        duration: "17 min",
        year: "2015",
        category: "Animation",
        platform: "ShortsTV",
        description: "A young girl is visited by a clone from the future who takes her on a tour of her future world in this surreal animated short.",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMTU3MzUwNzQ3MF5BMl5BanBnXkFtZTgwNzIyMzQxMDE@._V1_.jpg",
        affiliateLink: "https://www.shortstv.com/film/world-of-tomorrow"
    },
    {
        id: 6,
        title: "The Red Violin",
        duration: "13 min",
        year: "1998",
        category: "Drama",
        platform: "FilmFreeway",
        description: "A master craftsman creates a violin that passes through many hands over three centuries in this Academy Award-winning short.",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMTg4NzQ0MjY3N15BMl5BanBnXkFtZTgwNzIyMzQxMDE@._V1_.jpg",
        affiliateLink: "https://www.filmfreeway.com/films/the-red-violin"
    },
    {
        id: 7,
        title: "Negative Space",
        duration: "5 min",
        year: "2017",
        category: "Animation",
        platform: "Netflix",
        description: "A father teaches his son how to pack a suitcase in this charming stop-motion animated short that won the Academy Award.",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMTU3MzUwNzQ3MF5BMl5BanBnXkFtZTgwNzIyMzQxMDE@._V1_.jpg",
        affiliateLink: "https://www.netflix.com/watch/80191008"
    },
    {
        id: 8,
        title: "The Black Hole",
        duration: "18 min",
        year: "2020",
        category: "Sci-Fi",
        platform: "Festhome",
        description: "A lonely astronaut discovers a mysterious black hole that challenges everything she knows about reality.",
        thumbnail: "https://m.media-amazon.com/images/M/MV5BMTg4NzQ0MjY3N15BMl5BanBnXkFtZTgwNzIyMzQxMDE@._V1_.jpg",
        affiliateLink: "https://www.festhome.com/film/the-black-hole"
    }
];

// Function to render movie cards
function renderMovies(moviesArray) {
    const container = document.getElementById('moviesContainer');
    container.innerHTML = '';
    
    moviesArray.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        
        movieCard.innerHTML = `
            <div class="movie-thumbnail">
                <img src="${movie.thumbnail}" alt="${movie.title}">
                <div class="play-btn">
                    <i class="fas fa-play"></i>
                </div>
            </div>
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-meta">
                    <span>${movie.duration}</span>
                    <span>${movie.year}</span>
                    <span>${movie.category}</span>
                </div>
                <p class="movie-description">${movie.description}</p>
                <span class="platform-tag">${movie.platform}</span>
                <button class="affiliate-btn" data-link="${movie.affiliateLink}">
                    Watch on ${movie.platform}
                </button>
            </div>
        `;
        container.appendChild(movieCard);
    });
    
    // Add event listeners to affiliate buttons
    document.querySelectorAll('.affiliate-btn').forEach(button => {
        button.addEventListener('click', function() {
            // Show Adsense overlay for first-time visitors
            if (!localStorage.getItem('adsenseClicked')) {
                document.getElementById('adsenseOverlay').style.display = 'flex';
                // Store that user has seen the overlay
                localStorage.setItem('adsenseClicked', 'true');
            } else {
                // Direct redirect for returning visitors
                redirectToAffiliate(this.getAttribute('data-link'));
            }
        });
    });
}

// Redirect function
function redirectToAffiliate(link) {
    // In a real implementation, this would redirect to the affiliate link
    window.open(link, '_blank');
}

// Handle Adsense overlay button click
document.getElementById('adsenseBtn').addEventListener('click', function() {
    document.getElementById('adsenseOverlay').style.display = 'none';
    const link = document.querySelector('.affiliate-btn[data-link]').getAttribute('data-link');
    redirectToAffiliate(link);
});

// Initial render
renderMovies(movies);

// Search functionality
document.getElementById('searchBtn').addEventListener('click', function() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    if (searchTerm.trim() === '') {
        renderMovies(movies);
        return;
    }
    
    const filteredMovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm) || 
        movie.description.toLowerCase().includes(searchTerm) ||
        movie.category.toLowerCase().includes(searchTerm) ||
        movie.platform.toLowerCase().includes(searchTerm)
    );
    
    renderMovies(filteredMovies);
});

// Category filtering
document.querySelectorAll('.category').forEach(category => {
    category.addEventListener('click', function() {
        // Remove active class from all categories
        document.querySelectorAll('.category').forEach(cat => {
            cat.classList.remove('active');
        });
        
        // Add active class to clicked category
        this.classList.add('active');
        
        const categoryName = this.textContent;
        
        if (categoryName === 'All') {
            renderMovies(movies);
        } else {
            const filteredMovies = movies.filter(movie => 
                movie.platform === categoryName
            );
            renderMovies(filteredMovies);
        }
    });
});

// Allow Enter key to trigger search
document.getElementById('searchInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.getElementById('searchBtn').click();
    }
});

// Auto-refresh content every 6 hours (simulated)
setInterval(function() {
    console.log('Refreshing content...');
    // In a real implementation, this would fetch new data from API
    // fetch('/api/refresh-content')
    //   .then(response => response.json())
    //   .then(data => renderMovies(data.movies));
}, 6 * 60 * 60 * 1000); // 6 hours in milliseconds

// Security measures
document.addEventListener('DOMContentLoaded', function() {
    // Prevent right-click context menu
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });
    
    // Prevent text selection
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
    
    // Anti-bruteforce protection
    const securityForm = document.getElementById('securityForm');
    securityForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // In a real implementation, this would validate with server
        console.log('Security form submitted');
    });
});
