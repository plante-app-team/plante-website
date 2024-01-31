import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useTranslation } from 'react-i18next';
import classes from './languageSelector.module.css';

const languagesTranslation = {
    'en' : 'EN', //english
    'ru' : 'RU', //russian
    'ro' : 'RO', //romanian
    'de' : 'DE', //german
    'fr' : 'FR', //french
    'el' : 'EL', //greek
    'nl' : 'NL', //dutch
    'pl' : 'PL', //polish
    'pt' : 'PT', //portuguese
    'vi' : 'VI' //vietnamese
}

const LanguageSelector = () => {
    const {i18n } = useTranslation();
    const changeLanguageHandler = (e) => {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <ButtonGroup style={{ flexWrap: "wrap", justifyContent: "center", alignItems: "center" }} aria-label="Basic example">
            {
                Object.entries(languagesTranslation).map(([key, value]) => <Button variant={i18n.resolvedLanguage === key ? 'primary' : "secondary"} className={classes.selectedButton} value={key} onClick={changeLanguageHandler}>{value}</Button>
                )
            }
        </ButtonGroup>
    );
}

export default LanguageSelector;