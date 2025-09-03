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
	{ title: "Bone marrow", url: "page33.html" },
	{ title: "Kidneys", url: "page34.html" },
	{ title: "Thymus gland", url: "page35.html" },
	{ title: "Pancreas", url: "page36.html" },
	{ title: "Bile interstitial fluid", url: "page37.html" },
	{ title: "Lymph", url: "page38.html" },
	{ title: "Blood", url: "page39.html" },
	{ title: "Interstitial fluid", url: "page40.html" },
	{ title: "Sentinel node", url: "page41.html" },
	{ title: "Mediastinum", url: "page42.html" },
	{ title: "Pneumomediastinum", url: "page43.html" },
	{ title: "Thoracic diaphragm", url: "page44.html" },
	{ title: "Duodenum", url: "page45.html" },
	{ title: "Jejunum", url: "page46.html" },
	{ title: "Ileum", url: "page47.html" },
	{ title: "Cecum", url: "page48.html" },
	{ title: "Transverse colon", url: "page49.html" },
	{ title: "Ascending colon", url: "page50.html" },
	{ title: "Descending colon", url: "page51.html" },
	{ title: "Sigmoid colon", url: "page52.html" },
	{ title: "Rectum", url: "page53.html" },
	{ title: "Anus", url: "page54.html" },
	{ title: "Muscle", url: "page55.html" },
	{ title: "Submucosa", url: "page56.html" },
	{ title: "Mucosa", url: "page57.html" },
	{ title: "Serosa", url: "page58.html" },
	{ title: "Urethra", url: "page59.html" },
	
	{ title: "Escharotomy", url: "page80.html" },
	{ title: "Subungual hematoma", url: "page81.html" },
	{ title: "Impetigo", url: "page82.html" },
	{ title: "Pronation", url: "page83.html" },
	{ title: "Dystonia", url: "page84.html" },
	{ title: "Arthritis", url: "page85.html" },
	{ title: "Diaphragm", url: "page86.html" },
	{ title: "Pleura", url: "page87.html" },
	{ title: "Cystic fibrosis", url: "page88.html" },
	{ title: "Pneumoconiosis", url: "page89.html" },
	{ title: "Emphysema", url: "page90.html" },
	{ title: "Respiratory distress syndrome", url: "page91.html" },
	{ title: "Pleural Cavity", url: "page92.html" },
	{ title: "Hemothorax", url: "page93.html" },
	{ title: "Hydrothorax", url: "page94.html" },
	{ title: "Hemoptysis", url: "page95.html" },
	{ title: "Pleural effusion", url: "page96.html" },
	{ title: "Myocardium", url: "page97.html" },
	{ title: "Endocardium", url: "page98.html" },
	{ title: "Pericardium", url: "page99.html" },
	{ title: "Epicardium", url: "page100.html" },
	{ title: "Valvotomy", url: "page101.html" },
	{ title: "Angiography", url: "page102.html" },
	{ title: "Thrombectomy", url: "page103.html" },
	{ title: "Ischemia", url: "page104.html" },
	{ title: "Heart failure", url: "page105.html" },
	{ title: "Fibrillation", url: "page106.html" },
	{ title: "Dyslipidemia", url: "page107.html" },
	{ title: "Splenorrhaphy", url: "page108.html" },
	{ title: "Erythremia", url: "page109.html" },
	{ title: "Phagocytosis", url: "page110.html" },
	{ title: "Cytopenia", url: "page111.html" },

	
	{ title: "PRN", url: "page250.html" },
	
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







































































