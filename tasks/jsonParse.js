function parseJSON(jsonString) {
  try {
    const obj = JSON.parse(jsonString);
    return obj;
  } catch (error) {
    // Обработка ошибок при неверном формате JSON
    console.error('Ошибка при разборе JSON:', error);
    return null;
  }
}


export { parseJSON };