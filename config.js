const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="chinedudivine78@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349039031392";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "recording" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_14_07_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDYxLFxuICAgICAgICA3MixcbiAgICAgICAgMTU1LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTM2LFxuICAgICAgICA5NyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDU1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDkzLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDcsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2LFxuICAgICAgICAxOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDkxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjE2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTksXG4gICAgICAgIDE3OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MixcbiAgICAgICAgOTEsXG4gICAgICAgIDczLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDg5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyOCxcbiAgICAgICAgOTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICA0NixcbiAgICAgICAgMTIyLFxuICAgICAgICAzOCxcbiAgICAgICAgMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTcsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEwLFxuICAgICAgICA3OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxODEsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDksXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTE3LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTcyLFxuICAgICAgICA4MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMTksXG4gICAgICAgIDQxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDc3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIyLFxuICAgICAgICAxMCxcbiAgICAgICAgOTksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTMyLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQsXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ1LFxuICAgICAgICA1NixcbiAgICAgICAgNDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTIzXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3LFxuICAgICAgICA5NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjExLFxuICAgICAgICA3NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNTQsXG4gICAgICAgIDcwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDI5LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxODcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDU4LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNDQsXG4gICAgICAgIDIzMixcbiAgICAgICAgODQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTUxLFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZFA0eUFQSmRnUFd1RWJmL2FKTUl3akJQZTNtQk5RNWhZNWxkemo1YnZFWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiZzBNMFZZOGRUcHVwNFgyRzhaRjFRQVwiLFxuICBcInBob25lSWRcIjogXCI5NTdkMGYxMC0wNDc5LTQwOTEtYmY2Yy1mYzQzOGVlNWU1YjRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTMzLFxuICAgICAgMzEsXG4gICAgICAxNDgsXG4gICAgICAxNjIsXG4gICAgICAxMjYsXG4gICAgICAxNzEsXG4gICAgICAyMzEsXG4gICAgICAxODUsXG4gICAgICAxMDQsXG4gICAgICAxNjEsXG4gICAgICAxNDEsXG4gICAgICAxNTUsXG4gICAgICAxNDgsXG4gICAgICAyMzgsXG4gICAgICA2NixcbiAgICAgIDE3NSxcbiAgICAgIDIzOSxcbiAgICAgIDAsXG4gICAgICAxNTAsXG4gICAgICAyNDlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQwLFxuICAgICAgODksXG4gICAgICA5MyxcbiAgICAgIDE1OCxcbiAgICAgIDE2MyxcbiAgICAgIDExMCxcbiAgICAgIDEzMCxcbiAgICAgIDk4LFxuICAgICAgMTYzLFxuICAgICAgMTU0LFxuICAgICAgNTAsXG4gICAgICAxOTcsXG4gICAgICAxMyxcbiAgICAgIDE4NSxcbiAgICAgIDE3NixcbiAgICAgIDI1MSxcbiAgICAgIDIzMyxcbiAgICAgIDksXG4gICAgICAxMzMsXG4gICAgICA5M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0NU1HNENDOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAzOTAzMTM5Mjo1NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTMwMzE4MjY2ODM0OTY1OjU1QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01IWTRxZ0NFTWlLK3JRR0dBUWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVk03eUpKYXhBZnQzcWFydXVtY1hBQ3NScnQwM3lhQkdFMk5pcVRCWVNIdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI0MEVrZ01PVUxoZnhjRFNNei9OcE1ZYnRpUTd1WFk1TjViSEY2Rjh1R3lCWnYrTzdFV3RIZGVKd1E0eDRWZkJwUkNqdVQ4N1Z3Zk8vSDVPaWUzaHRDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJMMmN6T0tRNXNLZnFTZUtyN2ZucFBLRmh0QmM3NGtFVVlCVXFVMklmVjlaUVY0ejRiQk5IakdpN3dmTXkwRWRZTnJtWE5qaUlrZDRSOFBVai80Y0pEQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM5MDMxMzkyOjU1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTY2NDg0MyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdQTFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1BMLmpzb24iOiAie1wia2V5RGF0YVwiOlwidDBJUitpemsrbDdWSUJpcStSejF5Rk04MXA3a3k4ekRwNitWMjJLNTVrST1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo2MjIzNzM5NTIsXCJjdXJyZW50SW5kZXhcIjozLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE1NjExNzA3NDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "BEASTBOT",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
