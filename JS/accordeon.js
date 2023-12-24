
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  const img = item.querySelector('.section6__img');
  
  header.addEventListener('click', () => {
    accordionItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        const otherContent = otherItem.querySelector('.accordion-content');
        const otherImg = otherItem.querySelector('.section6__img');
        
        otherItem.classList.remove('active');
        otherContent.style.maxHeight = '0';
        otherImg.style.opacity = '1';
      }
    });
    
    item.classList.toggle('active');
    
    if (item.classList.contains('active')) {
      content.style.maxHeight = content.scrollHeight + 'px';
      img.style.opacity = '0';
    } else {
      content.style.maxHeight = '0';
      img.style.opacity = '1';
    }
  });
});
