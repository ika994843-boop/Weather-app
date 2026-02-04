export function Daily(item, arr = []) {
    let div = document.createElement("div")
    let time = document.createElement("p")
    let degree = document.createElement("p")

    const todayIndex = new Date().getDay()

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const itemIndex = arr.indexOf(item)

    const dayIndex = (todayIndex + itemIndex) % 7

    time.textContent = days[dayIndex]
    degree.textContent = item + "°C"

    div.className = 'daily_elem'
    time.className = 'day'
    degree.className = 'daily_degree'

    div.append(time, degree)

    return div
}
