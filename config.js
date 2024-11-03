const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "212778758648,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "212778758648,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_10_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDMzLFxuICAgICAgICAyMyxcbiAgICAgICAgODUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTA5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTksXG4gICAgICAgIDM3LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDc3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTM4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA5LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI4LFxuICAgICAgICA1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIwLFxuICAgICAgICAxMSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzksXG4gICAgICAgIDExMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTExLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAzLFxuICAgICAgICA1NCxcbiAgICAgICAgNixcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTg5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE2LFxuICAgICAgICA5NixcbiAgICAgICAgMTYsXG4gICAgICAgIDY4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQsXG4gICAgICAgIDgsXG4gICAgICAgIDUsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDM2LFxuICAgICAgICAzNSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDI0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDY0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNixcbiAgICAgICAgMjExLFxuICAgICAgICAxODEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxODYsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTU3LFxuICAgICAgICA1NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA2MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICA5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA4LFxuICAgICAgICAyMDksXG4gICAgICAgIDkwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NSxcbiAgICAgICAgNjIsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzcsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgODhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQzLFxuICAgICAgICAxNTEsXG4gICAgICAgIDkxLFxuICAgICAgICAxODAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDk5LFxuICAgICAgICA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDQxLFxuICAgICAgICA1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA3LFxuICAgICAgICA1NSxcbiAgICAgICAgOTAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTksXG4gICAgICAgIDE1NixcbiAgICAgICAgMTUwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMzcsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODMsXG4gICAgICAgIDMsXG4gICAgICAgIDE1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgNSxcbiAgICAgICAgMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyOSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQenVMZHlZaUpKWWRaNmRTMExwbElBOWNHM1VEQit1TndOc3l3eUFtL3A0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjc3ODc1ODY0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNzk5ODJEMjQwQjAzNTFBNzE0OUI1RkQyODA4NUMxM0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNjcxODI0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNzc4NzU4NjQ4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2MjZBRjVERkFFRTU3RDBDM0I4MUUwODkzQzZDRTdENFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA2NzE4MjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI3Nzg3NTg2NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY4M0JCNzBDRTk2NDQwMDdCM0I1QjRCNEVERTJDMDlGXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDY3MTgyN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIxMjc3ODc1ODY0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMTFGQTFENkY5QUExQTc4MkU1QTU2OTREQkJEN0VBQTJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMwNjcxODI3XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5BQ1loZ1JvU3JLcl9RaUNiTHdESndcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDQzN2JjNjctZWExOS00NzBiLWJiNTUtNmVmYjViY2ExNWIzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc3LFxuICAgICAgMTI5LFxuICAgICAgMTMwLFxuICAgICAgMjIwLFxuICAgICAgMTQ4LFxuICAgICAgMTc1LFxuICAgICAgMTg4LFxuICAgICAgMjMxLFxuICAgICAgMTkwLFxuICAgICAgMTI5LFxuICAgICAgMjgsXG4gICAgICA1MixcbiAgICAgIDExMixcbiAgICAgIDI0MCxcbiAgICAgIDY1LFxuICAgICAgMjM2LFxuICAgICAgMTI2LFxuICAgICAgMjE3LFxuICAgICAgNzMsXG4gICAgICAxNzVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE4NixcbiAgICAgIDY5LFxuICAgICAgNjYsXG4gICAgICA3OSxcbiAgICAgIDE3MCxcbiAgICAgIDIxLFxuICAgICAgMjEwLFxuICAgICAgMTQ1LFxuICAgICAgMjI5LFxuICAgICAgNzIsXG4gICAgICAyMzQsXG4gICAgICAxODgsXG4gICAgICAyOCxcbiAgICAgIDI0MixcbiAgICAgIDIzMyxcbiAgICAgIDI0LFxuICAgICAgMTY0LFxuICAgICAgMTY2LFxuICAgICAgMjI0LFxuICAgICAgMTAxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTHFwc3ZnRkVNdnBuN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIrZXd5ODJsQk5GM0Nha1BFOVhtb0Nuelhka0RpeExVQUR2MnU1MWJlVm1vPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRqck9zNTJmYVVXWkpPb0M4TzhibE1IeUhaSU12eUFjVWx2cHBVTHdxUXI3WVVqRWRXUnZMdWNDNDV0TlZQL1JZdWJ5Z1cvemFoSXJwRWh1dmJpcEFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJWanF1ZWtvRm1aWVFsVHdtbGRhRzNzQ0VGSFIxRjZYUHFsQXJNRitucTJSRFhtRHNNakxTTWZYL2RPZnZNNUJDOVR5Y2VvVUFPV0dXM0FPdm1IN0NnPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjEyNzc4NzU4NjQ4OjI4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNjAyOTI3MTgxMjEwMDM6MjhAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiI++8ue+9ge+9i++9le+9mu+9gSAgICDjhaQv8J+QiSAgICAg44Wk44Og54KO5LiLXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI3Nzg3NTg2NDg6MjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTA2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA2NzE4MjQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFFZmlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUVmZC5qc29uIjogIntcImtleURhdGFcIjpcIjNRVkkwWWpTRHpydVdYdjVtWStnM2xuWmpWRDQ2YjBobUZvUm9OdHdPWWs9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTU5NDY2MDAyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWZlLmpzb24iOiAie1wia2V5RGF0YVwiOlwiMFhlUG03VU1JOGFYeEFRUUs2TTRsa0gxWlJlTmEwMnQwY1hHMmRVbklmRT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTk0NjYwMDIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMwNjQyNzU3MzM1XCJ9IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRWZmLmpzb24iOiAie1wia2V5RGF0YVwiOlwiWHljcSs2YjJBak5GWThRcm5QZzJPLytHeE5LTmZQM056bVlnU0VHcmRNWT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTk0NjYwMDI0LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZmcuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVa2IvcmZjTktodmpGcEo0dnhmVGNTTDc0L3hBRFcvdnNrWW43N3JheXZrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTQ2NjAwMjQsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA2NzE3MjY4MDFcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZmguanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJPSlBIQ3cvVnVUK3JLZXVIN3BJa3BPVE1zTXZKZ1FPeVVBTjcwN3B4WlhJPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTQ2NjAwMjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzA2NzE4MTE2NjdcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFFZmkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJNbkRSdHRFU2M3b2NZL0NtOTg3N3Z4NUg0QW5hQWdlWFlmVDJ1TXNBRTZjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE1OTQ2NjAwMjYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDY3MTgyNDY4MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "#Ｙａｋｕｚａ ㅤ🇩🇪  / 🐉",
  ownername:process.env.OWNER_NAME|| "#Ｙａｋｕｚａ ㅤ🇩🇪  / 🐉",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
