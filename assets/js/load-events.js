import eventJSON from '../files/events.json' assert {type: "json"};

const container = document.getElementsByClassName("wrapper-j")[0];

const eventData = eventJSON.events;

const eventAmount = eventData.length;

for (let i = 0; i < eventAmount; i++) {
    const divEvent = document.createElement("div")
    divEvent.classList.add("event-j");
    divEvent.id = eventData[i].id;

    const divHeader = document.createElement("div");
    divHeader.classList.add("header-j");

    const divTitle = document.createElement("h4");
    divTitle.classList.add("title-j");
    const divTitleText = document.createTextNode(eventData[i].title);
    divTitle.appendChild(divTitleText);
    divHeader.appendChild(divTitle);

    const dateJ = document.createElement("h5");
    dateJ.classList.add("date-j");
    const dateJText = document.createTextNode(eventData[i].date);
    dateJ.appendChild(dateJText);
    divHeader.appendChild(dateJ);

    divEvent.appendChild(divHeader);

    const divDescription = document.createElement("p");
    divDescription.classList.add("content-j");
    const divDescriptionText = document.createTextNode(eventData[i].description);
    divDescription.appendChild(divDescriptionText);

    divEvent.appendChild(divDescription);

    container.appendChild(divEvent);
}

/*

Template using html:
<div class="event-j" id="hackathon2">
            <div class="header-j">
              <h4 class="title-j">
                Participated in London Hackathon
              </h4>
              <h5 class="date-j">
                November 2022
              </h5>
            </div>
            <p class="content-j">
              This Hackathon was organized by the Imperial College Business School, Tecnológico de Monterrey, and other
              organizations. For this event, my team and I developed a mobile application using React Native and a
              database. I was in charge of developing some of the backend and a little bit of the frontend. While
              working on this project, I realized that I first needed to learn React and Web Development before being
              able to fully comprehend React Native and thus decided to start learning HTML, CSS, JavaScript, and React.
            </p>
          </div>
*/