import data from "./data.json";
//codemp, user, pasword
export default function login(codemp, email, password) {
    let user = data.usuarios.find((e) => e.codemp === codemp && e.usu === email)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!user) reject(false)
            else if (password === user.psw) resolve(true)
            else resolve(false)
        }, 1200)
    })
}