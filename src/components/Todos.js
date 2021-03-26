import React from 'react'
import Todo from './Todo'

const Todos = (props) => {

  const sortByPriority = (a, b) => {
    const categories = ['high priority', 'medium priority', 'low priority']
    const indexA = categories.indexOf(a.priority)
    const indexB = categories.indexOf(b.priority)
    if (indexA > indexB) {
      return 1
    } else if (indexA < indexB) {
      return -1 
    } else {
      return 0
    }
  }

  const sortByDueDate = (a, b) => {
    if (a.dueDate > b.dueDate) {
      return 1 
    } else if (a.dueDate < b.dueDate) {
      return -1
    } else {
      return 0
    }
  }

  const sortByCompleted = (a, b) => {
    const categories = [true, false]
    const indexA = categories.indexOf(a.completed)
    const indexB = categories.indexOf(b.completed)
    if (indexA > indexB) {
      return -1
    } else if (indexA < indexB) {
      return 1
    } else {
      return 0
    }
  }
  
  return (
    <ul>
      {props.todos
        .sort(props.sorter === 'priority' ? sortByPriority : props.sorter === 'due date' ? sortByDueDate : undefined)
        .sort(sortByCompleted)
        .map(todo => (
          <Todo 
            key={todo.id} 
            todo={todo}
            handleTodoDelete={props.handleTodoDelete}
            handlePriorityChange={props.handlePriorityChange}
            handleDueDateChange={props.handleDueDateChange}
            toggleCompleted={props.toggleCompleted}
          />
        )
      )}
    </ul>
  )
}

export default Todos;
