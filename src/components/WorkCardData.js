import projImg1 from "../assets/project-image-1.png";
import projImg2 from "../assets/project-image-2.png";
import projImg3 from "../assets/project-image-3.png";
import projImg4 from "../assets/project-image-4.png";
import projImg5 from "../assets/project-image-5.png";
import projImg6 from "../assets/project-image-6.png";
import projImg7 from "../assets/project-image-7.png";

const WorkCardData = [
  {
    imgsrc: projImg7,
    title: "SplitIt",
    description:
      "SplitIt is a financial management app that streamlines adding bills and splitting expenses among groups. It features a simple design for effortless expense tracking, multiple splitting options for precise calculations, and easy balance settlement to ensure seamless group financial management.",
    techStacks: [
      { name: "Language", list: "Angular" },
      { name: "Database", list: "MongoDB" },
      // { name: "Framework", list: "" },
      {
        name: "Tools",
        list: "User Authentication, Send Grid services, Netlify and Google Analytics"
      }
    ],
    githubLink: "https://github.com/mihir09/SplitIt",
    deploymentLink: "https://splititapp.netlify.app/",
  },
  {
    imgsrc: projImg6,
    title: "ShopMart",
    description:
      "Developed a dynamic e-commerce platform using Angular and Firebase, delivering a seamless shopping experience. Implemented features like a robust shopping cart, secure user authentication, and an intuitive admin portal for product management. Leveraged Firebase's real-time database and cloud services to ensure scalability and real-time updates, resulting in a high-performance online shopping solution.",
    techStacks: [
      { name: "Language", list: "Angular" },
      { name: "Database", list: "Firebase" },
      // { name: "Framework", list: "" },
      {
        name: "Tools",
        list: "User Authentication, Reusable Components, Auth Gaurds"
      }
    ],
    githubLink: "https://github.com/mihir09/ShopMart",
    deploymentLink: "https://shopmart-698a1.web.app/",
  },
  {
    imgsrc: projImg1,
    title: "Parking Space Management",
    description:
      "Developed a system to detect empty parking spots. Worked on user dashboard, sign-in and sign-up functionality, database handling, and OCR for number plate detection.",
    techStacks: [
      { name: "Language", list: "Python" },
      { name: "Database", list: "MySQL" },
      { name: "Framework", list: "Flask" },
      {
        name: "Tools",
        list: "OpenCV, Pytesseract, OCR, Pycharm"
      }
    ],
    githubLink: "https://github.com/mihir09/Parking_Space_Detection"
  },
  {
    imgsrc: projImg2,
    title: "Burnol Search Engine",
    description:
      "A search engine that displays top 10 results based on the query searched. It looks within the 10gb data of crawled wikipedia pages which are indexed using Hadoop and stored on MongoDB.",
    techStacks: [
      { name: "Language", list: "Java" },
      { name: "Database", list: "MongoDB" },
      { name: "Framework", list: "SpringBoot" },
      {
        name: "Tools",
        list: "BeautifulSoup, ML libraries, Hadoop, MapReduce"
      }
    ],
    githubLink: "https://github.com/mihir09/Burnol"
  },
  {
    imgsrc: projImg3,
    title: "Lets Chat",
    description:
      "Worked on backend and frontend to build a website that allows users to join active rooms and chat with other users.",
    techStacks: [
      { name: "Language", list: "Python" },
      { name: "Database", list: "Redis" },
      { name: "Framework", list: "Django" },
      {
        name: "Tools",
        list: "Nginx, Daphne, Gunicorn, Async socket connection"
      }
    ],
    githubLink: "https://github.com/mihir09/LetsChat"
  },
  {
    imgsrc: projImg4,
    title: "Restaurant Ratings",
    description:
      "A website that allows adding restaurant, submit ratings for the restaurant and display all the restaurants that are within 25 mile radius from users location. Integrated Django backend with React frontend that allows seamless data transfer using Rest API.",
    techStacks: [
      { name: "Language", list: "Python" },
      { name: "Database", list: "SQLite" },
      { name: "Framework", list: "Django" },
      {
        name: "Tools",
        list: "React, Django Rest Framework, Mapbox, Geopy "
      }
    ],
    githubLink: "https://github.com/mihir09/Restaurant-ratings"
  },
  {
    imgsrc: projImg5,
    title: "Twitter FIFA 2022 Sentiment Analysis",
    description:
      "Built a scrapper that collected more than 1 million tweets worldwide related to FIFA 2022. Using Spark to filter, analys and predict the sentiments of the tweets. Logistic Regression model predicted the sentiments with 89% accuracy.",
    techStacks: [
      { name: "Language", list: "Python" },
      { name: "Database", list: "HDFS" },
      {
        name: "Tools",
        list: "SNScrape, Spark, TextBlob, NLTK, Google colab"
      }
    ],
    githubLink: "https://github.com/mihir09/BigData-Analysis"
  }
];

export default WorkCardData;
