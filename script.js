
function nextSlide(slideNumber) {
    document.querySelectorAll('.slide').forEach(slide => {
        slide.style.display = 'none';
    });
    document.getElementById('slide' + slideNumber).style.display = 'block';
}

// Menampilkan slide pertama saat halaman dimuat
window.onload = function() {
    nextSlide(1);
};
