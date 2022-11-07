import { useState } from "react"
import { BSVersion } from "shared/bs-version.interface"
import { TabNavBar } from "../shared/tab-nav-bar.component"
import { LocalMapsListPanel } from "./local-maps-list-panel.component"

type Props = {
    oneBlock?: boolean,
    version?: BSVersion
}

export function MapsPlaylistsPanel({version, oneBlock = false}: Props) {
    
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <>
        {!oneBlock && <TabNavBar className="mb-8 w-72" tabsText={["Maps", "Playlists"]} onTabChange={setTabIndex}/>}
        <div className="w-full h-full bg-main-color-2 rounded-md shadow-black shadow-md overflow-hidden">
            {oneBlock && <TabNavBar className="!rounded-none shadow-sm" tabsText={["Maps", "Playlists"]} onTabChange={setTabIndex}/>}
            <div className="w-full h-full min-h-0 flex flex-row items-center transition-transform duration-300" style={{transform: `translate(${-(tabIndex * 100)}%, 0)`}}>
                <LocalMapsListPanel className="h-full w-full grow shrink-0 flex flex-wrap justify-center content-start gap-2 p-3" version={version}/>
                <div className="w-full h-full grow shrink-0">b</div>
            </div>
        </div> 
        </>
    )
}
