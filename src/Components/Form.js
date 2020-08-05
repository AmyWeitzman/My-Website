import EmailTemplate from "./Email";
import { renderEmail } from 'react-html-email';
import axios from 'axios';

const messageHTML = renderEmail(<EmailTemplate name="Bob" />);

