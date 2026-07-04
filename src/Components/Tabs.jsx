import { useDispatch, useSelector } from "react-redux"
import { setActiveTabs } from "../app/features/searchSlice";


function Tabs() {
    const tabs = ["photos", "videos", "gifs"]

    const activeTab = useSelector(
        (state)=>state.search.activeTab
    )
    const dispatch = useDispatch();
  return (
    <div className="flex gap-10 p-10">
      {tabs.map((tab, idx)=>{
        return(
        <button 
        key={idx}
        className={
        `text-white p-4 bg-gray-500 rounded-2xl active:scale-95 transition cursor-pointer ${activeTab===tab?
            `bg-blue-600 text-white` :
            `bg-gray-700 text-gray-300`
        }`}
        onClick={()=>{
            dispatch(setActiveTabs(tab))
        }}
        >
        {tab}
        </button>
        )
      })}
    
    </div>
  )
}

export default Tabs
