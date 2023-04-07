import { HappyFishLocators } from "../happy-fish-locators";
import { HappyFishConfigs } from "../happy-fish-configs";
import { SmokeBases } from "sc-automation-core";

class HappyFishSmokeSpec extends SmokeBases.SlotGameBase {
  /**
   *
   */
  constructor() {
    const smokeOptions: SmokeBases.IBaseOptions = {
      placeBetChoices: ["1", "25"],
      gameConfiguration: HappyFishConfigs,
      locators: HappyFishLocators,
      waitBetTimeout: 1000,
      snapshotFolderPath: __filename,
    };
    super(smokeOptions);
  }
}

new HappyFishSmokeSpec().start();
