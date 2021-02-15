import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";

import { Typography } from "@material-ui/core";
import { ContainerUser} from "./styled";


const OwnerInfoCard = (props) => {
  return (
    <>
      <ContainerUser>
        <img className="img-user-repo" src={props.avatar_url} alt="" />
        <div className="info-user-repo">
          <Typography className={""} color="primary" variant="h2">
            {props.name ? props.name : "Nome não definido"}
          </Typography>

          <Typography className={""} color="primary" variant="p">
            {props.bio ? props.bio : "Descrição não definida"}
          </Typography>

          <div className="social-user-repo">
            <div className="social-owner-git">
              <AlternateEmailIcon />
              <span>{props.email ? props.email : "não definido"}</span>
            </div>
            <div className="social-owner-git">
              <PeopleAltIcon />
              <span>{props.followers} Followers</span>
            </div>
            <div className="social-owner-git">
              <SwapHorizontalCircleIcon />
              <span>{props.following} Followings</span>
            </div>
          </div>
        </div>
      </ContainerUser>
    </>
  );
};

export default OwnerInfoCard; 