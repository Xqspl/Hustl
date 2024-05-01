document.addEventListener("DOMContentLoaded", function () {
    let todayDiv = document.querySelector(".today-rectangle");
    let upcomingDiv = document.querySelector(".upcoming-rectangle");
    // Fetch jobs data
    fetch("http://localhost:3000/today")
      .then((r) => r.json())
      .then((todayData) => {
        console.log("Today data:", todayData);
        // Process jobs data
        todayData.forEach((today) => {
          // Create HTML elements for each task
          let todayTask = document.createElement("p");
          todayTask.textContent = today.task;
          todayDiv.appendChild(todayTask);
        });
      })
      .catch((error) => {
        console.error("Error fetching today's data:", error);
      });
   
   
      fetch("http://localhost:3000/upcoming")
      .then((r) => r.json())
      .then((upcomingData) => {
        console.log("Upcoming data:", upcomingData);
        // Process jobs data
        upcomingData.forEach((up) => {
          // Create HTML elements for each task
          let upcomingTask = document.createElement("p");
          upcomingTask.textContent = up.task;
          upcomingDiv.appendChild(upcomingTask);
        });
      })
      .catch((error) => {
        console.error("Error fetching upcoming's data:", error);
      });
   });
   