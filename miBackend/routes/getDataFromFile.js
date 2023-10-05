const fs = require("fs").promises;
/**
@name fileRead
@description Lee un archivo y retorna su contenido en formato UTF-8
@param {string} fileName - La ruta del archivo a leer
@returns {Promise<string>} El contenido del archivo en formato UTF-8
@throws {Error} Si ocurre un error al leer el archivo
*/
async function fileRead(fileName) {
  try {
    if (fileName.includes("/"))
      fileName = fileName.replace(/\\/g, "/");
    return (await fs.readFile(fileName, "utf8"));
  } catch (e) { console.log(e) }
}

/**
 * @name fileWrite
 * @description Escribe el contenido en un archivo
 * @param {string} filePath - La ruta del archivo a escribir
 * @param {string} content - El contenido a escribir en el archivo
 * @throws {Error} Si ocurre un error al escribir el archivo
 */
function fileWrite(filePath, content) {
  fs.writeFile(filePath, content);
}

module.exports = { fileRead, fileWrite };
