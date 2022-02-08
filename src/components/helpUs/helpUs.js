import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';
import classes from './helpUs.module.css';
import { Discord, Facebook, Instagram } from 'react-bootstrap-icons';



const HelpUs = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={classes.background} >
            <Container className="h-100 d-flex flex-column text-md-start text-center" fluid>
                <Row className="h-100">
                    <Col dm={6} className={[classes.leftColumn, classes.marginTop].join(' ')}>
                        <Row className={classes.informationRow}>
                            <Col>
                                <h1 className={classes.planteTitle}>
                                    {t('landingpage.appTitle')}
                                </h1>
                                <h4>
                                    {t('helpUs.description')}
                                </h4>
                                <p>
                                    {t('helpUs.paragraph1')}
                                </p>
                                <p>
                                    {t('helpUs.paragraph2')}
                                </p>
                                <p>
                                    {t('helpUs.paragraph3')}
                                </p>
                                <Row className="text-md-start text-center" lg="auto">
                                    <Col>
                                        <a target="_blank" rel="noreferrer" href='https://play.google.com/store/apps/details?id=vegancheckteam.plante&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className={classes.downloadButton} alt='Get it on Google Play' src={process.env.PUBLIC_URL + '/assets/' + i18n.resolvedLanguage + '/google-play-badge.png'} /></a>
                                    </Col>
                                    <Col>
                                        <a href='https://apps.apple.com/us/app/plante/id1574070382' rel="noreferrer" target="_blank"><img className={classes.downloadButton} alt='Download on the App Store' src={process.env.PUBLIC_URL + '/assets/' + i18n.resolvedLanguage + '/apple-app-store-badge.svg'} /></a>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className={classes.socialMediaMargin}>
                                        <Stack gap={2}>
                                            <Row>
                                                <Col>
                                                    <h5 className={classes.socialMediaTitle}>
                                                        {t('helpUs.joinus')}
                                                    </h5>
                                                </Col>
                                            </Row>
                                            <Row className="text-md-start text-center" lg="auto">
                                                <Col>
                                                    <a href="https://www.facebook.com/Plante-Vegan-App-103275182070684" target="_blank" rel="noreferrer">
                                                        <Facebook className={classes.socialMediaIcon} />
                                                    </a>
                                                </Col>

                                                <Col>
                                                    <a href="https://discord.gg/kXgXrTVpGY" target="_blank" rel="noreferrer">
                                                        <Discord className={classes.socialMediaIcon} />
                                                    </a>

                                                </Col>
                                                <Col>
                                                    <a href={t('landingpage.instagram')} target="_blank" rel="noreferrer">
                                                        <Instagram className={classes.socialMediaIcon} />
                                                    </a>
                                                </Col>
                                            </Row>
                                        </Stack>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>

                    </Col>
                    <Col sm={6} className='d-md-block d-none'>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HelpUs;
