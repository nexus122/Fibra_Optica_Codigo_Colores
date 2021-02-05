/* Clase para los cables */
class Cable{
    constructor(info, nombre, tubeColorInfo, fibraColorInfo, lengTubeColorInfo, lengFibraColorInfo){
        this.info  = info,
        this.name = nombre
        this.tubeColorInfo = tubeColorInfo
        this.fibraColorInfo = fibraColorInfo
        this.lengTubeColorInfo = lengTubeColorInfo
        this.lengFibraColorInfo = lengFibraColorInfo
    }
}

module.exports = Cable;
