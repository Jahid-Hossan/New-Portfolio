import { Icon } from '@iconify/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SocialLinks = () => {
    const [activeLink, setActiveLink] = useState(0);
    const handleIconHover = (index) => {
        setActiveLink(index);
    };

    const data = [
        {
            "icon": "dribbble",
            "title": "Dribbble",
            "link": "/"
        },
        {
            "icon": "behance",
            "title": "Behance",
            "link": "/"
        },
        {
            "icon": "twitter",
            "title": "Twitter",
            "link": "/"
        },
        {
            "icon": "linkedin",
            "title": "LinkedIn",
            "link": "/"
        }
    ]

    return (
        <div className="st-social-link flex  mx-auto  justify-center  gap-3 ">
            {data.map((item, index) => (
                <Link
                    to={item.link}
                    className={index === activeLink ? 'flex items-center rounded-full border-[0.5px] pr-20 transition-all ease-in duration-500 overflow-hidden' : 'flex items-center rounded-full border-[0.5px] overflow-hidden transition-all ease-in duration-500'}
                    onMouseEnter={() => handleIconHover(index)}
                    key={index}
                >
                    <span className=" flex text-2xl  justify-center items-center rounded-full size-12 text-center"><Icon icon={`fa6-brands:${item.icon}`} /></span>
                    <span className="font-semibold text-white/80  max-w-0">{item.title}</span>
                </Link>
            ))}
        </div>
    )
};

export default SocialLinks