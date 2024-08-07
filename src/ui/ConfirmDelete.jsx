import styled from "styled-components";
import Button from "./Buttons/Button";
import Heading from "./Heading";

const StyledConfirmDelete = styled.div`
  width: 40rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  & p {
    color: var(--color-grey-500);
    margin-bottom: 1.2rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading as="h3">Deletar {resourceName}</Heading>
      <p>
        Você tem certeza de que deseja excluir este {resourceName}{" "}
        permanentemente? Esta ação não pode ser desfeita.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancelar
        </Button>
        <Button variation="danger" disabled={disabled} onClick={onConfirm}>
          Deletar
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
