const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_20_07_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjU0LFxuICAgICAgICA1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDczLFxuICAgICAgICAyMzcsXG4gICAgICAgIDU0LFxuICAgICAgICAxNDksXG4gICAgICAgIDg0LFxuICAgICAgICAyLFxuICAgICAgICAxMixcbiAgICAgICAgMjEzLFxuICAgICAgICA2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDUxLFxuICAgICAgICA2OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNyxcbiAgICAgICAgOTQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDQwLFxuICAgICAgICAzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjExLFxuICAgICAgICAxODUsXG4gICAgICAgIDQzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5NCxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgMjAzLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDYxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAxODMsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDUsXG4gICAgICAgIDU2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICA5OSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAzMCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTkwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjI5LFxuICAgICAgICA5NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzYsXG4gICAgICAgIDI1LFxuICAgICAgICAzMSxcbiAgICAgICAgMjgsXG4gICAgICAgIDY1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMCxcbiAgICAgICAgNSxcbiAgICAgICAgNSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMzFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNzEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICA5OSxcbiAgICAgICAgNzksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzksXG4gICAgICAgIDk2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU3LFxuICAgICAgICA1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgNixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMyLFxuICAgICAgICA4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDU2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY5LFxuICAgICAgICA4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgODMsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTEzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDg0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDExNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDc2LFxuICAgICAgICAzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2OSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDgxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTczLFxuICAgICAgICA1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI5LFxuICAgICAgICA0MixcbiAgICAgICAgMjExLFxuICAgICAgICAyMTksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTU3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkS29vaTNXSHNQOXZNWmNLR3ExRHM2eWRlR0ZWRjhoM28wVXVjUG1SaDI4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJ6OWFTMVNTclFWT3pxcXJ1ZkRINkZBXCIsXG4gIFwicGhvbmVJZFwiOiBcImUyYzlhNThjLTZjYWUtNDhjZC04ZTc1LTI0YWYyNmZlYWU3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjEsXG4gICAgICAzOSxcbiAgICAgIDYxLFxuICAgICAgNjQsXG4gICAgICAxNTgsXG4gICAgICA0LFxuICAgICAgMjI4LFxuICAgICAgMTU4LFxuICAgICAgMTk5LFxuICAgICAgMjA0LFxuICAgICAgNDAsXG4gICAgICAxNSxcbiAgICAgIDI1NSxcbiAgICAgIDEzMCxcbiAgICAgIDE4MCxcbiAgICAgIDIzMyxcbiAgICAgIDIxNyxcbiAgICAgIDQ3LFxuICAgICAgMjQwLFxuICAgICAgMTE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyOSxcbiAgICAgIDEzMyxcbiAgICAgIDE3MyxcbiAgICAgIDIwNCxcbiAgICAgIDEzMyxcbiAgICAgIDE3NCxcbiAgICAgIDMsXG4gICAgICAxMTcsXG4gICAgICAyMDYsXG4gICAgICA0MixcbiAgICAgIDIwMyxcbiAgICAgIDI1LFxuICAgICAgMTksXG4gICAgICAyNDUsXG4gICAgICAxMTAsXG4gICAgICA1NSxcbiAgICAgIDI0MixcbiAgICAgIDQwLFxuICAgICAgNjMsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEtTREtMNEFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEyMzMxNjMyNzoxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlNTUCBIQU1JRCBaQVJEQVJJXCIsXG4gICAgXCJsaWRcIjogXCIyMTczNzI0ODk3NzAyODoxM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKVzI1SW9IRU9LN3FMVUdHQWNnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkJGT3dEbFpDUm5Pc0JqQTA2K1JZOUhjS0MxYzE4Wkd3RTI2YVFWY3MrbWM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiS1pMc1lNalFBeWVnTFZYUjd6SzViTGtFV243elRXeDFXcWlvQ0IxYVdFdnc5alU1ejBsOXpHUU9uOFBtWFIzYVF6MDdwdDVPb0xZZDdzQVJCM0VZQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieGk1MDBBRVkrWlhESlhpT2hjUm5raUtPS2Mvci9lSVl0OUJxOUpvUmdKc2t3MG1haVdBd0tvVnRFdHZSQlRsMnpDdy9sUjBhVjN2ZzhmY28vZ0RkREE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTIzMzE2MzI3OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjQyNDgwOCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9zalwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT3NqLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZkFyVkxMYjNvMUtBWHZFNUU5U0w0TkpMc24ra1loMXVXcFpxZSs1aUEyVT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxOTAxNjY1MDQ1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjI0MjI4MjQ1NDVcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
