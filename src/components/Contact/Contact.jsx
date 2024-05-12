import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "08bbbd92-2fef-49f2-8e1a-c2c0273ec471");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon } alt="" /> </h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos praesentium officiis non optio! Laboriosam officia architecto delectus perspiciatis similique at nulla fugiat dolores consequatur rerum consectetur quis nesciunt, mollitia praesentium?</p>
            <ul>
                <li><img src={mail_icon} alt="" />edusitycontact@gmail.com</li>
                <li><img src={phone_icon} alt="" />+1 123-456-7890</li>
                <li><img src={location_icon} alt="" />Washington DC</li>
            </ul>
        </div>

        <div className="contact-col">
            <form action="" onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name' placeholder="Enter your name here" required/>
                <label>Your address</label>
                <input type="text" name='address' placeholder="Enter your name here" required/>
                <label>Phone Number</label>
                <input type="text" name='phone' placeholder="Enter your name here" required/>
                <label>Your message here</label>
                <textarea name="message"  rows="6"></textarea>
                <button className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /> </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
