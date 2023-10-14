import mail from '../icons/mail.svg';

export default function Footer() {
  return (
    <div className="contact">
      <h1 className="contact-title">Contact me</h1>
      <p className="contact-general">
        Please get in touch if you think our work could be mutually beneficial!
      </p>
      <div className="contact-icons">
        <a
          rel="noreferrer"
          href="https://github.com/Harshalshirote2002"
          target="_blank"
        >
          <i className="devicon-github-original"></i>
        </a>
        <a
          rel="noreferrer"
          href="https://linkedin.com/in/harshal-shirote-07274223a/"
          target="_blank"
        >
          <i className="devicon-linkedin-plain"></i>
        </a>
        <a href="mailto:harshalshirote2002@gmail.com">
          <img src={mail} alt="mail" />
        </a>
      </div>
    </div>
  );
}
