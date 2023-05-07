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
  currentData = [];
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

  filterData() {
    return this.data.find((element) => element.name == this.cableSelected);
  }

  searchFibraInfo(number) {
    let aux = 0;
    let fiberColor, fiberPosition;

    const arrTable = this.constructTable();

    arrTable.forEach((tube) => {
      tube.forEach((fiber, index) => {
        aux++;
        if (aux == number) {
          fiberPosition = index + 1;
          fiberColor = fiber;
        }
      });
    });

    return {
      fiberColor: fiberColor,
      fiberNumber: this.numeroSelected,
      fiberPosition: fiberPosition,
    };
  }

  searchTubeInfo(number) {
    let aux = 0;
    let tubeNumber;

    const arrTable = this.constructTable();

    arrTable.forEach((tube, index) => {
      tube.forEach(() => {
        aux++;
        if (aux == number) {
          tubeNumber = index;
        }
      });
    });

    return {
      tubeNumber: tubeNumber,
      tubeColors: this.currentData.cableInfo.tubeColors[tubeNumber],
    };
  }

  constructTable() {
    const arrTable = [];
    this.currentData.cableInfo.tubeColors.forEach(() => {
      arrTable.push(this.currentData.cableInfo.fiberColors);
    });
    return arrTable;
  }

  searchData() {
    if (!this.cableSelected || !this.numeroSelected) return;
    this.currentData = this.filterData();
    let tubeNumber = this.searchTubeInfo(this.numeroSelected).tubeNumber;
    let tubeColors = this.searchTubeInfo(this.numeroSelected).tubeColors;
    let fiberNumber = this.searchFibraInfo(this.numeroSelected).fiberNumber;
    let fiberColor = this.searchFibraInfo(this.numeroSelected).fiberColor;
    let fiberPosition = this.searchFibraInfo(this.numeroSelected).fiberPosition;

    return {
      fiberNumber: fiberNumber, // 0
      tubeColors: tubeColors, // 1
      fiberColor: fiberColor, // 2
      tubeNumber: tubeNumber + 1, // 3
      fiberPosition: fiberPosition, // 4
    };
  }

  drawResults(results) {
    this.resultPanel.innerHTML = `
      <article>
      <header>
        <p class="title">${this.companySelected} - ${
      this.cableSelected
    } - Tubos: ${this.currentData.cableInfo.tubes} - Fibras *Tubo: ${
      this.currentData.cableInfo.fibers / this.currentData.cableInfo.tubes
    }</p>
    </header>
        <p class="tubo"><b>Tubo</b> ${results.tubeNumber} - ${
      results.tubeColors
    } <i style="color:${
      results.tubeColors
    }"class="fa-sharp fa-solid fa-square"></i></p>
        <p class="fibra"><b>Fibra ${results.fiberNumber}</b> - ${
      results.fiberColor
    } <i style="color:${
      results.fiberColor
    }"class="fa-sharp fa-solid fa-square"></i></p>
      </article>
      ${this.resultPanel.innerHTML}
    `;
    this.generarPintas(this.cableSelected, results.fiberPosition);
    this.generarTubosRepetidos(this.cableSelected, results.tubeNumber);
  }

  drawMark(donde, mensaje) {
    let span = document.createElement("span");
    span.className = "badge";
    donde.append(span);
    span.append(mensaje);
  }

  generarPintas(tipoCable, fiberPosition) {
    let firstArticle = document.querySelectorAll("article .fibra")[0];

    if (tipoCable == "256 F.O PKP") {
      if (fiberPosition >= 13) {
        this.drawMark(firstArticle, `/`);
      }
    } else if (tipoCable == "512 F.O PKP") {
      if (fiberPosition >= 9 && fiberPosition <= 16) {
        this.drawMark(firstArticle, `/`);
      } else if (fiberPosition >= 17 && fiberPosition <= 24) {
        this.drawMark(firstArticle, `//`);
      } else if (fiberPosition >= 25) {
        this.drawMark(firstArticle, `///`);
      }
    } else if (tipoCable == "144 F.O Francia") {
    } else if (tipoCable == "288 F.O Francia 18 tubos") {
      if (fiberPosition >= 13) {
        this.drawMark(firstArticle, `/`);
      }
    }
  }

  generarTubosRepetidos(tipoCable, tubeNumber) {
    let firstArticle = document.querySelectorAll("article .tubo")[0];

    if (tipoCable == "48 F.O PKP") {
      if (tubeNumber == 3 || tubeNumber == 5) {
        this.drawMark(firstArticle, `º`);
      } else if (tubeNumber == 4 || tubeNumber == 6) {
        this.drawMark(firstArticle, `ºº`);
      }
    } else if (tipoCable == "64 F.O PKP") {
      if (tubeNumber == 3 || tubeNumber == 5 || tubeNumber == 7) {
        this.drawMark(firstArticle, `º`);
      } else if (tubeNumber == 4 || tubeNumber == 6 || tubeNumber == 8) {
        this.drawMark(firstArticle, `ºº`);
      }
    } else if (tipoCable == "96 F.O PKP") {
      if (tubeNumber == 4 || tubeNumber == 7 || tubeNumber == 10) {
        this.drawMark(firstArticle, `º`);
      } else if (tubeNumber == 5 || tubeNumber == 8 || tubeNumber == 11) {
        this.drawMark(firstArticle, `ºº`);
      } else if (tubeNumber == 6 || tubeNumber == 9 || tubeNumber == 12) {
        this.drawMark(firstArticle, `ººº`);
      }
    } else if (
      tipoCable == "128 F.O PKP" ||
      tipoCable == "256 F.O PKP" ||
      tipoCable == "512 F.O PKP"
    ) {
      if (tubeNumber == 8 || tubeNumber == 11 || tubeNumber == 14) {
        this.drawMark(firstArticle, `º`);
      } else if (tubeNumber == 9 || tubeNumber == 12 || tubeNumber == 15) {
        this.drawMark(firstArticle, `ºº`);
      } else if (tubeNumber == 10 || tubeNumber == 13 || tubeNumber == 16) {
        this.drawMark(firstArticle, `ººº`);
      }
    } else if (tipoCable.includes("Francia")) {
      if (tubeNumber > 13) {
        this.drawMark(firstArticle, `º`);
      }
    } else if (tipoCable == "288 F.O Francia 18 tubos") {
      if (tubeNumber > 13) {
        this.drawMark(firstArticle, `º`);
      }
    } else if (tipoCable == "288 F.O Francia 24 tubos") {
      if (tubeNumber > 13) {
        this.drawMark(firstArticle, `º`);
      }
    }
  }
}

const myApp = new app();
myApp.init();
