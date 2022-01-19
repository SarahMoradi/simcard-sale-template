export const validate = (data, type) => {

    const errors = {};

    if (!data.email) {
        errors.email = "ایمیل وارد شود"
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "ایمیل به درستی وارد شود"
    }
    else if (data.email==="sara123@gmail.com") {
        errors.email = "ایمیل یافت نشد"
    }
    else {
        delete errors.email
    }

    if (!data.password) {
        errors.password = "پسورد وارد شود"
    } else if (data.password.length < 6) {
        errors.password = "پسورد باید 6 کاراکتر یا بیشتر باشد"
    } 
    else if (data.password==="asdfgh") {
        errors.password = "کاربر یافت نشد"
    }
    else {
        delete errors.password
    }

    if (type === "signup") {

        if (!data.name.trim()) {
            errors.name = "نام وارد شود"
        } else {
            delete errors.name
        }

        if (!data.family.trim()) {
            errors.family = "نام خانوادگی وارد شود"
        } else {
            delete errors.family
        }

        if (!data.confirmPassword) {
            errors.confirmPassword = "تایید پسورد وارد شود"
        } else if (data.confirmPassword !== data.password) {
            errors.confirmPassword = "پسورد ها یکسان نیست"
        } else {
            delete errors.confirmPassword
        }

        if (data.isAccepted) {
            delete errors.isAccepted
        } else {
            errors.isAccepted = "قوانین و مقررات پذیرفته شود."
        }
    }

    return errors;
}