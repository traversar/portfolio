import writemeinSnap from './images/writemein.png';
import pypracticeSnap from './images/pypractice.png';
import astrologueSnap from './images/astrologue.png';


export const projects = [
    {
        name: 'PyPractice',
        url: 'https://pypypractice.herokuapp.com',
        summary: 'Python practice problems and challenges with embedded Python interpreter.',
        technologies: ['React/Redux', 'Flask', 'MaterialUI', 'SQLAlchemy', 'Docker'],
        img: pypracticeSnap,
    },
    {
        name: 'Write Me In',
        url: 'https://writemein.herokuapp.com',
        summary: 'Collaborative storywriting - edit, contribute and browse user created stories.',
        technologies: ['React/Redux', 'Express', 'Sequelize', 'PostgreSQL', 'CSS3'],
        img: writemeinSnap
    },
    {
        name: 'Astrologue',
        url: 'https://astrologue.herokuapp.com',
        summary: 'Render astronomical chart data with interactive presentation, based on specified time and location.',
        technologies: ['React/Redux', 'Django', 'PostgreSQL', 'CSS3', 'Docker'],
        img: astrologueSnap
    }
]
