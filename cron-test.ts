import { CronJob, CronJobParams } from "cron";

const jobParam: CronJobParams = {
  cronTime: "* * * * * *",
  onTick: function () {
    const d = new Date();
    console.log("Every second:", d);
  },
};

console.log("Before job instantiation");
const job = CronJob.from(jobParam);
console.log("After job instantiation");
job.start();
