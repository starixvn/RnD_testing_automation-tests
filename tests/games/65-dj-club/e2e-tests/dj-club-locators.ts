import { Components } from "sc-automation-core";

let DJClubLocators =  Components.ClassicSlotLocators

const lblHistoryDetailRoundId = {x: 650}
 
DJClubLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )

export const extDJClubLocators = DJClubLocators
