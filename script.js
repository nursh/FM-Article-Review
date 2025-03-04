const shareIcon = document.querySelector('.article-profile .share-icon');
const articleShare = document.querySelector('.article-share');

if (shareIcon) {
  shareIcon.addEventListener('click', () => {
    if (articleShare && articleShare.style.display === 'none') {
      articleShare.style.setProperty('display', 'flex');
    } else {
      articleShare.style.setProperty('display', 'none');
    }
  })
}
