import { BaccaratLocators } from "../locators/baccarat-locators";
import { BaccaratConfigs } from "../baccarat-configs";
import { SmokeBases } from "sc-automation-core";
import { accounts, productId } from "../test-configs";

const env = (process.env.npm_config_env ?? "local").toLowerCase();
process.env.ProductId = productId;
process.env.TestAccount = accounts[env];
console.log("product id ", productId);

class BaccaratSmokeSpec extends SmokeBases.TableGameBase {
    /**
     *
     */
    constructor() {
        const smokeOptions: SmokeBases.IBaseOptions = {
            placeBetChoices: [BaccaratConfigs.choices[3]],
            gameConfiguration: BaccaratConfigs,
            locators: BaccaratLocators,
            waitBetTimeout: 10000,
            snapshotFolderPath: __filename,
        };
        super(smokeOptions);
    }
}
new BaccaratSmokeSpec().start();
