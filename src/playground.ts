import HTTPClient from "./index";

const httpClient = new HTTPClient("https://jsonplaceholder.typicode.com");

type ApiResponse<T = any> = {
  status: "success";
  data: T;
};

async function getUsers() {
  try {
    const users = await httpClient.get("/users");
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}

getUsers();
