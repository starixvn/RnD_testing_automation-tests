import { DragonTigerLocators } from "../locators/dragontiger-locators";
import { DragonTigerConfigs } from "../dragontiger-configs";
import { SmokeBases } from "sc-automation-core";


class DragonTigerSmokeSpec extends SmokeBases.MiniGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [DragonTigerConfigs.choices[0]],
            gameConfiguration: DragonTigerConfigs,
            locators: DragonTigerLocators,
            waitBetTimeout: 7000,
            snapshotFolderPath: __filename,
        };

        super(smokeOptions);
    }
}

new DragonTigerSmokeSpec().start();
