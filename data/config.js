const elementColors = {
  "普通":"#6a7c90ff","草":"#3b893dff","火":"#bd6013ff","水":"#216bf3ff",
  "光":"#57cff7ff","地":"#8d6e63","冰":"#3691b3ff","龙":"#e55a5aff",
  "电":"#e0cc55ff","毒":"#c02bdbff","虫":"#a1da61ff","武":"#ff9100ff",
  "翼":"#4ae2d3ff","萌":"#f48aadff","幽":"#6e46b2ff","恶":"#aa2158ff",
  "机械":"#217970ff","幻":"#a8adf6ff"
};

const allElements = [
  "全部","普通","草","火","水","光","地","冰","龙","电",
  "毒","虫","武","翼","萌","幽","恶","机械","幻"
];

const weaknessTable = {
  "普通": {
    "very-effective": [], 
    "not-effective": ["地", "机械", "幽"]
  },
  "草": {
    "very-effective": ["水", "地", "光"], 
    "not-effective": ["火", "龙", "毒", "虫", "翼", "机械"]
  },
  "火": {
    "very-effective": ["草", "冰", "虫", "机械"], 
    "not-effective": ["水", "地", "龙"]
  },
  "水": {
    "very-effective": ["火", "地", "机械"], 
    "not-effective": ["草", "冰", "龙"]
  },
  "光": {
    "very-effective": ["幽", "恶"], 
    "not-effective": ["草", "冰"]
  },
  "地": {
    "very-effective": ["火", "冰", "电"], 
    "not-effective": ["草", "武"]
  },
  "冰": {
    "very-effective": ["草", "地", "龙", "翼"], 
    "not-effective": ["火", "冰", "机械"]
  },
  "龙": {
    "very-effective": ["龙"], 
    "not-effective": ["机械"]
  },
  "电": {
    "very-effective": ["水", "翼"], 
    "not-effective": ["草", "地", "龙", "电"]
  },
  "毒": {
    "very-effective": ["草", "萌"], 
    "not-effective": ["地", "毒", "幽", "机械"]
  },
  "虫": {
    "very-effective": ["草", "恶", "幻"], 
    "not-effective": ["火", "毒", "武", "翼", "萌", "幽", "机械"]
  },
  "武": {
    "very-effective": ["普通", "地", "冰", "恶", "机械"], 
    "not-effective": ["毒", "虫", "翼", "萌", "幽", "幻"]
  },
  "翼": {
    "very-effective": ["草","虫","武"], 
    "not-effective": ["地", "龙", "电", "机械"]
  },
  "萌": {
    "very-effective": ["龙", "武", "恶"], 
    "not-effective": ["火", "毒", "机械"]
  },
  "幽": {
    "very-effective": ["光", "幽", "幻"], 
    "not-effective": ["普通", "恶"]
  },
  "恶": {
    "very-effective": ["毒", "萌", "幽"], 
    "not-effective": ["光", "武", "恶"]
  },
  "机械": {
    "very-effective": ["地", "冰", "萌"], 
    "not-effective": ["火", "水", "电", "机械"]
  },
  "幻": {
    "very-effective": ["毒", "武"], 
    "not-effective": ["光", "机械", "幻"]
  },
};