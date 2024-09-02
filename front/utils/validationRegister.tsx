import { IRegisterUSer } from "@/interfaces/interfaces";

export const validateRegister = (userRegister: IRegisterUSer) => {
    let errors: { name?: string; email?: string; password?: string; address?: string; phone?: string } = {};
    let formIsValid = true;

    if (!userRegister.name) {
        formIsValid = false;
        errors.name = "El campo nombre es obligatorio";
    } else if (userRegister.name.length < 4) {
        formIsValid = false;
        errors.name = "El nombre debe tener al menos 4 caracteres.";
    }

    if (!userRegister.email) {
        formIsValid = false;
        errors.email = "El campo email es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(userRegister.email)) {
        formIsValid = false;
        errors.email = "Por favor ingrese un email válido.";
    }

    if (!userRegister.password) {
        formIsValid = false;
        errors.password = "La contraseña es obligatoria";
    } else if (userRegister.password.length < 6) {
        formIsValid = false;
        errors.password = "La contraseña debe tener al menos 6 caracteres.";
    }

    if (!userRegister.address) {
        formIsValid = false;
        errors.address = "El campo dirección es obligatorio";
    } else if (userRegister.address.length < 5) {
        formIsValid = false;
        errors.address = "La dirección debe tener al menos 5 caracteres.";
    }

    if (!userRegister.phone) {
        formIsValid = false;
        errors.phone = "El campo celular es obligatorio";
    } else if (!/^\d{10}$/.test(userRegister.phone)) {
        formIsValid = false;
        errors.phone = "Por favor ingrese un número de celular válido (10 dígitos).";
    }

    return { formIsValid, errors };
};
