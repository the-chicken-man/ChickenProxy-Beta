export type Asset = {
  name: string;
  file: string;
  image: string;
};

const input = document.getElementById('input') as HTMLInputElement | null;
const cards = document.querySelectorAll<HTMLAnchorElement>('[data-name]');

if (input) {
  input.addEventListener('input', () => {
    const searchTerm = input.value.toLowerCase();
    cards.forEach((card) => {
      const name = card.getAttribute('data-name')?.toLowerCase() || '';
      if (name.includes(searchTerm)) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  });
}
