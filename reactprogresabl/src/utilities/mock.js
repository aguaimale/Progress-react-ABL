import data from "./data.json";

//codemp, user, pasword
export default function login(codemp, email, password) {
    console.log(codemp, email, password);
    console.log(data.usuarios);
    let user = data.usuarios.find((e) => e.codemp == codemp && e.usu === email)
    console.log(user);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!user) reject(false)
            else if (password === user.psw) resolve(true)
            else resolve(false)
        }, 1200)
    })
}

