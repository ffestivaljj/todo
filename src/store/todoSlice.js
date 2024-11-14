import { createSlice } from "@reduxjs/toolkit";




const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [
      {id:  1,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Запустить проект',completed: false},
      {id:  2,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Изучить форматы и используемые технологии',completed: false},
      {id:  3,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Определить зону действий',completed: false},
      {id:  4,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Добавить кнопку с выбором схем карты',completed: false},
      {id:  5,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Наполнить кнопку списком схем карт',completed: false},
      {id:  6,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Реализовать переключение схемы карты по клику',completed: false},
      {id:  7,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: '! Смена схемы по клику не срабатывает. Найти решение позже, приступить к переключении темной темы',completed: false},
      {id:  8,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Добавить дополнительную кнопку для смены темы сайта',completed: false},
      {id:  9,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Обдумать функционал, взаимосвязь со схемами карты',completed: false},
      {id: 10,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Реализовать, сперва, смену всех необходимых стилей сайта при нажатии кнопки смены темы',completed: false},
      {id: 11,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Сохранить предпочтение выбранной темы в localStorage',completed: false},
      {id: 12,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: '! Вернуться к проблеме смены схем карты. Реализовано',completed: false},
      {id: 13,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Сохранить предпочитаемую схему карты в localStorage',completed: false},
      {id: 14,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Синхронизировать кнопку смены темы с темной схемой карты Dark и обратно',completed: false},
      {id: 15,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: 'Добавить media - запрос для авто-определения у пользователя предпочитаемой цветовой темы в ОС и установить ее по умолчанию на сайте. Далее сохранять его выбор в localStorage',completed: false},
      {id: 16,day: new Date().toLocaleDateString(),time: new Date().toLocaleTimeString(),text: '! Остаточная проблема со слоями остановок и маршрутов. После смены карты не перерисовываются',completed: false},
    ]
  },
  reducers: {
    addTodo(state, action){
      state.todos.push({          			      
					id: new Date().toISOString(),
          day: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
					text: action.payload.text,
					completed: false,
				
      })
    },

    removeTodo(state, action){
      state.todos = state.todos.filter(todo => todo.id !== action.payload.id);
    },

    toggleTodoComplete(state, action){
      const toggleTodo = state.todos.find(todo => todo.id === action.payload.id);
      toggleTodo.completed = !toggleTodo.completed;
    }

  },

});

export const {addTodo, removeTodo, toggleTodoComplete } = todoSlice.actions;

export default todoSlice.reducer;


