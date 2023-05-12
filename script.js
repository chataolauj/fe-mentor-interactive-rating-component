
function setRating(btn, ratingBtns) {
    let currentActive = ratingBtns.find((btn) => {
        return btn.classList.contains('active-rating');
    });

    if(currentActive) {
        currentActive.classList.remove('active-rating');
    }

    btn.classList.add('active-rating');
}

function main() {
    let ratingBtns = Array.from(document.querySelectorAll('.rating-group > .circle-container'));

    ratingBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            setRating(btn, ratingBtns);
        });
    });
}

main();