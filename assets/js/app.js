const closeMenuIcon = document.querySelector('.close');
const openMenuIcon = document.querySelector('.bars');
const menu = document.querySelector('.nav-group');
const body = document.querySelector('body');
const menuItems = document.querySelectorAll('.nav-group li');
const programList = document.querySelector('.program-list');
const speakerList = document.querySelector('.speaker-list');
const partnerList = document.querySelector('.partner-list');
const showMoreSpeakersButton = document.querySelector('.show-more');

const programs = [
  {
    icon: 'fa fa-solid fa-lightbulb',
    title: 'Think',
    description: 'What you think determine your value.\n Don\'t underestimate your ideas They value more than you think',
  },
  {
    icon: 'fa fa-solid fa-compass-drafting',
    title: 'Conceive',
    description: 'You never get a baby only by thinking about it.\n We have designed an environment where your cherish seed can be transformed',
  },
  {
    icon: 'fa fa-solid fa-screwdriver-wrench',
    title: 'Shape',
    description: 'Our professional teams have  efficient tools and technique for the growth of your conceived idea.',
  },
  {
    icon: 'fa fa-solid fa-people-carry-box',
    title: 'Touch',
    description: 'We know how excited you are to see your ideas become real.\t We make it possible ',
  },
];
const speakers = [
  {
    name: 'John Pombe Joseph Magufuli',
    picture: 'assets/images/people/magufuli.jpeg',
    title: ' fifth president of Tanzania, ',
    description: 'He ran on a platform of reducing government corruption and spending while also investing in Tanzania\'s industries.Under his presidency, Tanzania experienced one of the strongest economic growths on the continent (6% on average per year according to the IMF) and moved from the category of low-income countries to middle-income countries.',
  },
  {
    name: 'Strive masiyiwa',
    picture: 'assets/images/people/masiyiwa-strive.jpeg',
    title: 'founder and executive chairman of the international technology group Econet Global',
    description: ' He with his wife started a non-profit organisation, Higherlife Foundation, which empowers disadvantaged children through education and creating opportunities for highly talented young people. Through one of the largest scholarship programmes in Africa, the Foundation pays the school fees for 30,000 students annually',
  },
  {
    name: 'Steve Jobs',
    picture: 'assets/images/people/steve.jpg',
    title: 'co-founder, the chairman, and CEO of Apple; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company\'s',
    description: 'He is widely recognized as a pioneer of the personal computer revolution of the 1970s and 1980s, along with his early business partner and fellow Apple co-founder Steve Wozniak. He was largely responsible for reviving Apple, which was on the verge of bankruptcy.',
  },
  {
    name: 'Warren Buffet',
    picture: 'assets/images/people/buffet2.jpeg',
    title: ' chairman and CEO of Berkshire Hathaway.',
    description: 'He is one of the most successful investors in the world and has a net worth of over $113 billion as of June 2022, making him the world\'s fifth-wealthiest person.',
  },
  {
    name: 'Elon Musk',
    picture: 'assets/images/people/musk.png',
    title: 'founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and Product Architect of Tesla, Inc.; founder of The Boring Company; and co-founder of Neuralink and OpenAI',
    description: 'Elon Musk, South African-born American entrepreneur who cofounded the electronic-payment firm PayPal and formed SpaceX, maker of launch vehicles and spacecraft. He was also one of the first significant investors in, as well as chief executive officer of, the electric car manufacturer Tesla.\n',
  },
  {
    name: 'Jack Ma',
    picture: 'assets/images/people/jack.jpg',
    title: ' co-founder and former executive chairman of Alibaba Group',
    description: 'In 2017, Ma was ranked second in the annual "World\'s 50 Greatest Leaders" list by Fortune.[4] He has widely been considered as an informal global ambassador for Chinese business, and is an influential figure for the community of startup businesses',
  },
];
const partners = [
  {
    title: 'Africa Institute of Mathematics Science',
    icon: 'assets/images/partner/aims.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Microverse',
    icon: 'assets/images/partner/microverse.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Google',
    icon: 'assets/images/partner/google.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Pluralsight',
    icon: 'assets/images/partner/pluralsight.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
  {
    title: 'Uber',
    icon: 'assets/images/partner/uber.png',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
  },
];
// <div class="card d-flex p-small flex-col-lg text-center-lg gap-1-sm grid-container-3">
const programListItem = (icon, title, description, index) => ` <li class="class bg-dark-1 mb-small m-small-lg " id="program-${index}">
                    <div class="card d-flex p-small flex-col-lg text-center-lg gap-1-sm grid-container-3">
                        <div class="mb-1-lg mt-1-lg align-self-center">
                            <span class="card-icon ${icon}"></span>
                        </div>
                        <div class="mb-1-lg align-self-center ">
                            <h5 class="card-title text-secondary">${title}</h5>
                        </div>
                        <div class="card-caption align-self-center mb-2-lg text-white">
                            <p>${description}</p>
                        </div>
                    </div>
                </li> `;
const speakerListItem = (name, picture, title, description, index) => ` <li class="card grid-container mb-2 ${index < 2 ? '' : 'd-none-sm'}" id="speaker-${index}">
                    <div class="item-left ">
                        <div class="chase-bg"></div>
                        <div class="card-image mb-1">
                            <img src="${picture}" alt="${title}">
                        </div>
                    </div>
                    <div class="item-right ml-1-lg ">
                        <div class="card-header mb-small uppercase">${name}</div>
                        <div class="card-title text-secondary mb-small capitalize text-small">${title}</div>
                        <div class="card-description ">
                            ${description}
                        </div>
                    </div>
                </li>`;
const partnerListItem = (icon, title, description, index) => ` <li class="item" id="parner-${index}">
                    <div class="card  p-small">
                       <img src="${icon}" alt="${description}" title="${title}" class="partner-logo">
                    </div>
                </li> `;

function setValue(target, value) {
  target.innerHTML = value;
}

function setText(target, value) {
  setValue(target, value);
}

// Initialize page content function

function initPage() {
  if (programList) setText(programList, programs.map((item, index) => programListItem(item.icon, item.title, item.description, index)).join(''));
  if (speakerList) {
    if (speakers.length > 2) showMoreSpeakersButton.classList.remove('d-none-sm');
    setText(speakerList, speakers.map((item, index) => speakerListItem(item.name, item.picture, item.title, item.description, index)).join(''));
    showMoreSpeakersButton.addEventListener('click', () => {
      speakerList.querySelectorAll('li').forEach((item) => {
        item.classList.remove('d-none-sm');
      });
      showMoreSpeakersButton.classList.add('d-none-sm');
    });
  }
  if (partnerList) setText(partnerList, partners.map((item, index) => partnerListItem(item.icon, item.title, item.description, index)).join(''));
}

initPage();

function toggleMenu() {
  body.classList.remove('overflow-y');
  document.querySelector('.headline').classList.toggle('blur');
  document.querySelector('section').classList.toggle('blur');
  menu.classList.toggle('d-none');
}

function openMenu() {
  toggleMenu();
  body.classList.toggle('overflow-y');
}

function closeMenu() {
  toggleMenu();
}

closeMenuIcon.addEventListener('click', () => {
  closeMenu();
});

openMenuIcon.addEventListener('click', () => {
  openMenu();
});

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    closeMenu();
  });
});