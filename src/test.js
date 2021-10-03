const a = {
    "@context": "https://schema.iot.webizing.org/",
    "@type": [
        "AirQuality"
    ],
    "id": "https://.../td/AirQuality",
    "name": "Air Quality Sensor",
    "names": "",
    "description": "공기질 로깅 ex)Foobot(5분 주기로 데이터를 가져옴)",
    "properties": {
        "name": {
            "@type": "name",
            "type": "string",
            "title": "Name",
            "description": "name of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {name}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        },
        "user": {
            "@type": "user",
            "type": "string",
            "title": "User",
            "description": "user of the sensor - format: firstName+LastName ex)jonghoLee, wanhoIm",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {user}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        },
        "address": {
            "@type": "address",
            "type": "string",
            "title": "Address",
            "description": "building where the sensor resides - format: organization-building ex)yongjaelee-house, kist-l1, kist-l8",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {address}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        },
        "room": {
            "@type": "room",
            "type": "string",
            "title": "Room",
            "description": "room number of the building where the sensor resides - ex) L8321",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {room}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        },
        "location": {
            "@type": "location",
            "type": "string",
            "title": "Location",
            "description": "location of the sensor - format: free",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {location}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        },
        "time": {
            "@type": "time",
            "type": "string",
            "title": "Time",
            "description": "time at which the data measurement was made - ex)\"2017-05-30T18:54:20+09:00\"",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {time}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        },
        "humidity": {
            "@type": "humidity",
            "type": "number",
            "title": "Humidity",
            "description": "습도 - unit: %",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {humidity}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        },
        "temp": {
            "@type": "temp",
            "type": "number",
            "title": "Temp",
            "description": "temperature - unit: Celsius(℃)",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {temp}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        },
        "particle": {
            "@type": "particle",
            "type": "number",
            "title": "Particle",
            "description": "pm2.5 - unit: ㎍/㎥",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {particle}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        },
        "co2": {
            "@type": "co2",
            "type": "number",
            "title": "Co2",
            "description": "이산화탄소 - unit: ppm",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {co2}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        },
        "voc": {
            "@type": "voc",
            "type": "number",
            "title": "Voc",
            "description": "휘발성 유기 화합물 - unit: ppb",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {voc}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        },
        "pollution": {
            "@type": "pollution",
            "type": "number",
            "title": "Pollution",
            "description": "미세먼지 - unit: TBD",
            "forms": [
                {
                    "href": "http://localhost:3000/graphql?query={ airQuality {pollution}}",
                    "contentType": "application/json",
                    "op": [
                        "readproperty"
                    ],
                    "secure": "nosec_sc"
                }
            ],
            "readOnly": true,
            "observable": false,
            "writeOnly": false
        }
    },
    "forms": [
        {
            "href": "http://localhost:3000/graphql?query={ airQuality {name user   address    room   location    time    humidity    temp   particle   co2    voc    pollution  }}",
            "contentType": "application/json",
            "op": [
                "readallproperties"
            ],
            "secure": "nosec_sc"
        }
    ],
    "securityDefinitions": {
        "nosec_sc": {
            "scheme": "nosec",
            "description": "no security"
        }
    },
    "security": [
        "nosec_sc"
    ],
    "version": {
        "instance": "0.0.1"
    }
};

function convertToArray(obj) {
    let output = [];

    for (const key of Object.keys(obj)){
        output.push(
            {
                property: key,
                type: obj[key].type,
                description: obj[key].description,
                readOnly: obj[key].readOnly
            }
        )
    }

    return output;

}

console.log(convertToArray(a.properties));