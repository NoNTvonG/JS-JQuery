const customRow = (id) => {
  return `<div class="input-group mb-3 customRow" counter="${id}">
          <span for="" class="input-group-text">${id}</span>
          <input type="text" class="form-control px-3" />
          </div>`
}

const addNewRow = () => {
  let x = $("#peopleCounter").val() // взнаємо вказану цифру
  let prev_x = $("#peopleArr .customRow").length // попередня кількість елементів

  if (x > prev_x) {
    for (let i = prev_x + 1; i <= x; i++) {
      $("#peopleArr").append(customRow(i))
    }
  } else if (x < prev_x) {
    for (let i = prev_x; i > x; i--) {
      $(`div[counter="${i}"]`).remove()
    }
  }
}
