import "./Topbar.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span>Hamburger</span>
      </div>
      <div className="topbarCenter">GALLERY</div>
      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <MoreVertIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
