import React, { useEffect, useState } from "react"




export default function Trav() {



    //fetch pihole data
    const url = 'http://10.24.24.112/admin/api.php?summary&auth=ca070dc73175206fd289ecf8e992614289b7db7a046f1f71c709c77f704008e3'
    const url2 = "https://10.24.24.22:8006/api2/json/"
    const url3 = "https://catfact.ninja/docs/api-docs.json"
    const [pihole, setPihole] = useState([])


    async function fetchPihole(myurl) {
        console.log('url', myurl)
        const response = await fetch(myurl, { mode: "no-cors" })
        console.log('response', response)
        const data = await response.text() 
        console.log('data', data)
        setPihole(data)
    }

    useEffect(() => {
        fetchPihole(url3)
    }, [])

   

    console.log('pismell', pihole)


    //render

    return <div className="trav-page">


        <div className="main-buttons">
            <ul className="trav-buttons">
                <li>
                    <a href="https://proxmox.ttguitarnoob.cloud" target="blank">
                        <div className="dash-items">
                            <div className="button-content">
                                {/* <i data-src="../public/Icons/proxmox_logo_icon_144960.svg"></i> */}
                                <svg className="button-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <path fill="#bcc4f0" d="M6.573 2.432c-1.453 0.74-1.453 0.854-0.094 2.375 7.536 8.391 9.339 10.375 9.474 10.375 0.188 0.021 10.63-11.391 10.745-11.734 0.047-0.094-0.276-0.417-0.693-0.714-0.552-0.417-1.151-0.578-2.281-0.625-2.12-0.135-2.859 0.323-5.49 3.276-1.198 1.333-2.214 2.443-2.214 2.443-0.021 0-1.010-1.083-2.188-2.396s-2.536-2.63-2.995-2.885c-1.063-0.599-3.229-0.646-4.271-0.115zM1.729 5.823c-1.13 0.438-1.729 0.854-1.729 1.172 0 0.161 1.776 2.24 3.922 4.615 2.167 2.375 3.917 4.359 3.917 4.401 0 0.047-1.776 2.031-3.922 4.406-2.167 2.396-3.896 4.495-3.87 4.677 0.115 0.625 2.005 1.411 3.385 1.411 2.24-0.026 2.745-0.417 7.474-5.604 2.375-2.604 4.307-4.818 4.307-4.891 0-0.089-1.911-2.255-4.26-4.839-3.068-3.344-4.568-4.844-5.281-5.167-1.083-0.531-2.833-0.62-3.943-0.182zM26.354 5.984c-0.672 0.344-2.354 2.005-5.26 5.188-2.349 2.583-4.266 4.75-4.266 4.839 0 0.094 1.938 2.286 4.313 4.891 4.724 5.188 5.234 5.578 7.469 5.604 1.385 0 3.276-0.786 3.391-1.411 0.021-0.208-1.708-2.281-3.875-4.656-2.141-2.37-3.917-4.38-3.917-4.427 0-0.042 1.776-2.052 3.917-4.427 2.167-2.37 3.896-4.448 3.875-4.63-0.115-0.599-1.823-1.292-3.297-1.385-1.063-0.047-1.615 0.047-2.349 0.417zM10.604 22.63c-2.859 3.161-5.208 5.833-5.255 5.948-0.047 0.094 0.276 0.417 0.693 0.714 0.552 0.417 1.151 0.578 2.281 0.625 2.099 0.135 2.88-0.349 5.531-3.344 1.156-1.292 2.146-2.375 2.167-2.375 0.026 0 1.016 1.083 2.193 2.396 2.698 3 3.411 3.438 5.51 3.323 1.13-0.047 1.729-0.208 2.281-0.625 0.417-0.297 0.74-0.62 0.693-0.714-0.115-0.344-10.563-11.76-10.745-11.734-0.094 0-2.49 2.604-5.349 5.786z" />
                                </svg>
                                <h2>Proxmox</h2>

                            </div>
                        </div></a>
                </li>
                <li>
                    <a href="http://10.24.24.112/admin/login.php" target="blank">
                        <div className="dash-items">
                            <div className="button-content">
                                {/* <i data-src="../public/Icons/proxmox_logo_icon_144960.svg"></i> */}
                                <svg className="button-icon" fill="#bcc4f0" width="50" height="50" viewBox="0 0 25 31" role="img" xmlns="http://www.w3.org/2000/svg"><title>Pi-hole icon</title><path d="M9.375,8.782l-4.442,4.44c-1.451,1.45-1.451,3.803,0,5.253l4.442,4.439c1.45,1.449,3.799,1.449,5.249,0l4.442-4.439c1.451-1.45,1.452-3.803,0-5.253l-4.442-4.44C13.175,7.333,10.825,7.333,9.375,8.782z M10.595,7.38C7.597,7.06,4.577,4.794,4.338,0c4.652,0,7.14,2.754,7.38,7.118c0.88-5.234,5.003-4.621,5.003-4.621c0.196,2.966-2.24,4.765-5.003,4.914c-0.776-1.636-5.426-5.648-5.426-5.648C6.287,1.759,6.278,1.759,6.274,1.765C6.271,1.768,6.27,1.774,6.272,1.778C6.272,1.778,10.759,5.687,10.595,7.38 M11.994,17.684c-2.231,0.165-3.212,1.738-3.148,3.274c-0.003-0.036-0.007-0.07-0.009-0.107c-0.133-1.848,1.327-3.21,1.327-5.005c-0.172-2.322-1.869-3.287-3.462-3.133c0.101-0.012,0.204-0.022,0.313-0.028c1.848-0.133,3.212,1.327,5.005,1.327c2.082-0.157,3.074-1.537,3.146-2.969c0.022,1.75-1.331,3.079-1.331,4.81c0.165,2.23,1.736,3.21,3.271,3.148c-0.036,0.003-0.07,0.007-0.107,0.009C15.151,19.144,13.787,17.684,11.994,17.684z" /></svg>
                                <h2>PiHole</h2>

                            </div>
                        </div></a>
                </li>
                <li>
                    <a href="http://10.24.24.1" target="blank">
                        <div className="dash-items">
                            <div className="button-content">
                                {/* <i data-src="../public/Icons/proxmox_logo_icon_144960.svg"></i> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 35 31"><path fill="currentColor" d="M2.013 0C.898 0 0 .929 0 2.044v17.775L3.252 8.27h3.282L6.1 9.785h.063c.186-.217.433-.403.742-.62c.31-.216.62-.402.96-.588c.342-.186.713-.31 1.116-.433c.402-.124.805-.155 1.208-.155c.867 0 1.579.154 2.198.433c.62.279 1.084.712 1.455 1.239c.31.464.5 1.019.593 1.669c.006.06.027.135.027.189c.062.712-.031 1.518-.28 2.385a8.571 8.571 0 0 1-1.02 2.322a9.885 9.885 0 0 1-1.58 1.95a8.125 8.125 0 0 1-2.044 1.364a5.536 5.536 0 0 1-2.354.495a5.655 5.655 0 0 1-1.982-.34c-.588-.217-.99-.62-1.238-1.177h-.062L2.353 24h19.603A2.042 2.042 0 0 0 24 21.956V4.706c-.093-.03-.186-.06-.248-.092a2.771 2.771 0 0 0-.557-.062c-.557 0-1.022.124-1.394.372c-.34.248-.65.743-.867 1.518l-.526 1.826h2.013l.495 1.58l-1.3 1.27h-2.014l-2.446 8.67h-3.53l2.446-8.67h-1.455l.805-2.85h1.425l.557-2.044c.185-.619.403-1.238.681-1.795a4.996 4.996 0 0 1 1.053-1.487c.433-.434.99-.775 1.641-1.022c.65-.248 1.487-.372 2.447-.372c.248 0 .464 0 .712.031A2.082 2.082 0 0 0 21.988 0zm6.565 11.118c-.898 0-1.672.278-2.323.805c-.65.526-1.083 1.239-1.331 2.106c-.248.867-.217 1.579.155 2.105c.31.557.929.805 1.858.805c.898 0 1.672-.278 2.322-.805c.65-.526 1.115-1.238 1.363-2.105c.247-.867.185-1.58-.155-2.106c-.34-.527-.991-.805-1.89-.805Z" /></svg>
                                <h2>PfSense</h2>

                            </div>
                        </div></a>
                </li>
                <li>
                    <a href="https://docs.google.com/spreadsheets/d/1naOVRBDOi6G_Amtr8U06ITkPpGE9vQC9/edit?usp=sharing&ouid=116033080101945418210&rtpof=true&sd=true" target="blank">
                        <div className="dash-items">
                            <div className="button-content">
                                {/* <i data-src="../public/Icons/proxmox_logo_icon_144960.svg"></i> */}
                                <svg className="button-icon" fill="#bcc4f0" width="50" height="50" viewBox="0 0 25 31" role="img" xmlns="http://www.w3.org/2000/svg"><title>Pi-hole icon</title><path d="M9.375,8.782l-4.442,4.44c-1.451,1.45-1.451,3.803,0,5.253l4.442,4.439c1.45,1.449,3.799,1.449,5.249,0l4.442-4.439c1.451-1.45,1.452-3.803,0-5.253l-4.442-4.44C13.175,7.333,10.825,7.333,9.375,8.782z M10.595,7.38C7.597,7.06,4.577,4.794,4.338,0c4.652,0,7.14,2.754,7.38,7.118c0.88-5.234,5.003-4.621,5.003-4.621c0.196,2.966-2.24,4.765-5.003,4.914c-0.776-1.636-5.426-5.648-5.426-5.648C6.287,1.759,6.278,1.759,6.274,1.765C6.271,1.768,6.27,1.774,6.272,1.778C6.272,1.778,10.759,5.687,10.595,7.38 M11.994,17.684c-2.231,0.165-3.212,1.738-3.148,3.274c-0.003-0.036-0.007-0.07-0.009-0.107c-0.133-1.848,1.327-3.21,1.327-5.005c-0.172-2.322-1.869-3.287-3.462-3.133c0.101-0.012,0.204-0.022,0.313-0.028c1.848-0.133,3.212,1.327,5.005,1.327c2.082-0.157,3.074-1.537,3.146-2.969c0.022,1.75-1.331,3.079-1.331,4.81c0.165,2.23,1.736,3.21,3.271,3.148c-0.036,0.003-0.07,0.007-0.107,0.009C15.151,19.144,13.787,17.684,11.994,17.684z" /></svg>
                                <h2>Schedule</h2>

                            </div>
                        </div></a>
                </li>
                <li>
                    <a href="http://10.24.24.45" target="blank">
                        <div className="dash-items">
                            <div className="button-content">
                                {/* <i data-src="../public/Icons/proxmox_logo_icon_144960.svg"></i> */}
                                <svg className="button-icon" fill="#bcc4f0" width="50" height="50" viewBox="0 0 25 31" role="img" xmlns="http://www.w3.org/2000/svg"><title>Pi-hole icon</title><path d="M9.375,8.782l-4.442,4.44c-1.451,1.45-1.451,3.803,0,5.253l4.442,4.439c1.45,1.449,3.799,1.449,5.249,0l4.442-4.439c1.451-1.45,1.452-3.803,0-5.253l-4.442-4.44C13.175,7.333,10.825,7.333,9.375,8.782z M10.595,7.38C7.597,7.06,4.577,4.794,4.338,0c4.652,0,7.14,2.754,7.38,7.118c0.88-5.234,5.003-4.621,5.003-4.621c0.196,2.966-2.24,4.765-5.003,4.914c-0.776-1.636-5.426-5.648-5.426-5.648C6.287,1.759,6.278,1.759,6.274,1.765C6.271,1.768,6.27,1.774,6.272,1.778C6.272,1.778,10.759,5.687,10.595,7.38 M11.994,17.684c-2.231,0.165-3.212,1.738-3.148,3.274c-0.003-0.036-0.007-0.07-0.009-0.107c-0.133-1.848,1.327-3.21,1.327-5.005c-0.172-2.322-1.869-3.287-3.462-3.133c0.101-0.012,0.204-0.022,0.313-0.028c1.848-0.133,3.212,1.327,5.005,1.327c2.082-0.157,3.074-1.537,3.146-2.969c0.022,1.75-1.331,3.079-1.331,4.81c0.165,2.23,1.736,3.21,3.271,3.148c-0.036,0.003-0.07,0.007-0.107,0.009C15.151,19.144,13.787,17.684,11.994,17.684z" /></svg>
                                <h2>WiFi</h2>

                            </div>
                        </div></a>
                </li>
                <li>
                    <a href="http://10.24.24.47:32400/web/" target="blank">
                        <div className="dash-items">
                            <div className="button-content">
                                {/* <i data-src="../public/Icons/proxmox_logo_icon_144960.svg"></i> */}
                                <svg className="button-icon" fill="#bcc4f0" width="50" height="50" viewBox="0 0 25 31" role="img" xmlns="http://www.w3.org/2000/svg"><title>Pi-hole icon</title><path d="M9.375,8.782l-4.442,4.44c-1.451,1.45-1.451,3.803,0,5.253l4.442,4.439c1.45,1.449,3.799,1.449,5.249,0l4.442-4.439c1.451-1.45,1.452-3.803,0-5.253l-4.442-4.44C13.175,7.333,10.825,7.333,9.375,8.782z M10.595,7.38C7.597,7.06,4.577,4.794,4.338,0c4.652,0,7.14,2.754,7.38,7.118c0.88-5.234,5.003-4.621,5.003-4.621c0.196,2.966-2.24,4.765-5.003,4.914c-0.776-1.636-5.426-5.648-5.426-5.648C6.287,1.759,6.278,1.759,6.274,1.765C6.271,1.768,6.27,1.774,6.272,1.778C6.272,1.778,10.759,5.687,10.595,7.38 M11.994,17.684c-2.231,0.165-3.212,1.738-3.148,3.274c-0.003-0.036-0.007-0.07-0.009-0.107c-0.133-1.848,1.327-3.21,1.327-5.005c-0.172-2.322-1.869-3.287-3.462-3.133c0.101-0.012,0.204-0.022,0.313-0.028c1.848-0.133,3.212,1.327,5.005,1.327c2.082-0.157,3.074-1.537,3.146-2.969c0.022,1.75-1.331,3.079-1.331,4.81c0.165,2.23,1.736,3.21,3.271,3.148c-0.036,0.003-0.07,0.007-0.107,0.009C15.151,19.144,13.787,17.684,11.994,17.684z" /></svg>
                                <h2>Plex</h2>

                            </div>
                        </div></a>
                </li>

            </ul>
        </div>
    </div>

}