import UpdatePasswordForm from "../../features/authentication/UpdatePasswordForm";
import UpdateUserDataForm from "../../features/authentication/UpdateUserDataForm";
import Heading from "../../ui/Heading";
import Row from "../../ui/rows/Row";

function Account() {
  return (
    <>
      <Heading as="h1">Dados da conta</Heading>

      <Row>
        <Heading as="h3">Atualizar os dados</Heading>
        <UpdateUserDataForm />
      </Row>

      <Row>
        <Heading as="h3">Trocar sua senha</Heading>
        <UpdatePasswordForm />
      </Row>
    </>
  );
}

export default Account;
