const baseurl = "http://localhost:8088/"

export default {
    getMessages() {
        return fetch(`${baseurl}/messages?_expand=user`)
            .then(Response => Response.json())
    },
    saveMessages(){
        return fetch(`${baseurl}/messages`,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify()
        })
    }
}