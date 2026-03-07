function Contact(){

return(

<section id="contact" className="p-5">

<div className="container">

<h2 className="text-center mb-4">Contact Us</h2>

<form className="w-50 mx-auto">

<input
type="text"
className="form-control mb-3"
placeholder="Your Name"
/>

<input
type="email"
className="form-control mb-3"
placeholder="Your Email"
/>

<textarea
className="form-control mb-3"
placeholder="Your Message"
></textarea>

<button className="btn btn-warning w-100">
Send Message
</button>

</form>

</div>

</section>

)

}

export default Contact