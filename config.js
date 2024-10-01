import { FaGithub, FaDiscord, FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiCsharp, SiFramer, SiTailwindcss, SiMongodb, SiNextdotjs, SiGit, SiHeadlessui, SiHtml5, SiCss3 } from 'react-icons/si';

const config = {
    name: "WraithsDev",
    description: "I havee been learning software myself for 4 years and I have been sharing the software I have made on YouTube for 1 year. I have been writing and developing Discord bots for a long time. and I enjoy doing it",
    discord: {
        userId: "843136836947410945"
    },
    github: {
        username: "WraithsDev"
    },
    links: [
        {
            name: 'GitHub',
            url: 'https://github.com/WraithsDev',
            icon: FaGithub,
            description: 'You can follow me on Github.'
        },
        {
            name: 'Discord',
            url: 'https://discord.com/users/843136836947410945',
            icon: FaDiscord,
            description: 'You can contact me on Discord.'
        },
        {
            name: 'Youtube',
            url: 'https://youtube.com/@WraithsDev',
            icon: FaYoutube,
            description: 'You can follow me on Youtube.'
        },
    ],
    skills: [
        {
            name: 'JavaScript',
            icon: SiJavascript,
        },
        {
            name: 'Node.js',
            icon: SiNodedotjs,
        },
        {
            name: 'C#',
            icon: SiCsharp,
        },
        {
            name: 'MongoDB',
            icon: SiMongodb,
        },
        {
            name: 'HTML',
            icon: SiHtml5,
        },
        {
            name: 'CSS',
            icon: SiCss3,
        },
    ]
}

export default config;
