// Styling for Contact Form
import '../styles/Contact.css';
// Sweet Alert NPM Package to give a really cool looking success confirmation when user submits form
import Swal from 'sweetalert2'

// Renders Contact Form
export default function Contact() {

    const onSubmit = async (event) => {
        //Don't reload page when user submits form
        event.preventDefault();
        const formData = new FormData(event.target);
        // necessary for form to go to my email inbox - From Web 3 Forms (https://web3forms.com/)
        formData.append("access_key", "ef666a83-e9bb-473c-bee9-afd5966670be");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        //Contents of Success alert from Sweet Alert (https://sweetalert2.github.io/)
        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
            });
        }
    };

    return (
        <section className="contact">
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className="input-box">
                    <label>Full Name</label>
                    <input type="text" className="field" placeholder='Enter your name' name='name' required />
                </div>
                <div className="input-box">
                    <label>Email Address</label>
                    <input type="email" className="field" placeholder='Enter your email' name='email' required />
                </div>
                <div className="input-box">
                    <label>Your Message</label>
                    <textarea name='message' id='' className="field mess" placeholder='Enter your message' required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </section>
    )
}
