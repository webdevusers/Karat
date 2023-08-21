const modal_btn = document.getElementById('contact');
const modal_window = document.getElementById('modal-window')
const close_btn = document.getElementById('contact_close')
const blur = document.getElementById('blur')

modal_btn.addEventListener('click', () => {
    modal_window.style.display = 'block';
    blur.style.filter = 'blur(10px)'

})
close_btn.addEventListener('click', () => {
    modal_window.style.display = 'none';
    blur.style.filter = 'blur(0px)'
})