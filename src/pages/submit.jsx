import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { Header } from 'components';
import { Layout, Container } from 'layouts';

const About = center => (
  <Layout>
    <Helmet title={'Submit A Lie'} />
    <Header title="About Page">PappuLies.com - Submit a Pappu Lie</Header>
    <Container center={center}>
      <form name="contact" netlify>
  <p>
    <label>Name <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Email <input type="email" name="email" /></label>
  </p>
  <p>
  <p>
    <label>Lie <input type="text" name="lie" /></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
    </Container>
  </Layout>
);

export default About;

Container.propTypes = {
  center: PropTypes.object,
};
