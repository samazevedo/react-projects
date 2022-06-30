import {
    FaCalendar,
    FaFacebook,
    FaFolderOpen,
    FaHome,
    FaInstagram,
    FaSketch,
    FaTwitter,
    FaUserFriends,
} from 'react-icons/fa'

export const links = [
    {
        id: 1,
        url: '/',
        text: 'home',
        icon: <FaHome />,
    },
    {
        id: 2,
        url: '/team',
        text: 'team',
        icon: <FaUserFriends />,
    },
    {
        id: 3,
        url: '/calendar',
        text: 'calendar',
        icon: <FaCalendar />,
    },
    {
        id: 4,
        url: '/projects',
        text: 'projects',
        icon: <FaFolderOpen />,
    },
]

export const social = [
    {
        id: 1,
        url: 'https://www.facebook.com/',
        icon: <FaFacebook />,
    },
    {
        id: 2,
        url: 'https://www.twitter.com/',
        icon: <FaTwitter />,
    },
    {
        id: 3,
        url: 'https://www.instagram.com/',
        icon: <FaInstagram />,
    },
    {
        id: 4,
        url: 'https://www.sketch.com/',
        icon: <FaSketch />,
    },
]
