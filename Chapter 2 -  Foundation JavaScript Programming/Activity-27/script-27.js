// Function to fetch data from a fake JSON API using async/await
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    displayData(data);
  } catch (error) {
    console.error("There has been a problem with your fetch operation:", error);
  }
}

// Function to display fetched data
function displayData(data) {
  const dataContainer = document.getElementById("dataContainer");
  dataContainer.innerHTML = ""; // Clear any existing content
  data.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    dataContainer.appendChild(postElement);
  });
}

// Add click event listener to the button
document.getElementById("fetchButton").addEventListener("click", fetchData);
