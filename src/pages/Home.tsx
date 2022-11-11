import RecommandContainer from "../containers/RecommandContainer"
import Header from "./Header"
import Market from "./home/Market"
import MainTemplate from "./templates/MainTemplate"

const Home = () => {
  return (
    <MainTemplate>
      <Market />

      {/* <StocksInfoContainer /> */}
      <RecommandContainer />
    </MainTemplate>
  )
}

export default Home