// Loading html file dymanically
const desktopSpeakers = document.querySelector('.desktopSpeakers');

const speakers = [
  {
    topic: 'Featured Speakers',
    name: 'Yochai Benkler',
    image: 'images/speaker_01.png',
    roles: 'Berkman Professor of Entre preneurial Legal Studies at Harvard Law School',
    achievements: 'Benkler studies commons-based peer production, Networks in 2006.',

  },
  {
    topic: 'Featured Speakers',
    name: 'Sohyeong Noh',
    image: 'images/speaker_03.png',
    roles: 'Director of Art Centre Nabi and a board member of CC Korea',
    achievements: 'As the main venue of new media art production in Korea, Nabi promotes cross-disciplinary collaboration, humanities, and the arts',

  },
  {
    topic: 'Featured Speakers',
    name: 'Sohyeong Noh',
    image: 'images/speaker_03.png',
    roles: 'Director of Art Centre Nabi and a board member of CC Korea',
    achievements: 'As the main venue of new media art production in Korea, Nabi promotes cross-disciplinary collaboration, humanities, and the arts',

  },
  {
    topic: 'Featured Speakers',
    name: 'Sohyeong Noh',
    image: 'images/speaker_01.png',
    roles: 'Director of Art Centre Nabi and a board member of CC Korea',
    achievements: 'As the main venue of new media art production in Korea, Nabi promotes cross-disciplinary collaboration, humanities, and the arts',

  },
  {
    topic: 'Featured Speakers',
    name: 'Sohyeong Noh',
    image: 'images/speaker_01.png',
    roles: 'Director of Art Centre Nabi and a board member of CC Korea',
    achievements: 'As the main venue of new media art production in Korea, Nabi promotes cross-disciplinary collaboration, humanities, and the arts',

  },
  {
    topic: 'Featured Speakers',
    name: 'Sohyeong Noh',
    image: 'images/speaker_03.png',
    roles: 'Director of Art Centre Nabi and a board member of CC Korea',
    achievements: 'As the main venue of new media art production in Korea, Nabi promotes cross-disciplinary collaboration, humanities, and the arts',
    more: 'MORE',
  },
];

// Adding cards dynamically
for (let i = 0; i < speakers.length; i += 1) {
  desktopSpeakers.innerHTML += `
    <div class="speakersContainer">
    <div class="speaker1">
        <div class="speakersImage">
            <img class="speakersImage1" src=${speakers[i].image} alt="Speaker One">
        </div>
        
        <div class="speakerContent">
            <h4>${speakers[i].name} </h4>
            <p class="speakerContentP"><i>${speakers[i].roles} </i>
            </p>
            <hr>
            <p class="speakerContentP2"> ${speakers[i].achievements} 
            </p>
        </div>
       
    </div>
    </div>
    `;
}
