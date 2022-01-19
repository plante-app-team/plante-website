import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Image from 'react-bootstrap/Image';
import { useTranslation } from 'react-i18next';
import { CheckCircleFill, Discord, EnvelopeFill, Facebook, Instagram, Telegram } from 'react-bootstrap-icons';
import vk from '../../assets/vk.png';
import classes from './Introduction.module.css';
import LanguageSelector from '../languageSelector';


const Introduction = () => {
    const { t, i18n } = useTranslation();

    return (
        <div className={classes.background} >
            <Container className="h-100 d-flex flex-column text-md-start text-center" fluid>
                <Row className="h-100">
                    <Col dm={5} className={[classes.leftColumn, classes.marginTop].join(' ')}>
                        <Row className={classes.languageRow}>
                            <Col>
                                <LanguageSelector />
                            </Col>
                        </Row>
                        <Row className={classes.informationRow}>
                            <Col>
                                <h1 className={classes.planteTitle}>
                                    {t('landingpage.appTitle')}
                                </h1>
                                <h2>
                                    {t('landingpage.appDescription')}
                                </h2>
                                <Stack gap={4} className="mt-5">
                                    <Row>
                                        <Col lg={1}>
                                            <CheckCircleFill width="24" height="24" fill="#F5BB08" />
                                        </Col>
                                        <Col className="text-md-start text-center" xs={17} md={11}>
                                            {t('landingpage.scanProduct')}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={1}>
                                            <CheckCircleFill width="24" height="24" fill="#F5BB08" />
                                        </Col>
                                        <Col className="text-md-start text-center" xs={17} md={11}>
                                            {t('landingpage.seeShopsProducts')}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={1}>
                                            <CheckCircleFill width="24" height="24" fill="#F5BB08" />
                                        </Col>
                                        <Col className="text-md-start text-center" xs={17} md={11}>
                                            {t('landingpage.addShopsProducts')}
                                        </Col>
                                    </Row>
                                    <Row className="mt-5">
                                        <Col xs lg="4" className={classes.downloadColumn}>
                                            <a target="_blank" rel="noreferrer" href='https://play.google.com/store/apps/details?id=vegancheckteam.plante&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img className={classes.downloadButton} alt='Get it on Google Play' src={process.env.PUBLIC_URL + '/assets/' + i18n.resolvedLanguage + '/google-play-badge.png'} /></a>
                                        </Col>
                                        <Col xs lg="2">
                                            <a href='https://apps.apple.com/us/app/plante/id1574070382' rel="noreferrer" target="_blank"><img className={classes.downloadButton} alt='Download on the App Store' src={process.env.PUBLIC_URL + '/assets/' + i18n.resolvedLanguage + '/apple-app-store-badge.svg'} /></a>
                                        </Col>
                                    </Row>
                                </Stack>
                            </Col>
                        </Row>
                        <Row className={classes.socialMediaRow}>
                            <Col>
                                <Stack gap={3}>
                                    <Row>
                                        <Col>
                                            <h5 className={classes.socialMediaTitle}>
                                                {t('landingpage.socialMediaTitle')}
                                            </h5>
                                        </Col>
                                    </Row>
                                    <Row className="text-md-start text-center" lg="auto">
                                        <Col>
                                            <a href="mailto:plante.application@gmail.com">
                                                <EnvelopeFill className={classes.socialMediaIcon} />
                                            </a>
                                        </Col>
                                        {
                                            i18n.resolvedLanguage === "ru" &&
                                            <Col>
                                                <a href="https://t.me/joinchat/F9ub1kApyINjOTky" target="_blank" rel="noreferrer">
                                                    <Telegram className={classes.socialMediaIcon} />
                                                </a>
                                            </Col>
                                        }
                                        <Col>
                                            <a href="https://www.facebook.com/Plante-Vegan-App-103275182070684" target="_blank" rel="noreferrer">
                                                <Facebook className={classes.socialMediaIcon} />
                                            </a>
                                        </Col>

                                        <Col>
                                            {
                                                i18n.resolvedLanguage === "ru" ?
                                                    <a href="https://vk.com/planteapp" target="_blank" rel="noreferrer">
                                                        <Image src={vk} />
                                                    </a>
                                                    : <a href="https://discord.gg/kXgXrTVpGY" target="_blank" rel="noreferrer">
                                                        <Discord className={classes.socialMediaIcon} />
                                                    </a>

                                            }
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
                    <Col sm={7} className='d-md-block d-none'>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Introduction;
