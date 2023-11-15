// A Promise is a special JavaScript object.

// aka = also known as

// let isCompleted = true;

// let promisData = new Promise(function (resolve, reject) {
//   if (isCompleted) {
//     resolve("fulfilled");
//   } else {
//     reject("rejected");
//   }
// });

// promisData
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// let incomplete = "No";

// let promiseValue = new Promise(function (reslove, reject) {
//   if (incomplete) {
//     reslove("Yes");
//   } else {
//     reject("No");
//   }
// });

// promiseValue
//   .then(function (Yes) {
//     console.log("Yes");
//   })
//   .catch(function (No) {
//     console.log("No");
//   });

// let basicPromise = new Promise(function (resolve, reject) {
//   if (isCompleted) {
//     resolve("fulfilled");
//   } else {
//     reject("rejected");
//   }
// });

// basicPromise
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// const promiseOne = new Promise(function (reslove, reject) {
//   // Do an asyc task
//   // Db calls, crytography,network
//   setTimeout(function () {
//     console.log("async task is complete");
//   }, 1000);
// });

// promiseOne.then(function () {
//   console.log("Promise consumed");
// });

// new Promise(function (reslove, reject) {
//   setTimeout(function () {
//     console.log("Async Task 2");
//     reslove();
//   }, 1000);
// }).then(function () {
//   console.log("Async to resolved");
// });

// const promiseThree = new Promise(function (reslove, reject) {
//   setTimeout(function () {
//     reslove({ username: "Chai", email: "chai@emaples.com" });
//   }, 1000);
// });

// promiseThree.then(function (user) {
//   console.log(user);
// });

// const promiseFour = new Promise(function (reslove, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       reslove({ username: "hitesh", password: "123456" });
//     } else {
//       reject("ERROR : something went wrong");
//     }
//   }, 1000);
// });

// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// let error = true;

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     if (!error) {
//       resolve({ username: "javascript", password: "1235" });
//     } else {
//       reject("ERROR: somthing went wrong");
//     }
//   }, 1000);
// });

// handling of promise can be done by .then(result) and .catch(error)

// promiseFive
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// let apiUrl = "https://jsonplaceholder.typicode.com/todos";

// function fetchData(apiUrl) {
//   // Creating a new Promise
//   return new Promise((resolve, reject) => {
//     // Using the fetch function to make the API call
//     fetch(apiUrl)
//       .then((response) => {
//         // Checking if the response status is OK (status code 200-299)
//         console.log(response);
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         // Parsing the response body as JSON
//         return response.json();
//       })
//       .then((result) => {
//         // Resolving the promise with the JSON data
//         resolve(result);
//       })
//       .catch((error) => {
//         // Rejecting the promise with an error if any occurs
//         reject(error);
//       });
//   });
// }

// let todoData;

let apiUrl = "https://jsonplaceholder.typicode.com/todos";

function fetchData(apiUrl) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl) // fetch api data fetching
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("error");
        }
        return response.json();
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

fetchData(apiUrl).then((result) => {
  console.log(result);
  displayData(result);
});

function displayData(result) {
  result.map((ele, idx, arr) => {
    let todoData = document.getElementById("todoData");

    let h3 = document.createElement("h3");
    h3.innerText = `${idx + 1} ${ele.title}`;

    todoData.append(h3);
  });
}
