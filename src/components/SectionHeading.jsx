const SectionHeading = ({ title }) => {
    return (
        <div className="text-center font-Poppins">
            <h4 className="text-2xl font-medium uppercase text-base-color1 relative z-10 tracking-[1px] heading_underline">{title}</h4>
            <h2 className="uppercase text-8xl font-bold text-white/5 -mt-10 ">{title}</h2>
        </div>
    );
};

export default SectionHeading


