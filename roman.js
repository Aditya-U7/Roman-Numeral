function roman_numeral() {
    var n = document.getElementById('u_input').value;
    var ans = "";
    var len = n.length;
    if (len >= 0 && len <= 4) {



        if (len == 4) {
            ans = ans + thousand_place(Number(n.charAt(len - 4)));
        }
        if (len >= 3) {
            ans = ans + hundred_place(Number(n.charAt(len - 3)));
        }
        if (len >= 2) {
            ans = ans + ten_place(Number(n.charAt(len - 2)));
        }

        if (len > 0) {
            ans = ans + unit_place(Number(n.charAt(len - 1)), len);
        }
    }
    return (ans);
}

function unit_place(up, f) {
    //up = Number(up);
    f = Number(f);
    var roman_list = ["I", "II", 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];

    var rup = "";
    if (up == 0 && f == 1) {
        return ("Invalid");
    }
    if (up == 0 && f >= 1) {
        return (rup);
    } else if (up > 0 && f >= 1) {


        rup = roman_list[up - 1];

        return (rup);
    }
}

function hundred_place(h) {
    // h = Number(h);
    var rh = "";
    if (h >= 1 && h < 4) {

        for (var i = 0; i < h; i++) {
            rh = rh + "C";
        }
    } else if (h == 4) {
        rh = "CD";
    } else if (h > 4 && h < 9) {
        rh = "D";
        if (h > 5) {
            for (var i = 0; i < h - 5; i++) {
                rh = rh + "C";
            }
        }
    } else if (h == 9) {
        rh = "CM";
    }
    return (rh);

}

function ten_place(th) {
    // th = Number(th);
    var rth = "";
    if (th >= 1 && th < 4) {
        for (var i = 0; i < th; i++) {
            rth = rth + "X";
        }
    } else if (th == 4) {
        rth = "XL";
    } else if (th > 4 && th < 9) {
        rth = "L";
        if (th > 5) {
            for (var i = 0; i < th - 5; i++) {
                rth = rth + "X";
            }
        }
    } else if (th == 9) {
        rth = "XC";
    }
    return (rth);
}

function thousand_place(t) {
    //t = Number(t);
    var rt = "";
    if (t >= 1 && t < 4) {
        for (var i = 0; i < t; i++) {
            rt = rt + "M";
        }
    } else if (t == 4) {
        rt = "MṼ";
    } else if (t > 4 && t < 9) {
        rt = "Ṽ";
    }
    if (t > 5 && t < 9) {
        for (var i = 0; i < t - 5; i++) {
            rt = rt + "M";
        }
    } else if (t == 9) {
        rt = "MẊ";
    }
    return (rt);
}

function reloadPage() {

    location.reload(true);

}
