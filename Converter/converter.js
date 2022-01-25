function chuyenDoiDoDai() {
    let lenghtFrom = 'm'
    let lenghtTo = 'm'
    let lenghtInput = 0
    lenghtInput = document.getElementById('lenght-input--value').value
    lenghtFrom = document.getElementById('lenght-selectfrom--value').value
    lenghtTo = document.getElementById('lenght-selectto--value').value
    let lenghtOutput = document.getElementById('lenght-output').innerHTML
    console.log(lenghtOutput)
    if (lenghtFrom === 'm') {
        switch (lenghtTo) {
            case 'm':
                document.getElementById('lenght-output').innerHTML = lenghtInput + 'm';
                break
            case 'cm':
                lenghtOutput = lenghtInput * 100
                document.getElementById('lenght-output').innerHTML = lenghtOutput + 'cm';
                break
            case 'km':
                lenghtOutput = lenghtInput / 1000
                document.getElementById('lenght-output').innerHTML = lenghtOutput + 'km';
                break
        }
    }
    // Cm
    if (lenghtFrom === 'cm') {
        switch (lenghtTo) {
            case 'm':
                lenghtOutput = lenghtInput / 100
                document.getElementById('lenght-output').innerHTML = lenghtOutput + 'm';
                break
            case 'cm':
                lenghtOutput = lenghtInput
                document.getElementById('lenght-output').innerHTML = lenghtOutput + 'cm';
                break
            case 'km':
                lenghtOutput = lenghtInput / 100000
                document.getElementById('lenght-output').innerHTML = lenghtOutput + 'km';
                break
        }
    }
    // km
    if (lenghtFrom === 'km') {
        switch (lenghtTo) {
            case 'm':
                lenghtOutput = lenghtInput * 1000
                document.getElementById('lenght-output').innerHTML = lenghtOutput + 'm';
                break
            case 'cm':
                lenghtOutput = lenghtInput * 100000
                document.getElementById('lenght-output').innerHTML = lenghtOutput + 'cm';
                break
            case 'km':
                lenghtOutput = lenghtInput
                document.getElementById('lenght-output').innerHTML = lenghtOutput + 'km';
                break
        }
    }
}

function resetLenght() {
    document.getElementById('lenght-input--value').value = 0
    document.getElementById('lenght-output').innerHTML = 0
}

// Khối lượng
function chuyenDoiKhoiLuong() {
    let lenghtFrom = 'g'
    let lenghtTo = 'g'
    let lenghtInput = 0
    lenghtInput = document.getElementById('mass-input--value').value
    lenghtFrom = document.getElementById('mass-selectfrom--value').value
    lenghtTo = document.getElementById('mass-selectto--value').value
    let lenghtOutput = document.getElementById('mass-output').innerHTML
    console.log(lenghtOutput)
    if (lenghtFrom === 'g') {
        switch (lenghtTo) {
            case 'g':
                document.getElementById('mass-output').innerHTML = lenghtInput + 'g';
                break
            case 'kg':
                lenghtOutput = lenghtInput / 1000
                document.getElementById('mass-output').innerHTML = lenghtOutput + 'kg';
                break
            case 'ton':
                lenghtOutput = lenghtInput / 1000000
                document.getElementById('mass-output').innerHTML = lenghtOutput + 'ton';
                break
        }
    }
    // kg
    if (lenghtFrom === 'kg') {
        switch (lenghtTo) {
            case 'g':
                lenghtOutput = lenghtInput * 1000
                document.getElementById('mass-output').innerHTML = lenghtOutput + 'g';
                break
            case 'kg':
                lenghtOutput = lenghtInput
                document.getElementById('mass-output').innerHTML = lenghtOutput + 'kg';
                break
            case 'ton':
                lenghtOutput = lenghtInput / 1000
                document.getElementById('mass-output').innerHTML = lenghtOutput + 'ton';
                break
        }
    }
    // ton
    if (lenghtFrom === 'ton') {
        switch (lenghtTo) {
            case 'g':
                lenghtOutput = lenghtInput * 1000000
                document.getElementById('mass-output').innerHTML = lenghtOutput + 'g';
                break
            case 'kg':
                lenghtOutput = lenghtInput * 1000
                document.getElementById('mass-output').innerHTML = lenghtOutput + 'kg';
                break
            case 'ton':
                lenghtOutput = lenghtInput
                document.getElementById('mass-output').innerHTML = lenghtOutput + 'ton';
                break
        }
    }
}
// Tốc độ
function chuyenDoiTocDo() {
    let lenghtFrom = 'ms'
    let lenghtTo = 'ms'
    let lenghtInput = 0
    lenghtInput = document.getElementById('speed-input--value').value
    lenghtFrom = document.getElementById('speed-selectfrom--value').value
    lenghtTo = document.getElementById('speed-selectto--value').value
    let lenghtOutput = document.getElementById('speed-output').innerHTML
    console.log(lenghtOutput)
    if (lenghtFrom === 'ms') {
        switch (lenghtTo) {
            case 'ms':
                document.getElementById('speed-output').innerHTML = lenghtInput + 'm/s';
                break
            case 'kmh':
                lenghtOutput = (lenghtInput / 1000) * 3600
                document.getElementById('speed-output').innerHTML = lenghtOutput + 'km/h';
                break
        }
    }
    // kg
    if (lenghtFrom === 'kmh') {
        switch (lenghtTo) {
            case 'ms':
                lenghtOutput = (lenghtInput * 1000) / 3600
                document.getElementById('speed-output').innerHTML = lenghtOutput.toFixed(2) + 'm/s';
                break
            case 'kmh':
                lenghtOutput = lenghtInput
                document.getElementById('speed-output').innerHTML = lenghtOutput + 'km/h';
                break
        }
    }
}