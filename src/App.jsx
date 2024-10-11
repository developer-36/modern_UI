import NewHero from "./components/NewHero";
import NewNavbar from "./components/NewNavbar";
import NewHighlights from "./components/NewHighlights";
import Model from "./components/Model";
import * as Sentry from '@sentry/react'
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";


function App() {
  return (
    <>
      <main className="bg-black">
        <NewNavbar />
        <NewHero />
        <NewHighlights />
        <Model/>
        <Features/>
        <HowItWorks/>
      </main>
    </>
  )
}

export default Sentry.withProfiler(App) 
