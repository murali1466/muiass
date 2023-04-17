import { AppBar, Toolbar, Typography , } from "@mui/material";
import "./index.css";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
const Header = () => {
  return (
    <AppBar className="header" position="relative">
      <Toolbar>
        <CameraAltIcon />
        <Typography variant="h5" sx={{ pl: 2}} >Album Layout</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
