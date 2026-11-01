const target = document.querySelector('#target');

// Selaimen ja käyttöjärjestelmän tiedot
const browserInfo = navigator.userAgentData;

let browserName = 'Tuntematon selain';
let browserVersion = 'Tuntematon versio';
let operatingSystem = navigator.platform || 'Tuntematon käyttöjärjestelmä';

if (browserInfo) {
  operatingSystem = browserInfo.platform;

  const browser = browserInfo.brands.find(item => item.brand !== 'Not A Brand');

  if (browser) {
    browserName = browser.brand;
    browserVersion = browser.version;
  }
} else {
  const userAgent = navigator.userAgent;

  if (userAgent.includes('Edg/')) {
    browserName = 'Microsoft Edge';
    browserVersion = userAgent.match(/Edg\/([\d.]+)/)?.[1] ?? 'Tuntematon';
  } else if (userAgent.includes('Chrome/')) {
    browserName = 'Google Chrome';
    browserVersion = userAgent.match(/Chrome\/([\d.]+)/)?.[1] ?? 'Tuntematon';
  } else if (userAgent.includes('Firefox/')) {
    browserName = 'Mozilla Firefox';
    browserVersion = userAgent.match(/Firefox\/([\d.]+)/)?.[1] ?? 'Tuntematon';
  } else if (userAgent.includes('Safari/')) {
    browserName = 'Safari';
    browserVersion = userAgent.match(/Version\/([\d.]+)/)?.[1] ?? 'Tuntematon';
  }
}

// Näytön koko
const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

// Selaimen ikkunan koko
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

// Käyttöjärjestelmän tarjoama käytettävissä oleva näyttötila
const availableWidth = window.screen.availWidth;
const availableHeight = window.screen.availHeight;

// Päivämäärä suomeksi
const now = new Date();

const date = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

// Kellonaika: tunnit ja minuutit
const time = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});

// Näytä kaikki tiedot sivulla
target.innerHTML = `
  <p>Selaimen nimi: ${browserName}</p>
  <p>Selaimen versio: ${browserVersion}</p>
  <p>Käyttöjärjestelmä: ${operatingSystem}</p>
  <p>Näytön leveys: ${screenWidth}</p>
  <p>Näytön korkeus: ${screenHeight}</p>
  <p>Käytettävissä oleva näyttötila: ${availableWidth} x ${availableHeight}</p>
  <p>Selaimen ikkunan koko: ${windowWidth} x ${windowHeight}</p>
  <p>Päivämäärä: ${date}</p>
  <p>Kellonaika: ${time}</p>
`;
