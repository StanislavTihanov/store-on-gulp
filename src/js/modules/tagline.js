function tagline () {
    const closeTagLineButton = document.querySelector('.tagline__close');
    const tagLine = document.querySelector('.tagline');
    
    closeTagLineButton.onclick = function () {
        tagLine.remove();
    }
}

export default tagline;
