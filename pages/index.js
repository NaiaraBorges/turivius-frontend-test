import Head from 'next/head'
import Card from '../components/card/Card'
import { Container, Header, Content, Grid, Row, Col } from 'rsuite';
import TuriviusHeader from '../components/layout/Header';

export default function Home(props) {
  return (
    <div>
      <Head>
        <title>Turivius Frontend Test</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header>
        <TuriviusHeader />
      </Header>

      <Container>
        <Content>
          <Grid fluid>
            <Row>
              {props.cards.map(card => <Col key={card.id} sm={24}>
                <Card {...card} />
              </Col>)} 
            </Row>
          </Grid>
        </Content>
      </Container>
    </div>
  )
}

Home.getInitialProps = async () => {
  const cards = await (await fetch('http://localhost:3000/api/cards')).json()
  return {
    cards
  }

  const entities = await (await fetch('http://localhost:3000/api/entities')).json()
  return {
    entities
  }
}