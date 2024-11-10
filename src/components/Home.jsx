
import SocialLinks from "./SocialLinks";

const Home = () => {




    return (
        <section id="home" className="">
            <div className="flex h-[100vh] justify-center items-center">
                <div className="text-center text-white font-Poppins space-y-5 ">
                    <h1 className="text-[60px]  font-semibold">Hi, I am <span className="text-base-color1">Jahid Hossan</span></h1>
                    <p className="w-2/3 mx-auto text-[17px] font-light text-white/80">I&#39;m a <span className="text-base-color1">frontend web developer</span> with a knack for pixel-perfection! I deliver <span className="text-base-color1">clean code</span> so crisp you could frame it, and I make websites dance with <span className="text-base-color1">animations</span> smoother than your morning coffee. If you want a site that’s as interactive as it is good-looking, I&#39;m your <span className="text-base-color1">coder!</span></p>
                    <SocialLinks />
                </div>
            </div>
        </section>
    );
};

export default Home