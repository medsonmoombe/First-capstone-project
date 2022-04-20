const speakersInforArray = [
  {
    image: 'assets/spk/standard.jpg',
    name: 'James Banda ',
    details: 'CEO and founder of Nexus Music Promotions',
    work: 'Currently owns a money lending company and a business man',

  },
  {
    image: 'assets/spk/napsa.jpg',
    name: 'Dennis Kangwa',
    details: 'Speaker  of Napsa Pension Scheme',
    work: 'Currently owns a money lending company and a business man',
  },
  {
    image: 'assets/spk/marky-2.jpg',
    name: 'Marky 2 ',
    details: 'CEO and founder of Copala Swag Music Lable',
    work: 'Currently owns a music company and a business man',
  },
  {
    image: 'assets/spk/copperb.jpg',
    name: 'Micheal Mwambwa ',
    details: 'CEO of copperbelt energy copperbelt co-operation',
    work: 'Currently owns a money lending company and a business man',
  },
  {
    image: 'assets/spk/bwalya-kalandanya11.jpg',
    name: 'Bwalya Kalandanya ',
    details: 'CEO and founder of kalandanya Music Promotions',
    work: 'Currently owns a money lending company and a business man',
  },
  {
    image: 'assets/spk/slap-d.jpg',
    name: 'Slap Dee ',
    details: 'CEO and founder of XYZ Entertainment',
    work: 'Currently owns a money lending company and a business man',
  },
];

for (let i = 0; i < speakersInforArray.length; i += 1) {
  const speakerSection = document.querySelector('.spakers-section');
  const cardContainer = document.createElement('div');
  cardContainer.setAttribute('class', 'card-container');
  speakerSection.appendChild(cardContainer);
  const speakerCard = document.createElement('div');
  speakerCard.setAttribute('class', 'speaker-cards');
  const spanSpeaker = document.createElement('div');
  spanSpeaker.setAttribute('class', 'span-speaker');
  const image = document.createElement('img');
  image.setAttribute('class', 'speaker-img');
  image.src = `${speakersInforArray[i].image}`;
  spanSpeaker.appendChild(image);
  const speakerDetails = document.createElement('div');
  speakerDetails.setAttribute('class', 'speaker-details');
  const speakerName = document.createElement('h5');
  speakerName.setAttribute('class', 'speaker-name');
  speakerName.innerText = `${speakersInforArray[i].name}`;
  speakerDetails.appendChild(speakerName);
  const speakerInfor = document.createElement('h5');
  speakerInfor.setAttribute('class', 'speaker-infor');
  speakerInfor.innerText = `${speakersInforArray[i].details}`;
  speakerDetails.appendChild(speakerInfor);
  const speakerPara = document.createElement('p');
  speakerPara.setAttribute('class', 'para-speaker');
  speakerPara.innerText = `${speakersInforArray[i].work}`;
  speakerDetails.appendChild(speakerPara);
  spanSpeaker.appendChild(speakerDetails);
  speakerCard.appendChild(spanSpeaker);

  // speakerSection.appendChild(mainSpeakers);
  cardContainer.appendChild(speakerCard);
}