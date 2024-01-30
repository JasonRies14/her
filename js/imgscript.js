document.addEventListener("DOMContentLoaded", function () {
    const imageSlider = document.getElementById('imageSlider');
    const images = document.querySelectorAll('.wrapper img');
    const imageWidth = images[0].offsetWidth;

    const scrollInterval = 2500;

    function scrollToNextImage() {
        const currentScroll = imageSlider.scrollLeft;
        const nextScroll = Math.round(currentScroll / imageWidth) * imageWidth + imageWidth;

        imageSlider.scroll({
            left: nextScroll,
            behavior: 'smooth'
        });
    }

    setInterval(scrollToNextImage, scrollInterval);
});
