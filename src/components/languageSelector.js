import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useTranslation } from 'react-i18next';
import classes from './languageSelector.module.css';

const languagesTranslation = {
    'en' : 'ENG', //english
    'ru' : 'РУС', //russian
    'de' : 'DE', //german
    'el' : 'EL', //greek
    'pl' : 'PL' //polish
}

const LanguageSelector = () => {
    const {i18n } = useTranslation();
    const changeLanguageHandler = (e) => {
        i18n.changeLanguage(e.target.value)
    }
    return (
        <ButtonGroup aria-label="Basic example">
            {
                Object.entries(languagesTranslation).map(([key, value]) => <Button variant={i18n.resolvedLanguage === key ? 'primary' : "secondary"} className={classes.selectedButton} value={key} onClick={changeLanguageHandler}>{value}</Button>
                )
            }
        </ButtonGroup>
    );
}

export default LanguageSelector;