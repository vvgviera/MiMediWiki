const articles = [
  { title: "Stratum corneum", url: "page1.html" },
  { title: "Stratum germinativum", url: "page2.html" },
	{ title: "Epidermis", url: "page3.html" },
	{ title: "Psoriasis", url: "page4.html" },
	{ title: "Myasthenia Gravis", url: "page5.html" },
	{ title: "Trocánter", url: "page6.html" },
	{ title: "Talus", url: "page7.html" },
	{ title: "Hallux", url: "page8.html" },
	{ title: "Calcaneus", url: "page9.html" },
	{ title: "Metatarsal", url: "page10.html" },
	{ title: "Alveoli", url: "page11.html" },
	{ title: "Bronchial artery", url: "page12.html" },
	{ title: "Bronchial vein", url: "page13.html" },
	{ title: "Pulmonary artery", url: "page14.html" },
	{ title: "Pulmonary vein", url: "page15.html" },
	{ title: "Lung", url: "page16.html" },
	{ title: "Bronchiole", url: "page17.html" },
	{ title: "Trachea", url: "page18.html" },
	{ title: "Myocardial infarction", url: "page19.html" },
	{ title: "Endocrine system", url: "page20.html" },
	{ title: "Lymphatic system", url: "page21.html" },
	{ title: "Abdominal Aortic Aneurysm", url: "page22.html" },
	{ title: "Right atrium", url: "page23.html" },
	{ title: "Right ventricle", url: "page24.html" },
	{ title: "Left atrium", url: "page25.html" },
	{ title: "Left ventricle", url: "page26.html" },
	{ title: "Lymph nodes", url: "page27.html" },
	{ title: "Lymphatic vessels", url: "page28.html" },
	{ title: "Spleen", url: "page29.html" },
	{ title: "Thoracic duct", url: "page30.html" },
	{ title: "Tonsils", url: "page31.html" },
	{ title: "Liver", url: "page32.html" },
	
	{ title: "Escharotomy", url: "page80.html" },
	{ title: "Subungual hematoma", url: "page81.html" },
	{ title: "Impetigo", url: "page82.html" },
	{ title: "Pronation", url: "page83.html" },
	{ title: "Dystonia", url: "page84.html" },
	{ title: "Arthritis", url: "page85.html" },
	{ title: "Diaphragm", url: "page86.html" },
	{ title: "Pleura", url: "page87.html" },
  // Puedes agregar más artículos aquí
];

const input = document.getElementById("searchInput");
const resultsList = document.getElementById("resultsList");

input.addEventListener("input", () => {
  const query = input.value.toLowerCase();
  resultsList.innerHTML = "";

  if (query === "") return;

  const filtered = articles.filter(article =>
    article.title.toLowerCase().startsWith(query)
  );

  if (filtered.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No se encontraron resultados.";
    li.className = "list-group-item";
    resultsList.appendChild(li);
    return;
  }

  filtered.forEach(article => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    const link = document.createElement("a");
    link.href = article.url;
    link.textContent = article.title;
    li.appendChild(link);
    resultsList.appendChild(li);
  });
});


















