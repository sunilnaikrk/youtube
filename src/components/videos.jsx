// to type `sfc` for content

import { useState,useEffect } from "react";
import '../styles/videos.css'

const Videos = () => {
    // let [video, setVideo] = useState([
    //     {
    //         thumbnail: "https://i.ytimg.com/vi/IMdmCxH0uq0/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLC7N3fqgFEm676bAOx_4r5RLjIjSA",
    //         title: "O Bedardeya Tu Jhoothi Main Makkaar | Ranbir, Shraddha | Pritam,Arijit Singh, Amitabh B",
    //         channel: "zee kannada",
    //         views: "8.9M",
    //         id: 1
    //     },
    //     {
    //         "thumbnail": "https://i.ytimg.com/vi/0n7AWxYCj9I/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDUChiH24-GK6MgafIoIeMz8AMZ1A",
    //         "title": "Na Roja Nuvve | Kushi | Vijay Deverakonda | Samantha Ruth Prabhu | Hesham Abdul Wahab | Lyrical",
    //         "channel": "udaya",
    //         "views": "7.6M",
    //         "id": 2
    //     }, {
    //         "thumbnail": "https://i.ytimg.com/vi/yCbc99l0CJU/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBRGe4zVxd8ObXeJpPyMFF2WaJTmg",
    //         "title": "Prana Snehitha Kannada Movie Back To Back Comedy Scenes | Shankarnag, Ramakrishna, Bhavya, Dinesh",
    //         "channel": "colors",
    //         "views": "8.9M",
    //         "id": 3
    //     }, {
    //         "thumbnail": "https://i.ytimg.com/vi/91RtI6ZG2bc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAg_x_qHWA2bLlgIlt9CWKj5bUcOg",
    //         "title": "Bholaa Mania Lyrical Video | BholaaShankar | Mega Star Chiranjeevi |Meher Ramesh| Mahati Swara Sagar",
    //         "channel": "kasturi",
    //         "views": "9.0M",
    //         "id": 4
    //     }, {
    //         "thumbnail": "https://i.ytimg.com/vi/u_HxDGOv_gM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDZFqXm_BLCfjBYmwLjq1KLOVMfuA",
    //         "title": "Ram Siya Ram (Audio) Adipurush | Prabhas | Sachet-Parampara, Manoj Muntashir S | Om Raut | Bhushan K",
    //         "channel": "maa",
    //         "views": "9.3M",
    //         "id": 5
    //     }, {
    //         "thumbnail": "https://i.ytimg.com/vi/eBMxIV-0rvE/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCEBCwxyFXMKF_ZfP5TlrVH6fxlXA",
    //         "title": "Non Stop Love Mashup 2023 || Best Of Arijit Singh Jubin Nautiyal |Night Drive Mashup |",
    //         "channel": "gemini",
    //         "views": "8.4M",
    //         "id": 6
    //     }, {
    //         "thumbnail": "https://i.ytimg.com/vi/gKizDojsdvs/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCD3Fio2ZpHNst2bf-RU6kcb3kyWg",
    //         "title": "KGF (4K Quality) Full Movie | Yash Blockbuster Movie | Srinidhi Shetty, Ananth Nag, Ramachandra Raju",
    //         "channel": "Kannada",
    //         "views": "10.1M",
    //         "id": 7
    //     }, {
    //         "thumbnail": "https://i.ytimg.com/vi/q5G0VQ9_S_Y/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCXX512I_LoWeSrLMUrrspYcGcAVw",
    //         "title": "POWERFUL SHIVA mantra to remove negative energy - Shiva Dhyana Mantra (Mahashivratri Chant) - 3 hrs",
    //         "channel": "bengalore",
    //         "views": "11.2M",
    //         "id": 8
    //     }, {
    //         "thumbnail": "https://i.ytimg.com/vi/V-n_w4t9eEU/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBbH14XrJ5HjRscKLz5gQVuNGUUIA",
    //         "title": "Guntur Kaaram - Highly Inflammable Mass Strike | Mahesh Babu | Thaman S | Trivikram",
    //         "channel": "Mahesh",
    //         "views": "36.8M",
    //         "id": 9
    //     }, {
    //         "thumbnail": "https://i.ytimg.com/vi/Qk3ULdnHo6U/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLAzLkoo6XvhTUc1xjexGMlcq46Pdw",
    //         "title": "MS Dhoni Bowling, Virat Kohli Wicket Keeping | BLACKCAPS v India | 2nd Test, Basin Reserve, 2014",
    //         "channel": "MSD",
    //         "views": "89.0M",
    //         "id": 10
    //     }, {
    //         "thumbnail": "https://i.ytimg.com/vi/7jJIaVgQZdg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBkb094TZCgn9XLR3wqZbiFeDcqsg",
    //         "title": "Indian Fielders 10 Amazing Catches In Cricket 🦅",
    //         "channel": "sachin",
    //         "views": "89.8M",
    //         "id": 11
    //     }, {
    //         "thumbnail": "https://i.ytimg.com/vi/3WiIvCd3tos/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBazm_if0TCFIOtSEYQCEBE3UiwxA",
    //         "title": "Non Stop Mind Relaxing Songs||Lofi+Slowed+Reverb ||#lofimusic #mashup||",
    //         "channel": "Appu",
    //         "views": "99.0M",
    //         "id": 12
    //     }
    // ])
    // let [shorts, setShorts] = useState([
    //     {
    //         "thumbnail": "https://i.ytimg.com/vi/wRe_e8VNJZQ/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLAjaR3xB0dYYD9t1jqeztYG1XMncA",
    //         "title": "Malama pitha pithadhe 💃💃",
    //         "channel": "Kannada kasturi",
    //         "views": "1.6M"
    //     },
    //     {
    //         "thumbnail": "https://i.ytimg.com/vi/AOgXa1KXG68/hq720.jpg?sqp=-…AHAAQbQAQE=&rs=AOn4CLCwj_czd5kVu4aVSTutAMP9pTZpTw",
    //         "title": "the boys meme Kohli #viral #tiktok #shorts #virat kholi",
    //         "channel": "telugu",
    //         "views": "1.3M"
    //     },
    //     {
    //         "thumbnail": "https://i.ytimg.com/vi/7JykcSXpMpQ/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLANqollqLyvLDiMPMYRXfVHCr3a4g",
    //         "title": "Sreeleela so cute 😍 Pink Saree",
    //         "channel": "kannada",
    //         "views": "3.6M"
    //     },
    //     {
    //         "thumbnail": "https://i.ytimg.com/vi/pD7KLFX4SdI/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLCpCP9ExBemlxuxJcBr56GNfYLxAQ",
    //         "title": "Most popular video by #movethedancespace |Manohari Medhavi mishra choreography| #bellydance #shorts",
    //         "channel": "colors",
    //         "views": "1.5M"
    //     },
    //     {
    //         "thumbnail": "https://i.ytimg.com/vi/V0ca2_qeMTA/oar2.jpg?sqp=-o…IhCcAHAAQY=&rs=AOn4CLC81M3Js_WHrH5_xwkUQYZOxwsSsg",
    //         "title": "Actress Sayyesha Arya with her Cute",
    //         "channel": "zee kannada",
    //         "views": "2.4M"
    //     },
    //     {
    //         "thumbnail": "https://i.ytimg.com/vi/FwkIDh4OmV8/oar2.jpg",
    //         "title": "Vagdevi Telugu Indian Idol | Saran",
    //         "channel": "kannada",
    //         "views": "1.1M"
    //     }
    // ])
    let [video,setVideo] = useState([])
    let [short,setShort] = useState([])

    useEffect(()=>{
        let fetchData = async() =>{
            let response = await fetch('http://localhost:4000/videos')
            let data = await response.json()
            setVideo(data)
            
            let response1 = await fetch('http://localhost:4000/shorts')
            let data1 = await response1.json()
            setShort(data1)
        }
        fetchData()
    })

  



    let removeVideo = (id, name) => {

        fetch(`http://localhost:4000/videos/${id}`,{
            method:'DELETE'
        })
        alert(`${name} video got deleted`)

        // let result = video.filter((x) => x.id !== id)
        // setVideo(result)
        // alert(`${name} video got removed`)
    }

    return (
        <div className="videos">
            <h1>Featured videos</h1>

            <div className="videodata">
                {video.map((data) => {

                    return (
                        <div className="video">
                            <img src={data.thumbnail} alt="" />
                            <div className="details">
                                <h3>{data.title}</h3>
                                <p>{data.channel} </p>
                                <p>{data.views} </p>
                                <a onClick={() => removeVideo(data.id, data.channel)}>Remove</a>
                            </div>

                        </div>
                    )
                })}
            </div>

            <div className="shorts">
                <h1>shorts</h1>
                <div className="shortvideo">
                    {short.map((reels) => {

                        return (
                            <div className="reels">
                                <img src={reels.thumbnail} alt="" />
                                <div className="shdetails">
                                    <h3>{reels.title} </h3>
                                    <p>{reels.channel} </p>
                                    <p>{reels.views} </p>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </div>

    );
}

export default Videos;