import axios from "axios";
const SERVER='http://localhost:3005/prods/'
export function fetchProds() {
  return new Promise((resolve) =>
    axios.get(SERVER).then((res) => resolve({ data: res.data }))
  );
}
export function addNewProd(newProd) {
    console.log(newProd)
    return new Promise((resolve) =>
      axios.post(SERVER,newProd).then((res) => resolve({ data: res.data }))
    );
  }

  export function delProd(id) {
    console.log(id)
    return new Promise((resolve) =>
      axios.delete(SERVER +id).then((res) => resolve({ data: res.data }))
    );
  }
  export function updProd(newProd) {
    console.log(newProd.id)
    return new Promise((resolve) =>
      axios.put(SERVER +newProd.id,newProd).then((res) => resolve({ data: res.data }))
    );
  }

