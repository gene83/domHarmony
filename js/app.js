/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

//1. In the nav element, target the span element with the id of 'matCount' and change the number from 0 to 11.
const getMatCount = document.getElementById('matCount');
getMatCount.innerHTML = 11;

//2. In the nav element, target the span element with the id of 'msgCount' and change the number from 0 to 23.
const getMsgCount = document.getElementById('msgCount');
getMsgCount.innerHTML = 23;

//3. In the div id data section, target the div element with the id of 'fullname' and change Full Name to Ronald McDonald.
const getFullName = document.getElementById('fullname');
getFullName.innerHTML = 'Ronald Mcdonad';

//4. In the div id data section, target the div element with the id of 'age' and change Age to 63 Years Old.
const getAge = document.getElementById('age');
getAge.innerHTML = '63 Years Old';

//5. In the div id data section, create a div with an id of job and give it the following information: Clown and Restauranteur.
const getJob = document.createElement('div');
getJob.id = 'job';
getJob.innerHTML = 'Clown and Restauranteur';
const getDataBlock = document.getElementById('data')
getDataBlock.appendChild(getJob);

//6. In the div id data section, create a div with an id of hobbies and give it the following information: Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.
const getHobbies = document.createElement('div');
getHobbies.id = 'hobbies';
getHobbies.innerHTML = 'Long romantic walks on the beach, candle light Big Mac dinners and tormenting the King.';
getDataBlock.appendChild(getHobbies);

//7. In the div id data section, create a div with an id of location and give it the following information: Honolulu, HI.
const getLocation = document.createElement('div');
getLocation.id = 'location';
getLocation.innerHTML = 'Honolulu, HI'
getDataBlock.appendChild(getLocation);

//8. In the div id data section, create a div with an id of wants and give it the following information: Looking for a Mrs. McDonald.
const getWants = document.createElement('div');
getWants.id = 'wants';
getWants.innerHTML = 'Looking for a Mrs. Mcdonald';
getDataBlock.appendChild(getWants);

//9. In the div id profile section, create a paragraph element with an id of pro2 and create a your own profile for Ronald (at least 2 sentences).
const getProfileBlock = document.getElementById('profile');
const getPro2 = document.createElement('p');
getPro2.innerHTML = 'The most successful clown you\'ll ever meet. Food is always on me.'
getProfileBlock.appendChild(getPro2);

//10. In the div id matches section, target the first div element with the class name of firstName and change Name to Wendy.
const getFirstMatch = document.getElementsByClassName('firstName')[0];
getFirstMatch.innerHTML = 'Wendy';

//11. In the div id matches section, target the first div element with the class name of otherAge and change Age to 48.
const getFirstAge = document.getElementsByClassName('otherAge')[0];
getFirstAge.innerHTML = 48;

//12. In the div id matches section, target the first div element with the class name of status and change Status to Single Mother.
const getFirstStatus = document.getElementsByClassName('status')[0];
getFirstStatus.innerHTML = 'Single Mother';

//13. In the div id matches section, target the second div element with the class name of firstName and change Name to Peko Chan.
const getSecondName = document.getElementsByClassName('firstName')[1];
getSecondName.innerHTML = 'Peko Chan';

//14. In the div id matches section, target the second div element with the class name of otherAge and change Age to 68.
const getSecondAge = document.getElementsByClassName('otherAge')[1];
getSecondAge.innerHTML = 68;

 //Final Boss Create your own profile into the page:
 //change image to match your profile
 //div with class name of firstName
 //div with class name of otherAge
 //div with class name of status
 //div with class anem of Motto
const getImg = document.getElementsByClassName('otherBox')[2].childNodes[1];
getImg.src = 'https://i.ytimg.com/vi/q8Up6JPb63c/maxresdefault.jpg';

 const getFirstName = document.getElementsByClassName('firstName')[2]
 getFirstName.innerHTML = 'Potato Girl'

 const getOtherAge = document.getElementsByClassName('otherAge')[2];
 getOtherAge.innerHTML = '20';

 const getStatus = document.getElementsByClassName('status')[2];
 getStatus.innerHTML = 'looking for food';

 const getMotto = document.getElementsByClassName('motto')[2];
 getMotto.innerHTML = 'it was begging to be eaten' 




