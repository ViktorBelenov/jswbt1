// Определение класса для элемента связанного списка
class ListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

// Функция для преобразования JSON в связанный список
function jsonToLinkedList(json) {
  if (!Array.isArray(json)) {
    throw new Error("Входной JSON должен быть списком объектов.");
  }

  if (json.length === 0) {
    return null; // Возвращаем null для пустого списка
  }

  // Создаем первый элемент списка
  const head = new ListNode(json[0]);
  let current = head;

  // Проходим по оставшимся элементам и добавляем их к списку
  for (let i = 1; i < json.length; i++) {
    const newNode = new ListNode(json[i]);
    current.next = newNode;
    current = newNode;
  }

  return head;
}

export {jsonToLinkedList};