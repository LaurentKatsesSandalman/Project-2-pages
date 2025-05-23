import { useCountries } from "../contexts/CountriesContext";
import style from ".././assets/styles/FilterLanguages.module.css"

function FilterLanguages() {
    const { filters, setFilters, favoriteList, setFavoriteList, currentList } = useCountries();

    const handleChangeLang = (lang: string) => {
        if (currentList==="search") {
        if (filters.languages.includes(lang)) {
            // setFilters((prev) => ({ ...prev, languages: prev.languages.filter(() => !prev.languages.includes(lang)) }))
            setFilters((prev) => ({ ...prev, languages: prev.languages.filter((language) => language !== lang) }))

        }
        else {
            setFilters((prev) => ({ ...prev, languages: [...prev.languages, lang] }))
        }
    }
    if (currentList==="favorite") {
        if (favoriteList.languages.includes(lang)) {
            // setFilters((prev) => ({ ...prev, languages: prev.languages.filter(() => !prev.languages.includes(lang)) }))
            setFavoriteList((prev) => ({ ...prev, languages: prev.languages.filter((language) => language !== lang) }))

        }
        else {
            setFavoriteList((prev) => ({ ...prev, languages: [...prev.languages, lang] }))
        }
    }

    }

    const langArray: string[] = ["English", "French", "Spanish", "Portuguese", "Italian", "German", "Dutch", "Arabic", "Chinese"]

    return (<fieldset>
        <legend>Languages</legend>
    <div className={style.filterLangContainer}>
        {langArray.map((language) => (
            <div key={language} className={style.filterLang}>
                <input type="checkbox" id={language} name={language} checked={currentList==="search"?(filters.languages.includes(language)):(favoriteList.languages.includes(language))} onChange={() => handleChangeLang(language)} />
                <label htmlFor={language}>{language}</label>
            </div>
        ))}


        {/* <input type="checkbox" id="English" name="English" checked={!filters.languages.includes("English")} onChange={() => handleChangeLang("English")} />
        <label htmlFor="English">English</label>

        <input type="checkbox" id="French" name="French" checked={!filters.languages.includes("French")} onChange={() => handleChangeLang("French")} />
        <label htmlFor="French">French</label> */}

    </div>
    </fieldset>)
}

export default FilterLanguages