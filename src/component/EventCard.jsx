export default function EventCard({item}){

/**
     *   {
			"id": "meet010",
      "title": "Music Festival",
      "eventStartTime": "2023-08-20T16:00:00",
      "eventEndTime": "2023-08-20T23:00:00",
      "location": "Zoom Event",
      "address": "",
      "eventThumbnail": "https://i.postimg.cc/VNLh5bgr/event-492294898.jpg",
      "eventDescription": "Immerse yourself in a day filled with live music performances from various genres at the Music Festival hosted by the Music Society. This online festival, taking place on September 20th from 4:00 PM to 11:00 PM, promises a memorable experience for music enthusiasts. The event is free and open to individuals aged 16 and above. The dress code is casual.",
      "hostedBy": "Music Society",
      "eventType": "Online",
      "isPaid": false,
      "eventTags": ["music", "festival"],
      "speakers": [],
      "price": "Free",
      "additionalInformation": {
        "dressCode": "Casual",
        "ageRestrictions": "16 and above"
      }
     */

return <div className="max-w-[20%] p-2 bg-white text-left rounded-lg">
<span className="absolute bg-white p-1 rounded-lg ml-1 mt-1">{item?.eventType} Event</span>
<img src={item?.eventThumbnail} alt="" className="w-full h-52 object-cover rounded-lg" />
<small>{item?.eventStartTime}</small>
<h3 className="font-bold text-2xl">{item.title}</h3>
</div>
}