const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 50);
});


const toggle = document.querySelector('.mobile-nav-toggle');
const nav    = document.getElementById('primary-navigation');


toggle.addEventListener('click', () => {
  const isOpen = nav.dataset.visible === 'true';  
  nav.dataset.visible = !isOpen;                  
  toggle.setAttribute('aria-expanded', !isOpen);  

  nav.src = isOpen
  ? './assets/shared/icon-close.svg'
  : './assets/shared/icon-hamburger.svg';
nav.alt = isOpen ? 'open menu': 'close menu';
});


nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.dataset.visible = 'false';
    toggle.setAttribute('aria-expanded', 'false');
  });
});


const sections = document.querySelectorAll('section[id]');  
const navLinks = document.querySelectorAll('.primary-nav a'); 

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
  
      navLinks.forEach(link => link.classList.remove('active'));

      const activeLink = document.querySelector(
        `.primary-nav a[href="#${entry.target.id}"]`
      );
      if (activeLink) activeLink.classList.add('active');
    }
  });
}, { threshold: 0.5 }); 

sections.forEach(section => sectionObserver.observe(section));


const destinations = [
  {
    name:     'Moon',
    desc:     "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: '384,400 km',
    time:     '3 days',
    img:      './assets/destination/image-moon.png'
  },
  {
    name:     'Mars',
    desc:     "Don't forget to pack your hiking boots. You'll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It's two and a half times the size of Everest!",
    distance: '225 mil. km',
    time:     '9 months',
    img:      './assets/destination/image-mars.png'
  },
  {
    name:     'Europa',
    desc:     "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover's dream. With an icy surface, it's perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: '628 mil. km',
    time:     '3 years',
    img:      './assets/destination/image-europa.png'
  },
  {
    name:     'Titan',
    desc:     "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: '1.6 bil. km',
    time:     '7 years',
    img:      './assets/destination/image-titan.png'
  }
];

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {

  
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    
    const destination = destinations[+btn.dataset.dest];

    const content = document.getElementById('dest-content');
    content.classList.remove('fade');
    void content.offsetWidth;
    content.classList.add('fade');

    document.getElementById('dest-name').textContent     = destination.name;
    document.getElementById('dest-desc').textContent     = destination.desc;
    document.getElementById('dest-distance').textContent = destination.distance;
    document.getElementById('dest-time').textContent     = destination.time;
    document.getElementById('planet-img').src            = destination.img;
    document.getElementById('planet-img').alt            = destination.name;
  });
});


const crew = [
  {
    role: 'Commander',
    name: 'Douglas Hurley',
    bio:  "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img:  './assets/crew/image-douglas-hurley.png'
  },
  {
    role: 'Mission Specialist',
    name: 'Mark Shuttleworth',
    bio:  "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img:  './assets/crew/image-mark-shuttleworth.png'
  },
  {
    role: 'Pilot',
    name: 'Victor Glover',
    bio:  "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18. He was a crew member of Expedition 64.",
    img:  './assets/crew/image-victor-glover.png'
  },
  {
    role: 'Flight Engineer',
    name: 'Anousheh Ansari',
    bio:  "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    img:  './assets/crew/image-anousheh-ansari.png'
  }
];

document.querySelectorAll('.dot').forEach(dot => {
  dot.addEventListener('click', () => {


    document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
    dot.classList.add('active');

    
    const member = crew[+dot.dataset.crew];

   
    document.getElementById('crew-role').textContent = member.role;
    document.getElementById('crew-name').textContent = member.name;
    document.getElementById('crew-bio').textContent  = member.bio;
    document.getElementById('crew-img').src          = member.img;
    document.getElementById('crew-img').alt          = member.name;
  });
});


const tech = [
  {
    label: 'The terminology…',
    name:  'Launch vehicle',
    desc:  "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight.",
    img:   './assets/technology/image-launch-vehicle-portrait.jpg'
  },
  {
    label: 'The terminology…',
    name:  'Spaceport',
    desc:  "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the middle of the Mojave desert, the state-of-the-art facility is designed to be as environmentally friendly as possible.",
    img:   './assets/technology/image-spaceport-portrait.jpg'
  },
  {
    label: 'The terminology…',
    name:  'Space capsule',
    desc:  "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img:   './assets/technology/image-space-capsule-portrait.jpg'
  }
];

document.querySelectorAll('.num-btn').forEach(btn => {
  btn.addEventListener('click', () => {


    document.querySelectorAll('.num-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const item = tech[+btn.dataset.tech];

    document.getElementById('tech-label').textContent = item.label;
    document.getElementById('tech-name').textContent  = item.name;
    document.getElementById('tech-desc').textContent  = item.desc;
    document.getElementById('tech-img').src           = item.img;
  });
});