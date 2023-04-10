class app {
  constructor() {
    this.countryFilter();
  }
  // Html Elements
  companySelect = document.querySelector("#compañia");
  cableSelect = document.querySelector("#cableSelect");
  numeroInput = document.querySelector("#numero");
  searchBtn = document.querySelector("#buscar");
  deleteBtn = document.querySelector("#borrar");
  resultPanel = document.querySelector("#resultados");
  // Vars and data
  data = [];
  companySelected;
  cableSelected;
  numeroSelected;

  async init() {
    this.ObtainData();
    this.HtmlInteractions();
  }

  async ObtainData() {
    const infoResponse = await fetch("./data.json");
    const cableInfo = await infoResponse.json();
    this.data = cableInfo;
    console.log(this.data);
  }

  HtmlInteractions() {
    // Escuchar el valor de la compañia
    this.companySelect.addEventListener("change", (event) => {
      this.companySelected = event.target.value; // Guardamos el valor seleccionado en la variable
      this.countryFilter();
    });

    // Escuchamos el tipo de cable
    this.cableSelect.addEventListener("change", (event) => {
      this.cableSelected = event.target.value;
    });

    // Escuchamos el numero
    this.numeroInput.addEventListener("change", (event) => {
      this.numeroSelected = event.target.value;
    });

    // Escuchamos a los botones:
    this.searchBtn.addEventListener("click", () => {
      this.drawResults(this.searchData());
    });

    this.deleteBtn.addEventListener("click", () => {
      this.resultPanel.innerHTML = "";
    });
  }

  countryFilter() {
    if (this.companySelected == "Orange") {
      $(".fr").show();
      $(".es").hide();
    } else {
      $(".fr").hide();
      $(".es").show();
    }
  }

  searchData() {
    if (!this.cableSelected || !this.numeroSelected) return;

    const data = this.data.find(
      (element) => element.name == this.cableSelected
    );

    const firstLength = data.cableInfo.fibers / data.cableInfo.tubes;
    const arrTable = Array.from(
      { length: firstLength },
      (_, i) => data.cableInfo.fiberColors[i % 8]
    ).flatMap((colors) => Array(data.cableInfo.tubes).fill(colors));

    const tubeNumber = Math.ceil(this.numeroSelected / firstLength);
    const fiberColor = arrTable[this.numeroSelected - 1];

    return [
      this.numeroSelected,
      data.cableInfo.tubeColors[tubeNumber - 1],
      fiberColor,
    ];
  }

  drawResults(results) {
    this.resultPanel.innerHTML += `
      <article>
      <h1>${this.companySelected} - ${this.cableSelected} - ${results[0]}</h1>
        <h3 class="tubo"><b>Tubo</b> <i style="color:${results[1]}"class="fa-sharp fa-solid fa-square"></i></h3>
        <h3 class="fibra"><b>Fibra</b> <i style="color:${results[2]}"class="fa-sharp fa-solid fa-square"></i></h3>
      </article>
    `;
    generarMarcas(this.cableSelected);
  }
}

function generarMarcas(tipoCable) {
  console.log("Entra");

  let numero = $("#numero").val();
  let n = document.querySelectorAll("article .tubo").length;
  let lastArticle = document.querySelectorAll("article .tubo")[n - 1];

  if (tipoCable == "256 F.O PKP") {
    if (parseInt(numero) >= 13) {
      let span = document.createElement("span");
      span.className = "badge";
      lastArticle.append(span);
      span.append(`Primero __/`);
    }
  } else if (tipoCable == "512 F.O PKP") {
    if (parseInt(numero) >= 9 && numero < 17) {
      let span = document.createElement("span");
      span.className = "badge";
      lastArticle.append(span);
      span.append(`Primero /`);
    } else if (parseInt(numero) >= 17 && numero < 25) {
      let span = document.createElement("span");
      span.className = "badge";
      lastArticle.append(span);
      span.append(`Segundo / /`);
    } else if (parseInt(numero) >= 25) {
      let span = document.createElement("span");
      span.className = "badge";
      lastArticle.append(span);
      span.append(`Tercero / / /`);
    }
  } else if (tipoCable == "144 F.O Francia") {
    if (parseInt(numero) >= 97) {
      let span = document.createElement("span");
      span.className = "badge";
      lastArticle.append(span);
      span.append(`Primero /`);
    }
  } else if (tipoCable == "288 F.O Francia") {
    if (parseInt(numero) >= 193) {
      let span = document.createElement("span");
      span.className = "badge";
      lastArticle.append(span);
      span.append(`Primero /`);
    }
  }
}

const myApp = new app();
myApp.init();
