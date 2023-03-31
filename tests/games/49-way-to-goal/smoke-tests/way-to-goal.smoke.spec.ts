import { WayToGoalLocators } from "../way-to-goal-locators";
import { WayToGoalConfigs } from "../way-to-goal-configs";
import { SmokeBases, Components } from "sc-automation-core";


class WayToGoalSmokeSpec extends SmokeBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [WayToGoalConfigs.choices[0]],
            gameConfiguration: WayToGoalConfigs,
            locators: WayToGoalLocators,
            waitBetTimeout: 8000,
            snapshotFolderPath: __filename,
        };
        super(smokeOptions);
    }

}

new WayToGoalSmokeSpec().start();
