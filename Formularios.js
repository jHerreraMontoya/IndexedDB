"use-strict";
//Función correspondiente al formulario de inicio de sesión
function inicioSesion() {
    var login = document.getElementById("buttonSesion");

    // Eliminando todos los hijos de un elemento, en este caso el elemento principal
    while (login.firstChild) {
        login.removeChild(login.firstChild);
    }

    //Pongo un encabezado descriptivo
    var divEncabezado = document.getElementById("encabezado");

    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.hasChildNodes()) {
        divEncabezado.removeChild(divEncabezado.lastChild);
        divEncabezado.removeAttribute("class");
    }

    var principal = document.getElementById("Principal");

    // Eliminando todos los hijos de un elemento, en este caso el elemento principal
    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);
    }

    var divSesion = document.createElement("div");
    divSesion.setAttribute("class", "d-flex align-items-center");
    divSesion.style.minHeight = "800px";
    principal.appendChild(divSesion);

    var contenidoForm = document.createElement("div");
    contenidoForm.style.width = "450px";
    divSesion.appendChild(contenidoForm);

    var imgLogin = document.createElement("img");
    imgLogin.setAttribute("src", "imagenes/login.png");
    imgLogin.setAttribute("alt", "silueta persona");
    imgLogin.setAttribute("class", "img-thumbnail mx-auto d-block");
    contenidoForm.appendChild(imgLogin);

    var form = document.createElement("form");
    form.setAttribute("id", "login");
    form.setAttribute("name", "login");
    contenidoForm.appendChild(form);

    var divFormGroup1 = document.createElement("div");
    divFormGroup1.setAttribute("class", "form-group m-3");
    form.appendChild(divFormGroup1);

    var labelUser = document.createElement("label");
    labelUser.setAttribute("for", "user");
    labelUser.appendChild(document.createTextNode("User"));
    divFormGroup1.appendChild(labelUser);

    var inputUser = document.createElement("input");
    inputUser.setAttribute("type", "text");
    inputUser.setAttribute("class", "form-control");
    inputUser.setAttribute("id", "user");
    inputUser.setAttribute("placeholder", "Enter User");
    inputUser.setAttribute("name", "user");
    divFormGroup1.appendChild(inputUser);

    var divFormGroup2 = document.createElement("div");
    divFormGroup2.setAttribute("class", "form-group m-3");
    form.appendChild(divFormGroup2);

    var labelPass = document.createElement("label");
    labelPass.setAttribute("for", "pass");
    labelPass.appendChild(document.createTextNode("Password"));
    divFormGroup2.appendChild(labelPass);

    var inputPass = document.createElement("input");
    inputPass.setAttribute("type", "password");
    inputPass.setAttribute("class", "form-control");
    inputPass.setAttribute("id", "pass");
    inputPass.setAttribute("placeholder", "Enter Password");
    inputPass.setAttribute("name", "pass");
    divFormGroup2.appendChild(inputPass);

    var divFormGroup3 = document.createElement("div");
    divFormGroup3.setAttribute("class", "form-group mt-5 m-3");
    form.appendChild(divFormGroup3);

    var buttonLogin = document.createElement("button");
    buttonLogin.setAttribute("type", "button");
    buttonLogin.setAttribute("id", "buttonLogin");
    buttonLogin.setAttribute("class", "btn btn-outline-primary btn-block");
    buttonLogin.appendChild(document.createTextNode("LOGIN"));
    buttonLogin.addEventListener("click", singIn);
    divFormGroup3.appendChild(buttonLogin);

    var validar = document.createElement("p");
    validar.setAttribute("id", "validarLogin");
    validar.setAttribute("class", "font-weight-bold text-right");
    form.appendChild(validar);

}
//Función correspondiente al botón de submit del formulario de inicio de sesión
function singIn() {
    var user = document.forms['login']['user'].value; //Cogemos el valor del input del user
    var pass = document.forms['login']['pass'].value; //Cogemos el valor del input del pass

    var validation = document.getElementById("validarLogin");

    // Eliminando todos los hijos de un elemento, en este caso el elemento validation
    while (validation.firstChild) {
        validation.removeChild(validation.firstChild);
    }

    //Comprobamos que tanto usuario como contraseña es el indicado
    if (user === "prueba" && pass === "prueba") {
        document.cookie = "username=prueba";
        validation.style.color = "green";
        validation.appendChild(document.createTextNode("Inicio de sesión correcto."));
        window.location.href = 'http://localhost/IndexedDB'; //Cuando iniciemos sesión la página nos manda a esa localización web
    } else {
        validation.style.color = "red";
        validation.appendChild(document.createTextNode("Usuario/Contraseña incorrectos."));
    }
}

//Función correspondiente al cierre de sesión
function singOut() { //Arreglar esta función al final
    document.cookie = "username=; max-age=0";

    var validation = document.getElementById("validarLogin");

    // Eliminando todos los hijos de un elemento, en este caso el elemento validation
    while (validation.firstChild) {
        validation.removeChild(validation.firstChild);
    }

    var administrar = document.getElementById("administrar");
    administrar.appendChild(document.createTextNode("Cerrando Sesión."));
    administrar.style.color = "green";
    window.location.href = 'http://localhost/IndexedDB'; //Cuando cerremos sesión la página nos manda a esa localización web
}

//Función correspondiente a la cookie para obtenerla
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function gestionForm() {
    var login = document.getElementById("login");

    var user = getCookie("username");

    if (user === "prueba") {
        // Eliminando todos los hijos de un elemento, en este caso el elemento login
        while (login.hasChildNodes()) {
            login.removeChild(login.lastChild);
        }

        login.setAttribute("id", "loginOut");
        var loginOut = document.getElementById("loginOut");
        loginOut.appendChild(document.createTextNode("Sign Out "));

        var iconSignOut = document.createElement("i");
        iconSignOut.setAttribute("class", "fas fa-sign-out-alt");
        login.appendChild(iconSignOut);
        loginOut.addEventListener("click", singOut);

        /*Contenido para gestionar los formularios*/
        var main = document.getElementById("main");
        main.setAttribute("class", "container-fluid");

        var contenidoMain = document.createElement("div");
        contenidoMain.setAttribute("class", "row");
        main.appendChild(contenidoMain);

        var colsContenidoMainA = document.createElement("div");
        colsContenidoMainA.setAttribute("class", "col-md-2 border border-primary rounded m-3 bg-light");
        colsContenidoMainA.style.height = "620px";
        contenidoMain.appendChild(colsContenidoMainA);

        var administrar = document.getElementById("administrar");
        colsContenidoMainA.appendChild(administrar);

        var divAdmin = document.createElement("div");
        divAdmin.setAttribute("id", "accordion");
        administrar.appendChild(divAdmin);

        /*Administrar Categorías*/
        var cardCategories = document.createElement("div");
        cardCategories.setAttribute("class", "card mt-3 mr-3 ml-3");
        divAdmin.appendChild(cardCategories);

        var cardHeaderCategories = document.createElement("div");
        cardHeaderCategories.setAttribute("class", "card-header");
        cardHeaderCategories.setAttribute("id", "headingOne");
        cardCategories.appendChild(cardHeaderCategories);

        var headerCategories = document.createElement("h5");
        headerCategories.setAttribute("class", "mb-0");
        cardHeaderCategories.appendChild(headerCategories);

        var buttonCategories = document.createElement("button");
        buttonCategories.setAttribute("class", "btn btn-link font-weight-bold");
        buttonCategories.style.textDecoration = "none";
        buttonCategories.setAttribute("data-toggle", "collapse");
        buttonCategories.setAttribute("data-target", "#collapseOne");
        buttonCategories.setAttribute("aria-expanded", "true");
        buttonCategories.setAttribute("aria-controls", "collapseOne");
        buttonCategories.appendChild(document.createTextNode("Categorías"));
        cardHeaderCategories.appendChild(buttonCategories);

        //Contenido Administrar Categorías
        var containerCategories = document.createElement("div");
        containerCategories.setAttribute("id", "collapseOne");
        containerCategories.setAttribute("class", "border collapse mr-3 ml-3");
        containerCategories.setAttribute("aria-labelledby", "headingOne");
        containerCategories.setAttribute("data-parent", "#accordion");
        divAdmin.appendChild(containerCategories);

        var bodyCategoriesA = document.createElement("div");
        bodyCategoriesA.setAttribute("class", "card-body");
        containerCategories.appendChild(bodyCategoriesA);

        var linkCategoriesA = document.createElement("a");
        linkCategoriesA.setAttribute("href", "#");
        linkCategoriesA.appendChild(document.createTextNode("Añadir"));
        bodyCategoriesA.appendChild(linkCategoriesA);
        linkCategoriesA.addEventListener("click", formCreateCategory);

        var bodyCategoriesB = document.createElement("div");
        bodyCategoriesB.setAttribute("class", "card-body");
        containerCategories.appendChild(bodyCategoriesB);

        var linkCategoriesB = document.createElement("a");
        linkCategoriesB.setAttribute("href", "#");
        linkCategoriesB.appendChild(document.createTextNode("Modificar"));
        bodyCategoriesB.appendChild(linkCategoriesB);
        linkCategoriesB.addEventListener("click", formUpdateCategory);

        var bodyCategoriesC = document.createElement("div");
        bodyCategoriesC.setAttribute("class", "card-body");
        containerCategories.appendChild(bodyCategoriesC);

        var linkCategoriesC = document.createElement("a");
        linkCategoriesC.setAttribute("href", "#");
        linkCategoriesC.appendChild(document.createTextNode("Eliminar"));
        bodyCategoriesC.appendChild(linkCategoriesC);
        linkCategoriesC.addEventListener("click", formDeleteCategory);
        /*Fin Administrar Categorías*/

        /*Administrar Actores*/
        var cardActors = document.createElement("div");
        cardActors.setAttribute("class", "card mt-3 mr-3 ml-3");
        divAdmin.appendChild(cardActors);

        var cardHeaderActors = document.createElement("div");
        cardHeaderActors.setAttribute("class", "card-header");
        cardHeaderActors.setAttribute("id", "headingTwo");
        cardActors.appendChild(cardHeaderActors);

        var headerActors = document.createElement("h5");
        headerActors.setAttribute("class", "mb-0");
        cardHeaderActors.appendChild(headerActors);

        var buttonActors = document.createElement("button");
        buttonActors.setAttribute("class", "btn btn-link font-weight-bold");
        buttonActors.style.textDecoration = "none";
        buttonActors.setAttribute("data-toggle", "collapse");
        buttonActors.setAttribute("data-target", "#collapseTwo");
        buttonActors.setAttribute("aria-expanded", "true");
        buttonActors.setAttribute("aria-controls", "collapseTwo");
        buttonActors.appendChild(document.createTextNode("Actores"));
        cardHeaderActors.appendChild(buttonActors);

        //Contenido Administrar Actores
        var containerActors = document.createElement("div");
        containerActors.setAttribute("id", "collapseTwo");
        containerActors.setAttribute("class", "border collapse mr-3 ml-3");
        containerActors.setAttribute("aria-labelledby", "headingTwo");
        containerActors.setAttribute("data-parent", "#accordion");
        divAdmin.appendChild(containerActors);

        var bodyActorsA = document.createElement("div");
        bodyActorsA.setAttribute("class", "card-body");
        containerActors.appendChild(bodyActorsA);

        var linkActorsA = document.createElement("a");
        linkActorsA.setAttribute("href", "#");
        linkActorsA.appendChild(document.createTextNode("Añadir"));
        bodyActorsA.appendChild(linkActorsA);
        linkActorsA.addEventListener("click", formCreateActors);

        var bodyActorsB = document.createElement("div");
        bodyActorsB.setAttribute("class", "card-body");
        containerActors.appendChild(bodyActorsB);

        var linkActorsB = document.createElement("a");
        linkActorsB.setAttribute("href", "#");
        linkActorsB.appendChild(document.createTextNode("Modificar"));
        bodyActorsB.appendChild(linkActorsB);
        linkActorsB.addEventListener("click", formUpdateActor);

        var bodyActorsC = document.createElement("div");
        bodyActorsC.setAttribute("class", "card-body");
        containerActors.appendChild(bodyActorsC);

        var linkActorsC = document.createElement("a");
        linkActorsC.setAttribute("href", "#");
        linkActorsC.appendChild(document.createTextNode("Eliminar"));
        bodyActorsC.appendChild(linkActorsC);
        linkActorsC.addEventListener("click", formDeleteActors);
        /*Fin Administrar Actores*/


        /*Administrar Directores*/
        var cardDirectors = document.createElement("div");
        cardDirectors.setAttribute("class", "card mt-3 mr-3 ml-3");
        divAdmin.appendChild(cardDirectors);

        var cardHeaderDirectors = document.createElement("div");
        cardHeaderDirectors.setAttribute("class", "card-header");
        cardHeaderDirectors.setAttribute("id", "headingThree");
        cardDirectors.appendChild(cardHeaderDirectors);

        var headerDirectors = document.createElement("h5");
        headerDirectors.setAttribute("class", "mb-0");
        cardHeaderDirectors.appendChild(headerDirectors);

        var buttonDirectors = document.createElement("button");
        buttonDirectors.setAttribute("class", "btn btn-link font-weight-bold");
        buttonDirectors.style.textDecoration = "none";
        buttonDirectors.setAttribute("data-toggle", "collapse");
        buttonDirectors.setAttribute("data-target", "#collapseThree");
        buttonDirectors.setAttribute("aria-expanded", "true");
        buttonDirectors.setAttribute("aria-controls", "collapseThree");
        buttonDirectors.appendChild(document.createTextNode("Directores"));
        cardHeaderDirectors.appendChild(buttonDirectors);

        //Contenido Administrar Directores
        var containerDirectors = document.createElement("div");
        containerDirectors.setAttribute("id", "collapseThree");
        containerDirectors.setAttribute("class", "border collapse mr-3 ml-3");
        containerDirectors.setAttribute("aria-labelledby", "headingThree");
        containerDirectors.setAttribute("data-parent", "#accordion");
        divAdmin.appendChild(containerDirectors);

        var bodyDirectorsA = document.createElement("div");
        bodyDirectorsA.setAttribute("class", "card-body");
        containerDirectors.appendChild(bodyDirectorsA);

        var linkDirectorsA = document.createElement("a");
        linkDirectorsA.setAttribute("href", "#");
        linkDirectorsA.appendChild(document.createTextNode("Añadir"));
        bodyDirectorsA.appendChild(linkDirectorsA);
        linkDirectorsA.addEventListener("click", formCreateDirector);


        var bodyDirectorsB = document.createElement("div");
        bodyDirectorsB.setAttribute("class", "card-body");
        containerDirectors.appendChild(bodyDirectorsB);

        var linkDirectorsB = document.createElement("a");
        linkDirectorsB.setAttribute("href", "#");
        linkDirectorsB.appendChild(document.createTextNode("Modificar"));
        bodyDirectorsB.appendChild(linkDirectorsB);
        linkDirectorsB.addEventListener("click", formUpdateDirector);

        var bodyDirectorsC = document.createElement("div");
        bodyDirectorsC.setAttribute("class", "card-body");
        containerDirectors.appendChild(bodyDirectorsC);

        var linkDirectorsC = document.createElement("a");
        linkDirectorsC.setAttribute("href", "#");
        linkDirectorsC.appendChild(document.createTextNode("Eliminar"));
        bodyDirectorsC.appendChild(linkDirectorsC);
        linkDirectorsC.addEventListener("click", formDeleteDirectors);
        /*Fin Administrar Directores*/


        /*Administrar Producciones*/
        var cardProductions = document.createElement("div");
        cardProductions.setAttribute("class", "card mt-3 mr-3 ml-3");
        divAdmin.appendChild(cardProductions);

        var cardHeaderProductions = document.createElement("div");
        cardHeaderProductions.setAttribute("class", "card-header");
        cardHeaderProductions.setAttribute("id", "headingFour");
        cardProductions.appendChild(cardHeaderProductions);

        var headerProductions = document.createElement("h5");
        headerProductions.setAttribute("class", "mb-0");
        cardHeaderProductions.appendChild(headerProductions);

        var buttonProductions = document.createElement("button");
        buttonProductions.setAttribute("class", "btn btn-link font-weight-bold");
        buttonProductions.style.textDecoration = "none";
        buttonProductions.setAttribute("data-toggle", "collapse");
        buttonProductions.setAttribute("data-target", "#collapseFour");
        buttonProductions.setAttribute("aria-expanded", "true");
        buttonProductions.setAttribute("aria-controls", "collapseFour");
        buttonProductions.appendChild(document.createTextNode("Producciones"));
        cardHeaderProductions.appendChild(buttonProductions);

        //Contenido Administrar Producciones
        var containerProductions = document.createElement("div");
        containerProductions.setAttribute("id", "collapseFour");
        containerProductions.setAttribute("class", "border collapse mr-3 ml-3");
        containerProductions.setAttribute("aria-labelledby", "headingFour");
        containerProductions.setAttribute("data-parent", "#accordion");
        divAdmin.appendChild(containerProductions);

        var bodyProductionsA = document.createElement("div");
        bodyProductionsA.setAttribute("class", "card-body");
        containerProductions.appendChild(bodyProductionsA);

        var linkProductionsA = document.createElement("a");
        linkProductionsA.setAttribute("href", "#");
        linkProductionsA.appendChild(document.createTextNode("Añadir"));
        bodyProductionsA.appendChild(linkProductionsA);
        linkProductionsA.addEventListener("click", formCreateProduction);

        var bodyProductionsB = document.createElement("div");
        bodyProductionsB.setAttribute("class", "card-body");
        containerProductions.appendChild(bodyProductionsB);

        var linkProductionsB = document.createElement("a");
        linkProductionsB.setAttribute("href", "#");
        linkProductionsB.appendChild(document.createTextNode("Eliminar"));
        bodyProductionsB.appendChild(linkProductionsB);
        linkProductionsB.addEventListener("click", formDeleteProduction);
        /*Fin Administrar Producciones*/

        var colsContenidoMainB = document.createElement("div");
        colsContenidoMainB.setAttribute("class", "col-md-9 border border-primary rounded m-3 bg-light");
        contenidoMain.appendChild(colsContenidoMainB);

        var encabezado = document.getElementById("encabezado");
        colsContenidoMainB.appendChild(encabezado);

        var principal = document.getElementById("Principal");
        colsContenidoMainB.appendChild(principal);

    }

}

//Código que hace referencia a eliminar categorías
function formDeleteCategory() {
    function deleteCategory() {
        var selectCat = document.forms["delete-category"]["deleteCategory"];
        var selectValueCat = selectCat.value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (selectValueCat === "") {
            verificacion.appendChild(document.createTextNode("Error al eliminar la categoría"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var categories = VSystem.categories;
            var category = categories.next();

            while (category.done !== true) {
                var categoryName = category.value.name;
                if (selectValueCat === categoryName) {

                    //Eliminar las categorías del VideoSystem
                    VSystem.removeCategory(category.value);

                    //Eliminar las categorías de la Base de Datos
                    DelDataBase("Categories", categoryName);
                    DelDataBase("AsignarCategories", categoryName);

                    var submenuCat = document.getElementById("submenu");

                    while (submenuCat.hasChildNodes()) {
                        submenuCat.removeChild(submenuCat.lastChild);
                    }
                    categoriesMenuPopulate();
                }
                category = categories.next();
            }

        }
        selectCat.options[selectCat.options.selectedIndex].remove();
        verificacion.appendChild(document.createTextNode("Categoría eliminada con éxito"));
        verificacion.style.color = "green";
    }


    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Eliminar Categoría"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    divEncabezadoB.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-12 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formDelCat = document.createElement("form");
    formDelCat.setAttribute("class", "form-inline");
    formDelCat.setAttribute("id", "delete-category");
    formDelCat.setAttribute("name", "delete-category");
    divForms.appendChild(formDelCat);

    var formGroupDelCatA = document.createElement("div");
    formGroupDelCatA.setAttribute("class", "form-group");
    formDelCat.appendChild(formGroupDelCatA);

    var labelCategory = document.createElement("label");
    labelCategory.setAttribute("for", "deleteCategory");
    labelCategory.setAttribute("class", "mr-sm-4 font-weight-bold");
    labelCategory.appendChild(document.createTextNode("Seleccione una categoría "));
    formGroupDelCatA.appendChild(labelCategory);

    var selectCategory = document.createElement("select");
    selectCategory.setAttribute("class", "form-control mr-sm-4 mb-sm-0");
    selectCategory.setAttribute("id", "deleteCategory");
    formGroupDelCatA.appendChild(selectCategory);

    var VSystem = VideoSystem.getInstance();
    var categories = VSystem.categories;
    var category = categories.next();

    while (category.done !== true) {
        var categoryName = category.value.name;
        var optionCategory = document.createElement("option");
        optionCategory.setAttribute("value", categoryName);
        optionCategory.appendChild(document.createTextNode(categoryName));
        selectCategory.appendChild(optionCategory);

        category = categories.next();
    }

    var formGroupDelCatB = document.createElement("div");
    formGroupDelCatB.setAttribute("class", "form-group");
    formDelCat.appendChild(formGroupDelCatB);

    var divButtonDelCat = document.createElement("div");
    divButtonDelCat.setAttribute("class", "mr-sm-4 mb-sm-0");
    formGroupDelCatB.appendChild(divButtonDelCat);

    var buttonDelCat = document.createElement("button");
    buttonDelCat.setAttribute("type", "button");
    buttonDelCat.setAttribute("class", "btn btn-outline-primary");
    buttonDelCat.appendChild(document.createTextNode("Eliminar"));
    divButtonDelCat.appendChild(buttonDelCat);
    buttonDelCat.addEventListener("click", deleteCategory);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}

//Código que hace referencia a eliminar Actores
function formDeleteActors() {

    function deleteActors() {
        var selectAct = document.forms["delete-actors"]["deleteActors"];
        var selectValueAct = selectAct.value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }


        if (selectValueAct === "") {
            verificacion.appendChild(document.createTextNode("Error al eliminar la Actriz/or"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var actors = VSystem.actors;
            var actor = actors.next();

            while (actor.done !== true) {
                var actorsNameApe = actor.value.name + " " + actor.value.lastname1;
                if (selectValueAct === actorsNameApe) {

                    //Eliminar actriz/or del VideoSystem
                    VSystem.removeActor(actor.value);

                    //Eliminar actriz/or de la Base de Datos
                    DelDataBase("Actors", actor.value.lastname1);
                    DelDataBase("AsignarActors", actor.value.lastname1);
                }
                actor = actors.next();
            }

        }
        selectAct.options[selectAct.options.selectedIndex].remove();
        verificacion.appendChild(document.createTextNode("Actriz/or eliminada/o con éxito"));
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Eliminar Actriz/or"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    divEncabezadoB.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-12 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formDelAct = document.createElement("form");
    formDelAct.setAttribute("class", "form-inline");
    formDelAct.setAttribute("id", "delete-actors");
    formDelAct.setAttribute("name", "delete-actors");
    divForms.appendChild(formDelAct);

    var formGroupDelActA = document.createElement("div");
    formGroupDelActA.setAttribute("class", "form-group");
    formDelAct.appendChild(formGroupDelActA);

    var labelActors = document.createElement("label");
    labelActors.setAttribute("for", "deleteActors");
    labelActors.setAttribute("class", "mr-sm-4 font-weight-bold");
    labelActors.appendChild(document.createTextNode("Seleccione una Actriz/Actor "));
    formGroupDelActA.appendChild(labelActors);

    var selectActors = document.createElement("select");
    selectActors.setAttribute("class", "form-control mr-sm-4 mb-sm-0");
    selectActors.setAttribute("id", "deleteActors");
    formGroupDelActA.appendChild(selectActors);

    var VSystem = VideoSystem.getInstance();
    var actors = VSystem.actors;
    var actor = actors.next();

    while (actor.done !== true) {
        var actorsNameApe = actor.value.name + " " + actor.value.lastname1;
        var optionActors = document.createElement("option");
        optionActors.setAttribute("value", actorsNameApe);
        optionActors.appendChild(document.createTextNode(actorsNameApe));
        selectActors.appendChild(optionActors);

        actor = actors.next();
    }
    var formGroupDelActB = document.createElement("div");
    formGroupDelActB.setAttribute("class", "form-group");
    formDelAct.appendChild(formGroupDelActB);

    var divButtonDelAct = document.createElement("div");
    divButtonDelAct.setAttribute("class", "mr-sm-4 mb-sm-0");
    formGroupDelActB.appendChild(divButtonDelAct);

    var buttonDelAct = document.createElement("button");
    buttonDelAct.setAttribute("type", "button");
    buttonDelAct.setAttribute("class", "btn btn-outline-primary");
    buttonDelAct.appendChild(document.createTextNode("Eliminar"));
    divButtonDelAct.appendChild(buttonDelAct);
    buttonDelAct.addEventListener("click", deleteActors);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);



}

//Código que hace referencia a eliminar Directores
function formDeleteDirectors() {
    function deleteDirectors() {
        var selectDirec = document.forms["delete-directors"]["deleteDirectors"];
        var selectValueDirec = selectDirec.value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (selectValueDirec === "") {
            verificacion.appendChild(document.createTextNode("Error al eliminar la Director/ora"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var directors = VSystem.directors;
            var director = directors.next();

            while (director.done !== true) {
                var directorsNameApe = director.value.name + " " + director.value.lastname1;
                if (selectValueDirec === directorsNameApe) {

                    //Eliminar directora/or del VideoSystem
                    VSystem.removeDirector(director.value);

                    //Eliminar directora/or de la Base de Datos
                    DelDataBase("Directors", director.value.lastname1);
                    DelDataBase("AsignarDirectors", director.value.lastname1);
                }
                director = directors.next();
            }

        }
        selectDirec.options[selectDirec.options.selectedIndex].remove();
        verificacion.appendChild(document.createTextNode("Director/ora eliminado/a con éxito"));
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Eliminar Directora/or"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    divEncabezadoB.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-12 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formDelDirect = document.createElement("form");
    formDelDirect.setAttribute("class", "form-inline");
    formDelDirect.setAttribute("id", "delete-directors");
    formDelDirect.setAttribute("name", "delete-directors");
    divForms.appendChild(formDelDirect);

    var formGroupDelDirectA = document.createElement("div");
    formGroupDelDirectA.setAttribute("class", "form-group");
    formDelDirect.appendChild(formGroupDelDirectA);

    var labelDirectors = document.createElement("label");
    labelDirectors.setAttribute("for", "deleteDirectors");
    labelDirectors.setAttribute("class", "mr-sm-4 font-weight-bold");
    labelDirectors.appendChild(document.createTextNode("Seleccione una Directegoría "));
    formGroupDelDirectA.appendChild(labelDirectors);

    var selectDirectors = document.createElement("select");
    selectDirectors.setAttribute("class", "form-control mr-sm-4 mb-sm-0");
    selectDirectors.setAttribute("id", "deleteDirectors");
    formGroupDelDirectA.appendChild(selectDirectors);

    var VSystem = VideoSystem.getInstance();
    var directors = VSystem.directors;
    var director = directors.next();


    while (director.done !== true) {
        var directorsNameApe = director.value.name + " " + director.value.lastname1;
        var optionDirectors = document.createElement("option");
        optionDirectors.setAttribute("value", directorsNameApe);
        optionDirectors.appendChild(document.createTextNode(directorsNameApe));
        selectDirectors.appendChild(optionDirectors);

        director = directors.next();
    }
    var formGroupDelDirectB = document.createElement("div");
    formGroupDelDirectB.setAttribute("class", "form-group");
    formDelDirect.appendChild(formGroupDelDirectB);

    var divButtonDelDirect = document.createElement("div");
    divButtonDelDirect.setAttribute("class", "mr-sm-4 mb-sm-0");
    formGroupDelDirectB.appendChild(divButtonDelDirect);

    var buttonDelDirect = document.createElement("button");
    buttonDelDirect.setAttribute("type", "button");
    buttonDelDirect.setAttribute("class", "btn btn-outline-primary");
    buttonDelDirect.appendChild(document.createTextNode("Eliminar"));
    divButtonDelDirect.appendChild(buttonDelDirect);
    buttonDelDirect.addEventListener("click", deleteDirectors);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);




}

//Código que hace referencia a eliminar Producciones
function formDeleteProduction() {
    function deleteProduction() {
        var selectProduc = document.forms["delete-production"]["deleteProduc"];
        var selectValueProduc = selectProduc.value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (selectValueProduc == "") {
            verificacion.appendChild(document.createTextNode("Error al eliminar la Producción."));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var producciones = VSystem.productions;
            var produccion =  producciones.next();

            while (produccion.done !== true) {
                if (produccion.value.title === selectValueProduc) {
                    var delProd = produccion.value;

                    //Recorro las categorías y deasigno la production que pertenece a la categoría
                    var categories = VSystem.categories;
                    var category = categories.next();

                    while (category.done !== true) {
                        var foundPro = false;
                        var productions = VSystem.getProductionsCategory(category.value);
                        var production = productions.next();

                        while ((production.done !== true) && (!foundPro)) {
                            let productionTitle = production.value.title;
                            if (productionTitle === selectValueProduc) {
                                VSystem.deassignCategory(category.value, delProd);
                                deassingStore("AsignarCategories",category.value.name,delProd.title);
                            }
                            production = productions.next();
                        }
                        category = categories.next();
                    }

                    /*var elenco = VSystem.getCast(production.value);
                    var actor = elenco.next();

                    while (actor.done !== true) {
                        VSystem.deassignActor(actor.value,production.value);
                        actor = elenco.next();
                    }*/


                    //Recorro los directores y deasigno la production que pertenece al director/es
                    var directors = VSystem.directors;
                    var director = directors.next();

                    while (director.done !== true) {
                        var productions = VSystem.getProductionsDirector(director.value);
                        var production = productions.next();

                        while (production.done !== true) {
                            let productionTitle = production.value.title;
                            if (productionTitle === selectValueProduc) {
                                VSystem.deassignDirector(director.value, delProd);
                                //deassingStore("AsignarDirectors",director.value.name,delProd.title);
                            }
                            production = productions.next();
                        }
                        director = directors.next();
                    }
                    DelDataBase("Productions",delProd.title);
                }

                produccion = producciones.next();
            }

        }
        //VSystem.removeProduction(delProd);

        selectProduc.options[selectProduc.options.selectedIndex].remove();
        verificacion.appendChild(document.createTextNode("Producción eliminada con éxito."));
        verificacion.style.color = "green";
    }



    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Eliminar Producción"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    divEncabezadoB.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-12 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formDelProduct = document.createElement("form");
    formDelProduct.setAttribute("class", "form-inline");
    formDelProduct.setAttribute("id", "delete-production");
    formDelProduct.setAttribute("name", "delete-production");
    divForms.appendChild(formDelProduct);

    var formGroupDelProductA = document.createElement("div");
    formGroupDelProductA.setAttribute("class", "form-group");
    formDelProduct.appendChild(formGroupDelProductA);

    var labelProductions = document.createElement("label");
    labelProductions.setAttribute("for", "deleteProduction");
    labelProductions.setAttribute("class", "mr-sm-4 font-weight-bold");
    labelProductions.appendChild(document.createTextNode("Seleccione una Producción "));
    formGroupDelProductA.appendChild(labelProductions);

    var selectProductions = document.createElement("select");
    selectProductions.setAttribute("class", "form-control mr-sm-4 mb-sm-0");
    selectProductions.setAttribute("id", "deleteProduction");
    selectProductions.setAttribute("name", "deleteProduc");
    formGroupDelProductA.appendChild(selectProductions);

    var VSystem = VideoSystem.getInstance();
    var productions = VSystem.productions;
    var production = productions.next();


    while (production.done !== true) {
        var productionTitle = production.value.title;
        var optionProductions = document.createElement("option");
        optionProductions.setAttribute("value", productionTitle);
        optionProductions.appendChild(document.createTextNode(productionTitle));
        selectProductions.appendChild(optionProductions);

        production = productions.next();
    }
    var formGroupDelProductB = document.createElement("div");
    formGroupDelProductB.setAttribute("class", "form-group");
    formDelProduct.appendChild(formGroupDelProductB);

    var divButtonDelProduct = document.createElement("div");
    divButtonDelProduct.setAttribute("class", "mr-sm-4 mb-sm-0");
    formGroupDelProductB.appendChild(divButtonDelProduct);

    var buttonDelProduct = document.createElement("button");
    buttonDelProduct.setAttribute("type", "button");
    buttonDelProduct.setAttribute("class", "btn btn-outline-primary");
    buttonDelProduct.appendChild(document.createTextNode("Eliminar"));
    divButtonDelProduct.appendChild(buttonDelProduct);
    buttonDelProduct.addEventListener("click", deleteProduction);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);



}





//Código que hace referencia Añadir Categorías
function formCreateCategory() {
    function newCategory() {
        var VSystem = VideoSystem.getInstance();
        var nameCategory = document.forms["add-category"]["nameCategory"].value;
        var imgCategory = document.forms["add-category"]["imgCategory"].value;
        var imgPart = imgCategory.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (nameCategory == "" || imgCategory == "") {
            verificacion.appendChild(document.createTextNode("Error al introducir la categoría"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var nuevaCategory = new Category(nameCategory);
            nuevaCategory.imgCategory = "imagenes/categorias/" + imgLoc;

            //Añadir nueva categoría al Video System
            VSystem.addCategory(nuevaCategory);

            //Añadir nueva categoría a la base de datos
            addData("Categories", nuevaCategory);
            addDataAssign("AsignarCategories", { category: nuevaCategory.name, Productions: [] });

            
            /*Limpio los nodos hijos del submenu categorias que se vuelva a pintar
            con la categoría añadida*/

            var submenuCat = document.getElementById("submenu");

            //Limpio los nodos hijos
            while (submenuCat.hasChildNodes()) {
                submenuCat.removeChild(submenuCat.lastChild);
            }

            //Vuelvo a llamar a la función para pintar el menú de nuevo
            categoriesMenuPopulate();
        }
        document.forms["add-category"].reset();
        verificacion.appendChild(document.createTextNode("Categoría Añadida Correctamente"));
        verificacion.style.color = "green";
    }


    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Añadir Categorías"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    divEncabezadoB.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formAddCat = document.createElement("form");
    formAddCat.setAttribute("id", "add-category");
    formAddCat.setAttribute("name", "add-category");
    divForms.appendChild(formAddCat);

    var formGroupAddCatA = document.createElement("div");
    formGroupAddCatA.setAttribute("class", "form-group row");
    formAddCat.appendChild(formGroupAddCatA);

    var labelCategory = document.createElement("label");
    labelCategory.setAttribute("for", "nameCategory");
    labelCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelCategory.appendChild(document.createTextNode("Introduzca categoría* "));
    formGroupAddCatA.appendChild(labelCategory);

    var divInputCategory = document.createElement("div");
    divInputCategory.setAttribute("class", "col-sm-8");
    formGroupAddCatA.appendChild(divInputCategory);

    var inputCategory = document.createElement("input");
    inputCategory.setAttribute("type", "text");
    inputCategory.setAttribute("class", "form-control");
    inputCategory.setAttribute("id", "nameCategory");
    inputCategory.setAttribute("placeholder", "Nombre Categoría");
    divInputCategory.appendChild(inputCategory);

    var formGroupAddCatB = document.createElement("div");
    formGroupAddCatB.setAttribute("class", "form-group row");
    formAddCat.appendChild(formGroupAddCatB);

    var labelImgCategory = document.createElement("label");
    labelImgCategory.setAttribute("for", "imgCategory");
    labelImgCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelImgCategory.appendChild(document.createTextNode("Imagen* "));
    formGroupAddCatB.appendChild(labelImgCategory);

    var divInputImgCategory = document.createElement("div");
    divInputImgCategory.setAttribute("class", "col-sm-8");
    formGroupAddCatB.appendChild(divInputImgCategory);

    var inputImgCategory = document.createElement("input");
    inputImgCategory.setAttribute("type", "file");
    inputImgCategory.setAttribute("class", "form-control-file");
    inputImgCategory.setAttribute("id", "imgCategory");
    divInputImgCategory.appendChild(inputImgCategory);

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    formAddCat.appendChild(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    divNotaAsterisco.appendChild(notaAsterisco);

    var formGroupAddCatC = document.createElement("div");
    formGroupAddCatC.setAttribute("class", "form-group row");
    formAddCat.appendChild(formGroupAddCatC);

    var divButtonAddCat = document.createElement("div");
    divButtonAddCat.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupAddCatC.appendChild(divButtonAddCat);

    var buttonAddCat = document.createElement("button");
    buttonAddCat.setAttribute("type", "button");
    buttonAddCat.setAttribute("class", "btn btn-outline-primary");
    buttonAddCat.appendChild(document.createTextNode("Añadir"));
    divButtonAddCat.appendChild(buttonAddCat);
    buttonAddCat.addEventListener("click", newCategory);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);


}
//Fin del CreateCategory


//Código que hace referencia añadir Actores
function formCreateActors() {
    function newActor() {
        var nameActor = document.forms["add-actor"]["nameActor"].value;
        var apellidoActor = document.forms["add-actor"]["apellidoActor"].value;
        var bornActor = document.forms["add-actor"]["bornActor"].value;
        var imgActor = document.forms["add-actor"]["imgActor"].value;
        var imgPart = imgActor.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];
        var prodRadio = $('input[name=producActor]:checked', '#add-actor').val();

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }


        if (nameActor == "" || apellidoActor == "" || bornActor == "" || imgActor == "") {
            verificacion.appendChild(document.createTextNode("Error al introducir la Actriz/or"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var productions = VSystem.productions;
            var production = productions.next();
            var foundPro = false;

            while ((production.done !== true) && (!foundPro)) {

                var productionTitle = production.value.title;

                if (productionTitle === prodRadio) {

                    var prodAdd = production.value;

                    foundPro = true;

                }

                production = productions.next()
            }

            var nuevoActor = new Person(nameActor, apellidoActor, bornActor, imgActor);
            nuevoActor.picture = "imagenes/actores/" + imgLoc;

            //Añadir nueva/o actriz/or al VideoSystem
            VSystem.addActor(nuevoActor);
            //Añadir nueva/o actriz/or a la base de datos junto con su producción/es
            addData("Actors", nuevoActor);

            if (prodRadio != undefined) {
                //Asignamos produccion a la nueva/o actriz/or al VideoSystem
                VSystem.assignActor(nuevoActor, prodAdd);
                //Asignamos produccion a la nueva/o actriz/or al VideoSystem
                addDataAssign("AsignarActors", { actor: nuevoActor.lastname1, Productions: [{ title: prodAdd.title }] });
            }


        }
        document.forms["add-actor"].reset();
        verificacion.appendChild(document.createTextNode("Actriz/or Añadida/o Correctamente"));
        verificacion.style.color = "green";

    }


    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Añadir Actores"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    divEncabezadoB.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-4");
    divForms.style.height = "800px";
    principal.appendChild(divForms);

    var formAddActors = document.createElement("form");
    formAddActors.setAttribute("id", "add-actor");
    formAddActors.setAttribute("name", "add-actor");
    divForms.appendChild(formAddActors);

    var formGroupAddActA = document.createElement("div");
    formGroupAddActA.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActA);

    var labelActorName = document.createElement("label");
    labelActorName.setAttribute("for", "nameActor");
    labelActorName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelActorName.appendChild(document.createTextNode("Nombre* "));
    formGroupAddActA.appendChild(labelActorName);

    var divInputActName = document.createElement("div");
    divInputActName.setAttribute("class", "col-sm-8");
    formGroupAddActA.appendChild(divInputActName);

    var inputActName = document.createElement("input");
    inputActName.setAttribute("type", "text");
    inputActName.setAttribute("class", "form-control");
    inputActName.setAttribute("id", "nameActor");
    inputActName.setAttribute("placeholder", "Nombre Actriz/or");
    divInputActName.appendChild(inputActName);

    var formGroupAddActB = document.createElement("div");
    formGroupAddActB.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActB);

    var labelApeActor = document.createElement("label");
    labelApeActor.setAttribute("for", "apellidoActor");
    labelApeActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelApeActor.appendChild(document.createTextNode("Primer Apellido* "));
    formGroupAddActB.appendChild(labelApeActor);

    var divInputApeActor = document.createElement("div");
    divInputApeActor.setAttribute("class", "col-sm-8");
    formGroupAddActB.appendChild(divInputApeActor);

    var inputApeActor = document.createElement("input");
    inputApeActor.setAttribute("type", "text");
    inputApeActor.setAttribute("class", "form-control");
    inputApeActor.setAttribute("id", "apellidoActor");
    inputApeActor.setAttribute("placeholder", "Primer Apellido")
    divInputApeActor.appendChild(inputApeActor);

    var formGroupAddActC = document.createElement("div");
    formGroupAddActC.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActC);

    var labelBornActor = document.createElement("label");
    labelBornActor.setAttribute("for", "bornActor");
    labelBornActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelBornActor.appendChild(document.createTextNode("Fecha Nacimiento* "));
    formGroupAddActC.appendChild(labelBornActor);

    var divInputBornActor = document.createElement("div");
    divInputBornActor.setAttribute("class", "col-sm-8");
    formGroupAddActC.appendChild(divInputBornActor);

    var inputBornActor = document.createElement("input");
    inputBornActor.setAttribute("type", "text");
    inputBornActor.setAttribute("class", "form-control");
    inputBornActor.setAttribute("id", "bornActor");
    inputBornActor.setAttribute("placeholder", "MM/DD/YYYY");
    divInputBornActor.appendChild(inputBornActor);

    var formGroupAddActD = document.createElement("div");
    formGroupAddActD.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActD);

    var labelImgActor = document.createElement("label");
    labelImgActor.setAttribute("for", "imgActor");
    labelImgActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelImgActor.appendChild(document.createTextNode("Imagen* "));
    formGroupAddActD.appendChild(labelImgActor);

    var divInputImgActor = document.createElement("div");
    divInputImgActor.setAttribute("class", "col-sm-8");
    formGroupAddActD.appendChild(divInputImgActor);

    var inputImgActor = document.createElement("input");
    inputImgActor.setAttribute("type", "file");
    inputImgActor.setAttribute("class", "form-control-file");
    inputImgActor.setAttribute("id", "imgActor");
    divInputImgActor.appendChild(inputImgActor);

    var formGroupAddActE = document.createElement("div");
    formGroupAddActE.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActE);

    var labelProducActor = document.createElement("label");
    labelProducActor.setAttribute("for", "producActor");
    labelProducActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelProducActor.appendChild(document.createTextNode("Producción/es "));
    formGroupAddActE.appendChild(labelProducActor);

    var divChecksProducActor = document.createElement("div");
    divChecksProducActor.setAttribute("class", "col-sm-8");
    formGroupAddActE.appendChild(divChecksProducActor);

    var VSystem = VideoSystem.getInstance();
    var productions = VSystem.productions;
    var production = productions.next();

    while (production.done !== true) {
        var divChecks = document.createElement("div");
        divChecks.setAttribute("class", "form-check");
        divChecksProducActor.appendChild(divChecks);

        var inputChecks = document.createElement("input");
        inputChecks.setAttribute("type", "radio");
        inputChecks.setAttribute("class", "form-check-input producActor");
        inputChecks.setAttribute("id", "producActor");
        inputChecks.setAttribute("name", "producActor");
        inputChecks.setAttribute("value", production.value.title);
        divChecks.appendChild(inputChecks);

        var labelChecks = document.createElement("label");
        labelChecks.setAttribute("class", "form-check-label");
        labelChecks.setAttribute("for", "producActor");
        labelChecks.appendChild(document.createTextNode(production.value.title));
        divChecks.appendChild(labelChecks);

        production = productions.next();
    }
    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    formAddActors.appendChild(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    divNotaAsterisco.appendChild(notaAsterisco);

    var formGroupAddActF = document.createElement("div");
    formGroupAddActF.setAttribute("class", "form-group row");
    formAddActors.appendChild(formGroupAddActF);

    var divButtonAddAct = document.createElement("div");
    divButtonAddAct.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupAddActF.appendChild(divButtonAddAct);

    var buttonAddAct = document.createElement("button");
    buttonAddAct.setAttribute("type", "button");
    buttonAddAct.setAttribute("class", "btn btn-outline-primary");
    buttonAddAct.appendChild(document.createTextNode("Añadir"));
    divButtonAddAct.appendChild(buttonAddAct);
    buttonAddAct.addEventListener("click", newActor);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);


}
//Fin del CreateActors


//Código que hace referencia añadir Directores
function formCreateDirector() {
    function newDirector() {
        var nameDirector = document.forms["add-director"]["nameDirector"].value;
        var apellidoDirector = document.forms["add-director"]["apellidoDirector"].value;
        var bornDirector = document.forms["add-director"]["bornDirector"].value;
        var imgDirector = document.forms["add-director"]["imgDirector"].value;
        var imgPart = imgDirector.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];
        var prodRadio = $('input[name=producDirector]:checked', '#add-director').val();

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }


        if (nameDirector == "" || apellidoDirector == "" || bornDirector == "" || imgDirector == "") {
            verificacion.appendChild(document.createTextNode("Error al introducir la Directora/or"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var foundPro = false;
            var productions = VSystem.productions;
            var production = productions.next();

            while ((production.done !== true) && (!foundPro)) {
                var productionTitle = production.value.title;
                if (productionTitle === prodRadio) {
                    var prodAdd = production.value;
                    foundPro = true;
                }
                production = productions.next();
            }

            var nuevoDirector = new Person(nameDirector, apellidoDirector, bornDirector);
            nuevoDirector.picture = "imagenes/directores/" + imgLoc;

            //Añadir nueva/o directora/or al VideoSystem
            VSystem.addDirector(nuevoDirector);
            addData("Directors", nuevoDirector);

            if (prodRadio != undefined) {
                VSystem.assignDirector(nuevoDirector, prodAdd);
                addDataAssign("AsignarDirectors", { director: apellidoDirector, Productions: [prodAdd.title] });
            }


        }
        document.forms["add-director"].reset();
        verificacion.appendChild(document.createTextNode("Directora/or Añadida/o Correctamente"));
        verificacion.style.color = "green";
    }


    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Añadir Directores"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    divEncabezadoB.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-4");
    divForms.style.height = "800px";
    principal.appendChild(divForms);

    var formAddDirectors = document.createElement("form");
    formAddDirectors.setAttribute("id", "add-director");
    formAddDirectors.setAttribute("name", "add-director");
    divForms.appendChild(formAddDirectors);

    var formGroupAddDirectA = document.createElement("div");
    formGroupAddDirectA.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectA);

    var labelDirectorName = document.createElement("label");
    labelDirectorName.setAttribute("for", "nameDirector");
    labelDirectorName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelDirectorName.appendChild(document.createTextNode("Nombre* "));
    formGroupAddDirectA.appendChild(labelDirectorName);

    var divInputDirectName = document.createElement("div");
    divInputDirectName.setAttribute("class", "col-sm-8");
    formGroupAddDirectA.appendChild(divInputDirectName);

    var inputDirectName = document.createElement("input");
    inputDirectName.setAttribute("type", "text");
    inputDirectName.setAttribute("class", "form-control");
    inputDirectName.setAttribute("id", "nameDirector");
    inputDirectName.setAttribute("placeholder", "Nombre Directora/or");
    divInputDirectName.appendChild(inputDirectName);

    var formGroupAddDirectB = document.createElement("div");
    formGroupAddDirectB.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectB);

    var labelApeDirector = document.createElement("label");
    labelApeDirector.setAttribute("for", "apellidoDirector");
    labelApeDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelApeDirector.appendChild(document.createTextNode("Primer Apellido* "));
    formGroupAddDirectB.appendChild(labelApeDirector);

    var divInputApeDirect = document.createElement("div");
    divInputApeDirect.setAttribute("class", "col-sm-8");
    formGroupAddDirectB.appendChild(divInputApeDirect);

    var inputApeDirect = document.createElement("input");
    inputApeDirect.setAttribute("type", "text");
    inputApeDirect.setAttribute("class", "form-control");
    inputApeDirect.setAttribute("id", "apellidoDirector");
    inputApeDirect.setAttribute("placeholder", "Primer Apellido");
    divInputApeDirect.appendChild(inputApeDirect);

    var formGroupAddDirectC = document.createElement("div");
    formGroupAddDirectC.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectC);

    var labelBornDirector = document.createElement("label");
    labelBornDirector.setAttribute("for", "bornDirector");
    labelBornDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelBornDirector.appendChild(document.createTextNode("Fecha Nacimiento* "));
    formGroupAddDirectC.appendChild(labelBornDirector);

    var divInputBornDirect = document.createElement("div");
    divInputBornDirect.setAttribute("class", "col-sm-8");
    formGroupAddDirectC.appendChild(divInputBornDirect);

    var inputBornDirect = document.createElement("input");
    inputBornDirect.setAttribute("type", "text");
    inputBornDirect.setAttribute("class", "form-control");
    inputBornDirect.setAttribute("id", "bornDirector");
    inputBornDirect.setAttribute("placeholder", "MM/DD/YYYY");
    divInputBornDirect.appendChild(inputBornDirect);

    var formGroupAddDirectD = document.createElement("div");
    formGroupAddDirectD.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectD);

    var labelImgDirect = document.createElement("label");
    labelImgDirect.setAttribute("for", "imgDirector");
    labelImgDirect.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelImgDirect.appendChild(document.createTextNode("Imagen "));
    formGroupAddDirectD.appendChild(labelImgDirect);

    var divInputImgDirect = document.createElement("div");
    divInputImgDirect.setAttribute("class", "col-sm-8");
    formGroupAddDirectD.appendChild(divInputImgDirect);

    var inputImgDirect = document.createElement("input");
    inputImgDirect.setAttribute("type", "file");
    inputImgDirect.setAttribute("class", "form-control-file");
    inputImgDirect.setAttribute("id", "imgDirector");
    divInputImgDirect.appendChild(inputImgDirect);

    var formGroupAddDirectE = document.createElement("div");
    formGroupAddDirectE.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectE);

    var labelProducDirect = document.createElement("label");
    labelProducDirect.setAttribute("for", "producDirector");
    labelProducDirect.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelProducDirect.appendChild(document.createTextNode("Producción/es "));
    formGroupAddDirectE.appendChild(labelProducDirect);

    var divChecksProducDirect = document.createElement("div");
    divChecksProducDirect.setAttribute("class", "col-sm-8");
    formGroupAddDirectE.appendChild(divChecksProducDirect);

    var VSystem = VideoSystem.getInstance();
    var productions = VSystem.productions;
    var production = productions.next();

    while (production.done !== true) {
        var productionTitle = production.value.title;
        var divChecks = document.createElement("div");
        divChecks.setAttribute("class", "form-check");
        divChecksProducDirect.appendChild(divChecks);

        var inputChecks = document.createElement("input");
        inputChecks.setAttribute("type", "radio");
        inputChecks.setAttribute("class", "form-check-input producDirector");
        inputChecks.setAttribute("id", "producDirector");
        inputChecks.setAttribute("name", "producDirector");
        inputChecks.setAttribute("value", productionTitle);
        divChecks.appendChild(inputChecks);

        var labelChecks = document.createElement("label");
        labelChecks.setAttribute("class", "form-check-label");
        labelChecks.setAttribute("for", "producDirector");
        labelChecks.appendChild(document.createTextNode(productionTitle));
        divChecks.appendChild(labelChecks);

        production = productions.next();
    }
    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    formAddDirectors.appendChild(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    divNotaAsterisco.appendChild(notaAsterisco);

    var formGroupAddDirectF = document.createElement("div");
    formGroupAddDirectF.setAttribute("class", "form-group row");
    formAddDirectors.appendChild(formGroupAddDirectF);

    var divButtonAddDirect = document.createElement("div");
    divButtonAddDirect.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupAddDirectF.appendChild(divButtonAddDirect);

    var buttonAddDirect = document.createElement("button");
    buttonAddDirect.setAttribute("type", "button");
    buttonAddDirect.setAttribute("class", "btn btn-outline-primary");
    buttonAddDirect.appendChild(document.createTextNode("Añadir"));
    divButtonAddDirect.appendChild(buttonAddDirect);
    buttonAddDirect.addEventListener("click", newDirector);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}
//Fin del CreateDirector

//Código que hace referencia añadir producción
function formCreateProduction() {
    function newProduction() {
        var titleProduction = document.forms["add-production"]["titleProduction"].value;
        var publiProduction = document.forms["add-production"]["publiProduction"].value;
        var imgProduction = document.forms["add-production"]["imgProduction"].value;
        var imgPart = imgProduction.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        //Select de categorías
        var selectCat = document.forms["add-production"]["productionCategory"];
        var idSelectCat = selectCat.value;

        if (titleProduction == "" || publiProduction == "" || imgProduction == "") {
            verificacion.appendChild(document.createTextNode("Error al añadir la producción"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var tipo = document.forms[0];
            var long = tipo.length;
            for (var t = 0; t < long; t++) {
                if (tipo[t].checked) {
                    if (tipo[t].value === "movie") {
                        var nuevaMovie = new Movie(titleProduction, publiProduction);
                        nuevaMovie.image = "imagenes/peliculas_series/" + imgLoc;

                        //Añadimos una production de tipo Movie al VideoSystem
                        VSystem.addProduction(nuevaMovie);

                        //Añadimos una production de tipo Movie a la Base de Datos
                        addData("Productions", nuevaMovie);

                        //Asinamos la categoría a la production
                        var categories = VSystem.categories;
                        var category = categories.next();

                        while (category.done !== true) {
                            var catName = category.value.name;
                            if (catName === idSelectCat) {
                                VSystem.assignCategory(category.value, nuevaMovie);
                                assignStore("AsignarCategories", catName, nuevaMovie.title);
                            }
                            category = categories.next();
                        }


                        //Asignamos las directoras/es a la nueva producción
                        var arrDir = [];

                        $('.producDirector:checked').each(
                            function () {
                                arrDir.push($(this).val());
                            }
                        );


                        var arrDirAsoc = [];
                        var long = arrDir.length;
                        for (var i = 0; i < long; i++) {
                            var found = false;
                            var directors = VSystem.directors;
                            var director = directors.next();

                            while ((director.done !== true) && (!found)) {
                                if (arrDir[i] === director.value.lastname1) {
                                    arrDirAsoc.push(director.value);
                                    found = true;
                                }
                                director = directors.next();
                            }
                        }

                        var long = arrDirAsoc.length;
                        for (var i = 0; i < long; i++) {
                            VSystem.assignDirector(arrDirAsoc[i], nuevaMovie);
                            assignStore("AsignarDirectors", arrDirAsoc[i].lastname1, nuevaMovie.title);
                        }

                        //Asignamos las actrices/es a la nueva producción
                        var arrAct = [];

                        $('.producActor:checked').each(
                            function () {
                                arrAct.push($(this).val());
                            }
                        );


                        var arrActAsoc = [];
                        var long = arrAct.length;
                        for (var a = 0; a < long; a++) {
                            var found = false;
                            var actors = VSystem.actors;
                            var actor = actors.next();

                            while ((actor.done !== true) && (!found)) {
                                if (arrAct[a] === actor.value.lastname1) {
                                    console.log(arrAct[a]);
                                    arrActAsoc.push(actor.value);
                                    found = true;
                                }
                                actor = actors.next();
                            }
                        }

                        var long = arrActAsoc.length;
                        for (var a = 0; a < long; a++) {
                            VSystem.assignActor(arrActAsoc[a], nuevaMovie);
                            console.log(arrActAsoc[a].lastname1 + " " + nuevaMovie.title);
                            assignStore("AsignarActors", arrActAsoc[a].lastname1, nuevaMovie.title);

                        }

                    }

                    //Si el radioButton es de tipo Serie
                    if (tipo[t].value === "serie") {
                        var nuevaSerie = new Serie(titleProduction, publiProduction);
                        nuevaSerie.image = "imagenes/peliculas_series/" + imgLoc;

                        //Añadimos una production de tipo Serie al VideoSystem
                        VSystem.addProduction(nuevaSerie);

                        //Añadimos una production de tipo Serie a la Base de Datos
                        addData("Productions", nuevaSerie);

                        //Asinamos la categoría a la production
                        var categories = VSystem.categories;
                        var category = categories.next();

                        while (category.done !== true) {
                            var catName = category.value.name;
                            if (catName === idSelectCat) {
                                VSystem.assignCategory(category.value, nuevaSerie);
                                assignStore("AsignarCategories", catName, nuevaSerie.title);

                            }
                            category = categories.next();
                        }

                        //Asignamos las directoras/es a la nueva producción
                        var arrDir = [];

                        $('.producDirector:checked').each(
                            function () {
                                arrDir.push($(this).val());
                            }
                        );


                        var arrDirAsoc = [];
                        var long = arrDir.length;
                        for (var i = 0; i < long; i++) {
                            var found = false;
                            var directors = VSystem.directors;
                            var director = directors.next();

                            while ((director.done !== true) && (!found)) {
                                if (arrDir[i] === director.value.lastname1) {
                                    arrDirAsoc.push(director.value);
                                    found = true;
                                }
                                director = directors.next();
                            }
                        }

                        var long = arrDirAsoc.length;
                        for (var i = 0; i < long; i++) {
                            VSystem.assignDirector(arrDirAsoc[i], nuevaSerie);
                            assignStore("AsignarDirectors", arrDirAsoc[i].lastname1, nuevaSerie.title);
                        }

                        //Asignamos las actrices/es a la nueva producción
                        var arrAct = [];

                        $('.producActor:checked').each(
                            function () {
                                arrAct.push($(this).val());
                            }
                        );


                        var arrActAsoc = [];
                        var long = arrAct.length;
                        for (var a = 0; a < long; a++) {
                            var found = false;
                            var actors = VSystem.actors;
                            var actor = actors.next();

                            while ((actor.done !== true) && (!found)) {
                                if (arrAct[a] === actor.value.lastname1) {
                                    console.log(arrAct[a]);
                                    arrActAsoc.push(actor.value);
                                    found = true;
                                }
                                actor = actors.next();
                            }
                        }

                        var long = arrActAsoc.length;
                        for (var a = 0; a < long; a++) {
                            VSystem.assignActor(arrActAsoc[a], nuevaSerie);
                            console.log(arrActAsoc[a].lastname1 + " " + nuevaSerie.title);
                            assignStore("AsignarActors", arrActAsoc[a].lastname1, nuevaSerie.title);

                        }
                    }
                }

            }
            document.forms["add-production"].reset();
            verificacion.appendChild(document.createTextNode("Se ha añadido la producción correctamente."));
            verificacion.style.color = "green";
        }
    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Crear Producción"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    divEncabezadoB.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "990px";
    principal.appendChild(divForms);

    var formAddPro = document.createElement("form");
    formAddPro.setAttribute("class", "form");
    formAddPro.setAttribute("id", "add-production");
    formAddPro.setAttribute("name", "add-production");
    divForms.appendChild(formAddPro);

    var formGroupAddProA = document.createElement("div");
    formGroupAddProA.setAttribute("class", "form-group row");
    formAddPro.appendChild(formGroupAddProA);

    var labelPro = document.createElement("label");
    labelPro.setAttribute("for", "titleProduction");
    labelPro.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelPro.appendChild(document.createTextNode("Titulo Producción* "));
    formGroupAddProA.appendChild(labelPro);

    var divInputProTitle = document.createElement("div");
    divInputProTitle.setAttribute("class", "col-sm-8 p-0");
    formGroupAddProA.appendChild(divInputProTitle);

    var inputProTitle = document.createElement("input");
    inputProTitle.setAttribute("type", "text");
    inputProTitle.setAttribute("class", "form-control");
    inputProTitle.setAttribute("id", "titleProduction");
    inputProTitle.setAttribute("placeholder", "Titulo Producción");
    divInputProTitle.appendChild(inputProTitle);

    var formGroupAddProB = document.createElement("div");
    formGroupAddProB.setAttribute("class", "form-group row");
    formAddPro.appendChild(formGroupAddProB);

    var labelPubliPro = document.createElement("label");
    labelPubliPro.setAttribute("for", "publiProduction");
    labelPubliPro.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelPubliPro.appendChild(document.createTextNode("Fecha Publicación* "));
    formGroupAddProB.appendChild(labelPubliPro);

    var divInputPubliPro = document.createElement("div");
    divInputPubliPro.setAttribute("class", "col-sm-8 p-0");
    formGroupAddProB.appendChild(divInputPubliPro);

    var inputPubliPro = document.createElement("input");
    inputPubliPro.setAttribute("type", "text");
    inputPubliPro.setAttribute("class", "form-control");
    inputPubliPro.setAttribute("id", "publiProduction");
    inputPubliPro.setAttribute("placeholder", "MM/DD/YYYY");
    divInputPubliPro.appendChild(inputPubliPro);

    var formGroupAddProC = document.createElement("div");
    formGroupAddProC.setAttribute("class", "form-group row");
    formAddPro.appendChild(formGroupAddProC);

    var labelImgPro = document.createElement("label");
    labelImgPro.setAttribute("for", "imgProduction");
    labelImgPro.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelImgPro.appendChild(document.createTextNode("Imagen* "));
    formGroupAddProC.appendChild(labelImgPro);

    var divInputImgPro = document.createElement("div");
    divInputImgPro.setAttribute("class", "col-sm-8 p-0");
    formGroupAddProC.appendChild(divInputImgPro);

    var inputImgPro = document.createElement("input");
    inputImgPro.setAttribute("type", "file");
    inputImgPro.setAttribute("class", "form-control-file");
    inputImgPro.setAttribute("id", "imgProduction");
    divInputImgPro.appendChild(inputImgPro);

    //radiobutton tipoProduction
    var fieldsetAddProtipo = document.createElement("fieldset");
    fieldsetAddProtipo.setAttribute("class", "form-group");
    formAddPro.appendChild(fieldsetAddProtipo);

    var divRadioProduc = document.createElement("div");
    divRadioProduc.setAttribute("class", "row");
    fieldsetAddProtipo.appendChild(divRadioProduc);

    var legendFiel = document.createElement("legend");
    legendFiel.setAttribute("class", "col-form-label col-sm-2 pt-0 font-weight-bold");
    legendFiel.appendChild(document.createTextNode("Tipo* "));
    divRadioProduc.appendChild(legendFiel);

    var divRadios = document.createElement("div");
    divRadios.setAttribute("class", "col-sm-10");
    divRadioProduc.appendChild(divRadios);

    var divRadioMovie = document.createElement("div");
    divRadioMovie.setAttribute("class", "custom-control custom-radio custom-control-inline");
    divRadios.appendChild(divRadioMovie);

    var inputRadioMovie = document.createElement("input");
    inputRadioMovie.setAttribute("type", "radio");
    inputRadioMovie.setAttribute("id", "movie");
    inputRadioMovie.setAttribute("name", "tipo");
    inputRadioMovie.setAttribute("value", "movie");
    inputRadioMovie.setAttribute("class", "custom-control-input");
    inputRadioMovie.setAttribute("checked", "true");
    divRadioMovie.appendChild(inputRadioMovie);


    var labelRadioMovie = document.createElement("label");
    labelRadioMovie.setAttribute("for", "movie");
    labelRadioMovie.setAttribute("class", "custom-control-label");
    labelRadioMovie.appendChild(document.createTextNode("Movie"));
    divRadioMovie.appendChild(labelRadioMovie);

    var divRadioSerie = document.createElement("div");
    divRadioSerie.setAttribute("class", "custom-control custom-radio custom-control-inline");
    divRadios.appendChild(divRadioSerie);

    var inputRadioSerie = document.createElement("input");
    inputRadioSerie.setAttribute("type", "radio");
    inputRadioSerie.setAttribute("id", "serie");
    inputRadioSerie.setAttribute("name", "tipo");
    inputRadioSerie.setAttribute("value", "serie");
    inputRadioSerie.setAttribute("class", "custom-control-input");
    divRadioSerie.appendChild(inputRadioSerie);

    var labelRadioSerie = document.createElement("label");
    labelRadioSerie.setAttribute("for", "serie");
    labelRadioSerie.setAttribute("class", "custom-control-label");
    labelRadioSerie.appendChild(document.createTextNode("Serie"));
    divRadioSerie.appendChild(labelRadioSerie);

    var formGroupAddProD = document.createElement("div");
    formGroupAddProD.setAttribute("class", "form-group row");
    formAddPro.appendChild(formGroupAddProD);

    var labelProCategory = document.createElement("label");
    labelProCategory.setAttribute("for", "productionCategory");
    labelProCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelProCategory.appendChild(document.createTextNode("Seleccione categoría* "));
    formGroupAddProD.appendChild(labelProCategory);

    var selectCategory = document.createElement("select");
    selectCategory.setAttribute("class", "form-control col-sm-8");
    selectCategory.setAttribute("id", "productionCategory");
    formGroupAddProD.appendChild(selectCategory);

    var VSystem = VideoSystem.getInstance();
    var categories = VSystem.categories;
    var category = categories.next();

    while (category.done !== true) {
        var categoryName = category.value.name;
        var optionCategory = document.createElement("option");
        optionCategory.setAttribute("value", categoryName);
        optionCategory.appendChild(document.createTextNode(categoryName));
        selectCategory.appendChild(optionCategory);

        category = categories.next();
    }

    var formGroupAddProE = document.createElement("div");
    formGroupAddProE.setAttribute("class", "form-group row");
    formAddPro.appendChild(formGroupAddProE);

    var labelProducDirect = document.createElement("label");
    labelProducDirect.setAttribute("for", "producDirector");
    labelProducDirect.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelProducDirect.appendChild(document.createTextNode("Directora/or "));
    formGroupAddProE.appendChild(labelProducDirect);

    var divChecksProducDirect = document.createElement("div");
    divChecksProducDirect.setAttribute("class", "col-sm-8");
    formGroupAddProE.appendChild(divChecksProducDirect);

    var VSystem = VideoSystem.getInstance();
    var directors = VSystem.directors;
    var director = directors.next();

    while (director.done !== true) {
        var productionDirector = director.value.name + " " + director.value.lastname1;
        var divChecks = document.createElement("div");
        divChecks.setAttribute("class", "form-check");
        divChecksProducDirect.appendChild(divChecks);

        var inputChecks = document.createElement("input");
        inputChecks.setAttribute("type", "checkbox");
        inputChecks.setAttribute("class", "form-check-input producDirector");
        inputChecks.setAttribute("id", "producDirector");
        inputChecks.setAttribute("value", director.value.lastname1);
        divChecks.appendChild(inputChecks);

        var labelChecks = document.createElement("label");
        labelChecks.setAttribute("class", "form-check-label");
        labelChecks.setAttribute("for", "producDirector");
        labelChecks.appendChild(document.createTextNode(productionDirector));
        divChecks.appendChild(labelChecks);

        director = directors.next();
    }

    var formGroupAddProF = document.createElement("div");
    formGroupAddProF.setAttribute("class", "form-group row");
    formAddPro.appendChild(formGroupAddProF);

    var labelProducAct = document.createElement("label");
    labelProducAct.setAttribute("for", "producActor");
    labelProducAct.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelProducAct.appendChild(document.createTextNode("Actriz/or "));
    formGroupAddProF.appendChild(labelProducAct);

    var divChecksProducAct = document.createElement("div");
    divChecksProducAct.setAttribute("class", "col-sm-8");
    formGroupAddProF.appendChild(divChecksProducAct);

    var VSystem = VideoSystem.getInstance();
    var actors = VSystem.actors;
    var actor = actors.next();

    while (actor.done !== true) {
        var productionAct = actor.value.name + " " + actor.value.lastname1;
        var divChecks = document.createElement("div");
        divChecks.setAttribute("class", "form-check");
        divChecksProducAct.appendChild(divChecks);

        var inputChecks = document.createElement("input");
        inputChecks.setAttribute("type", "checkbox");
        inputChecks.setAttribute("class", "form-check-input producActor");
        inputChecks.setAttribute("id", "producActor");
        inputChecks.setAttribute("value", actor.value.lastname1);
        divChecks.appendChild(inputChecks);

        var labelChecks = document.createElement("label");
        labelChecks.setAttribute("class", "form-check-label");
        labelChecks.setAttribute("for", "producActor");
        labelChecks.appendChild(document.createTextNode(productionAct));
        divChecks.appendChild(labelChecks);

        actor = actors.next();
    }

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    formAddPro.appendChild(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    divNotaAsterisco.appendChild(notaAsterisco);

    var formGroupAddProH = document.createElement("div");
    formGroupAddProH.setAttribute("class", "form-group row");
    formAddPro.appendChild(formGroupAddProH);

    var divButtonAddPro = document.createElement("div");
    divButtonAddPro.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupAddProH.appendChild(divButtonAddPro);

    var buttonAddPro = document.createElement("button");
    buttonAddPro.setAttribute("type", "button");
    buttonAddPro.setAttribute("class", "btn btn-outline-primary");
    buttonAddPro.appendChild(document.createTextNode("Añadir"));
    divButtonAddPro.appendChild(buttonAddPro);
    buttonAddPro.addEventListener("click", newProduction);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}
//Fin del CreateProduction

//Código que hace referencia Modificar Categorías
function formUpdateCategory() {
    function updateCategory() {
        var selectCat = document.forms["update-category"]["updateCategory"];
        var idSelectCat = selectCat.options[selectCat.options.selectedIndex].text;
        var nameCat = document.forms["update-category"]["nameCat"].value;
        var imgCategory = document.forms["update-category"]["imgCategory"].value;
        var imgPart = imgCategory.split("\\");
        var imgLoc = imgPart[imgPart.length - 1];

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (nameCat == "" || imgCategory == "" || idSelectCat == "") {
            verificacion.appendChild(document.createTextNode("Error al modificar la categoría"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var categories = VSystem.categories;
            var category = categories.next();
            var valueC;

            while (category.done !== true) {
                if (category.value.name === idSelectCat) {
                    category.value.name = nameCat;
                    imgCategory = "imagenes/categorias" + imgLoc;

                    modifyCategory(idSelectCat, nameCat);
                    modifyAssignCategory(idSelectCat, nameCat);
                }
                category = categories.next();
            }

        }
        selectCat.options[selectCat.options.selectedIndex].text = nameCat;

        /*Limpio los nodos hijos del submenu categorias que se vuelva a pintar
        con la categoría modificada*/
        var submenuCat = document.getElementById("submenu");

        //Limpio los nodos hijos
        while (submenuCat.hasChildNodes()) {
            submenuCat.removeChild(submenuCat.lastChild);
        }

        //Vuelvo a llamar a la función para pintar el menú de nuevo
        categoriesMenuPopulate();

        verificacion.appendChild(document.createTextNode("Categoría Modificada Correctamente"));
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Modificar Categoría"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    divEncabezadoB.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formUpdCat = document.createElement("form");
    formUpdCat.setAttribute("class", "form");
    formUpdCat.setAttribute("id", "update-category");
    formUpdCat.setAttribute("name", "update-category");
    divForms.appendChild(formUpdCat);

    var formGroupUpdCatA = document.createElement("div");
    formGroupUpdCatA.setAttribute("class", "form-group row");
    formUpdCat.appendChild(formGroupUpdCatA);

    var labelCategory = document.createElement("label");
    labelCategory.setAttribute("for", "updateCategory");
    labelCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelCategory.appendChild(document.createTextNode("Seleccionar categoría "));
    formGroupUpdCatA.appendChild(labelCategory);

    var selectCategory = document.createElement("select");
    selectCategory.setAttribute("class", "form-control col-sm-8");
    selectCategory.setAttribute("id", "updateCategory");
    formGroupUpdCatA.appendChild(selectCategory);

    var VSystem = VideoSystem.getInstance();
    var categories = VSystem.categories;
    var category = categories.next();

    while (category.done !== true) {
        var categoryName = category.value.name;
        var optionCategory = document.createElement("option");
        optionCategory.setAttribute("value", categoryName);
        optionCategory.appendChild(document.createTextNode(categoryName));
        selectCategory.appendChild(optionCategory);

        category = categories.next();
    }
    var formGroupUpdCatB = document.createElement("div");
    formGroupUpdCatB.setAttribute("class", "form-group row");
    formUpdCat.appendChild(formGroupUpdCatB);

    var labelNameCategory = document.createElement("label");
    labelNameCategory.setAttribute("for", "nameCat");
    labelNameCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelNameCategory.appendChild(document.createTextNode("Nombre categoría* "));
    formGroupUpdCatB.appendChild(labelNameCategory);

    var divInputNameCategory = document.createElement("div");
    divInputNameCategory.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdCatB.appendChild(divInputNameCategory);

    var inputNameCategory = document.createElement("input");
    inputNameCategory.setAttribute("type", "text");
    inputNameCategory.setAttribute("class", "form-control");
    inputNameCategory.setAttribute("id", "nameCat");
    divInputNameCategory.appendChild(inputNameCategory);

    var formGroupUpdCatC = document.createElement("div");
    formGroupUpdCatC.setAttribute("class", "form-group row");
    formUpdCat.appendChild(formGroupUpdCatC);

    var labelImgCategory = document.createElement("label");
    labelImgCategory.setAttribute("for", "imgCategory");
    labelImgCategory.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelImgCategory.appendChild(document.createTextNode("Imagen* "));
    formGroupUpdCatC.appendChild(labelImgCategory);

    var divInputImgCategory = document.createElement("div");
    divInputImgCategory.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdCatC.appendChild(divInputImgCategory);

    var inputImgCategory = document.createElement("input");
    inputImgCategory.setAttribute("type", "file");
    inputImgCategory.setAttribute("class", "form-control-file");
    inputImgCategory.setAttribute("id", "imgCategory");
    divInputImgCategory.appendChild(inputImgCategory);

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    formUpdCat.appendChild(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    divNotaAsterisco.appendChild(notaAsterisco);

    var formGroupUpdCatD = document.createElement("div");
    formGroupUpdCatD.setAttribute("class", "form-group row");
    formUpdCat.appendChild(formGroupUpdCatD);

    var divButtonUpdCat = document.createElement("div");
    divButtonUpdCat.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupUpdCatD.appendChild(divButtonUpdCat);

    var buttonUpdCat = document.createElement("button");
    buttonUpdCat.setAttribute("type", "button");
    buttonUpdCat.setAttribute("class", "btn btn-outline-primary");
    buttonUpdCat.appendChild(document.createTextNode("Modificar"));
    divButtonUpdCat.appendChild(buttonUpdCat);
    buttonUpdCat.addEventListener("click", updateCategory);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}
//Fin de UpdateCategory

//Código que hace referencia Modificar Actores
function formUpdateActor() {
    function updateActor() {
        var selectActor = document.forms["update-actor"]["updateActor"];
        var idSelectAct = selectActor.options[selectActor.selectedIndex].value;
        var idSelectActText = selectActor.options[selectActor.selectedIndex].text;
        var nameActor = document.forms["update-actor"]["nameActor"].value;
        var apellidoActor = document.forms["update-actor"]["apellidoActor"].value;
        var bornActor = document.forms["update-actor"]["bornActor"].value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (nameActor == "" || apellidoActor == "" || bornActor == "" || idSelectActText == "") {
            verificacion.appendChild(document.createTextNode("Error al modificar la actriz/or"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var actors = VSystem.actors;
            var actor = actors.next();

            while (actor.done !== true) {
                if (actor.value.lastname1 === idSelectAct) {

                    actor.value.name = nameActor;
                    actor.value.lastname1 = apellidoActor;
                    actor.value.born = bornActor;

                    modifyPerson("Actors", idSelectAct, nameActor, apellidoActor, bornActor);
                    modifyAssignActor("AsignarActors", idSelectAct, apellidoActor);
                }
                actor = actors.next();
            }

        }
        selectActor.options[selectActor.selectedIndex].text = nameActor + " " + apellidoActor;
        verificacion.appendChild(document.createTextNode("Se ha modifica la Actriz/or correctamente."));
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Modificar Actriz/or"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    divEncabezadoB.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formUpdAct = document.createElement("form");
    formUpdAct.setAttribute("class", "form");
    formUpdAct.setAttribute("id", "update-actor");
    formUpdAct.setAttribute("name", "update-actor");
    divForms.appendChild(formUpdAct);

    var formGroupUpdActA = document.createElement("div");
    formGroupUpdActA.setAttribute("class", "form-group row");
    formUpdAct.appendChild(formGroupUpdActA);

    var labelActor = document.createElement("label");
    labelActor.setAttribute("for", "updateActor");
    labelActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelActor.appendChild(document.createTextNode("Seleccionar Actriz/or "));
    formGroupUpdActA.appendChild(labelActor);

    var selectActor = document.createElement("select");
    selectActor.setAttribute("class", "form-control col-sm-8");
    selectActor.setAttribute("id", "updateActor");
    formGroupUpdActA.appendChild(selectActor);

    var VSystem = VideoSystem.getInstance();
    var actors = VSystem.actors;
    var actor = actors.next();

    while (actor.done !== true) {
        var actorNameApe = actor.value.name + " " + actor.value.lastname1;
        var optionActor = document.createElement("option");
        optionActor.setAttribute("value", actor.value.lastname1);
        optionActor.appendChild(document.createTextNode(actorNameApe));
        selectActor.appendChild(optionActor);

        actor = actors.next();
    }
    var formGroupUpdActB = document.createElement("div");
    formGroupUpdActB.setAttribute("class", "form-group row");
    formUpdAct.appendChild(formGroupUpdActB);

    var labelActorName = document.createElement("label");
    labelActorName.setAttribute("for", "nameActor");
    labelActorName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelActorName.appendChild(document.createTextNode("Nombre* "));
    formGroupUpdActB.appendChild(labelActorName);

    var divInputActName = document.createElement("div");
    divInputActName.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdActB.appendChild(divInputActName);

    var inputActName = document.createElement("input");
    inputActName.setAttribute("type", "text");
    inputActName.setAttribute("class", "form-control");
    inputActName.setAttribute("id", "nameActor");
    inputActName.setAttribute("placeholder", "Nombre Actriz/or");
    divInputActName.appendChild(inputActName);

    var formGroupUpdActC = document.createElement("div");
    formGroupUpdActC.setAttribute("class", "form-group row");
    formUpdAct.appendChild(formGroupUpdActC);

    var labelApeActor = document.createElement("label");
    labelApeActor.setAttribute("for", "apellidoActor");
    labelApeActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelApeActor.appendChild(document.createTextNode("Primer Apellido* "));
    formGroupUpdActC.appendChild(labelApeActor);

    var divInputApeActor = document.createElement("div");
    divInputApeActor.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdActC.appendChild(divInputApeActor);

    var inputApeActor = document.createElement("input");
    inputApeActor.setAttribute("type", "text");
    inputApeActor.setAttribute("class", "form-control");
    inputApeActor.setAttribute("id", "apellidoActor");
    inputApeActor.setAttribute("placeholder", "Primer Apellido");
    divInputApeActor.appendChild(inputApeActor);

    var formGroupUpdActD = document.createElement("div");
    formGroupUpdActD.setAttribute("class", "form-group row");
    formUpdAct.appendChild(formGroupUpdActD);

    var labelBornActor = document.createElement("label");
    labelBornActor.setAttribute("for", "bornActor");
    labelBornActor.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelBornActor.appendChild(document.createTextNode("Fecha Nacimiento* "));
    formGroupUpdActD.appendChild(labelBornActor);

    var divInputBornActor = document.createElement("div");
    divInputBornActor.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdActD.appendChild(divInputBornActor);

    var inputBornActor = document.createElement("input");
    inputBornActor.setAttribute("type", "text");
    inputBornActor.setAttribute("class", "form-control");
    inputBornActor.setAttribute("id", "bornActor");
    inputBornActor.setAttribute("placeholder", "MM/DD/YYYY");
    divInputBornActor.appendChild(inputBornActor);

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    formUpdAct.appendChild(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    divNotaAsterisco.appendChild(notaAsterisco);

    var formGroupUpdActE = document.createElement("div");
    formGroupUpdActE.setAttribute("class", "form-group row");
    formUpdAct.appendChild(formGroupUpdActE);

    var divButtonUpdAct = document.createElement("div");
    divButtonUpdAct.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupUpdActE.appendChild(divButtonUpdAct);

    var buttonUpdAct = document.createElement("button");
    buttonUpdAct.setAttribute("type", "button");
    buttonUpdAct.setAttribute("class", "btn btn-outline-primary");
    buttonUpdAct.appendChild(document.createTextNode("Modificar"));
    divButtonUpdAct.appendChild(buttonUpdAct);
    buttonUpdAct.addEventListener("click", updateActor);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}
//Fin del Código updateActores

//Código que hace referencia Modificar Directores
function formUpdateDirector() {
    function updateDirector() {
        var selectDirector = document.forms["update-director"]["updateDirector"];
        var idSelectDirect = selectDirector.options[selectDirector.selectedIndex].value;
        var idSelectDirectText = selectDirector.options[selectDirector.selectedIndex].text;
        var nameDirector = document.forms["update-director"]["nameDirector"].value;
        var apellidoDirector = document.forms["update-director"]["apellidoDirector"].value;
        var bornDirector = document.forms["update-director"]["bornDirector"].value;

        var verificacion = document.getElementById("verificacion");
        while (verificacion.firstChild) {
            verificacion.removeChild(verificacion.firstChild);
        }

        if (nameDirector == "" || apellidoDirector == "" || bornDirector == "" || idSelectDirectText == "") {
            verificacion.appendChild(document.createTextNode("Error al modificar la directora/or"));
            verificacion.style.color = "red";
            throw new EmptyValueException();
        } else {
            var directors = VSystem.directors;
            var director = directors.next();
            var valueD;

            while (director.done !== true) {
                if (director.value.lastname1 === idSelectDirect) {
                    director.value.name = nameDirector;
                    director.value.lastname1 = apellidoDirector;
                    director.value.born = bornDirector;

                    modifyPerson("Directors", idSelectDirect, nameDirector, apellidoDirector, bornDirector);
                    modifyAssignDirector("AsignarDirectors", idSelectDirect, apellidoDirector);
                }
                director = directors.next();
            }




        }
        selectDirector.options[selectDirector.selectedIndex].text = nameDirector + " " + apellidoDirector;
        verificacion.appendChild(document.createTextNode("Se ha modifica la Directora/or correctamente."));
        verificacion.style.color = "green";

    }

    var divEncabezado = document.getElementById("encabezado");
    // Eliminando todos los hijos de un elemento, en este caso el elemento Encabezado
    while (divEncabezado.firstChild) {
        divEncabezado.removeChild(divEncabezado.firstChild);
    }

    divEncabezado.setAttribute("class", "border-bottom mt-2 d-flex align-items-center");
    var divEncabezadoA = document.createElement("div");
    divEncabezado.appendChild(divEncabezadoA);

    var encabezado = document.createElement("h2");
    divEncabezadoA.appendChild(encabezado);
    encabezado.appendChild(document.createTextNode("Modificar Directora/or"));

    var divEncabezadoB = document.createElement("div");
    divEncabezadoB.setAttribute("class", "ml-2");
    divEncabezado.appendChild(divEncabezadoB);

    var spanEncabezado = document.createElement("span");
    divEncabezadoB.appendChild(spanEncabezado);
    spanEncabezado.setAttribute("class", "badge badge-pill badge-secondary");
    spanEncabezado.appendChild(document.createTextNode("Info"));


    var principal = document.getElementById("Principal");

    while (principal.firstChild) {
        principal.removeChild(principal.firstChild);

    }

    var divForms = document.createElement("div");
    divForms.setAttribute("class", "col-10 mt-3");
    divForms.style.height = "680px";
    principal.appendChild(divForms);

    var formUpdDirect = document.createElement("form");
    formUpdDirect.setAttribute("class", "form");
    formUpdDirect.setAttribute("id", "update-director");
    formUpdDirect.setAttribute("name", "update-director");
    divForms.appendChild(formUpdDirect);

    var formGroupUpdDirectA = document.createElement("div");
    formGroupUpdDirectA.setAttribute("class", "form-group row");
    formUpdDirect.appendChild(formGroupUpdDirectA);

    var labelDirect = document.createElement("label");
    labelDirect.setAttribute("for", "updateDirector");
    labelDirect.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelDirect.appendChild(document.createTextNode("Seleccionar Directores "));
    formGroupUpdDirectA.appendChild(labelDirect);

    var selectDirect = document.createElement("select");
    selectDirect.setAttribute("class", "form-control col-sm-8");
    selectDirect.setAttribute("id", "updateDirector");
    formGroupUpdDirectA.appendChild(selectDirect);

    var VSystem = VideoSystem.getInstance();
    var directors = VSystem.directors;
    var director = directors.next();

    while (director.done !== true) {
        var directorNameApe = director.value.name + " " + director.value.lastname1;
        var optionDirect = document.createElement("option");
        optionDirect.setAttribute("value", director.value.lastname1);
        optionDirect.appendChild(document.createTextNode(directorNameApe));
        selectDirect.appendChild(optionDirect);

        director = directors.next();
    }
    var formGroupUpdDirectB = document.createElement("div");
    formGroupUpdDirectB.setAttribute("class", "form-group row");
    formUpdDirect.appendChild(formGroupUpdDirectB);

    var labelDirectName = document.createElement("label");
    labelDirectName.setAttribute("for", "nameDirector");
    labelDirectName.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelDirectName.appendChild(document.createTextNode("Nombre* "));
    formGroupUpdDirectB.appendChild(labelDirectName);

    var divInputDirectName = document.createElement("div");
    divInputDirectName.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdDirectB.appendChild(divInputDirectName);

    var inputDirectName = document.createElement("input");
    inputDirectName.setAttribute("type", "text");
    inputDirectName.setAttribute("class", "form-control");
    inputDirectName.setAttribute("id", "nameDirector");
    inputDirectName.setAttribute("placeholder", "Nombre Directora/or");
    divInputDirectName.appendChild(inputDirectName);

    var formGroupUpdDirectC = document.createElement("div");
    formGroupUpdDirectC.setAttribute("class", "form-group row");
    formUpdDirect.appendChild(formGroupUpdDirectC);

    var labelApeDirector = document.createElement("label");
    labelApeDirector.setAttribute("for", "apellidoDirector");
    labelApeDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelApeDirector.appendChild(document.createTextNode("Primer Apellido* "));
    formGroupUpdDirectC.appendChild(labelApeDirector);

    var divInputApeDirect = document.createElement("div");
    divInputApeDirect.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdDirectC.appendChild(divInputApeDirect);

    var inputApeDirector = document.createElement("input");
    inputApeDirector.setAttribute("type", "text");
    inputApeDirector.setAttribute("class", "form-control");
    inputApeDirector.setAttribute("id", "apellidoDirector");
    inputApeDirector.setAttribute("placeholder", "Primer Apellido");
    divInputApeDirect.appendChild(inputApeDirector);

    var formGroupUpdDirectD = document.createElement("div");
    formGroupUpdDirectD.setAttribute("class", "form-group row");
    formUpdDirect.appendChild(formGroupUpdDirectD);

    var labelBornDirector = document.createElement("label");
    labelBornDirector.setAttribute("for", "bornDirector");
    labelBornDirector.setAttribute("class", "col-sm-2 col-form-label font-weight-bold");
    labelBornDirector.appendChild(document.createTextNode("Fecha Nacimiento* "));
    formGroupUpdDirectD.appendChild(labelBornDirector);

    var divInputBornDirect = document.createElement("div");
    divInputBornDirect.setAttribute("class", "col-sm-8 p-0");
    formGroupUpdDirectD.appendChild(divInputBornDirect);

    var inputBornDirector = document.createElement("input");
    inputBornDirector.setAttribute("type", "text");
    inputBornDirector.setAttribute("class", "form-control");
    inputBornDirector.setAttribute("id", "bornDirector");
    inputBornDirector.setAttribute("placeholder", "MM/DD/YYYY");
    divInputBornDirect.appendChild(inputBornDirector);

    var divNotaAsterisco = document.createElement("div");
    divNotaAsterisco.setAttribute("class", "col-sm-10");
    formUpdDirect.appendChild(divNotaAsterisco);

    var notaAsterisco = document.createElement("p");
    notaAsterisco.setAttribute("class", "text-right");
    notaAsterisco.appendChild(document.createTextNode("(*) Campo Obligatorio"));
    divNotaAsterisco.appendChild(notaAsterisco);

    var formGroupUpdDirectE = document.createElement("div");
    formGroupUpdDirectE.setAttribute("class", "form-group row");
    formUpdDirect.appendChild(formGroupUpdDirectE);

    var divButtonUpdDirect = document.createElement("div");
    divButtonUpdDirect.setAttribute("class", "col-sm-10 mt-3 text-right");
    formGroupUpdDirectE.appendChild(divButtonUpdDirect);

    var buttonUpdDirect = document.createElement("button");
    buttonUpdDirect.setAttribute("type", "button");
    buttonUpdDirect.setAttribute("class", "btn btn-outline-primary");
    buttonUpdDirect.appendChild(document.createTextNode("Modificar"));
    divButtonUpdDirect.appendChild(buttonUpdDirect);
    buttonUpdDirect.addEventListener("click", updateDirector);

    var p = document.createElement("p");
    p.setAttribute("id", "verificacion");
    p.setAttribute("class", "h4 mt-3 font-weight-bold");
    divForms.appendChild(p);
}
//Fin del Código updateDirectores
