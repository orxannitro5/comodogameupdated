import "./about.css";
import americanfootballlarge from "./assets/recent_up.png.webp";
const UpcomingGames = () => {
    return (
        <>
            <div className="about-block-after-header">
                <div className="about-block-after-header-content">
                    <h3 className="about-block-after-header-nav1">Home → Upcoming Challenges </h3>
                    <h1 className="about-block-after-header-nav">Upcoming Challenges </h1>
                </div>
            </div>
            <div className="home-section-fourth-block">
                <div className="home-section-fourth-block-bottom-side">
                    <img className="home-section-fourth-block-bottom-side-image" src={americanfootballlarge} alt="" />

                    <div className="home-section-fourth-block-bottom-side-right">
                        <p className="home-section-fourth-block-bottom-side-right-info">Upcoming Challenge <br />________</p>
                        <h2 className="home-section-fourth-block-bottom-side-right-title ">Exciting New Releases from ComodoGame: Get Ready for Epic Adventures!                    </h2>
                        <p className="home-section-fourth-block-bottom-side-right-text">
                            ComodoGame is set to revolutionize the gaming landscape once again with a slate of exciting new releases that promise to captivate players around the globe. As the anticipation builds, let's take a sneak peek at what's coming up from this innovative game studio.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default UpcomingGames