const jobTitle = document.querySelectorAll(".job");

jobTitle.forEach((job) => job.addEventListener("click", () => {
  if(job.parentNode.classList.contains("active")) {
    job.parentNode.classList.toggle("active");
  } else {
    jobTitle.forEach((job) => job.parentNode.classList.remove("active"));
    job.parentNode.classList.add("active");
  }
})
)