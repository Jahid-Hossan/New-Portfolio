import { PropTypes } from 'prop-types';

const BtnDownloadCV = ({ title, href, style }) => {

    return (
        <div>
            <button href={href} className={`py-3 px-10 rounded-full text-xl  transition-all  delay-400 border-2 text-base-color1 border-base-color1 hover:bg-base-color1 hover:text-dark-color1  hover:translate-y-[-1px] hover:shadow-[0px_5px_10px_0px_#fec64450] ${style}`}>{title}</button>
        </div>
    );
};

BtnDownloadCV.propTypes = {
    title: PropTypes.string,
    href: PropTypes.string,
    style: PropTypes.string,
}

export default BtnDownloadCV