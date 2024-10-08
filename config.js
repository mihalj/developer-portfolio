import { FaGithub, FaDiscord, FaYoutube } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiCsharp, SiFramer, SiTailwindcss, SiMongodb, SiNextdotjs, SiGit, SiHeadlessui, SiHtml5, SiCss3 } from 'react-icons/si';

const config = {
    name: "WraithsDev",
    description: "I havee been learning software myself for 4 years and I have been sharing the software I have made on YouTube for 1 year. I have been writing and developing Discord bots for a long time. and I enjoy doing it",
    discord: {
        userId: "696471986137858069"
    },
    github: {
        username: "mihalj"
    },
    links: [
        {
            name: 'GitHub',
            url: 'https://github.com/mihalj',
            icon: FaGithub,
            description: 'You can follow me on Github.'
        },
        {
            name: 'Discord',
            url: 'https://discord.com/users/696471986137858069',
            icon: FaDiscord,
            description: 'You can contact me on Discord.'
        },
        {
            name: 'Twitter',
            url: 'https://x.com/mihalj',
            icon: FaTwitter,
            description: 'You can follow me on Twitter.'
        },
        {
            name: 'Instagram',
            url: 'https://instagr.am/mihalj',
            icon: FaInstagram,
            description: 'You can follow me on Instagram.'
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
