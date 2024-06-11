import "./about.css";
import americanfootballlarge from "./assets/recent_up.png.webp";
const RecentGames = ()=>{
    return (
        <>
        <div className="about-block-after-header">
                    <div className="about-block-after-header-content">
                        <h3 className="about-block-after-header-nav1">Home → Recent Famous Games </h3>
                        <h1  className="about-block-after-header-nav"> Recent Famous Games </h1>
                    </div>
        </div>
        <div className="home-section-fourth-block">
            <div className="home-section-fourth-block-bottom-side">
                <img className="home-section-fourth-block-bottom-side-image" src={americanfootballlarge} alt="" />
                
                    <div className="home-section-fourth-block-bottom-side-right">
                    <p className="home-section-fourth-block-bottom-side-right-info">Recent Famous Games <br />________</p>
                                <h2 className="home-section-fourth-block-bottom-side-right-title ">Recent Famous Games from ComodoGame: Unforgettable Adventures and Epic Battles</h2>
                                <p className="home-section-fourth-block-bottom-side-right-text">
                                    ComodoGame has recently launched a series of groundbreaking games that have taken the gaming world by storm. These titles have quickly become fan favorites, thanks to their innovative gameplay, stunning graphics, and engaging storylines.
                                </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RecentGames