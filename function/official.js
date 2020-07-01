const conversion = function (t) {
    const arr = ["", "Ein", 'Zwei', "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn", "Elf", "Zwölf"]
    const tens = ["zwanzig", "dreiβig", "vierzig", "fünfzig"]
    if (t == 0) {
        return "Null"
    }
    else if (t > 0 && t <= 12) {
        return arr[t]
    }
    else if (t > 12 && t <= 19) {
        const tdiff = t - 10

        if (tdiff == 6) {
            mins = "Sech"
        }
        else if (tdiff == 7) {
            mins = "Sieb"
        }
        else {
            mins = arr[tdiff]
        }

        const str = mins + "zehn"
        return str
    }
    else if (t == 20) {
        return "Zwanzig"
    }
    else if (t > 20 && t <= 29) {
        const tdiff = t - 20
        if (tdiff == 6) {
            mins = "Sech"
        }
        else if (tdiff == 7) {
            mins = "Sieb"
        }
        else {
            mins = arr[tdiff]
        }
        const str = mins + "und" + tens[0]
        return str
    }
    else if (t == 30) {
        return "dreiβig"
    }
    else if (t > 30 && t <= 39) {
        const tdiff = t - 30
        if (tdiff == 6) {

        }
        else if (tdiff == 7) {
            mins = "Sieb"
        }
        else {
            mins = arr[tdiff]
        }
        const str = mins + "und" + tens[1]
        return str
    }
    else if (t == 40) {
        return "Vierzig"
    }
    else if (t > 40 && t <= 49) {
        const tdiff = t - 40
        if (tdiff == 6) {
            mins = "Sech"
        }
        else if (tdiff == 7) {
            mins = "Sieb"
        }
        else {
            mins = arr[tdiff]
        }
        const str = mins + "und" + tens[2]
        return str
    }
    else if (t == 50) {
        return "Fünfzig"
    }
    else if (t > 50 && t <= 59) {
        const tdiff = t - 50
        if (tdiff == 6) {
            mins = "Sech"
        }
        else if (tdiff == 7) {
            mins = "Sieb"
        }
        else {
            mins = arr[tdiff]
        }
        const str = mins + "und" + tens[3]
        return str
    }
    else {
        return ""
    }
}

const offizielle = (hr, min) => {
    hr = parseInt(hr)
    min = parseInt(min)
    if (hr <= 23 && min < 60 && min >= 0 && hr >= 0)
        if (min == 0) {
            ans = conversion(hr) + " uhr "
        }
        else {
            ans = conversion(hr) + " uhr " + conversion(min)
        }
    else if (hr == 24 && min > 0) {
        return "Invalid input"
    }
    else if (min > 59) {
        return "Invalid input"
    }
    else {
        return "invalid input"
    }

    return ans
}


function off() {
    const hour = document.getElementById("hour").value
    const mins = document.getElementById("mins").value
    // console.log(mins, hour)
    document.getElementById("offizielle").innerHTML = offizielle(hour, mins)
    // console.log(offizielle(hour, mins))
}

function resetof() {
    document.getElementById("offizielle").innerHTML = ""
}