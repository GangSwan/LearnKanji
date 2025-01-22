document.addEventListener('DOMContentLoaded', () => {
    const jlptLevelSelect = document.getElementById('jlpt-level');
    const flashcardContainer = document.getElementById('flashcard-container');

    jlptLevelSelect.addEventListener('change', loadFlashcards);

    function loadFlashcards() {
        const level = jlptLevelSelect.value;
        console.log(`Selected level: ${level}`); // Debugging line
        fetch(`data/${level}.json`)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                console.log('Data loaded:', data); // Debugging line
                flashcardContainer.innerHTML = '';
                data.forEach(kanji => {
                    const flashcard = document.createElement('div');
                    flashcard.className = 'flashcard';
                    flashcard.innerHTML = `
                        <div class="flashcard-inner">
                            <div class="flashcard-front">
                                <p>${kanji.kanji}</p>
                            </div>
                            <div class="flashcard-back">
                                <p>${kanji.meaning}</p>
                                <p>${kanji.reading}</p>
                            </div>
                        </div>
                    `;
                    flashcard.addEventListener('click', () => {
                        flashcard.querySelector('.flashcard-inner').classList.toggle('is-flipped');
                    });
                    flashcardContainer.appendChild(flashcard);
                });
            })
            .catch(error => console.error('Error loading flashcards:', error));
    }

    // Load default level (N5) on page load
    loadFlashcards();
});