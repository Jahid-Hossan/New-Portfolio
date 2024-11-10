const SectionHeading = ({ title }) => {
    return (
        <div>
            <h4 className="text-2xl font-medium uppercase text-base-color1 relative z-10 tracking-[1px]">{title}</h4>
            <h2 className="st-section-heading-subtitle">{title}</h2>
        </div>
    );
};

export default SectionHeading