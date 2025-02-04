document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const card = button.closest('.project-card');
        const fullDesc = card.querySelector('.full-desc');
        const shortDesc = card.querySelector('.short-desc');

        if (card.classList.contains('expanded')) {
            // Collapse the card
            card.classList.remove('expanded');
            fullDesc.style.display = 'none';
            shortDesc.style.display = 'block';
            button.textContent = 'Read More';
        } else {
            // Expand the card
            card.classList.add('expanded');
            fullDesc.style.display = 'block';
            shortDesc.style.display = 'none';
            button.textContent = 'Read Less';
        }
    }); // <-- Syntax Error: Unexpected token here
});
