export function Hourly(item, arr, index) {
    let div = document.createElement("div")
    let time = document.createElement("p")
    let degree = document.createElement("p")

    let hour = new Date(arr[index]).getHours()
    time.textContent = hour
    if (hour < 12) {
        time.textContent = "0" + hour + ".am"
    } else {
        time.textContent = hour + ".pm"

    }
    degree.textContent = item + "°"

    div.className = 'hourly_elem'
    time.className = 'time'
    degree.className = 'degree'

    div.append(time, degree)

    return div
}

