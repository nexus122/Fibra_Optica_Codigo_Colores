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
    this.companySelected = this.companySelect.value;
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
      console.log(event.target.value);
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

    console.log("data: ", data);

    const firstLength = data.cableInfo.fibers / data.cableInfo.tubes;
    console.log("firstLength: ", firstLength);

    const arrTable = [];

    data.cableInfo.tubeColors.forEach(() => {
      arrTable.push(data.cableInfo.fiberColors);
    });
    console.log("arrTable:", arrTable);

    let aux = 0;
    let tubeNumber, fiberColor;

    arrTable.forEach((tube, index) => {
      console.log("Tube: ", index);
      tube.forEach((fiber) => {
        console.log("Fiber: ", fiber);
        aux++;
        if (aux == this.numeroSelected) {
          console.log("ENTRA AQUI");
          tubeNumber = index;
          fiberColor = fiber;
        }
      });
    });

    return [
      this.numeroSelected,
      data.cableInfo.tubeColors[tubeNumber],
      fiberColor,
      tubeNumber + 1,
    ];
  }

  drawResults(results) {
    this.resultPanel.innerHTML = `
      <article>
      <h1>${this.companySelected} - ${this.cableSelected}</h1>
        <h3 class="tubo"><b>Tubo</b> ${results[3]} - ${results[1]} <i style="color:${results[1]}"class="fa-sharp fa-solid fa-square"></i></h3>
        <h3 class="fibra"><b>Fibra ${results[0]}</b> - ${results[2]} <i style="color:${results[2]}"class="fa-sharp fa-solid fa-square"></i></h3>
      </article>
      ${this.resultPanel.innerHTML}
    `;
    generarMarcas(this.cableSelected);
  }
}

function generarMarcas(tipoCable) {
  let numero = $("#numero").val();
  let firstArticle = document.querySelectorAll("article .fibra")[0];

  if (tipoCable == "256 F.O PKP") {
    if (parseInt(numero) >= 13) {
      let span = document.createElement("span");
      span.className = "badge";
      firstArticle.append(span);
      span.append(`Primero __/`);
    }
  } else if (tipoCable == "512 F.O PKP") {
    if (parseInt(numero) >= 9 && numero < 17) {
      let span = document.createElement("span");
      span.className = "badge";
      firstArticle.append(span);
      span.append(`Primero /`);
    } else if (parseInt(numero) >= 17 && numero < 25) {
      let span = document.createElement("span");
      span.className = "badge";
      firstArticle.append(span);
      span.append(`Segundo / /`);
    } else if (parseInt(numero) >= 25) {
      let span = document.createElement("span");
      span.className = "badge";
      firstArticle.append(span);
      span.append(`Tercero / / /`);
    }
  } else if (tipoCable == "144 F.O Francia") {
    if (parseInt(numero) >= 97) {
      let span = document.createElement("span");
      span.className = "badge";
      firstArticle.append(span);
      span.append(`Primero /`);
    }
  } else if (tipoCable == "288 F.O Francia 18 tubos") {
    if (parseInt(numero) >= 193) {
      let span = document.createElement("span");
      span.className = "badge";
      firstArticle.append(span);
      span.append(`Primero /`);
    }
  }
}

const myApp = new app();
myApp.init();

function SearchColors(number) {
  results.forEach((tube, index) => {
    console.log(tube);
  });
}
