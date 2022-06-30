import { FaCreditCard, FaBook, FaBriefcase } from 'react-icons/fa'

const sublinks = [
    {
        page: 'products',
        links: [
            {
                label: 'payment',
                icon: <FaCreditCard />,
                url: '/products',
            },
            {
                label: 'terminal',
                icon: <FaCreditCard />,
                url: '/terminal',
            },
            {
                label: 'connect',
                icon: <FaCreditCard />,
                url: '/connect',
            },
        ],
    },
    {
        page: 'developers',
        links: [
            {
                label: 'plugins',
                icon: <FaBook />,
                url: '/plugins',
            },
            {
                label: 'libraries',
                icon: <FaBook />,
                url: '/libraries',
            },
            {
                label: 'help',
                icon: <FaBook />,
                url: '/help',
            },
            {
                label: 'biling',
                icon: <FaBook />,
                url: '/billing',
            },
        ],
    },
    {
        page: 'company',
        links: [
            {
                label: 'about',
                icon: <FaBriefcase />,
                url: '/about',
            },
            {
                label: 'customers',
                icon: <FaBriefcase />,
                url: '/customers',
            },
        ],
    },
]

export default sublinks
