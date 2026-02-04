export function render(arr, place, Component) {
    place.innerHTML = ""
    for (let item of arr) {
        let elem = Component(item, arr)

        place.append(elem)
    }
}
export function renderHourly(arr, time, place, Component) {

    arr.forEach((item, index) => {
        let elem = Component(item, time, index)

        place.append(elem)
    }
    );
}