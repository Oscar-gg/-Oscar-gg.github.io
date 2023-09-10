// import eventJSON from '../files/events.json' assert {type: "json"};

const eventData = [
  {
    title: "Event Manager",
    date: "July - August 2023",
    description:
      "As a personal project, I developed a Webpage aimed to manage the events of RoBorregos. The page supports Role Based Access Control and uses NextAuth for user authentication, making it highly customizable. In addition, the page has functionality to filter events, create lists of confirmed assistants to an event, and allows the user to directly add events to their personal calendar. The website is now in production and it's currently an active project at RoBorregos, where a team was created to implement new features.",
    id: "evmanager",
    link: "https://events.rbrgs.com/;https://github.com/Oscar-gg/EventManager",
    img: "roboevents.png",
  },
  {
    title: "Transforma Web",
    date: "July 2023",
    description:
      "During summer, I was part of a social service project which consisted of creating quality content to help people develop essential skills. In particular, I was in charge of updating a course aimed to help immigrants in the United States by providing an understanding of the health system and the mechanisms available for many situations in which they could be. The course was developed using HTML, CSS, JavaScript, and Bootstrap. In addition to migrating the course, I developed a variety of scripts that automated lengthy tasks that other programmers migrating other courses had to do. One of the scripts automated the process of compressing all the media files considering user parameters and specified thresholds, and other scripts had the purpose of tracking unused files and helping correct grammar.",
    id: "transformaWeb",
    link: "https://www.cca.org.mx/CCA_cursos/inmigrantes_saludUSA_v2/index.html",
    img: "transformaweb.png",
  },
  {
    title: "RoboCup Maze",
    date: "October 2022 - April 2023",
    description:
      "Rescue Maze is a competition where participants build an autonomous robot to solve a maze and perform a variety of tasks. I participated as a member of RoBorregos and worked on the software team. My role was to develop the robot's control system and vision. The implementation of the control system was done using C++ and Arduino, and was integrated with the other submodules by using ROS. We competed in Monterrey, Mexico and participated in the national competition at Xalapa, Veracruz. The most challenging aspect of this project was getting to know ROS, Ubuntu, and image processing in a short period of time.",
    id: "maze",
    link: "https://docs.rbrgs.com/RescueMaze/;https://github.com/RoBorregos/rescuemaze-2023",
    img: "maze.png;maze2.jpg",
  },
  {
    title: "Participated in London Hackathon",
    date: "November 2022",
    description:
      "This Hackathon was organized by the Imperial College Business School, Tecnológico de Monterrey, and other organizations. For this event, my team and I developed a mobile application using React Native and a database. I was in charge of developing some of the backend and a little bit of the frontend. While working on this project, I realized that I first needed to learn React and Web Development before being able to fully comprehend React Native and thus decided to start learning HTML, CSS, JavaScript, and React.",
    id: "hackathon2",
    link: "https://github.com/CarlosMtz1281/Hack_London",
    img: "hack-london.jpg",
  },
  {
    title: "Programmer at RoBorregos",
    date: "October 2022 - Present",
    description:
      "Joined RoBorregos, a robotics team at Tecnológico de Monterrey that participates in international competitions and has a wide variety of active projects. As a team member, I have the opportunity to participate in relevant projects as a programmer and receive mentorship from more experienced students.",
    id: "roborregos",
    link: "https://www.instagram.com/p/Cj_46o7MHOI/",
  },
  {
    title: "Participated in HackMty",
    date: "September 2022",
    description:
      "HackMty, the largest student Hackathon in Mexico, was the first event of this type that I was able to attend. As many Hackathons, it consisted of selecting a challenge and developing a solution in less than 24 hours. For this event, my teammates and I chose to create a mobile application to solve a problem related with the management of water, a relevant need at that time because there was a water shortage in Northern Mexico when HackMty took place. For this application we used Kivy, a python framework for mobile apps.",
    id: "hackathon",
    link: "https://github.com/Oscar-gg/Atemoc",
    img: "hack-mty.jpg;hack-mty-2.jpg",
  },
  {
    title: "Entered competitive programming group",
    date: "August 2022",
    description:
      "During the first months since joining Tecnológico de Monterrey, I started attending weekly meetings organized by some students at campus in which competitive programming problems were analyzed and upsolved. In these meetings, I started learning about data structures and algorithms for solving common problems. In addition, I created an account for codeforces and started uploading my solved problems in a github repository.",
    id: "compp3",
    link: "https://github.com/Oscar-gg/Programacion-Competitiva",
  },
  {
    title: "B.S. In Computer Ccience at Técnológico de Monterrey",
    date: "August 2022 - May 2026",
    description:
      "After hearing positive reviews and reading through the contents of each semester, I decided to enroll in the computer science degree at ITESM campus Monterrey.",
    id: "tec",
  },
  {
    title: "Robochamp competition",
    date: "April 2022",
    description:
      "This competition consisted of developing a remote-controlled robot using Arduino in teams of 4. In this competition, where the robot needed to surpass a series of challenges, I was in charge of the programming area and learned about another area of computer science: robotics. An important aspect was to make the code flexible as the components sometimes didn’t work as expected. E.g. Motors moved at different speeds, voltage could affect results, etc.",
    id: "robochamp",
    link: "https://www.instagram.com/p/CdZSOt1OSqr/",
    img: "robochamp.jpg",
  },
  {
    title:
      "Won 17° International Science competition in computer science section",
    date: "March 2022",
    description:
      "After having participated the year before in the competition, hosted by Tecnológico de Monterrey, I studied the syntax of both C++ and Python to a greater extent and was able to win first place at this coding competition directed to high school students. Learning about the syntax of the languages allowed me to consolidate my foundations and learn about new concepts such as reference variables, ways to format strings, and ‘computational thinking’. From this event I learned that it’s relatively easy to learn new languages because many of the concepts are transferable.",
    id: "compp2",
    link: "https://admision.tec.mx/concurso-de-ciencias/resultados2022",
    img: "comp-programming.jpg",
  },
  {
    title: "Developed To-do list mobile app",
    date: "September 2021 - May 2022",
    description:
      "As part of the Internal Assessment for the IB CS course, I had to develop an application that helped solve a problem of a client of our selection. For this project, I developed a mobile app for android using java. The purpose of the application was to manage a series of tasks and organize them in relation to the category of the task, status, priority, and people related to a given task. The application is able to store, sort, filter, and maintain a log of tasks marked as completed to improve management. From this project, I learned about the system life cycle and mobile development at a fast pace, as well as the importance of taking into account the client’s opinion.",
    id: "mobile",
    link: "https://github.com/Oscar-gg/TaskRegister",
    img: "todo-app.jpg",
  },
  {
    title: "Developed “Save links”, a CLI app",
    date: "August 2021 - July 2022",
    description:
      "Applying the knowledge obtained after finishing the course “Automate the Boring stuff with Python”, I developed a CLI app to save, open, delete, and I visualize previously saved links on the browser. The program uses pyautogui to interact with the web browser by sending keystrokes to select and copy links, maximize windows, and close tabs. Used app for personal use to efficiently save significant amounts of related links.",
    id: "py2",
    link: "https://github.com/Oscar-gg/save_links",
  },
  {
    title: "Finished Automate the Boring Stuff with Python",
    date: "August 2021",
    description:
      "After having recognized the potential of Python in the previous coding competition, I decided to learn by taking online courses in my free time and making projects. After lurking in subreddits related to programming for quite some time, I found limited time coupons to take Al Sweigart’s “Automate the boring stuff with python” for free and get a certification. Learning this language was interesting as it made me reflect about the decisions made when developing languages and the inherent trade offs that those decisions imply, such as speed of developments vs execution time, or dynamic vs static typing.",
    id: "py",
    link: "https://www.udemy.com/certificate/UC-c75531f1-b8e0-45dc-b531-cf462781e773/",
  },
  {
    title:
      "Top 20 at 16° International Science competition in computer science section",
    date: "April 2021",
    description:
      "During my second year of high school, I entered my first competition related to coding. This time, the competition was hosted by Tecnológico de Monterrey and it consisted of c++ and python questions. The questions were of type multiple choice and fill in the blanks. From this contest I learned the importance of learning independently, because c++ and python were both languages that I hadn’t seen in classes and only read of them in my free time; I realized that I had a lot to learn and that there are a lot of interesting technologies out there.",
    id: "compp",
  },
  {
    title: "Developed Autohotkey Script",
    date: "April 2021",
    description:
      "One of the first scripts that I developed had the purpose of automating a daily task that I inevitably had during the pandemic: opening zoom classes and their related folders. I decided to make this project relatively close to the date I started programming because I figured out that it would be the fastest way to produce something useful for me, which would in turn motivate me to keep learning. In the end, the script saved me a couple of hours of opening zoom classes and automating basic tasks… but it took me nearly 15 hours of research, learning and trial and error to produce the script. 😅",
    id: "ahk",
    link: "https://github.com/Oscar-gg/zoom-script",
  },
  {
    title: "IB computer science course",
    date: "August 2020 - May 2022",
    description:
      "The first formal education I got regarding computer science was during my second and third years of high school, where I had the opportunity to take Computer Science SL at PrepaTec Valle Alto. In here, I learned about the fundamentals, OOP, java, and was able to work on several projects involving desktop and mobile development.",
    id: "ibcs",
  },
];

const container = document.getElementsByClassName("wrapper-j")[0];

// const eventData = eventJSON.events;

const eventAmount = eventData.length;

for (let i = 0; i < eventAmount; i++) {
  const divEvent = document.createElement("div");
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

  let bBar = 0;

  if (eventData[i].link != undefined || eventData[i].img != undefined) {
    bBar = document.createElement("div");
    bBar.classList.add("bar-j");
  }

  if (eventData[i].link != undefined) {
    const links = eventData[i].link.split(";");

    for (let link of links) {
      const newLink = document.createElement("a");
      newLink.href = link;
      newLink.target = "_blank";
      const icon = document.createElement("i");
      icon.classList.add("material-icons");
      const textIcon = document.createTextNode("link");

      icon.appendChild(textIcon);
      newLink.appendChild(icon);
      bBar.appendChild(newLink);
    }
  }

  if (eventData[i].img != undefined) {
    const images = eventData[i].img.split(";");
    const modal = document.getElementById("modal-j");
    const modalImg = document.getElementById("img-j");
    var captionText = document.getElementById("caption");
    var header = document.getElementById("site-header");

    for (let img of images) {
      const icon = document.createElement("i");
      icon.classList.add("material-icons");
      const textIcon = document.createTextNode("image");
      icon.appendChild(textIcon);
      let change = false;

      icon.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = "assets/images/" + img;
        captionText.innerHTML = eventData[i].title;
        header.style.display = "none";
      });

      bBar.appendChild(icon);
    }
  }

  if (bBar !== 0) {
    divEvent.appendChild(bBar);
  }

  // Add description after bottom bar to select siblings that appear after bBar in main.css.
  divEvent.appendChild(divDescription);

  // Add icon for devices with small screen width (phones).

  if (eventData[i].link != undefined || eventData[i].img != undefined) {
    const divIcon = document.createElement("div");
    divIcon.classList.add("expand-j");

    const extendIcon = document.createElement("i");
    extendIcon.classList.add("material-icons");
    let textIcon = document.createTextNode("expand_more");
    extendIcon.appendChild(textIcon);
    divIcon.appendChild(extendIcon);

    divIcon.addEventListener("click", () => {
      if (textIcon.nodeValue == "expand_more") {
        textIcon.nodeValue = "expand_less";
        divDescription.style.padding = "0 0 40px 0";
        bBar.style.height = "40px";
      } else {
        textIcon.nodeValue = "expand_more";
        divDescription.style.padding = "0 0 0 0";
        bBar.style.height = "0px";
      }
    });

    divEvent.appendChild(divIcon);
  }

  container.appendChild(divEvent);
}

// Closure used to avoid polluting the global namespace.

const handleModal = (function () {
  let closeM = true;
  let modal = document.getElementById("modal-j");
  let header = document.getElementById("site-header");
  let span = document.getElementById("close-jm");
  let img = document.getElementById("img-j");
  let caption = document.getElementById("caption");

  function addListeners() {
    modal.addEventListener(
      "click",
      () => {
        if (closeM) {
          modal.style.display = "none";
          header.style.display = "block";
        } else {
          closeM = true;
        }
      },
      false
    );

    img.addEventListener(
      "click",
      () => {
        closeM = false;
      },
      false
    );

    span.addEventListener("click", () => {
      modal.style.display = "none";
      header.style.display = "block";
    });

    caption.addEventListener(
      "click",
      () => {
        closeM = false;
      },
      false
    );
  }

  return addListeners();
})();

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
            <div class="bar-j">
              <a href="_blank"><i class="material-icons ">link</i></a>
              <i class="material-icons">image</i>
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
