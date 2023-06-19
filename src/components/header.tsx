import PersonIcon from "@mui/icons-material/Person";

import { HeaderContainer } from "./styles/header";

import logo from "../assets/logos/logoVector2.png";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="header-items-container">
        <a href="/">
          <figure>
            <img src={logo} alt="danone logo" width="100%" height="100%" />
          </figure>
        </a>
        <a href="/user-profile">
          <PersonIcon fontSize="small" color="action" />
        </a>
      </div>
    </HeaderContainer>
  );
};

export { Header };
