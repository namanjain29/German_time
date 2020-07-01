const convert_hour = (hr) => {
    arr = ["Null", "Ein", 'Zwei', "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn", "Elf", "Zwölf"]
    // console.log(hr)
    return arr[hr]
}

const convert_min = (t) => {
    arr = ["", "Ein", 'Zwei', "Drei", "Vier", "Fünf", "Sechs", "Sieben", "Acht", "Neun", "Zehn", "Elf", "Zwölf"]
    tens = ["zwanzig", "dreiβig", "vierzig", "fünfzig"]
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
        tdiff = t - 20
        if (tdiff == 6) {
            mins = "Sech"
        }
        else if (tdiff == 7) {
            mins = "Sieb"
        }
        else {
            mins = arr[tdiff]
        }
        str = mins + "und" + tens[0]
        return str

    }
    else if (t == 30) {
        return "dreiβig"
    }
    else if (t > 30 && t <= 39) {
        const tdiff = t - 30
        if (tdiff == 6) {
            mins = "Sech"
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
        str = mins + "und" + tens[3]
        return str
    }
    else {
        return ""
    }
}

const Inoffizielle = (hr, min, aRp) => {
    hr = parseInt(hr)
    min = parseInt(min)
    if (hr == 0) {
        return "invalid Input"
    }
    if (hr == 12 && aRp == "am") {
        hr = 0
    }

    if (min < 0 || min > 59 || hr > 12 || hr < 0) {
        return "Invalid Input"
    }
    else if (min == 0) {
        return convert_hour(hr).toLowerCase() + " uhr"
    }
    else if (min > 0 && min < 25) {
        if (min == 15) {
            return "Viertel nach " + convert_hour(hr).toLowerCase()
        }
        else {
            return convert_min(min) + " nach " + convert_hour(hr).toLowerCase()
        }
    }
    else if (min >= 25 && min <= 35) {
        if (min == 30) {
            // console.log(min, hr)
            // console.log(hr)
            return "Halb " + convert_hour(hr + 1).toLowerCase()
        }
        else if (min < 30) {
            return convert_min(30 - min) + " vor halb " + convert_hour(hr + 1).toLowerCase()
        }
        else if (min > 30) {
            return convert_min(min - 30) + " nach halb " + convert_hour(hr + 1).toLowerCase()

        }
    }
    else if (min > 35) {
        if (min == 45) {
            return "Viertel vor " + convert_hour(hr + 1).toLowerCase()
        }
        else {
            return convert_min(60 - min) + " vor " + convert_hour(hr + 1).toLowerCase()
        }
    }
}


function inoff() {
    const hour = document.getElementById("hour_off").value
    const mins = document.getElementById("mins_off").value
    const meridian = document.getElementById("meridian").value

    // console.log(Inoffizielle(hour, mins, meridian))
    document.getElementById("Inoffizielle").innerHTML = Inoffizielle(hour, mins, meridian);
}

function resetin() {
    document.getElementById("Inoffizielle").innerHTML = ""
}