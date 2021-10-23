import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useTranslation } from 'react-i18next';

const Introduction = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };
  return (
        <Container>
          <Row>
            <Col>
                <h2>
                  {t('plante')}
                </h2>
                <h4>Vegan app</h4>
            </Col>
            <Col>2 of 2</Col>
          </Row>
        </Container>
  );
}; 

export default Introduction;
