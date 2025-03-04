import GoogleIcon from "./google.svg";
import AppleIcon from "./apple.svg";

const SocialLogin = () => {
    return (
        <div className="social-login">
            <button className="social-button">
                <img src={GoogleIcon} alt="Google" className="social-icon" />Google
            </button>
            <button className="social-button">
                <img src={AppleIcon} alt="Apple" className="social-icon" />Apple
            </button>
        </div>
    );
}


export default SocialLogin;