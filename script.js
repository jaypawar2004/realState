document.querySelectorAll('.tab-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.tab-btn.active').classList.remove('active');
        button.classList.add('active');
    });
});
