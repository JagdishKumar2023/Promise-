let apiUrl = "https://jsonplaceholder.typicode.com/todos";

async function fetchData(apiUrl) {
  let response = await fetch(apiUrl);
  try {
    if (!response.ok) {
      throw new Error(`status code ${response.status}`);
    }
    let data = await response.json();
    displayData(data);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

function displayData(data) {
  let todo = document.getElementById("todo");
  data.map((ele, idx, arr) => {
    let todoH2 = document.createElement("h2");
    todoH2.innerText = `${idx + 1} - ${ele.title}`;
    todo.append(todoH2);
  });
}

fetchData(apiUrl);
