import { MagicForestLocators } from "../magic-forest-locators";
import { MagicForestConfigs } from "../magic-forest-configs";
import { SmokeBases } from "sc-automation-core";

class MagicForestSmokeSpec extends SmokeBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: ["1", "25"],
            gameConfiguration: MagicForestConfigs,
            locators: MagicForestLocators,
            waitBetTimeout: 1000,
            snapshotFolderPath: __filename,
        };
        super(smokeOptions);
    }
}

new MagicForestSmokeSpec().start();
