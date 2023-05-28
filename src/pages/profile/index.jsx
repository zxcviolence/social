import Posts from "../../components/posts";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import leyla from "../../assets/avatars/leylaAv.jpeg";
import coverPic from "../../assets/coverPics/cover.jpg";
import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="images">
        <img src={coverPic} alt="coverPic" className="cover" />
        <img src={leyla} alt="avatar" className="profilePic" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="left">
            <a href="http://facebook.com">
              <FacebookTwoToneIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <InstagramIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <TwitterIcon fontSize="large" />
            </a>
            <a href="http://facebook.com">
              <LinkedInIcon fontSize="large" />
            </a>
          </div>
          <div className="center">
            <span>Rylie Leyla</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>Москва</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>zxcviolence</span>
              </div>
            </div>
            <button>Подписаться</button>
          </div>
          <div className="right">
            <EmailOutlinedIcon />
            <MoreVertIcon />
          </div>
        </div>
        <Posts />
      </div>
    </div>
  );
};

export default Profile;
