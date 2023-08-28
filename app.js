const dark = document.querySelector(".dark");
const body = document.querySelector("body");
const user_get = document.querySelector(".user");
const btn = document.querySelector(".act");
const output_place = document.querySelector(".get");
const en_de = document.querySelector(".change");
const head = document.querySelector(".head");
const copy_text = document.querySelector(".copy");
const foot = document.querySelector(".foot");


var dark_flag = false;
dark.addEventListener("click", () => {
    if (!dark_flag) {
        body.style.backgroundColor = "black";
        dark.src = "./dark.png"
        dark_flag = true
        foot.style.borderTop = "2px solid white"
        head.style.backgroundColor = "black"
        user_get.style.backgroundColor = "black"
        user_get.style.color = "white"
        output_place.style.backgroundColor = "black"
        output_place.style.color = "white"

    } else {
        body.style.backgroundColor = "white";
        dark.src = "./light.png"
        dark_flag = false
        foot.style.borderTop = "none"
        head.style.backgroundColor = "white"
        user_get.style.backgroundColor = "white"
        user_get.style.color = "black"
        output_place.style.backgroundColor = "white"
        output_place.style.color = "black"
    }

})
const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_case = upper_case.toLowerCase();
const extra_case = lower_case.concat("伪尾纬未蔚味畏胃喂魏位渭");
const num = "1234567890";
const spl_char = "~!@#$%^&*()_+}{:,.`=-[];'><"
const greek = "αάβγδεέζηήθιίκλμνξοόπρΐϊστυύφχψωώΰϋς"
var dir_upper = {}
var dir_lower = {}
var dir_num = {}
var dir_spl = {}

for (let x = 0; x < upper_case.length; x++) {
    dir_upper[upper_case[x]] = upper_case[(x + 3) % upper_case.length]
    dir_lower[lower_case[x]] = greek[(x + 4) % greek.length]
}
for (let y = 0; y < num.length; y++) {
    dir_num[num[y]] = spl_char[(y + 3) % spl_char.length]
}
for (let a = 0; a < spl_char.length; a++) {
    dir_spl[spl_char[a]] = lower_case[(a + 2) % lower_case.length]

}
// console.log([dir_lower,dir_num,dir_spl,dir_upper])

const encrypt = (value) => {
    var final_value = "";
    var get_value = value;
    for (let c = 0; c < get_value.length; c++) {
        if (get_value[c] === " ") {
            final_value = final_value + "?";

        }
        for (const lower_key in dir_lower) {
            if (get_value[c] === lower_key) {
                final_value = final_value + dir_lower[lower_key]
            }
        }
        for (const upper_key in dir_upper) {
            if (get_value[c] === upper_key) {
                final_value = final_value + dir_upper[upper_key]
            }
        }
        for (const num_key in dir_num) {
            if (get_value[c] === num_key) {
                final_value = final_value + dir_num[num_key]
            }
        }
        for (const spl_key in dir_spl) {
            if (get_value[c] === spl_key) {
                final_value = final_value + dir_spl[spl_key]
            }
        }
    }
    return final_value
}
const decrypt = (value) => {
    var final_value = "";
    var get_value = value;
    for (let x = 0; x < get_value.length; x++) {
        if (get_value[x] === "?") {
            final_value = final_value + " ";

        }
        for (const lower_key in dir_lower) {
            if (get_value[x] === dir_lower[lower_key]) {
                final_value = final_value + lower_key;
            }
        }
        for (const upper_key in dir_upper) {
            if (get_value[x] === dir_upper[upper_key]) {
                final_value = final_value + upper_key;
            }
        }
        for (const num_key in dir_num) {
            if (get_value[x] === dir_num[num_key]) {
                final_value = final_value + num_key;
            }
        }
        for (const spl_key in dir_spl) {
            if (get_value[x] === dir_spl[spl_key]) {
                final_value = final_value + spl_key;
            }
        }
    }

    return final_value
}






//========================================




var en_de_flag = false;
console.log(en_de_flag)
en_de.addEventListener("click", () => {
    if (!en_de_flag) {
        btn.innerHTML = "Decrypt"
        en_de.innerHTML = "Encrypt"
        output_place.value = ""
        en_de_flag = true;
        console.log(en_de_flag)
        user_get.value = ""
        copy_text.style.display = "none"
        btn.addEventListener("click", () => {
            if (en_de_flag) {
             
                var encode_value = decrypt(user_get.value);
                output_place.value = encode_value
                    
               
            }
        })
    } else {
        console.log("hi")
        en_de_flag = false;
        output_place.value = ""
        user_get.value = ""
        btn.innerHTML = "Encrypt"
        en_de.innerHTML = "Decrypt"
        copy_text.style.display = "none"
        btn.addEventListener("click", () => {
            if (!en_de_flag) {
          
                var encode_value = encrypt(user_get.value);
                output_place.value = encode_value
                   
                
            }
        })
    }

})

setInterval(() => {
    if (!en_de_flag) {
        btn.addEventListener("click", () => {
            if (!en_de_flag) {
                var encode_value = encrypt(user_get.value);
                output_place.value = encode_value
            }

        })
    }
}, 1000)

output_place.oncopy = ()=>{
    copy_text.style.display = "block"
}









