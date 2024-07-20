const Contact=()=>{
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <input type="text" className="border border-black p-2 m-4" placeholder="name"/>
                <input type="text" className="border border-black p-2 m-4" placeholder="message"/>
                <button className="border border-black p-2 m-4 bg-gray-100 rounded-lg">Submit</button>
            </form>
        </div>
    );
};

export default Contact;