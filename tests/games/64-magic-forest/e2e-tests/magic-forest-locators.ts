import { Components } from "sc-automation-core";

let MagicForestLocators =  Components.ClassicSlotLocators

const lblHistoryDetailRoundId = {x: 650}
 
MagicForestLocators.forEach((item, i)=>{ if (item.name == "lblHistoryDetailRoundId") item.x = lblHistoryDetailRoundId.x } )

export const extMagicForestLocators = MagicForestLocators
