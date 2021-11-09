const customRow = (id) => {
  return `<div class="input-group mb-3 customRow">
          <span for="" class="input-group-text">${id}</span>
          <input type="text" class="form-control px-3" />
          </div>`
}

const createArrLength = (num) => {
  let arr = []
  for (let i = 0; i < num; i++) {
    arr.push(i + 1)
  }
  return arr
}

const addNewRow = () => {
  let x = parseInt($("#peopleCounter").val()) // взнаємо вказану цифру
  let x1 = createArrLength(x)
  let prevX = $("#peopleArr .customRow").length // попередня кількість елементів

  $("#peopleArr .customRow").remove() // очищаємо весь список

  x1.forEach((element) => {
    $("#peopleArr").append(customRow(element))
  })

  // if (x > prevX) {
  //   $("#peopleArr").append(customRow(x))
  // } else if (x < prevX) {
  //   $("#peopleArr .customRow").last().remove()
  // }
}
