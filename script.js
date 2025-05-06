const shareIcon = document.querySelector('.article-profile .share-icon');
const popupShareIcon = document.querySelector('.popup-share-icon');
const articleShare = document.querySelector('.article-share-popup');

if (shareIcon) {
  shareIcon.addEventListener('click', () => {
    if (articleShare.style.display === 'flex') {
      articleShare.style.setProperty('display', 'none');
    } else {
      articleShare.style.setProperty('display', 'flex');
    }
  })
}

if (popupShareIcon) {
  popupShareIcon.addEventListener('click', () => {
    articleShare.style.setProperty('display', 'none');
  })
}
