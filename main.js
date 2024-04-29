const arrayx = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const arrayy = ['the soup kitchen', 'Disneyland', 'the White House'];
const arrayz = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];
const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  if (customName.value !== '') {
    newStory = newStory.replace(/Bob/g, customName.value);
  }

  if (document.getElementById("uk").checked) {
    newStory = newStory.replace('94 fahrenheit', '27 Celsius');
    newStory = newStory.replace('300 pounds', '136 kilograms');
  }

  const itemx = randomValueFromArray(arrayx);
  const itemy = randomValueFromArray(arrayy);
  const itemz = randomValueFromArray(arrayz);

  newStory = newStory.replace(':insertx:', itemx);
  newStory = newStory.replace(':inserty:', itemy);
  newStory = newStory.replace(':insertz:', itemz);

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
