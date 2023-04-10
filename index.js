class app {
  constructor() {}
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
      <h1>${this.companySelected} - ${this.cableSelected}</h1>
        <p> El numero <b>${results[0]}</b></p>
        <p><b>Tubo</b> <i style="color:${results[1]}"class="fa-sharp fa-solid fa-square"></i></p>
        <p><b>Fibra</b> <i style="color:${results[2]}"class="fa-sharp fa-solid fa-square"></i></p>
      </article>
    `;
  }
}

const myApp = new app();
myApp.init();
