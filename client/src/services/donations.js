import axios from "axios";

export async function sendDonationsAPI(
  amount,
  name,
  lastName,
  email,
  phone,
  msg
) {
  const res = await axios.post(`http://localhost:8000/donations`, {
    amount,
    name,
    lastName,
    email,
    phone,
    msg,
  });
  return res.data;
}

export async function getDonationsAPI() {
  const res = await axios.get(`http://localhost:8000/donations`);
  return res.data;
}
