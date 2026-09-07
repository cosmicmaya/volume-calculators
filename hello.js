let cone_button = document.getElementById('calculate_cone');
let clear_answer_cone = document.getElementById('clear_cone')
let rect_button = document.getElementById('calculate_rect');
let clear_answer_rect = document.getElementById('clear_rect')
let sphere_button = document.getElementById('calculate_sphere')
let clear_answer_sphere = document.getElementById('clear_sphere')


function sphere_volume() {
    let radius = parseInt(document.getElementById('sphere_radius').value);

    let real_sphere_volume = Math.PI * Math.pow(radius, 3) * (4 / 3)


    if (isNaN(radius)) {
        document.getElementById('introduction').textContent = "ADD VALUE AND TRY AGAIN"
    } else{
        document.getElementById('introduction').textContent = "THE ANSWER IS"
        document.getElementById('value').textContent = real_sphere_volume.toFixed(2)
        document.getElementById('coolguy').style.opacity = 1.0

    }

}


function cone_volume() {
    let height = parseInt(document.getElementById('cone_height').value);
    let radius = parseInt(document.getElementById('cone_radius').value);
    let base_area = Math.PI * Math.pow(radius, 2)
    let real_cone_volume = base_area * height * (1 / 3)

    if (isNaN(height) && isNaN(radius)) {
        document.getElementById('introduction').textContent = "ADD VALUES AND TRY AGAIN"
    } else if (isNaN(height)) {
        document.getElementById('introduction').textContent = "ADD HEIGHT AND TRY AGAIN"
    } else if (isNaN(radius)) {
        document.getElementById('introduction').textContent = "ADD RADIUS AND TRY AGAIN"
    } else {
        document.getElementById('introduction').textContent = "THE ANSWER IS"
        document.getElementById('value').textContent = real_cone_volume.toFixed(2)
        document.getElementById('coolguy').style.opacity = 1.0
    }
}


function rect_volume() {
    let height = parseInt(document.getElementById('rect_height').value);
    let width = parseInt(document.getElementById('rect_width').value);
    let length = parseInt(document.getElementById('rect_length').value);
    let real_rect_volume = height * width * length

    if (isNaN(height) && isNaN(width) && isNaN(length)) {
        document.getElementById('introduction').textContent = "ADD VALUES AND TRY AGAIN"
    } else {
        document.getElementById('introduction').textContent = "THE ANSWER IS"
        document.getElementById('value').textContent = real_rect_volume.toFixed(2)
        document.getElementById('coolguy').style.opacity = 1.0
    }
}

function clear1() {
    document.getElementById('introduction').textContent = ""
    document.getElementById('value').textContent = ""
    document.getElementById('coolguy').style.opacity = 0

    document.getElementById('cone_height').value = ""
    document.getElementById('cone_radius').value = ""
}

function clear2() {
    document.getElementById('introduction').textContent = ""
    document.getElementById('value').textContent = ""
    document.getElementById('coolguy').style.opacity = 0

    document.getElementById('rect_height').value = ""
    document.getElementById('rect_width').value = ""
    document.getElementById('rect_length').value = ""
}

function clear3() {
    document.getElementById('introduction').textContent = ""
    document.getElementById('value').textContent = ""
    document.getElementById('coolguy').style.opacity = 0

    document.getElementById('sphere_radius').value = ""
}

sphere_button.onclick = () => {
    sphere_volume()
}

clear_answer_sphere.onclick = () => {
    clear3()
}


rect_button.onclick = () => {
    rect_volume()
}

clear_answer_rect.onclick = () => {
    clear2()
}

cone_button.onclick = () => {
    cone_volume()
}


clear_answer_cone.onclick = () => {
    clear1()
}
