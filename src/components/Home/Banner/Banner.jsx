import bannerImg from "../../../assets/banner-img.png"
import "./Banner.scss";


const Banner = () => {
    return <div className="heroBanner">
        <div className="heroContent wrapper">
            <div className="heroText">
                <h1>SALES</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium porro ut quam, fugit corrupti quasi sunt labore.</p>
                <div className="cta">
                    <div className="ctaButton">Read more</div>
                    <div className="ctaButton v2">Shop Now</div>
                </div>
            </div>
            <img className="bannerImg" src={bannerImg} alt="" />
        </div>
    </div>;
};

export default Banner;
