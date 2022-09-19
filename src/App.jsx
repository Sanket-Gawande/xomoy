import { useEffect } from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import JustReleased from './components/JustReleased'
import Recomended from './components/Recomended'
import TrendingSongs from './components/TrendingSongs'


function App() {

  const [TRENDING_SONGS, setTrendingSongs] = useState([])
  const [JUST_RELEASED, setJustReleased] = useState([])
  const [RECOMMENDED_ARTIST, setRecommendedArtist] = useState([])

  // function to fetch data from api
  const base = "https://xomoy.herokuapp.com/getdata"
  const getDataFrom = async (url) => {
    const req = await fetch(`${base}/${url}`, {
    })
    const res = await req.json();
    return res?.data

  }

  // fetching all required data on load
  async function fetchdata() {
    setTrendingSongs(await getDataFrom("hbAZZiJx"));
    setJustReleased(await getDataFrom("CwyxSJ8K"));
    setRecommendedArtist(await getDataFrom("1dN1EkTY"));
  }
  const heading = "bg-teal-700 text-slate-200 text-sm w-max mx-auto rounded-md font-semibold px-4 my-4 py-1"
  useEffect(() => {
    fetchdata();
  }, [])

  return (
    <>
      <div className=" py-6 w-full min-h-screen  bg-slate-800">
        {/*  trending section */}
        <section className="w-[90%]  h-full   mx-auto">
          <h2 className={heading}>Trending songs</h2>
          <div className="flex items-center w-full overflow-x-auto rounded-lg ">
            {

              TRENDING_SONGS?.map((ITEM, index) =>
                <TrendingSongs ITEM={ITEM} key={index} />
              )
            }
          </div>
        </section>
        {/*  recommended section */}
        <section className="w-[90%]  h-full   mx-auto">
          <h2 className={heading}>Recommended artist</h2>
          <div className="grid artist items-center w-full overflow-x-auto rounded-lg " style={{ gridTemplateColumns: `repeat(${RECOMMENDED_ARTIST?.length / 2}, 300px)` }}>
            {
              RECOMMENDED_ARTIST?.map((ITEM, index) =>
                <Recomended ITEM={ITEM} key={index} />
              )
            }
          </div>
        </section>
        {/*  just released section */}
        <section className="w-[90%]  h-full   mx-auto my-4">
          <h2 className={heading}>Just released</h2>
            <div className="flex items-center w-full overflow-x-auto rounded-lg ">
              {
                JUST_RELEASED?.map((ITEM, index) =>
                  <JustReleased ITEM={ITEM} key={index} />
                )
              }
            </div>
        </section>
      </div>
    </>
  )
}

export default App
