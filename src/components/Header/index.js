import {useHistory} from 'react-router-dom'
import { Container } from "@material-ui/core";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { NavBarStyle } from './styles';

const Header = (props) => {

  const history =useHistory()

  const goBack =() => {
    history.goBack()
  }


  return(
    <Container maxWidth="lg">
      <NavBarStyle>
      <ArrowBackIcon onClick={goBack}/>
      </NavBarStyle>
    </Container>
  )
}

export default Header;