const Container = ({ children, className }) => {
    return <section className={`max-w-[1240px] px-5 mx-auto  ${className}`}>{children}</section>;
};

export default Container;
