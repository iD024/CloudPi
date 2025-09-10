# CloudPi 
> Your own private Google Drive, powered by Raspberry Pi & MERN stack.

## Overview of the Project
**CloudPi** is a self-hosted cloud drive system where a **Raspberry Pi acts as the primary NAS (storage node)**.  
The public MERN server handles **users, authentication, and file metadata**, while all actual files are stored on your Pi.  
This makes PiDrive lightweight, secure, and expandable — just plug in more USB drives to increase capacity.

---

## Planned Features to implement
- Access your Raspberry Pi files from anywhere (via Cloudflare Tunnel / reverse proxy).
- Full multi-user support (register, login, JWT auth).
- Upload, list, and download files through a clean React frontend.
- Expandable storage — add more USB drives to your Pi.
- Secure by design — password hashing, JWT authentication, HTTPS tunnel.
- MongoDB stores only metadata; Pi stores the actual files.

---

## Tech Stack [Subject to change]
- **Frontend:** React + TailwindCSS
- **Backend:** Node.js + Express
- **Database:** MongoDB (Atlas or self-hosted)
- **Pi Agent:** Node.js service handling file storage
- **Networking:** Cloudflare Tunnel (or ngrok/SSH reverse tunnel)

---

