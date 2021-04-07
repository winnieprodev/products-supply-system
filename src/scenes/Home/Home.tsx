import { Searchbar } from "components";
import { Empty } from "utils/types";

const Home: React.FC<Empty> = () => {
  return (
    <>
      <Searchbar navigateToSearch />
    </>
  );
};

export default Home;
