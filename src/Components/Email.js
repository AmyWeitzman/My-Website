import React from 'react';
import { Email, Item, A } from 'react-html-email';

function EmailTemplate({name, children}) {
    return(
        <Email title="link">
            <Item>
                Hello {name}
                <A herf="https://mailtrap.io"> Click Me!</A>
            </Item>
            <Item>
                {children}
            </Item>
        </Email>
    );
}

export default EmailTemplate;