<template>
  <div class="form-contain">
    <div v-if="congrats" class="congrats">
        Thank you for your inquiry, we will get in touch soon!
    </div>
    <form ref="incForm" @submit.prevent="handleSubmit">
        <label>Your Name:</label>
        <input type="text" required v-model="subjectName">

        <label>Your Comapny:</label>
        <input type="text" required v-model="company">

        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Inquiry:</label>
        <textarea name="message" rows="5" cols="50" required v-model="message"></textarea>

        <div class="submit">
            <button>Submit</button>
        </div>
    </form>    
  </div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '@/firebase'

export default {
    data() {
        return {
            email: '',
            subjectName: '',
            company: '',
            message: '',
            congrats: false
        }
    },
    methods: {
        async handleSubmit() {
           try {
            const docRef = await addDoc(collection(db, "users"), {
                name: this.subjectName,
                email: this.email,
                company: this.company,
                message: this.message
            })
            console.log("Document written with ID: ", docRef.id)
            this.email = ''
            this.subjectName = '' 
            this.company = ''
            this.message = ''
            this.congrats = true
            setTimeout(() =>{this.congrats = false}, 5000)
            } catch (e) {
            console.error("Error adding document: ", e)
            }
        }
    }
}
</script>

<style>
    form {
        max-width:420px;
        background:#fff;
        border:1px solid #eee;
        text-align:left;
        padding:20px;
        border-radius:10px;
        margin: 0 auto;
    }
    label {
        color:#aaa;
        display: inline-block;
        margin:25px 0 15px;
        font-size:0.6em;
        text-transform:uppercase;
        letter-spacing:1px;
        font-weight: bold;
    }
    input, select {
        display: block;
        padding:10px 6px;
        width:100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    
    button {
        background:#0b6dff;
        border:0;
        padding: 10px 20px;
        margin-top: 20px;
        color:#fff;
        border-radius: 20px;
    }
    .submit {
        text-align:center;
    }
    .form-contain {
        position:relative;
    }
    .congrats {
        position:absolute;
        top:0;
        width:100%;
        font-size:30px;
        background-color: #eee;
        padding:30px;
        border-radius:8px;
    }
</style>
