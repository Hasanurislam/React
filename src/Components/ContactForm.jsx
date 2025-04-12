import React, { useState } from 'react'
import Button from './Button'
import { MdOutlineMessage } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import styles from './ContactForm.module.css'
import { MdEmail } from "react-icons/md";
function ContactForm() {
  
  
  const [name,Setname]=useState("Hasanur Islam");
  const [email,Setemail]=useState("H@gmail.com");
  const [text,Settext]=useState("hi");

  const onsubmit=(e)=>{
    e.preventDefault();
      Setname(e.target[0].value);
      Setemail(e.target[1].value);
      Settext(e.target[2].value);

  }
  return ( <div>
    <section className={styles.main_Form}>
      <div className={styles.second_Form}>
    <div className={styles.container2}>
        <Button text='VIA SUPPORT CHAT' icons={<MdOutlineMessage/>}/> 
        <Button text='VIA CALL' icons={<FiPhone/>}/> 
    </div>
        <div className={styles.Third_Form}>
        <div>
        <Button isoutline={true} text='VIA EMAIL FORM' icons={<MdEmail/>}/>
        </div>
        <form onSubmit={onsubmit}>

        <div className={styles.inpContainer}>
        <div className={styles.inp}>
          <label>Name</label>
          <input type='name' ></input>
        </div>
        <div className={styles.inp}>
          <label htmlFor='email'>E-Mail</label>
          <input type='email' ></input>
        </div>
        <div className={styles.inp} >
          <label htmlFor='text'>Text</label>
          <textarea  rows={8} className={styles.text_inp}></textarea>
          <div className={styles.submit_btn}>
         <Button text='SUBMIT'  />
          </div>
          
          </div>
          
        </div>
        </form>
        </div> 
        </div>
        <div>

          <img src='./public/Service 24_7-pana 1.png'></img>
        </div>
        
    </section>
    <div className={styles.output}>{name +" "+email+"  "+ text}</div>
    </div>
    
  )
}

export default ContactForm