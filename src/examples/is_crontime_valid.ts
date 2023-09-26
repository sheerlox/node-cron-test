import { CronJob } from "cron";

try {
  new CronJob("NOT VALID", () => {
    console.log("shouldn't get printed");
  });
} catch (e) {
  console.log("omg err", e);
}
