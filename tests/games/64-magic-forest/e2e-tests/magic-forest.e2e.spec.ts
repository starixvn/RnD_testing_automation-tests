import { MagicForestConfigs } from "../magic-forest-configs";
import { E2EBases, Components } from "sc-automation-core";
import {extMagicForestLocators} from "./magic-forest-locators" 


class MagicForestE2ESpec extends E2EBases.SlotGameBase {
    /**
     *
     */
    constructor() {
        const e2eOptions: E2EBases.IBaseOptions = {
            placeBetChoices: [MagicForestConfigs.choices[0], MagicForestConfigs.choices[1]],
            gameConfiguration: MagicForestConfigs,
            locators: extMagicForestLocators ,
            waitBetTimeout: 5000,
            snapshotFolderPath: __filename,
            placeBetAmount: process.env.npm_config_project === "l2" ? 10 : 1,
        };
        super(e2eOptions);
    }
}

new MagicForestE2ESpec().start();
