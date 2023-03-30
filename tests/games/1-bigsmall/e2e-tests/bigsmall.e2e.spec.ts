import { BigSmallLocators } from "../bigsmall-locators";
import { BigSmallConfigs } from "../bigsmall-configs";
import { SmokeBases } from "sc-automation-core";

class BigSmallE2ESpec extends SmokeBases.BalancedBettingGameBase {
    constructor() {
        const E2EOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [BigSmallConfigs.choices[0]],
            gameConfiguration: BigSmallConfigs,
            locators: BigSmallLocators,
            waitBetTimeout: 10000,
            snapshotFolderPath: __filename,
        };

        super(E2EOptions);
    }

}


new BigSmallE2ESpec().start();
