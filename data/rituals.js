// 캐릭터별 의식 레벨에 따른 행동 패턴 정의
const ritualPatterns = {
"아야카": [
    {
    level: "6",  // 단일 의식
    pattern: [
        [
        { order: 0, type: "HIGHLIGHT" },
        { order: 1, type: "스킬3" }
        ],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }]
    ]
    },
    {
    level: "1-5",  // 의식 범위
    pattern: [
        [
        { order: 0, type: "HIGHLIGHT" },
        { order: 1, type: "스킬1" }
        ],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }]
    ]
    },
    {
    level: "0",  
    pattern: [
        [{ type: "스킬2" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }]
    ]
    }
],
"카스미": [
    {
    level: "0-5", 
    pattern: [
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [
        { order: 0, type: "HIGHLIGHT" },
        { order: 1, type: "HIGHLIGHT" },
        { order: 1, type: "스킬3" }
        ],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [
        { order: 0, type: "HIGHLIGHT" },
        { order: 1, type: "HIGHLIGHT" },
        { order: 1, type: "스킬3" }
        ]
    ]
    },
    {
    level: "6",  // 의식 범위
    pattern: [
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [
        { order: 0, type: "HIGHLIGHT" },
        { order: 1, type: "HIGHLIGHT" },
        { order: 1, type: "HIGHLIGHT" },
        { order: 1, type: "스킬3" }
        ],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [
        { order: 0, type: "HIGHLIGHT" },
        { order: 1, type: "HIGHLIGHT" },
        { order: 1, type: "HIGHLIGHT" },
        { order: 1, type: "스킬3" }
        ]
    ]
    }
],
"후타바": [
    {
    level: "0-6",  
    pattern: [
        [],
        [{ order: 0, type: "스킬1" }],
        [{ order: 0, type: "스킬3" }],
        [],
        [{ order: 0, type: "스킬1" }],
        [{ order: 0, type: "스킬3" }]
    ]
    }
],
"야오링·사자무": [
    {
    level: "0",  
    pattern: [
        [{ type: "스킬1" }],
        [
        { order: 1, type: "스킬3" },
        { order: 1, type: "근접" }
        ],
        [{ type: "스킬1" }],
        [
        { order: 1, type: "스킬3" },
        { order: 1, type: "근접" }
        ],
        [{ type: "스킬1" }],
        [
        { order: 1, type: "스킬3" },
        { order: 1, type: "근접" }
        ]
    ]
    },
    {
    level: "1-5",  
    pattern: [
        [{ type: "스킬1" }],
        [
        { order: 1, type: "스킬3" },
        { order: 1, type: "근접" }
        ],
        [{ type: "근접" }],
        [{ type: "스킬1" }],
        [
        { order: 1, type: "스킬3" },
        { order: 1, type: "근접" }
        ],
        [{ type: "근접" }]
    ]
    },
    {
    level: "6",  
    pattern: [
        [
        { order: 1, type: "스킬3" },
        { order: 1, type: "스킬1" }
        ],
        [{ type: "근접" }],
        [{ type: "근접" }],
        [{ type: "근접" }],
        [{ type: "근접" }],
        [{ type: "근접" }]
    ]
    }
],
"리코·매화": [
    {
    level: "0-5",  
    pattern: [
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }]
    ]
    },
    {
    level: "6",  
    pattern: [
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }]
    ]
    }
],
"키라": [
    {
    level: "6",  
    pattern: [
        [{ type: "스킬1" }],
        [
        { order: 1, type: "스킬3" },
        { order: 1, type: "스킬1" }
        ],
        [
        { order: 1, type: "스킬3" },
        { order: 1, type: "스킬1" }
        ],
        [
        { order: 1, type: "스킬3" },
        { order: 1, type: "스킬1" }
        ],
        [
        { order: 1, type: "스킬3" },
        { order: 1, type: "스킬1" }
        ],        
        [
        { order: 1, type: "스킬3" },
        { order: 1, type: "스킬2" }
        ]   
    ]
    }
],
"모토하·여름": [
    {
    level: "0",  
    pattern: [
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬1" }]
    ]
    },
    {
    level: "1-6",  
    pattern: [
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }]
    ]
    }
],
"토모코·여름": [
    {
    level: "0-6",  
    pattern: [
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }]
    ]
    }
],
"몽타뉴·여름": [
    {
    level: "0-5",  
    pattern: [
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }]
    ]
    },
    {
    level: "6",  
    pattern: [
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬1" }]
    ]
    }
],
"유이 YUI": [
    {
    level: "0-6",  
    pattern: [
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }]
    ]
    }
],
"레오": [
    {
    level: "0-6",  
    pattern: [
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }]
    ]
    }
],
"치즈코": [
    {
    level: "0-6",  
    pattern: [
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }]
    ]
    }
],
"루우나": [
    {
    level: "0-6",  
    pattern: [
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }]
    ]
    }
],
"유스케": [
    {
    level: "0-6",  
    pattern: [
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }]
    ]
    }
],
"미나미": [
    {
    level: "0-6",  
    pattern: [
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }]
    ]
    }
],
"하루나": [
    {
    level: "0-6",  
    pattern: [
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }],
        [{ type: "스킬1" }],
        [{ type: "스킬3" }]
    ]
    }
],
"토모코": [
    {
    level: "0-6",  
    pattern: [
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }],
        [{ type: "스킬2" }],
        [{ type: "스킬3" }]
    ]
    }
]

};