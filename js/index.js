const cards = [
  {
    id: 1,
    image: './img/dog1.jpg',
    alt: 'dog1',
    name: 'Yochai Benkler',
    title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
    description: 'Benkler studies common-based peer production, and published his seminal book The Wealth of Networks in 2006',
  },
  {
    id: 2,
    image: './img/dog2.jpg',
    alt: 'dog2',
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As a main venue for new media art production in Korea, Nabi promotes cross-disciplinary collaboration and understanding among science technology, humanities, and the arts',
  },
  {
    id: 3,
    image: './img/dog3.jpg',
    alt: 'dog3',
    name: 'Lila Tretikov',
    title: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half billion people around the world every month',
  },
  {
    id: 4,
    image: './img/dog4.jpg',
    alt: 'dog4',
    name: 'Kilnam Chon',
    title: '',
    description: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Society (ISOC) Internet Hall of Fame',
  },
  {
    id: 5,
    image: './img/dog5.jpg',
    alt: 'dog5',
    name: 'Julia Leda',
    title: 'President of Young Pirates of Europe',
    description: "European integration, political democracy and participation of youth through online as her major condern. Reda's report outlining potential changes to EU copyright law was approved y the Parlament in July",
  },
  {
    id: 6,
    image: './img/dog6.jpg',
    alt: 'dog6',
    name: 'Ryan Merkley',
    title: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
    description: 'Ryan had been leading open-source projects at the Mozilla Foundation such as the open source movement',
  },
];

const speakers = document.getElementById('speakers');

speakers.innerHTML = `
  <h2>Featured Speakers</h2>
  <div class="line"></div>
`;

for (let i = 0; i < 2; i += 1) {
  const card = cards[i];
  speakers.innerHTML += `
  <div>
    <img class="dog" src="${card.image}" alt="${card.alt}">
    <div>
      <h2>${card.name}</h2>
      <p class="speakTitle">${card.title}</p>
      <p class="speakDescription">${card.description}</p>
    </div>
  </div>
  `;
}

speakers.innerHTML += `
  <button id="speakButton" class="hideButton">MORE <i class="bi bi-caret-down-fill"></i></button>
`;

for (let i = 2; i < cards.length; i += 1) {
  const card = cards[i];
  speakers.innerHTML += `
    <div class="speakHide">
      <img class="dog" src="${card.image}" alt="${card.alt}">
      <div>
        <h2>${card.name}</h2>
        <p class="speakTitle">${card.title}</p>
        <p class="speakDescription">${card.description}</p>
      </div>
    </div>
    `;
}

const speakHide = document.querySelectorAll('.speakHide');

const speakButton = document.getElementById('speakButton');

speakButton.addEventListener('click', () => {
  speakHide.forEach((item) => {
    item.classList.toggle('speakHide');
  });
  speakButton.style.display = 'none';
});