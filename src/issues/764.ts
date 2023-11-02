import { CronJob } from "cron";

// create job with a default schedule
const job = CronJob.from({
  cronTime: '0 0 8 * * *',
  onTick: function () {
    console.log('tick');
  },
  start: true,
  timeZone: 'Europe/Helsinki',
});

console.log(job.nextDates(10).map(d => d.toISO()))
