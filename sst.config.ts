import { SSTConfig } from "sst";
import { StorageStack } from "./stacks/StorageStack";
import { ApiStack } from "./stacks/ApiStack";

export default {
  config(_input) {
    return {
      name: "notes",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.stack(StorageStack).stack(ApiStack);
  },
} satisfies SSTConfig;
