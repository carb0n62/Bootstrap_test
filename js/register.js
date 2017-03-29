/**
 * Created by Romain on 28/03/2017.
 */
$(document) .ready(function () {
    var validator = $("#signup_form").bootstrapValidator({
        feedbackIcons : {
            valid : "glyphicon glyphicon-ok",
            invalid : "glyphicon glyphicon-remove",
            validating : "glyphicon glyphicon-refresh"
        },
        fields: {
            email :{
                message : "Une adresse Email est requise",
                validators : {
                    notEmpty : {
                        message : "Veuillez entrer une adresse Email"
                    },
                    stringLength : {
                        min : 6,
                        max : 35,
                        message : "L'adresse Email doit contenir entre 6 et 35 caractères"
                    },
                    emailAddress : {
                        message : "L'adresse Email est invalide"
                    }
                }
            },
            username : {
                validators : {
                    notEmpty : {
                        message : "Veuilez entrer un nom d'utilisateur"
                    },
                    stringLength : {
                        min : 6,
                        max : 15,
                        message : "Le nom d'utilisateur doit contenir entre 6 et 15 caractères"
                    },
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: "Le nom d'utilisateur ne doit pas contenir de caractères spéciaux"
                    }
                }
            },
            password : {
                validators : {
                    notEmpty : {
                        message : "Veuillez entrer un mot de passe"
                    },
                    stringLength : {
                        min : 8,
                        message : "Le mot de passe doit contenir au moins 8 caractères"
                    },
                    different : {
                        field : "email",
                        message : "Le mot de passe ne doit pas contenir l'adresse Email"
                    }
                }
            },
            confirmpassword : {
                validators : {
                    notEmpty : {
                        message : "Veuillez confirmer votre mot de passe"
                    },
                    identical : {
                        field : "password",
                        message : "Les mots de passe ne correspondent pas"
                    }
                }
            }
        }
    });

    validator.on("success.form.bv", function (e) {
        e.preventDefault();
        $("#signup_form").addClass("hidden");
        $("#registraton_complete").removeClass("hidden");
        $("#registration_complete_btn").removeClass("hidden");
    });
});