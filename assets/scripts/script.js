//javascript code for accordions//

function toggleAccordion(id) {
    const content = document.getElementById(`accordion-content-${id}`);
    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
    } else {
        content.classList.add('hidden');
    }
}