import { HiArrowRightOnRectangle } from "react-icons/hi2";
import ButtonIcon from "../../ui/Buttons/ButtonIcon";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/spinners/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();

  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
