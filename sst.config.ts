import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "notes",
      region: "ap-south-1",
    };
  },
  stacks(app) {
    app.stack(API);
  }
} satisfies SSTConfig;
