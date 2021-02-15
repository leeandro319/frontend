import { Link } from "react-router-dom";

import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import PeopleAltIcon from "@material-ui/icons/PeopleAlt";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";

import { UsersSearch } from "./styles";
import { Typography } from "@material-ui/core";

const CardUser = (props) => {
  return (
    <UsersSearch>
      <Link to={`/userinfo/${props.login}`} key={props.login}>
        <img className="img-card-user" src={props.sourceImg} alt="Foto" />
        <div className="content-card-user">
          
          <Typography className={''} color="primary" variant="h3">
          {props.nameUser ? props.nameUser : "Não Definido"}
           </Typography>

           <Typography className={''} color="primary" variant="p">
           {props.bio}
           </Typography>
                   
          <div className="infos-card-user">
            <p id="emailUser">
              <AlternateEmailIcon />
              {props.email ? props.email : "Não Definido"}
            </p>
            <p>
              <PeopleAltIcon />
              {props.followers} followers
            </p>
            <p>
              <SwapHorizontalCircleIcon />
              {props.following} following
            </p>
          </div>
        </div>
      </Link>
    </UsersSearch>
  );
};

export default CardUser;
