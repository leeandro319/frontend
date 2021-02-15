import { Typography } from "@material-ui/core";
import { ContentError } from "./styles";

import Header from '../../components/Header'

const ErrorPage = () => {
  return (
    <>
    <Header />
    <ContentError>
      <Typography color="primary" variant="h1">
        404 - Página nao encontrada
      </Typography>
    </ContentError>
    </>
  );
};

export default ErrorPage;
