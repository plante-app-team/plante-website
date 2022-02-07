import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import classes from './privacyPolicy.module.css';


const PrivacyPolicy = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={classes.background} >
            <Container className="h-100 d-flex flex-column text-md-start text-center" fluid>
                <Row className="h-100">
                <Col dm={5} className={[classes.leftColumn, classes.marginTop].join(' ')}>
                    <Row className={classes.informationRow}>
                            <Col>
                                <h1 className={classes.planteTitle}>
                                    {t('privacyPolicy.title')}
                                </h1>
                                <h2>
                                    {t('landingpage.appDescription')}
                                </h2>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default PrivacyPolicy;
