
function stworzPostac(imie, klasa) {

    if (imie.length < 3) {
        console.log("Imię musi mieć co najmniej 3 znaki!");
        return;
    }


    const postac = {
        name: imie,
        role: klasa,
        level: 1,
        skills: [],
        equipment: {
            weapon: "",
            armor: "",
            items: []
        }
    };

    // rozne startowe rzeczy klasy
    if (klasa === "Mag") {
        postac.equipment.weapon = "Kostur";
        postac.equipment.armor = "Szata";
        postac.skills = ["Kula ognia", "Tarcza magiczna"];
    } else if (klasa === "Wojownik") {
        postac.equipment.weapon = "Miecz";
        postac.equipment.armor = "Zbroja";
        postac.skills = ["Cios mieczem", "Blok tarczą"];
    } else {
        // Jesli to nie jest postac wpisana
        postac.equipment.weapon = "Kij";
        postac.equipment.armor = "Ubranie";
        postac.skills = ["Atak"];
    }

    return postac;
}

// Dodajemy nowy przedmiot postaci
function dodajPrzedmiot(postac, przedmiot) {
    postac.equipment.items.push(przedmiot);
    console.log("Dodano przedmiot:", przedmiot);
}

// Dodawanie umiejetnosci
function nauczUmiejetnosci(postac, umiejetnosc) {
    if (postac.skills.length >= 5) {
        console.log("Nie można mieć więcej niż 5 umiejętności!");
        return;
    }
    postac.skills.push(umiejetnosc);
}

// zwiekszam poziom postaci o 1
function awansuj(postac) {
    postac.level++;
    console.log(postac.name + " awansował na poziom " + postac.level);
}

// Wyświetlanie opisu postaci
function opisPostaci(postac) {
    console.log("== KARTA POSTACI ==");
    console.log("Imię:", postac.name);
    console.log("Klasa:", postac.role);
    console.log("Poziom:", postac.level);

    console.log("Umiejętności:");
    for (let i = 0; i < postac.skills.length; i++) {
        console.log("-", postac.skills[i]);
    }

    console.log("Ekwipunek:");
    console.log("Broń:", postac.equipment.weapon);
    console.log("Zbroja:", postac.equipment.armor);

    console.log("Przedmioty:");
    for (let i = 0; i < postac.equipment.items.length; i++) {
        console.log("-", postac.equipment.items[i]);
    }
}
