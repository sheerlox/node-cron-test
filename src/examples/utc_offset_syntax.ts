import { CronJob } from "cron";

console.log("first");
new CronJob(
  "0 0 9 4 * *",
  function () {
    console.log("message");
  },
  null,
  true,
  null,
  null,
  null,
  -360 // UTC-6, represented in minutes
);
console.log("second");
