import { HappyFishConfigs } from "../happy-fish-configs";
import { E2EBases } from "sc-automation-core";
import {extHappyFishLocators} from "./happy-fish-locators" 

class HappyFishE2ESpec extends E2EBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [HappyFishConfigs.choices[0], HappyFishConfigs.choices[1]],
            gameConfiguration: HappyFishConfigs,
            locators: extHappyFishLocators,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }

}

new HappyFishE2ESpec().start();
