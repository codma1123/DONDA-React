import RecommandContainer from "../containers/RecommandContainer"
import StocksInfoContainer from "../containers/StocksInfoContainer"
import Header from "./Header"
import Market from "./home/Market"
import MainTemplate from "./templates/MainTemplate"

const Home = () => {
  return (
    <>
      <MainTemplate>
        <Header />
        <Market />

        {/* <StocksInfoContainer /> */}
        <RecommandContainer />
      </MainTemplate>
    </>
  )
}

export default Home