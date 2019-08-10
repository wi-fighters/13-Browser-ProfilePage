const username = document.querySelector('input[type="text"]'),
  birthdayDate = document.querySelector('input[type="date"]'),
  picture = document.querySelector('input[type="file"]'),
  primaryColor = document.getElementById('primaryColor'),
  secondaryColor = document.querySelector('#secondaryColor'),
  textarea = document.querySelector('textarea'),
  checkboxes = document.querySelectorAll('input[type="checkbox"]'),
  form = document.querySelector('form'),
  baseUrl = 'images/',
  paragraphTextareaMessage = document.querySelector('p.countermessage');

form.addEventListener('submit', function(ev) {
  ev.preventDefault();
  // ? Getting form values
  let userNameValue = username.value;
  let birthdayValue = birthdayDate.value;
  let pictureSource = picture.value;
  let primaryColorValue = primaryColor.value;
  let secondaryColorValue = secondaryColor.value;
  let textareaMessage = textarea.value;

  // ? Creating Profile section form form data
  let section = document.createElement('SECTION');

  let h3 = document.createElement('H3');
  h3.innerText = userNameValue;

  // ? Calculating user age
  let birthdayParagraph = document.createElement('P');
  let birthdayObject = new Date(birthdayValue);
  let today = new Date();
  let ageCustomer = today.getFullYear() - birthdayObject.getFullYear();
  birthdayParagraph.innerHTML = `${userNameValue} is <b>${ageCustomer}</b> years old`;

  // ? Getting user image
  let image = document.createElement('IMG');
  let newPath = pictureSource.replace(`C:\\fakepath\\`, baseUrl);
  console.log(newPath);
  image.src = newPath;

  let article = document.createElement('ARTICLE');
  article.innerText = textareaMessage;

  section.style.background = primaryColorValue;
  section.style.color = secondaryColorValue;

  let spanCloseButton = document.createElement('SPAN');
  spanCloseButton.innerText = 'X';

  // ? Getting and storing user skills
  let programmingSkills = [];

  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      programmingSkills.push(checkboxes[i].parentElement.innerText);
    }
  }

  let languagesString = programmingSkills.join(', ');
  let languagesParagraph = document.createElement('P');
  languagesParagraph.innerText = `The programming skills of ${userNameValue} are: ${languagesString}`;

  section.appendChild(h3);
  section.appendChild(birthdayParagraph);
  section.appendChild(image);
  section.appendChild(article);
  section.appendChild(spanCloseButton);
  section.appendChild(languagesParagraph);

  document.body.appendChild(section);

  // ? Enabling profile page deletion
  spanCloseButton.addEventListener('click', function(event) {
    document.body.removeChild(event.currentTarget.parentElement);
  });
});
