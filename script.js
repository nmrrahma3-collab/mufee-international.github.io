function showDetails(person) {
  const details = document.getElementById("teamDetails");
  const name = document.getElementById("detailName");
  const text = document.getElementById("detailText");

  document.querySelectorAll(".team-card").forEach(card => {
    card.classList.remove("active");
  });

  event.currentTarget.classList.add("active");

  if (person === "mufee") {
    name.innerText = "Mufeezur Rahman";
    text.innerText =
      "Founder & Managing Director of Mufee International. He leads global cosmetic imports, supplier partnerships, compliance, and long-term business growth strategies.";
  }

  if (person === "director") {
    name.innerText = "Company Director";
    text.innerText =
      "Oversees daily operations, logistics coordination, and strategic execution to ensure smooth import and distribution workflows.";
  }

  details.style.display = "block";
  details.scrollIntoView({ behavior: "smooth" });
}
