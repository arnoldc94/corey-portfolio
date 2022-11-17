import { useState } from 'react';
import { send } from 'emailjs-com';

export const Contact = () => {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Corey Arnold',
        message: '',
        reply_to: '',
      });
    
      const handleChange = (e) => {
          setToSend({ ...toSend, [e.target.name]: e.target.value });
        };

        const onSubmit = (e) => {
            e.preventDefault();
            if(toSend.from_name !== '' || toSend.reply_to !== ''){
                send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                toSend,
                process.env.REACT_APP_PUBLIC_KEY
                )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    let sent = document.getElementById('success');
                    sent.classList.remove('hide')
                    setTimeout(()=>{
                        sent.classList.add('hide')
                    }, 3000)
                    setToSend({ ...toSend, 
                        from_name: '',
                        to_name: 'Corey Arnold',
                        message: '',
                        reply_to: '',
                    });
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                    let sent = document.getElementById('fail');
                    sent.classList.remove('hide')
                    setTimeout(()=>{
                        sent.classList.add('hide')
                    }, 3000)
                });
            }else{
                let sent = document.getElementById('failed');
                sent.classList.remove('hide')
                    setTimeout(()=>{
                        sent.classList.add('hide')
                    }, 5000)
            }
        };

        
    return(
        <section data-aos="fade-up"  className="contact" id="contact">
           
            <div className="header-container">
            <h1>Get in Touch</h1>
            </div>
            <h5 id="success"
             className='hide'>Success!</h5>
            <h5 id="fail" className='hide' >Please try your message again</h5>
            <h5 id="failed" className='hide' >Please make sure your Name is at least 3 characters and your email is at least 10 characters.</h5>
            <div className="contact-inner-container">
                <form className="contact-form" onSubmit={onSubmit}>
                    <input
                        id='name'
                        minLength={3}
                        type='text'
                        name='from_name'
                        placeholder='Name'
                        value={toSend.from_name}
                        onChange={handleChange}

                    />
                    <input 
                        id='message'
                        type='text'
                        name='message'
                        placeholder='Your message'
                        value={toSend.message}
                        onChange={handleChange}
                    />
                    <input
                        id='email'
                        minLength={10}
                        type='email'
                        name='reply_to'
                        placeholder='Email'
                        value={toSend.reply_to}
                        onChange={handleChange}
                    />
                    <button onClick={onSubmit} type='submit'>Submit</button>
                </form>
            </div>
        </section>
    )
}