import axios from "axios";
import moment from "moment-timezone";

export async function getCalendar(season) {
  const res = await axios.get(`http://localhost:8000/calendar`, {
    params: season != null ? { season } : {},
  });
  return res.data;
}

export async function getCalendarEvent(raceId) {
  const res = await axios.get(`http://localhost:8000/event`, {
    params: { race_id: raceId },
  });
  return {
    results: res.data.results.map((r) => ({
      ...r,
      driverName: `${r.driver.forename} ${r.driver.surname}`,
      carConstructorName: r.car_constructor.name,
    })),
    event: {
      ...res.data.event,
      datetime: moment(res.data.event.datetime),
      schedule: res.data.event.schedule.map((s) => ({
        ...s,
        datetime: moment(s.datetime),
      })),
    },
  };
}

export async function getNextEvent() {
  const res = await axios.get(`http://localhost:8000/event`);
  return {
    results: res.data.results,
    event: {
      ...res.data.event,
      datetime: moment(res.data.event.datetime),
      schedule: res.data.event.schedule.map((s) => ({
        ...s,
        datetime: moment(s.datetime),
      })),
    },
  };
}
