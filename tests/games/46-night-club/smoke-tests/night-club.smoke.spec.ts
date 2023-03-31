import { NightClubLocators } from "../night-club-locators";
import { NightClubConfigs } from "../night-club-configs";
import { SmokeBases, Components } from "sc-automation-core";

class NightClubSmokeSpec extends SmokeBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [NightClubConfigs.choices[0]],
            gameConfiguration: NightClubConfigs,
            locators: NightClubLocators,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
        };
        super(smokeOptions);
    }

}

new NightClubSmokeSpec().start();
