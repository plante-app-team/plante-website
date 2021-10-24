import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
    const { t, i18n } = useTranslation();
    const changeLanguageHandler = (e) =>
    {
      i18n.changeLanguage(e.target.value)
    }
    return (
        <Container className="vh-100 d-flex flex-column " fluid>
            <Row style={{ flex: 1 }} className="justify-content-center h-100">
                <Col sm={5} className="mt-5">
                    <Row className="h-25">
                        <Col>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="primary" value="en" onClick={changeLanguageHandler}>{t('landingpage.EN')}</Button>
                                <Button variant="disabled" value="ru" onClick={changeLanguageHandler}>{t('landingpage.RU')}</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row className="h-50">
                        <Col>
                            <h2>
                                {t('landingpage.appTitle')}
                            </h2>
                            <h4>
                                {t('landingpage.appDescription')}
                            </h4>
                        </Col>
                    </Row>
                    <Row className="h-25">
                        <Col>
                            <p>
                                {t('landingpage.socialMediaTitle')}
                            </p>
                        </Col>
                    </Row>
                </Col>
                <Col sm={7}>2 of 2</Col>
            </Row>
        </Container>
    );
};

export default Introduction;
