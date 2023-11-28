import './App.css';

function App() {
  return (
    <script>
      // Функция для получения дня недели
function getWeekday(date) {
  const weekdays = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
  return weekdays[date.getDay()];
}

// Функция для создания календаря
function createCalendar(year, month) {
  const calendarBody = document.getElementById('calendar-body');
  calendarBody.innerHTML = '';
  
  const startDate = new Date(year, month, 1);
  const endDate = new Date(year, month + 1, 0);
  
  let currentDate = new Date(startDate);
  let row = calendarBody.insertRow();

  // Пропускаем дни недели до начала месяца
  while (currentDate.getDay() !== 1) {
    currentDate.setDate(currentDate.getDate() - 1);
  }

  // Создаем календарь
  while (currentDate <= endDate) {
    const cell = row.insertCell();
    cell.appendChild(document.createTextNode(currentDate.getDate() + ' (' + getWeekday(currentDate) + ')'));
  
    // Переходим на следующий день
    currentDate.setDate(currentDate.getDate() + 1);
  
    // Если текущий день - воскресенье, начинаем новую строку
    if (currentDate.getDay() === 1) {
      row = calendarBody.insertRow();
    }
  }
}

// Получаем текущую дату
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();

// Выводим календарь текущего месяца
createCalendar(currentYear, currentMonth);
    </script>
    <div className="App" id="calendar-body">

    </ div>
  );
}

export default App;

