function searchRecipe() {
  const input = document.getElementById("searchInput").value.toLowerCase().trim();
  
  if (input.includes("cookie")) {
    window.location.href = "cookies.html";
  } else if (input.includes("crêpe") || input.includes("crepe")) {
    window.location.href = "crepes.html";
  } else if (input.includes("brownie")) {
    window.location.href = "brownies.html";
  } else {
    alert("Aucune recette trouvée pour le moment.");
  }
}