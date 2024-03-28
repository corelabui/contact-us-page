import { FormValues } from 'formfusion';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Button from '../../components/Button';

function ContactUs() {
  function onSubmit(data: FormValues) {
    // handle form submition
    console.log(data);
  }
  return (
    <div className="container column mt-3 mb-3">
      <h6 className="subtitle1 text--center text--primary">Contact us</h6>
      <h2 className="text--center">Get in touch</h2>
      <p className="text--center text--secondary">
        We'd love to hear from you. Please fill out this form.
      </p>
      <Form onSubmit={onSubmit} validateOnChange>
        <div className="container row column--xs gap-1 gap-0--xs">
          <Input
            id="firstName"
            name="firstName"
            type="alphabetic"
            label="First name"
            placeholder="First name"
            required
          />
          <Input
            id="lastName"
            name="lastName"
            type="alphabetic"
            label="Last name"
            placeholder="Last name"
            required
          />
        </div>
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="you@company.com"
          required
        />
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="+1 (555) 000-0000"
          mask="+# (###) ###-####"
          label="Phone number"
          required
        />
        <Textarea
          label="How can we help?"
          rows={5}
          placeholder="Tell us a little about..."
          required
          
        />
        <Input
          id="terms"
          name="terms"
          type="checkbox"
          label="You agree to our friendly privacy policy"
        />
        <br />
        <br />
        <Button width="100%">Sign up</Button>
      </Form>
    </div>
  );
}

export default ContactUs;
