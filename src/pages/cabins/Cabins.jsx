import CabinTable from "../../features/cabins/CabinTable";
import Heading from "../../ui/Heading";
import AddCabin from "../../features/cabins/AddCabin";
import CabinTableOperations from "../../features/cabins/CabinTableOperations";
import Row from "../../ui/rows/Row";

function Cabins() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">Todas as cabines</Heading>
        <CabinTableOperations />
      </Row>

      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
