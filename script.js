// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo(0, 0);
};

// Add event listener to the Illustrations link
document.getElementById('illustrationsLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Illustrations Link Clicked');
    document.getElementById('illustrationsPage').classList.remove('hidden');
    document.getElementById('projectsPage').classList.add('hidden');
    document.getElementById('sketchesPage').classList.add('hidden');
    document.getElementById('characterdesignsPage').classList.add('hidden');
    document.getElementById('aboutmePage').classList.add('hidden');
    document.getElementById('contactPage').classList.add('hidden');
    scrollToTop();  // Scroll to top when switching pages
});

// Add event listener to the Projects link
document.getElementById('projectsLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Projects Link Clicked');
    document.getElementById('illustrationsPage').classList.add('hidden');
    document.getElementById('projectsPage').classList.remove('hidden');
    document.getElementById('sketchesPage').classList.add('hidden');
    document.getElementById('characterdesignsPage').classList.add('hidden');
    document.getElementById('aboutmePage').classList.add('hidden');
    document.getElementById('contactPage').classList.add('hidden');
    scrollToTop();  // Scroll to top when switching pages
});

// Add event listener to the Sketches link
document.getElementById('sketchesLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Sketches Link Clicked');
    document.getElementById('illustrationsPage').classList.add('hidden');
    document.getElementById('projectsPage').classList.add('hidden');
    document.getElementById('sketchesPage').classList.remove('hidden');
    document.getElementById('characterdesignsPage').classList.add('hidden');
    document.getElementById('aboutmePage').classList.add('hidden');
    document.getElementById('contactPage').classList.add('hidden');
    scrollToTop();  // Scroll to top when switching pages
});

// Add event listener to the Character Designs link
document.getElementById('characterdesignsLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Character Designs Link Clicked');
    document.getElementById('illustrationsPage').classList.add('hidden');
    document.getElementById('projectsPage').classList.add('hidden');
    document.getElementById('sketchesPage').classList.add('hidden');
    document.getElementById('characterdesignsPage').classList.remove('hidden');
    document.getElementById('aboutmePage').classList.add('hidden');
    document.getElementById('contactPage').classList.add('hidden');
    scrollToTop();  // Scroll to top when switching pages
});

// Add event listener to About Me link
document.getElementById('aboutmeLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('About Me Link Clicked');
    document.getElementById('illustrationsPage').classList.add('hidden');
    document.getElementById('projectsPage').classList.add('hidden');
    document.getElementById('sketchesPage').classList.add('hidden');
    document.getElementById('characterdesignsPage').classList.add('hidden');
    document.getElementById('aboutmePage').classList.remove('hidden');
    document.getElementById('contactPage').classList.add('hidden');
    scrollToTop();  // Scroll to top when switching pages
});

// Add event listener to Contact link
document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Contact Link Clicked');
    document.getElementById('illustrationsPage').classList.add('hidden');
    document.getElementById('projectsPage').classList.add('hidden');
    document.getElementById('sketchesPage').classList.add('hidden');
    document.getElementById('characterdesignsPage').classList.add('hidden');
    document.getElementById('aboutmePage').classList.add('hidden');
    document.getElementById('contactPage').classList.remove('hidden');
    scrollToTop();  // Scroll to top when switching pages
});

