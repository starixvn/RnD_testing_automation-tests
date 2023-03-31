import { FruitSlotLocators } from "../fruit-slot-locators";
import { FruitSlotConfigs } from "../fruit-slot-configs";
import { SmokeBases } from "sc-automation-core";


class FruitSlotSmokeSpec extends SmokeBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            gameConfiguration: FruitSlotConfigs,
            placeBetChoices: [FruitSlotConfigs.choices[8]],
            waitBetTimeout: 10000,
            locators: FruitSlotLocators,
            snapshotFolderPath: __filename,
        };

        super(smokeOptions);
    }
    protected override inGameDealerTests(): void {}
}

new FruitSlotSmokeSpec().start();
