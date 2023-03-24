import { DragonTigerLocators } from "../locators/dragontiger-locators";
import { DragonTigerConfigs } from "../dragontiger-configs";
import { SmokeBases } from "sc-automation-core";
import { accounts, productId } from "../test-configs";

const env = (process.env.npm_config_env ?? "local").toLowerCase();
process.env.ProductId = productId;
process.env.TestAccount = accounts[env];
console.log("product id ", productId);

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
