function pageViewCounter(): void {
  
  let viewCount: string | null = localStorage.getItem('pageViewCount');

  
  viewCount = viewCount ? parseInt(viewCount, 10) : 0;

  
  viewCount += 1;

  
  localStorage.setItem('pageViewCount', viewCount.toString());


  const viewCounterElement = document.getElementById('view-counter');
  if (viewCounterElement) {
    viewCounterElement.textContent = viewCount.toString();
  }
}


document.addEventListener('DOMContentLoaded', () => {
  pageViewCounter();
});
