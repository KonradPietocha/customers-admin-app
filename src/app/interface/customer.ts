export interface Customer {
    name: string,
    surname: string,
    dateOfBirth: string,
    branch: string,
    branchSubcategory: string,
    phone: number,
    eMail: string
}

// ● Imię (tekst)
// ● Nazwisko (tekst)
// ● Data urodzenia (data, min: 18 lat)
// ● Branża (lista jednokrotnego wyboru: Finanse, Media, Podróże)
// ● Podkategoria (lista jednokrotnego wyboru zależna od branży: Finanse -> Bank,
// Ubezpieczalnia; Media -> TV, Radio; Podróże -> Krajowe, Zagraniczne)
// ● Numer telefonu (9 cyfr, nie może rozpoczynać się od 0)
// ● Adres e-mail (format e-mail)