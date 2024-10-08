import NavigationBar from "../components/NavigationBar"
import HomePage from "../pages/HomePage"

function MainContent() {
  return (
    <>
    <div className="bg-green-100 min-h-screen">
    <NavigationBar />
    <HomePage />
    </div>
    </>
  )
}

export default MainContent