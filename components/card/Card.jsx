import React from 'react';
import { Panel, ButtonToolbar, Button } from 'rsuite';
import '../../styles/Card.css';

import { Provider, UpdownButton } from "@lyket/react";

class Card extends React.Component {

    render() {
        const { content, data_jul, data_pub, nome, url} = this.props
        return (
            <Panel className="turivius-card"
                shaded
                bordered
               >

                <b>Acórdão: </b>{nome}

                {content.map(c => <p key={c.title}>
                    <b>{c.title}:</b> {c.content}
                </p>)}

                <b>Data de Publicação:</b>{data_pub} <br></br>

                <b>Data de Julgamento:</b>{data_jul}

                <ButtonToolbar>
                    <Button className="btn" onClick={url}>
                    <a href={url}>Abrir Inteiro Teor</a>
                </Button>
                </ButtonToolbar>

                /* Biblioteca lyket*/

                <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
                <UpdownButton
                    namespace="my-documentation"
                    id="like-dislike-buttons-api"
                />
                </Provider>

            </Panel>
        )
    }
}

export default Card;