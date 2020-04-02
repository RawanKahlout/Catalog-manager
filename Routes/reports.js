module.exports = (app) => {
    app.get('/api/uploadProduectReport', async (req, res) => {
        myRes = {
            "totalproccessedarticles": "43 out of: 43",
            "totalproccessedskus": "292 out of: 292",
            "rejectedskus": {
                "duplicate": {
                    "articles": [
                    "369486-r",
                    "1010570-12N-r",
                    "1010747-71S-r",
                    "H7M4L-0202"
                    ],
                    "rows": []
                },
                "notFound": {
                    "skus": [
                    "369486-r",
                    "1010570-12N-r",
                    "1010747-71S-r",
                    "H7M4L-0202"],
                    "rows": []
                }
            },
            "rejectedarticles": {
                "duplicate": {
                    "articles": [ "369486-r",
                    "1010570-12N-r",
                    "1010747-71S-r",
                    "H7M4L-0202"],
                    "rows": []
                },
                "noSkus": {
                    "articles": [
                        "369486-03",
                        "1010570-12N-2",
                        "1010747-71S-1",
                        "H7M4L-0202",
                    ],
                    "rows": [
                        2
                    ]
                }

            },
            "unknownfailure": [
                {
                    "code": "ER_SIGNAL_EXCEPTION",
                    "sqlMessage": "69736|369486-03 already exist",
                    "errno": "69736",
                    "sql": "CALL add_configurable_product('system', '{\"article\":\"369486-03\",\"name\":\"Nova-90S-Bloc-White\",\"categories\":[\"58\",\"60\"],\"brand\":9,\"type\":133,\"color\":\"Black/Acid Lime\",\"price\":425,\"virtuals\":[{\"sku\":\"4060979051560\",\"size\":14,\"quantity\":0,\"price\":425},{\"sku\":\"4060979051539\",\"size\":70,\"quantity\":0,\"price\":425},{\"sku\":\"4060979050921\",\"size\":37,\"quantity\":0,\"price\":425},{\"sku\":\"4060979051355\",\"size\":27,\"quantity\":0,\"price\":425},{\"sku\":\"4060979051201\",\"size\":17,\"quantity\":0,\"price\":425}],\"gender\":137,\"description\":{\"html\":{\"arabic\":\"\",\"english\":\"\"},\"plain\":{\"arabic\":\"\",\"english\":\"\"}}}');",
                    "key": "369486-03"
                  },
                  {
                    "code": "ER_LOCK_DEADLOCK",
                    "sqlMessage": "Deadlock found when trying to get lock; try restarting transaction",
                    "errno": false,
                    "sql": "CALL add_configurable_product('system', '{\"article\":\"1010747-71S-1\",\"name\":\"Disruptor-P-Low\",\"categories\":[\"58\",\"60\"],\"brand\":152,\"type\":133,\"color\":\"Birch\",\"price\":525,\"virtuals\":[{\"sku\":\"8719477237940\",\"size\":38,\"quantity\":0,\"price\":525},{\"sku\":\"8719477237957\",\"size\":17,\"quantity\":0,\"price\":525},{\"sku\":\"8719477237964\",\"size\":43,\"quantity\":0,\"price\":525},{\"sku\":\"8719477238039\",\"size\":14,\"quantity\":0,\"price\":525},{\"sku\":\"8719477238015\",\"size\":27,\"quantity\":0,\"price\":525}],\"gender\":137,\"description\":{\"html\":{\"arabic\":\"\",\"english\":\"\"},\"plain\":{\"arabic\":\"\",\"english\":\"\"}}}');",
                    "key": "1010747-71S-1"
                  },

            ],
            "fail": [
                {
                    "code": "ER_SIGNAL_EXCEPTION",
                    "sqlMessage": "69736|369486-03 already exist",
                    "errno": "69736",
                    "sql": "CALL add_configurable_product('system', '{\"article\":\"369486-03\",\"name\":\"Nova-90S-Bloc-White\",\"categories\":[\"58\",\"60\"],\"brand\":9,\"type\":133,\"color\":\"Black/Acid Lime\",\"price\":425,\"virtuals\":[{\"sku\":\"4060979051560\",\"size\":14,\"quantity\":0,\"price\":425},{\"sku\":\"4060979051539\",\"size\":70,\"quantity\":0,\"price\":425},{\"sku\":\"4060979050921\",\"size\":37,\"quantity\":0,\"price\":425},{\"sku\":\"4060979051355\",\"size\":27,\"quantity\":0,\"price\":425},{\"sku\":\"4060979051201\",\"size\":17,\"quantity\":0,\"price\":425}],\"gender\":137,\"description\":{\"html\":{\"arabic\":\"\",\"english\":\"\"},\"plain\":{\"arabic\":\"\",\"english\":\"\"}}}');",
                    "key": "369486-03"
                  },
                  {
                    "code": "ER_LOCK_DEADLOCK",
                    "sqlMessage": "Deadlock found when trying to get lock; try restarting transaction",
                    "errno": false,
                    "sql": "CALL add_configurable_product('system', '{\"article\":\"1010747-71S-1\",\"name\":\"Disruptor-P-Low\",\"categories\":[\"58\",\"60\"],\"brand\":152,\"type\":133,\"color\":\"Birch\",\"price\":525,\"virtuals\":[{\"sku\":\"8719477237940\",\"size\":38,\"quantity\":0,\"price\":525},{\"sku\":\"8719477237957\",\"size\":17,\"quantity\":0,\"price\":525},{\"sku\":\"8719477237964\",\"size\":43,\"quantity\":0,\"price\":525},{\"sku\":\"8719477238039\",\"size\":14,\"quantity\":0,\"price\":525},{\"sku\":\"8719477238015\",\"size\":27,\"quantity\":0,\"price\":525}],\"gender\":137,\"description\":{\"html\":{\"arabic\":\"\",\"english\":\"\"},\"plain\":{\"arabic\":\"\",\"english\":\"\"}}}');",
                    "key": "1010747-71S-1"
                  },


            ],
            "sentproducts": {
                "369486-03": {
                    "article": "369486-03",
                    "name": "Nova-90S-Bloc-White",
                }
            },
            "success": [],
        };
        res.json(myRes);
    })
}