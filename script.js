
function setRating(btn, ratingBtns) {
    let submitBtn = document.querySelector('#submit-rating-btn');
    
    let currentActive = ratingBtns.find((btn) => {
        return btn.classList.contains('active-rating');
    });

    if(currentActive && currentActive !== btn) {
        currentActive.classList.remove('active-rating');
    }

    btn.classList.add('active-rating');
    submitBtn.disabled = false;
}

function submitRating() {
    let activeRating = document.querySelector('.active-rating');
    let formView = document.querySelector('#form-view');
    let confirmationView = document.querySelector('#confirmation-view');
    let selectedRatingMessasge = document.querySelector('#selected-rating-message');

    selectedRatingMessasge.innerHTML = 'You selected ' + activeRating.value + ' out of 5.'

    formView.classList.add('hide-view');
    confirmationView.classList.remove('hide-view');
}

function main() {
    let ratingBtns = Array.from(document.querySelectorAll('.rating-group > .circle-container'));
    let submitBtn = document.querySelector('#submit-rating-btn');

    ratingBtns.forEach((btn) => {
        btn.addEventListener('click', (e) => {
            setRating(btn, ratingBtns);
        });
    });

    submitBtn.addEventListener('click', (e) => {
        submitRating()
    });
}

main();