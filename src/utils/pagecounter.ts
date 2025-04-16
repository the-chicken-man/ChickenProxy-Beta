function pageViewCounter(): void {
    let viewCount: number | null = localStorage.getItem('pageViewCount');
  
    if (viewCount) {
      viewCount = parseInt(viewCount) + 1;
    } else {
      viewCount = 1;
    }
  
    localStorage.setItem('pageViewCount', viewCount.toString());
    const viewCounterElement = document.getElementById('view-counter');
    if (viewCounterElement) {
      viewCounterElement.textContent = viewCount.toString();
    }
  }
  
  document.addEventListener('DOMContentLoaded', pageViewCounter);