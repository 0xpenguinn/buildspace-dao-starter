import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

(async () => {
  try {
    const editionDrop = await sdk.getContract("0xd898555bE2A7341b024BCE6111F246320A31838c", "edition-drop");
    await editionDrop.createBatch([
      {
        name: "Sword",
        description: "This NFT will give you access to GameDAO!",
        image: readFileSync("scripts/assets/sword.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();