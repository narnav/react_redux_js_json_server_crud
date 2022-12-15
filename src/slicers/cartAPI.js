import axios from "axios";
const SERVER='http://localhost:3005/prods'
export function fetchProds() {
  return new Promise((resolve) =>
    axios.get(SERVER).then((res) => resolve({ data: res.data }))
  );
}
