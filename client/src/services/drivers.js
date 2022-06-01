import axios from "axios";

export async function getDrivers() {
  const res = await axios.get(`http://localhost:8000/drivers`);
  return res.data;
}

export async function getDriver(driverId) {
  const res = await axios.get(`http://localhost:8000/drivers/${driverId}`);
  return res.data;
}
