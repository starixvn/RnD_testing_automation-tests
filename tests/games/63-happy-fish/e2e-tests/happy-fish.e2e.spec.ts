import { HappyFishConfigs } from "../happy-fish-configs";
import { SmokeBases, Components } from "sc-automation-core";

class HappyFishE2ESpec extends SmokeBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [HappyFishConfigs.choices[0], HappyFishConfigs.choices[1]],
            gameConfiguration: HappyFishConfigs,
            locators: Components.ClassicSlotLocators,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
        };
        super(e2eOptions);
    }
}

new HappyFishE2ESpec().start();
