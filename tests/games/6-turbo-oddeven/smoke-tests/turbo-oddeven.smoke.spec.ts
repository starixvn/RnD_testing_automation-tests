import { TurboOddEvenLocators } from "../turbo-oddeven-locators";
import { TurboOddEvenConfigs } from "../turbo-oddeven-configs";
import { SmokeBases } from "sc-automation-core";

class TurboBigSmallSmokeSpec extends SmokeBases.BalancedBettingGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [TurboOddEvenConfigs.choices[0]],
            placeBetAmount: 1,
            gameConfiguration: TurboOddEvenConfigs,
            locators: TurboOddEvenLocators,
            snapshotFolderPath: __filename,
            waitBetTimeout: 9000,
        };
        super(smokeOptions);
    }
}

new TurboBigSmallSmokeSpec().start();
