import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';
import backgroundImage from '../../assets/backgroundImage.png';
import { CheckCircleFill } from 'react-bootstrap-icons';
import classes from './Introduction.module.css';

const Introduction = () => {
    const { t, i18n } = useTranslation();
    const changeLanguageHandler = (e) => {
        i18n.changeLanguage(e.target.value)
    }

    return (
        <Container className="vh-100 d-flex flex-column" fluid>
            <Row style={{ flex: 1 }} className="h-100">
                <Col sm={5} className={classes.leftColumn}>
                    <Row className="h-25">
                        <Col className={classes.alignLeft}>
                            <ButtonGroup aria-label="Basic example">
                                <Button variant="primary" value="en" onClick={changeLanguageHandler}>{t('landingpage.EN')}</Button>
                                <Button variant="disabled" value="ru" onClick={changeLanguageHandler}>{t('landingpage.RU')}</Button>
                            </ButtonGroup>
                        </Col>
                    </Row>
                    <Row className="h-50">
                        <Col>
                            <h1 className={classes.planteTitle}>
                                {t('landingpage.appTitle')}
                            </h1>
                            <h2 className={classes.planteSubtitle}>
                                {t('landingpage.appDescription')}
                            </h2>
                            <Stack gap={3} className="mt-5">
                                <Row>
                                    <Col xs={1} md={1}>
                                        <CheckCircleFill width="24" height="24" fill="#F5BB08" />
                                    </Col>
                                    <Col className="d-flex justify-content-start" xs={17} md={11}>
                                        {t('landingpage.scanProduct')}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={1} md={1}>
                                        <CheckCircleFill width="24" height="24" fill="#F5BB08" />
                                    </Col>
                                    <Col className="d-flex justify-content-start" xs={17} md={11}>
                                        {t('landingpage.seeShopsProducts')}
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="justify-content-start" xs={1} md={1}>
                                        <CheckCircleFill width="24" height="24" fill="#F5BB08" />
                                    </Col>
                                    <Col className="d-flex justify-content-start" xs={17} md={11}>
                                        {t('landingpage.addShopsProducts')}
                                    </Col>
                                </Row>
                            </Stack>
                            <Row >
                                <Col xs={5} md={5}>
                                    <a href='https://play.google.com/store/apps/details?id=vegancheckteam.plante&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className={classes.downloadButton} alt='Get it on Google Play' src={'assets/' + i18n.resolvedLanguage + '/google-play-badge.png'} /></a>
                                </Col>
                                <Col xs={5} md={5}>
                                    <a href='https://play.google.com/store/apps/details?id=vegancheckteam.plante&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className={classes.downloadButton} alt='Download on the App Store' src={'assets/' + i18n.resolvedLanguage + '/apple-app-store-badge.svg'} /></a>
                                </Col>
                            </Row>
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
                <Col sm={7}>
                    <Image src={backgroundImage} fluid />
                </Col>
            </Row>
        </Container>
    );
};

export default Introduction;
