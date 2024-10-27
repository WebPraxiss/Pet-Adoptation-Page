// Data for breeds
const breedData = {
    dog: [
        { value: 'golden-retriever', text: 'Golden Retriever', page: 'buddy.html' },
        { value: 'labrador', text: 'Labrador', page: 'labrador.html' },
        { value: 'bulldog', text: 'Bulldog', page: 'bulldog.html' }
    ],
    cat: [
        { value: 'siamese', text: 'Siamese', page: 'luna.html' },
        { value: 'persian', text: 'Persian Cat', page: 'persian.html' }
    ],
    horse: [
        { value: 'arabian', text: 'Arabian Horse', page: 'arabian.html' },
        { value: 'thoroughbred', text: 'Thoroughbred', page: 'thoroughbred.html' }
    ],
    cow: [
        { value: 'jersey', text: 'Jersey Cow', page: 'jersey.html' },
        { value: 'holstein', text: 'Holstein', page: 'holstein.html' }
    ]
    // Add more animals and breeds as needed
};

// Elements
const animalSelect = document.getElementById('animal-type');
const breedSelect = document.getElementById('breed-select');

// Handle animal selection change
animalSelect.addEventListener('change', function() {
    const selectedAnimal = this.value;

    // Reset breed selection
    breedSelect.innerHTML = '<option value="">Choose a breed</option>';
    breedSelect.disabled = true;

    if (selectedAnimal && breedData[selectedAnimal]) {
        // Populate the breed dropdown
        breedData[selectedAnimal].forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.page;
            option.textContent = breed.text;
            breedSelect.appendChild(option);
        });
        breedSelect.disabled = false;
    }
});

// Redirect to selected breed's page
breedSelect.addEventListener('change', function() {
    const selectedPage = this.value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
});

// Function to redirect from cards (remains unchanged)
function redirectToPetPage(pageUrl) {
    window.location.href = pageUrl;
}
