export default function decorate(block) {
  const rows = [...block.querySelectorAll(':scope > div')];

  // skip header row
  rows.shift();

  const ul = document.createElement('ul');
  ul.className = 'blog-cards';

  rows.forEach((row) => {
    const cols = [...row.children];

    const [
      title,
      author,
      date,
      category,
      metaTitle,
      className,
      image,
      summary,
    ] = cols.map((col) => col.textContent.trim());

    const li = document.createElement('li');
    li.className = `card ${className || ''}`;

    li.innerHTML = `
      <div class="card-image">
        <img src="${image}" alt="${title}" loading="lazy" />
      </div>
      <div class="card-content">
        <span class="category">${category}</span>
        <h3 class="title">${title}</h3>
        <p class="summary">${summary}</p>
        <div class="meta">
          <span>${author}</span>
          <span>${date}</span>
        </div>
      </div>
    `;

    ul.appendChild(li);
  });

  block.textContent = '';
  block.appendChild(ul);
}