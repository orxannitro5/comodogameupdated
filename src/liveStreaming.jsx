import "./about.scss";
import americanfootballlarge from "./assets/recent_up.png.webp";
const LiveStreaming = () => {
    return (
        <>
            <div className="about-block-after-header">
                <div className="about-block-after-header-content">
                    <h3 className="about-block-after-header-nav1">Home → Live Streaming </h3>
                    <h1 className="about-block-after-header-nav">Live Streaming</h1>
                </div>
            </div>
            <div className="home-section-fourth-block">
            <div className="home-section-fourth-block-bottom-side">
                <img className="home-section-fourth-block-bottom-side-image" src={americanfootballlarge} alt="" />
                
                    <div className="home-section-fourth-block-bottom-side-right">
                        <p className="home-section-fourth-block-bottom-side-right-info">Live Streaming <br />________</p>
                        <h2 className="home-section-fourth-block-bottom-side-right-title ">Dive into the Thrilling World of Comodo: Live Streaming Adventures Await!</h2>
                        <p className="home-section-fourth-block-bottom-side-right-text">Welcome to the thrilling world of Comodo, the game that's taking the live streaming community by storm! As players dive into the immersive landscapes of Comodo, they're greeted by vibrant visuals, challenging quests, and intense battles that keep viewers on the edge of their seats.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default LiveStreaming