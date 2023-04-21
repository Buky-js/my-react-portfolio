import events from "./images/events.jpg";
import fifa from "./images/fifa-world-cup.jpg";
import weather from "./images/weather-dashboard.png";
import quiz from "./images/timed-quiz.png";
import pwdGen from "./images/pwd-gen.png";
import eventPlanner from "./images/event-planner.jpg";

const projects = [
    {
        id: 1,
        name: 'Event-flow',
        src: eventPlanner,
        alt: 'event organisng app',
        git: 'https://github.com/Buky-js/Event-Flow',
        deployed: 'https://project-eventflow.herokuapp.com/'  
    },
    {
        id: 2,
        name: 'Event-Time',
        src: events,
        alt: 'Event-time app',
        git: 'https://github.com/Buky-js/Event_Time',
        deployed: 'https://aqueous-plateau-28230.herokuapp.com'
    },
    {
        id: 3,
        name: 'FIFA-Fever',
        src: fifa,
        alt: 'fifa-fever app',
        git: 'https://github.com/Buky-js/FIFA-Fever',
        deployed: 'https://buky-js.github.io/FIFA-Fever/'  
    },
    {
        id: 4,
        name: 'Weather Dashboard',
        src: weather,
        alt: 'weather-dashboard app',
        git: 'https://github.com/Buky-js/Weather-Dashboard',
        deployed: 'https://buky-js.github.io/Weather-Dashboard/'  
    },
    {
        id: 5,
        name: 'Timed Quiz',
        src: quiz,
        alt: 'coding quiz app',
        git: 'https://github.com/Buky-js/Timed-Quiz',
        deployed: 'https://buky-js.github.io/Timed-Quiz/'  
    },
    {
        id: 6,
        name: 'Password Generator',
        src: pwdGen,
        alt: 'password-generator app',
        git: 'https://github.com/Buky-js/Password-Generator',
        deployed: 'https://buky-js.github.io/Password-Generator/'  
    }
    
]

export default projects;