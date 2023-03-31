import { ThreeCardsLocators } from "../threecards-locators";
import { ThreeCardsConfigs } from "../threecards-configs";
import { SmokeBases } from "sc-automation-core";

class ThreeCardsSmokeSpec extends SmokeBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [ThreeCardsConfigs.choices[0]],
            gameConfiguration: ThreeCardsConfigs,
            locators: ThreeCardsLocators,
            waitBetTimeout: 7000,
            snapshotFolderPath: __filename,
        };

        super(smokeOptions);
    }
}

new ThreeCardsSmokeSpec().start();
