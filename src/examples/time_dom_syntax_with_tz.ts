import { CronJob } from "cron";

console.log("first");
new CronJob(
  "0 0 9 4 * *",
  function () {
    console.log("message");
  },
  null,
  true,
  "America/Sao_Paulo"
);
console.log("second");
